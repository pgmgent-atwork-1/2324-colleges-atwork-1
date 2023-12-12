(() => {
  const initialize = () => {
    const query = window.location.search;
    const params = new URLSearchParams(query);
    console.log(params.get("day"));
  };

  initialize();
})();
