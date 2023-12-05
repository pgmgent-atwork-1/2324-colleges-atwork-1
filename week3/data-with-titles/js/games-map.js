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
              ${generateHTMLForGames(
                games.filter((game) => {
                  return game.type === type;
                })
              )}
            </ul>
          </li>
      `;
      })
      .join("");
  };

  const buildUI = () => {
    $list.innerHTML = generateHTMLForCategories(games);
  };

  const initialize = () => {
    buildUI();
  };

  initialize();
})();
