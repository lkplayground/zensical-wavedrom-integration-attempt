# Home

## WaveDrom content should be rendered below

<script type="WaveDrom">
{ "signal" : [
  { "name": "clk",  "wave": "p......" },
  { "name": "bus",  "wave": "x.==.=x",   "data": ["head", "body", "tail"] },
  { "name": "wire", "wave": "0.1..0." },
]}
</script>

## Steps to reproduce

### Initial state

Initially, `"navigation.instant"` is listed in `project.theme.features` in `zensical.toml`. Once home page is opened for the first time (fully loaded) - and only then - WaveDrom content is rendered properly.

1. Navigate between this and [the other] page back and forth and observe that there is no WaveDrom content visible anymore. Switching between pages does not trigger full reload. It only triggers XHR, as documented in the [Zensical docs on instant navigation][zensical-instant-navigation].

2. Repeat previous step, but force-refresh each page (F5) and observe WaveDrom content rendered on each page.

[zensical-instant-navigation]: https://zensical.org/docs/setup/navigation/?h=navigation.indexes#instant-navigation

### Modification

1. Disable `"navigation.instant"` in `zensical.toml`.

2. Rebuild and serve the page.

3. Navigate between this and [the other] page and observe that waveforms are rendered without the need to fully reload the page.

## Question

!!! question

    How to have the best of both worlds, i.e. preserve instant navigation, but make WaveDrom working as expected (without manual reloads)?

    Hope that this problem may be generalized to the integration of any tool that is meant to execute scripts embedded in the page source in the form `<script type="ToolType">...</script>`.

    For a reason I do not fully understand, such scripts are invisible to the tool without fully reloading the page (when instant navigation is active).

I have included extra details on the [dedicated page][extra-details].


[the other]: page2.md
[extra-details]: page3_details.md
