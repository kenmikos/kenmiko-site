---
title: "Post Title Goes Here"
description: "One sentence describing the post — used in search results and link previews (Open Graph)."
date: 2026-01-01 # controls sort order and the date shown on the page; does NOT hide or schedule the post. A full timestamp like 2026-01-01T14:30:00Z also works if you need same-day ordering.
tags: ["tag-one", "tag-two"] # lowercase, hyphens instead of spaces (e.g. "build-notes", not "build notes") — each tag automatically gets a page at /blog/tags/<tag>/
draft: true # set to false when ready to publish — this is the ONLY thing that controls visibility
summary: "" # optional — 1-3 sentences, shown in a collapsible box at the top of the post. Omit if you don't want one.
cover: "./cover.jpg" # optional — add an image file in THIS folder if you want one. Also becomes the link-preview (Open Graph) image when set.
coverAlt: "Describe the cover image for screen readers" # required if cover is set
coverCaption: "Photo by Jane Doe" # optional — small text shown under the cover image, for a caption and/or photo credit
---

<!--
  IMPORTANT: title, description, summary, and coverCaption above must stay wrapped in double quotes.
  If any of them contain a colon followed by a space (e.g. "Here's the problem: it's slow"),
  the quotes are what stop that colon from being misread as a new frontmatter field — without
  them the build fails with a YAML parsing error ("bad indentation of a mapping entry"), not
  a friendly one. When in doubt, keep the quotes.
-->

Write the post body here in Markdown. Reading time is calculated automatically from the word count —
nothing to fill in for that.

To add an image inside the post body (not the cover), put the file in `public/images/posts/your-slug/`
and reference it as `/images/posts/your-slug/filename.png` — see the README's "Where images go" section.
