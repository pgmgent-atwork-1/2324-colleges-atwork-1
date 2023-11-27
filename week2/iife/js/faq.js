// IIFE om errors zoals "buildUI is already defined" te vermijden
(() => {
  const buildUI = () => {};

  const registerListeners = () => {};

  const initialize = () => {
    buildUI();
    registerListeners();
  };
})();
