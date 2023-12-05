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
    // tip: begin eerst met een hardcoded array
    const types = ["rpg", "sports", "fps", "racing"];

    let html = "";
    for (const type of types) {
      const filteredGames = games.filter((game) => {
        return game.type === type;
      });

      html += `
        <li>
          <h2>${type}</h2>
          <ul>
            ${generateHTMLForGames(filteredGames)}
          </ul>
        </li>
      `;
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
