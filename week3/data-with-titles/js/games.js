(() => {
  const $list = document.getElementById("list");

  const generateHTMLForGames = (games) => {
    let html = "";
    for (const game of games) {
      html += `
        <li>${game.name}</li>
      `;
    }
    return html;
  };

  const generateHTMLForCategories = (games) => {
    // stap 1: categorieën zoeken
    const types = ["rpg", "racing", "sports", "fps"];

    // stap 2: categorieën loopen
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
