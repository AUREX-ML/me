# enerOS

**Energy operating system for distributed energy resource management.**

---

## What It Is

enerOS is a software platform that enables utilities, aggregators, and energy developers to monitor, control, and optimise distributed energy resources (DERs) — including solar, storage, EV charging, and flexible loads.

It is built on open standards (OpenEMS, IEC 61968/61970, OCPP) and designed to operate at the grid edge.

---

## Problem

African energy grids are fragmented, under-monitored, and increasingly dependent on distributed generation that existing utility systems cannot manage. Kenya's 2030 energy targets require integrating thousands of small-scale DERs without the infrastructure or tooling utilities in developed markets rely on.

---

## Solution

enerOS provides:

- Real-time DER monitoring and control
- Virtual power plant (VPP) orchestration
- Grid services (frequency response, demand flexibility)
- Energy market participation interfaces
- A developer API for third-party integrations

---

## Target Users

| Segment | Description |
|---------|-------------|
| Utilities | KPLC and county-level distribution companies |
| IPPs | Independent power producers with distributed assets |
| C&I clients | Commercial and industrial energy managers |
| Aggregators | Entities that bundle DER capacity for grid services |

---

## Status

Early-stage. Technical foundation being established via [`04-projects/openems-lab/`](../../04-projects/openems-lab/).

---

## Key Decisions

- Building on OpenEMS as the core DERMS engine
- Prioritising Kenya market first, East Africa second
- Open-source core, proprietary managed service layer

---

## Links

- Product requirements: [`06-product/requirements/`](../../06-product/requirements/)
- Architecture: [`06-product/architecture/`](../../06-product/architecture/)
- Research: [`05-research/`](../../05-research/)
