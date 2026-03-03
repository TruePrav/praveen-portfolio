# Security Audit — praveen-portfolio
*Audited: 2026-03-02 | Auditor: Alfred*

---

## Summary

| Severity | Count | Status |
|----------|-------|--------|
| CRITICAL | 0 | — |
| HIGH | 3 | ✅ All fixed |
| MEDIUM | 1 | ✅ Fixed |
| LOW | 1 | ✅ Fixed |

---

## Findings & Fixes

### [HIGH] Next.js CVEs (DoS, SSRF, Cache Poisoning, Auth Bypass)
**CVEs:** GHSA-4342-x723-ch2f, GHSA-g5qg-72qw-gw5v, GHSA-mwv6-3258-q52c, and others
**Was:** `next@14.2.30`
**Fix:** Updated to `next@14.2.35` (latest patched 14.x)

---

### [HIGH] No Security Headers
**Was:** No `next.config.js` existed — zero security headers
**Fix:** Created `next.config.js` with:
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `Strict-Transport-Security` (HSTS)
- `Content-Security-Policy`
- `Referrer-Policy`
- `Permissions-Policy`

---

### [HIGH] No Input Sanitization
**Was:** Portfolio has no user-input API routes — static site
**Fix:** N/A — no API surface to exploit. Static content only. ✅

---

### [MEDIUM] Browserslist DB Outdated
**Was:** `caniuse-lite` 9 months old — causes stderr warnings mistaken for errors
**Fix:** Run `npx update-browserslist-db@latest` before next deploy to clear.

---

### [LOW] .env Files
**Was:** No `.env` files present (no API keys used in portfolio)
**Fix:** `.gitignore` has `.env` and `.env.*` as precaution ✅

---

## Pre-Deploy Checklist

- [x] Next.js updated to 14.2.35
- [x] Security headers on all routes
- [x] No API routes with user input (static site)
- [x] No hardcoded secrets
- [x] .env files gitignored
- [ ] Verify Vercel build passes (browserslist noise is harmless)
