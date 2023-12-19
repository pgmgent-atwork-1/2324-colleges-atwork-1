(() => {
  const $btn = document.getElementById("btn-toggle");
  const $container = document.getElementById("boxes");

  const registerListeners = () => {
    $btn.addEventListener("click", () => {
      $container.classList.toggle("boxes-container--dark");
    });
  };

  const initialize = () => {
    registerListeners();
  };

  initialize();
})();
