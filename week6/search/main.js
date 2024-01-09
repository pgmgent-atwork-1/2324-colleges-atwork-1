(() => {
  const $searchInput = document.getElementById("input-search");

  const buildUI = () => {
    const params = new URLSearchParams(window.location.search);
    const search = params.get("search");
    if (search) {
      console.log("searching for: " + search);
      $searchInput.value = search;
    }
  };

  const initialize = () => {
    buildUI();
  };

  initialize();
})();
