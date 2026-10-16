'use client';

import { useEffect, useState } from 'react';
import { isOffTheField, isWeekend, millisecondsUntilNextMinute } from './time/fieldSchedule';

export default function FieldStatus() {
  const [status, setStatus] = useState<'on' | 'off' | 'weekend' | null>(null);

  useEffect(() => {
    let timer: number;
    const updateStatus = () => {
      window.clearTimeout(timer);
      setStatus(isWeekend() ? 'weekend' : isOffTheField() ? 'off' : 'on');
      timer = window.setTimeout(updateStatus, millisecondsUntilNextMinute());
    };
    updateStatus();
    document.addEventListener('visibilitychange', updateStatus);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('visibilitychange', updateStatus);
    };
  }, []);

  return (
    <div className="field-status" role="status" aria-live="polite" aria-label={status === 'on' ? 'On the Field' : status ? 'Off the Field' : 'Checking field status'}>
      <span className="field-status-title">WORK WHISTLE <small>/ PACIFIC</small></span>
      <div className="field-status-switch" aria-hidden="true">
        <span className={status === 'on' ? 'is-active' : ''}>On the Field</span>
        <span className={status === 'off' || status === 'weekend' ? 'is-active field-status-off' : ''}>Off the Field</span>
      </div>
      {status === 'weekend' && <p className="field-status-note">Happy Weekend</p>}
    </div>
  );
}
