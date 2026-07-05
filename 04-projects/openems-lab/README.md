# OpenEMS Lab

**First technical milestone: deploy OpenEMS locally, understand its architecture, run a simulated energy system, and document the result.**

---

## Objective

Establish a working local OpenEMS environment that:

1. Runs the OpenEMS backend and UI
2. Simulates at least one meter or DER
3. Shows live data on the dashboard
4. Produces documented, reproducible setup instructions

This is the technical foundation for enerOS.

---

## Deliverables

- [x] OpenEMS development environment installed
- [ ] Backend running locally
- [ ] UI accessible at `localhost`
- [ ] Simulated meter or DER connected
- [ ] Data visible on dashboard
- [ ] Architecture documented in `architecture.md`
- [ ] Setup instructions reproducible in `setup.md`
- [ ] Screenshot or demonstration added to [`09-evidence/demonstrations/`](../../09-evidence/demonstrations/)

---

## Setup

See [`setup.md`](setup.md) for full, verified setup instructions.

**Prerequisites (verified):**
- Java **21** (exact — newer versions break the Gradle toolchain)
- Node.js 22 LTS
- Git
- Docker (optional, for containerised deployment)

**Repository:** https://github.com/OpenEMS/openems
**Cloned to:** `04-projects/openems-lab/openems/`

---

## Architecture Notes

> To be documented in [`architecture.md`](architecture.md) after first successful run.

OpenEMS core components:
- **Edge** — runs on the DER device or gateway, collects data
- **Backend** — aggregates data from multiple edges
- **UI** — browser-based monitoring and control dashboard

---

## Status Log

| Date | Activity | Outcome |
|------|----------|---------|
| 2026-07-05 | Project initialised | — |

---

## References

- [OpenEMS Documentation](https://openems.io/docs/)
- [OpenEMS GitHub](https://github.com/OpenEMS/openems)
- enerOS venture: [`03-ventures/eneros/`](../../03-ventures/eneros/)
