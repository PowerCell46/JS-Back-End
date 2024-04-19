const { headerView } = require("./header");
const { upperBase, lowerBase } = require("./base");


function createCatView(breedsData) {
    return `
    ${upperBase()}
    ${headerView()}
    <main>
        <form method="POST" action="/cats/add-cat" class="cat-form">
            <h2>Add Cat</h2>
            <label for="name">Name</label>
            <input name="name" type="text" id="name">
            <label for="description">Description</label>
            <textarea name="description" id="description"></textarea>
            <label for="image">Image URL</label>
            <input name="image" type="text" id="image">
            <label for="group">Breed</label>
            <select name="breed" id="group">
                ${breedsData.map(breed => `
                    <option value="${breed.name}">${breed.name}</option>
                `)}
            </select>
            <button type="submit">Add Cat</button>
        </form>
    </main>
    ${lowerBase()}
    `;
}


module.exports = createCatView;