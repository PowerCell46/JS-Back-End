const { upperBase, lowerBase } = require("./base");
const { headerView } = require("./header");


function editCatHtmlTemplate(catData, catId, breedsData) {
    return `
    ${upperBase()}
    ${headerView()}
    <main>
        <form action="/edit/${catId}" method="post" class="cat-form">
            <h2>Edit Cat</h2>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" value="${catData.name}">
            <label for="description">Description</label>
            <textarea id="description" name="description">${catData.description}</textarea>
            <label for="image">Image</label>
            <input name="image" type="text" id="image" value="${catData.image}">
            <label for="group">Breed</label>
            <select name="breed" id="group">
                ${breedsData.map(breed => breed.name === catData.breed ? 
                    `<option value="${breed.name}" selected>${breed.name}</option>` : 
                    `<option value="${breed.name}">${breed.name}</option>`)}
            </select>
            <button>Edit Cat</button>
        </form>
    </main>
    ${lowerBase()}
`;
}


module.exports = editCatHtmlTemplate;