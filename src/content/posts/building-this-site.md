---
title: "Welcome to kenmiko.com (How I Built It & Why)"
description: "The thought process behind building my own website: the low-maintenance stack, the accessibility choices, and what I'm going to write about here."
date: 2026-07-24T18:44:52Z
tags: ["build-notes", "web", "accessibility"]
draft: false
summary: "The first post on the site is about the site: I chose a low-effort stack I own and can update from a text file due to my busy schedule. I designed the site with accessibility in mind by using a tested palette and Atkinson Hyperlegible font family. I wanted to make this site to host my analytics portfolio and a blog featuring posts about financial, technical, and legal systems."
---

This is the first post on this site, and it's about the site itself. That's a little self-referential, but it's also the most honest place to start: before I write about anything else, here's the thing you're reading it on, and why it works the way it does.

## What I wanted

I had three requirements:

- **I want to own it.** Not rent it from a page builder that raises prices and locks my content behind an export button.
- **I want it to be fast.** Slow sites lose readers and rank worse, and there's no reason a page that's mostly text should be slow.
- **I want it to be low-effort to update.** I'm doing this around a full-time job and a full course load. If posting means fighting a clunky admin panel, I won't post.

The first and last ones killed most of the obvious options. The easy platforms are easy to start and annoying to live with. So I went the other direction.

## The stack

The site is built with [Astro](https://astro.build) and hosted on Cloudflare Pages. In plain terms: Astro turns a folder of files into a fast website, and Cloudflare serves it for free. Neat!

The part that sold me is how updating works. There's no dashboard. A blog post is just a text file in a folder. I write it, I push it, and about a minute later it's live. Editing is opening the file and changing it. That's the whole system, and the fact that it's *that* simple is what makes me believe I'll actually keep it up.

Fast falls out of this for free. Because the pages are built ahead of time instead of assembled in your browser, there's almost nothing for your device to do when you visit. It just loads.

## The part where my own color betrayed me

Here's the bit I didn't expect to be writing about.

Fun fact, I was a Visual Communications major (before the pandemic changed all my plans 😑), so I already have and interest in design with some classes under my belt. So, I already had a look for this site — a dark palette with a muted teal I liked, color picked from [this picture I found](https://www.pexels.com/photo/photo-of-computers-near-windows-3747481/). When I sat down to formalize it, I ran the colors through a contrast check, which measures whether text is actually readable against its background. There's a standard for this (WCAG), and it exists because "looks fine to me" and "readable for everyone" are not the same thing.

My teal on black scored 1.95 to 1. The minimum for body text is 4.5 to 1. It failed :(. I mean, I didn't plan on using the teal as a body text color, just an accent color, but even as an accent it should have good contrast.

Which was a little annoying, because I *liked* it. But the fix wasn't to throw out the teal, it was to figure out where teal actually works. Turns out it's great as a button, with white text sitting on top of it. It's just no good as thin text directly on black. My teal stayed where it earned its place, and for the few spots that needed teal-colored text on a dark background, I made a lighter version that clears the bar.

I mention this because it's the whole reason the typeface on this site is what it is.

## Why everything is in this font

The type is one of my favorites that I typically use for projects: [Atkinson Hyperlegible](https://www.brailleinstitute.org/freefont/), designed by the Braille Institute specifically to be easy to read and hard to misread. The glyphs (letters) are drawn so you don't confuse a capital I with a lowercase l, or a zero with an O. Which matters a lot on a site where I'm going to be publishing numbers. If I write out a budget or a comparison table and you misread a figure, the whole post failed at its one job.

The accessibility thing is the actual point. It comes out of my own frustrations, because too often I feel design triumphs being able to read clearly. A site about making complicated things clear should be, before anything else, *legible*. The contrast check and the font are the same decision wearing two hats. Plus, I believe with the sentiment that accessibility improves everyone's experience, not just those who "need" it (Which "need" is something difficult to define when it comes to accessibility and accommodations. But that's a tangent for another day.).

## What this site is for

Now that it exists: This website is part portfolio, part blog. In the [portfolio](https://kenmiko.com/projects/) is where data analytics and documentation projects I've worked on live. My first three projects will be getting their own blog posts!

As for the [blog](https://kenmiko.com/blog), I honestly just wanted a space to write out my thoughts and results of random late nights of research and calculations. I'm going to use it to explain how financial, technical, and legal systems actually work or could be improved. The kind of things people are expected to just know and mostly aren't taught (of course, disclaimer: I'm not a lawyer or other law professional, I just have many opinions on many things). Some of it will be walkthroughs of data projects I've built. Some of it will be teardowns of businesses I find interesting or infuriating. Some of it will be very specific to Louisiana, because 1) I'm a Louisianian born and raised, and 2) Louisiana's legal systems are genuinely different and almost nobody explains how (thank you, Napoleon 😒).

The through-line is the same one as the font: take a thing that's harder to understand than it needs to be, and make it clear.

More soon. 🦭
