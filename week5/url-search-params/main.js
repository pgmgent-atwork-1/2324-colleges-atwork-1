(() => {
  const initialize = () => {
    const search = window.location.search;
    console.log(search);
    const params = new URLSearchParams(search);
    console.log(params.get("day"));
  };

  initialize();
})();
