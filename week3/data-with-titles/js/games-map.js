(() => {
  const $list = document.getElementById("list");

  const generateHTMLForGames = (games) => {
    return games.map((game) => `<li>${game.name}</li>`).join("");
  };

  const generateHTMLForCategories = (games) => {
    // stap 1: categorieën zoeken
    const types = ["rpg", "racing", "sports", "fps"];

    // stap 2: categorieën loopen
    return types
      .map((type) => {
        return `
          <li>
            <h2>${type}</h2>
            <ul>
              ${generateHTMLForGames(gamesByType)}
            </ul>
          </li>
      `;
      })
      .join("");

    let html = "";
    for (const type of types) {
      const gamesByType = games.filter((game) => {
        return game.type === type;
      });

      html += `
      <li>
        <h2>${type}</h2>
        <ul>
          ${generateHTMLForGames(gamesByType)}
        </ul>
      </li>`;
    }
    return html;
  };

  const buildUI = () => {
    $list.innerHTML = generateHTMLForCategories(games);
  };

  const initialize = () => {
    buildUI();
  };

  initialize();
})();
