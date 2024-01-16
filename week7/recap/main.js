(() => {
  const $list = document.getElementById("list");
  const $year = document.getElementById("year");
  const $btnGrid = document.getElementById("btn-grid");
  const $btnList = document.getElementById("btn-list");

  const categories = ["Documentary", "Painting", "Sculpture", "Study", "Installation", "Exhibition"].sort();

  const fetchData = async () => {
    let artItems = await fetchArtItems();
    // get year from url
    const params = new URLSearchParams(window.location.search);
    const year = params.get("year") ?? "2020";
    $year.innerHTML = year;
    // filter by year
    artItems = artItems.filter((item) => item.year === year);
    console.log(artItems);
    // display items in HTML
    renderArtItems(artItems);
  };

  const generateItemsHtml = (artItems) => {
    let html = "";
    for (const artItem of artItems) {
      html += `
      <li>${artItem.title} (${artItem.year})</li>
    `;
    }
    return html;
  };

  const renderArtItems = (artItems) => {
    let html = "";
    for (const category of categories) {
      const filteredItems = artItems.filter((item) => item.tags.includes(category));

      html += `
        <li>
          <h2>${category}</h2>
          <ul class="items">
            ${generateItemsHtml(filteredItems)}
          </ul>
        </li>
      `;
    }
    $list.innerHTML = html;
  };

  const registerListeners = () => {
    $btnGrid.addEventListener("click", () => {
      $list.classList.remove("grid--list");
    });
    $btnList.addEventListener("click", () => {
      $list.classList.add("grid--list");
    });
  };

  const initialize = () => {
    fetchData();
    registerListeners();
  };

  initialize();
})();
