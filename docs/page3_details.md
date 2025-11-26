# Extra details

## WaveDrom content should be rendered below

<script type="WaveDrom">
{ signal: [
  { name: "CK",   wave: "P.......",                                              period: 2  },
  { name: "CMD",  wave: "x.3x=x4x=x=x=x=x", data: "RAS NOP CAS NOP NOP NOP NOP", phase: 0.5 },
  { name: "ADDR", wave: "x.=x..=x........", data: "ROW COL",                     phase: 0.5 },
  { name: "DQS",  wave: "z.......0.1010z." },
  { name: "DQ",   wave: "z.........5555z.", data: "D0 D1 D2 D3" }
]}
</script>

## Official WaveDrom setup guide

Configuration in this repository is based on [official setup guide][wavedrom-gh-usage-html] in the WaveDrom GitHub repository with some Zensical-specific adjustments.

Side note: official setup guide lists outdated WaveDrom version. I use v3.5.0, not v3.1.0.

## Using `<body onload="" ...>` has the same effect

[*Web usage &rarr; HTML pages* guide][wavedrom-gh-usage-html] in the WaveDrom GitHub repository suggests using the following setting in HTML body:

```html
<body onload="WaveDrom.ProcessAll()">
```

I have tried it (overriding `base.html` from the Zensical theme) and the behavior is identical as when listing [`wavedrom.js`](wavedrom.js) in `extra_javascript` in `zensical.toml`.


## Verified: `WaveDrom.ProcessAll()` is called every time I switch the page

I included `#!js console.log("==> Calling WaveDrom.ProcessAll()");` in [`wavedrom.js`](wavedrom.js) and I can confirm that this function is called every time the page is switched, regardles of instant navigation being active or not. With instant navigation active, it looks that this function does not see any scripts to process.

[wavedrom-gh-usage-html]: https://github.com/wavedrom/wavedrom?tab=readme-ov-file#html-pages
