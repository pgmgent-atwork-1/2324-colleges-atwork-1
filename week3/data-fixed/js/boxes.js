(() => {
  const $body = document.body;

  const generateHTMLForBoxes = (boxes) => {
    let html = "";
    for (const box of boxes) {
      html += `
        <div class="box" style="left: ${box.x}; top: ${box.y}"></div>
      `;
    }
    return html;
  };

  const buildUI = () => {
    $body.innerHTML = generateHTMLForBoxes(boxes);
  };

  const initialize = () => {
    buildUI();
  };

  initialize();
})();
