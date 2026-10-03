# ADR 0002: Atomic Design Component Structure

**Status:** Accepted
**Date:** 2024-10-02

## Context

The original codebase had all UI primitives in a single `ui.tsx` file (248 lines, 13 exports) and all page sections in 3 mega-files exporting multiple components each.

## Decision

Adopt Atomic Design with three layers: atoms (smallest reusable units), molecules (composed from atoms), organisms (full page sections).

## Consequences

- **Positive:** Clear hierarchy, one component per file, co-locatable tests/stories, instantly understood by any React developer
- **Negative:** More files to navigate, occasional debate about atom vs molecule classification
