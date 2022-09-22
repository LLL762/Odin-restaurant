const GlobalVar = (() => {
  const getPageContentElement = () =>
    document.getElementById("main-content-container");

  return { getPageContentElement };
})();

export { GlobalVar };
