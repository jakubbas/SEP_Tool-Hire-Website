const mainPath = 'indextemplate.html';
var categoriesRows = [];







function renderCategories(data) {
    console.log(data[2]);


    const container = document.getElementById('dynamicCategoryContainer');
    const dynamicCategories = categoriesRows.map(row => `
        <div class="category-box">
          <p class="category-title"> <%= row.category.name %></p>
          <img src="<%= row.category.image %>" alt="<%= row.category.name %>">
        </div>
      `).join('');


    container.innerHTML = dynamicCategories;

    console.log('Data rendered in HTML');
}

FetchCategories();



//const dynamicContent = categoriesRows.map(row => `
//    <div class="category-box">
//      <p class="category-title"> <%= row.category.name %></p>
//      <img src="<%= row.category.image %>" alt="<%= row.category.name %>">
//    </div>
//  `).join('');

