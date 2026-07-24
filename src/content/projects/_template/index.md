---
title: "Project Title Goes Here"
description: "One sentence summarizing the project — used on the projects index and in search results."
date: 2026-01-01 # controls sort order and the date shown on the page; does NOT hide or schedule the project
tags: ["tag-one"] # optional, same tagging system as blog posts
draft: true # set to false when ready to publish — this is the ONLY thing that controls visibility
tools: ["Tool One", "Tool Two"] # technologies used — shown as a tag list
cover: "./cover.jpg" # required — add an image file in THIS folder named cover.jpg, cover.png, etc.
coverAlt: "Describe the cover image for screen readers"
tier: "" # optional — a track/category label, e.g. "Foundational ETL". Omit or leave blank if you don't need one.
scope: "" # optional — one-line scope summary, e.g. "single-day turnaround, two sources". Omit if you don't need one.
deliverables: [] # optional — concrete outputs, e.g. ["Excel data pipeline", "Power BI dashboard", "SOP quick-reference"]
---

<!--
  IMPORTANT: title, description, scope, and coverAlt above must stay wrapped in double quotes.
  If any of them contain a colon followed by a space (e.g. "The result: fewer errors"), the
  quotes are what stop that colon from being misread as a new frontmatter field — without them
  the build fails with a YAML parsing error ("bad indentation of a mapping entry"), not a
  friendly one. When in doubt, keep the quotes.
-->

## Project Overview

Write the problem, what you built, what you used, and the outcome. Use `##`/`###` headings —
a table of contents is generated automatically from them once you have more than a couple.

### Scenario

### Sources

### Process

### Results

## Findings & Recommendations

Write your conclusions here.

<!--
  For a long section you want collapsed by default (e.g. a detailed methodology writeup),
  use plain HTML — no extra setup needed, it's styled to match automatically:

  <details>
  <summary>Methodology</summary>

  The collapsed content goes here, in Markdown, same as anywhere else.

  </details>
-->

Extra images beyond the cover go in `public/images/projects/your-project-slug/` and are referenced as
`/images/projects/your-project-slug/filename.png` — see the README's "Where images go" section.
