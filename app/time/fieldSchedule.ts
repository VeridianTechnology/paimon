const pacificClock = new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/Los_Angeles',
  weekday: 'short',
  hour: '2-digit',
  minute: '2-digit',
  hourCycle: 'h23',
});

export function isOffTheField(at: Date = new Date()): boolean {
  const parts = Object.fromEntries(pacificClock.formatToParts(at).map(part => [part.type, part.value]));
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);

  return parts.weekday === 'Sat'
    || parts.weekday === 'Sun'
    || minutes < 10 * 60
    || minutes >= 16 * 60;
}

export function isWeekend(at: Date = new Date()): boolean {
  const parts = Object.fromEntries(pacificClock.formatToParts(at).map(part => [part.type, part.value]));
  const minutes = Number(parts.hour) * 60 + Number(parts.minute);

  return parts.weekday === 'Sat'
    || parts.weekday === 'Sun'
    || (parts.weekday === 'Fri' && minutes >= 16 * 60);
}

export function millisecondsUntilNextMinute(now: number = Date.now()): number {
  return 60_000 - (now % 60_000) + 50;
}
