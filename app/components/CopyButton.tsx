'use client';

import { useRef, useState } from 'react';
import s from './island.module.css';
import { Check, Copy } from './icons';

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const done = () => {
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      done();
    } catch {
      // Fallback for browsers without async clipboard access.
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        done();
      } catch {
        /* nothing more to try */
      }
      document.body.removeChild(ta);
    }
  };

  return (
    <button type="button" className={s.btnGhostLight} onClick={onClick}>
      {copied ? <Check /> : <Copy />}
      <span>{copied ? 'Copied' : 'Copy email'}</span>
      <span className={s.srOnly} role="status" aria-live="polite">
        {copied ? 'Email address copied to clipboard' : ''}
      </span>
    </button>
  );
}
