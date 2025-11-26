// Minimalist script that proves that the problem is not WaveDrom-specific
//
//  It searches for scripts of "MyWrap" type, wraps their content in pre tags
// and puts the result in the document
document$.subscribe(() => {
  console.log("==> Calling MyWrap tool");
  document.querySelectorAll('script[type="MyWrap"]').forEach(scriptEl => {
    const pre = document.createElement("pre");
    pre.textContent = scriptEl.textContent.trim();
    scriptEl.insertAdjacentElement("afterend", pre);
  });
})
