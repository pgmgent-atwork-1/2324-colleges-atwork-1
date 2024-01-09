(() => {
  const $list = document.getElementById("list");
  const $categories = document.getElementById("categories");

  const generateHTMLForEvents = (events) => {
    let html = "";
    for (const event of events) {
      html += `
        <li>
          <img src="${event.image ? event.image.thumb : "/static/img/placeholder.jpg"}" /> 
          ${event.title}
        </li>
      `;
    }
    return html;
  };

  const generateHTMLForCategories = (categories, events) => {
    let html = "";
    for (const category of categories) {
      html += `
        <li>
          <h2>${category}</h2>
          <ul>
            ${generateHTMLForEvents(events.filter((event) => event.category.includes(category)))}
          </ul>
        </li>
      `;
    }
    $list.innerHTML = html;
  };

  const generateHTMLForCategoryLinks = (categories) => {
    let html = "";
    for (const category of categories) {
      html += `
        <li><a href="#">${category}</a></li>
      `;
    }
    $categories.innerHTML = html;
  };

  const fetchData = async () => {
    try {
      const categoriesResponse = await fetch("https://www.pgm.gent/data/gentsefeesten/categories.json");
      const categories = await categoriesResponse.json();

      const eventsResponse = await fetch("https://www.pgm.gent/data/gentsefeesten/events.json");
      let events = await eventsResponse.json();

      // filter events by day
      events = events.filter((event) => true);

      generateHTMLForCategoryLinks(categories);
      generateHTMLForCategories(categories, events);
    } catch (e) {
      console.log(e);
    }
  };

  const initialize = () => {
    fetchData(); // asynchroon!
  };

  initialize();
})();
