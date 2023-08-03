# Jank Scryfall Enhancer
This project is a Chrome browser extension that lets you quickly see if a card
is on the Jank Bulk list or not while browsing [Scryfall](https://scryfall.com).

You can either download this repository and add it as an unpacked extension
([instructions](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked))
or install the packed version, available as a download in the releases section.

## What Does it Do?

This extension works by downloading the official Jank Bulk list database and
seeing if the card names in a "Full" view search are present in it. Cards that
are bulk legal get a "✅" prepended to their name. The extension also works when
viewing an individual card's webpage.

Below is a sample screenshot of the extension in action. In this case, Abjure is
not bulk legal and remains unmodified, but Absorb is cheap enough to be considered
"bulk" and gets a check mark in front of its name:

![](media/screenshot.png)

Experiencing issues? Feel free to make a ticket in the issues tab and let me
know what's happening.
