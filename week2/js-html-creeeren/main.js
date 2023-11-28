(() => {
  const $list = document.getElementById("list");

  const items = [
    {
      name: "Pizza",
      origin: "Italy",
    },
    {
      name: "Broodje kaas",
      origin: "Netherlands",
    },
    {
      name: "Frietjes",
      origin: "Belgium",
    },
    {
      name: "Kapsalon",
      origin: "Netherlands",
    },
  ];

  const generateHTMLForListLikeAPro = (list) => {
    return `
      <ul>
      ${list.map((item) => `<li class="list-item">${item.name} - ${item.origin}</li>`).join("")}
      </ul>
    `;
  };

  const generateHTMLForList = (list) => {
    let html = "<ul>";
    for (const item of list) {
      html += `<li class="list-item">${item.name} - ${item.origin}</li>`;
    }
    html += "</ul>";
    return html;
  };

  const buildUI = () => {
    $list.innerHTML = generateHTMLForListLikeAPro(items);
  };

  const initialize = () => {
    buildUI();
  };

  initialize();
})();
