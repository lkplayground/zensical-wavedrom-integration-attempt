# Zensical+WaveDrom Integration Attempt MWE

This repository contains a minimal working example for the problem of integrating [WaveDrom][wavedrom-gh] (JavaScript-based digital waveform rendering engine) with [Zensical having `navigation.instant` feature enabled][zensical-instant-navigation]. Additional exemplary script (`mywrap.js`) is included which proves that the problem is of general nature and not WaveDrom-specific.

Install:

```shell
python3 -m venv .venv
source .venv/bin/activate
pip install zensical
```

Run clean build and serve a minimal website:

```shell
zensical build --clean && zensical serve --open
```

Once you execute the steps above, home page (whose source is in [`docs/index.md`][docs-home]) will open in the browser. It contains problem description and reproduction steps.

[wavedrom-gh]: https://github.com/wavedrom/wavedrom
[zensical-instant-navigation]: https://zensical.org/docs/setup/navigation/?h=navigation.indexes#instant-navigation
[docs-home]: docs/index.md
