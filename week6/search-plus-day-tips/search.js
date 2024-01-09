(() => {
  const $searchInput = document.getElementById("input-search");

  const buildUI = () => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    if (search) {
      console.log("searching for: " + search);
      $searchInput.value = search;

      // stap 1: events fetchen
      // stap 2: events filteren obv zoekterm
    } else {
      // todo
    }
  };

  const initialize = () => {
    buildUI();
  };

  initialize();
})();
