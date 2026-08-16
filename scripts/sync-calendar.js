// Fetches the private Airbnb iCal export feed and writes data/availability.json
// with the list of nights currently blocked (booked or host-blocked) on Airbnb.
// Run by .github/workflows/sync-calendar.yml on a schedule.
//
// Requires Node 18+ (global fetch) and the AIRBNB_ICAL_URL environment variable.

const fs = require("fs");
const path = require("path");

const ICAL_URL = process.env.AIRBNB_ICAL_URL;
const OUT_FILE = path.join(__dirname, "..", "data", "availability.json");

if (!ICAL_URL) {
  console.error("Missing AIRBNB_ICAL_URL environment variable.");
  process.exit(1);
}

function parseIcsDate(raw) {
  // raw is YYYYMMDD (VALUE=DATE, all-day)
  const y = raw.slice(0, 4);
  const m = raw.slice(4, 6);
  const d = raw.slice(6, 8);
  return `${y}-${m}-${d}`;
}

function addDays(isoDate, days) {
  const d = new Date(isoDate + "T00:00:00Z");
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

function expandRange(startIso, endIsoExclusive) {
  const dates = [];
  let cur = startIso;
  while (cur < endIsoExclusive) {
    dates.push(cur);
    cur = addDays(cur, 1);
  }
  return dates;
}

async function main() {
  const res = await fetch(ICAL_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch iCal feed: ${res.status} ${res.statusText}`);
  }
  const text = await res.text();

  const events = text.split("BEGIN:VEVENT").slice(1);
  const blockedSet = new Set();

  for (const raw of events) {
    const body = raw.split("END:VEVENT")[0];
    const startMatch = body.match(/DTSTART;VALUE=DATE:(\d{8})/);
    const endMatch = body.match(/DTEND;VALUE=DATE:(\d{8})/);
    if (!startMatch || !endMatch) continue;
    const start = parseIcsDate(startMatch[1]);
    const end = parseIcsDate(endMatch[1]);
    for (const d of expandRange(start, end)) {
      blockedSet.add(d);
    }
  }

  const blocked = Array.from(blockedSet).sort();

  const out = {
    generated_at: new Date().toISOString(),
    source: "Généré automatiquement à partir du calendrier Airbnb. Ne pas éditer manuellement.",
    blocked
  };

  fs.writeFileSync(OUT_FILE, JSON.stringify(out, null, 2) + "\n");
  console.log(`Wrote ${blocked.length} blocked nights to ${OUT_FILE}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
