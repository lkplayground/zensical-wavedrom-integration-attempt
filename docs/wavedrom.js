document$.subscribe(() => {
    console.log("==> Calling WaveDrom.ProcessAll()");
    WaveDrom.ProcessAll();
})
