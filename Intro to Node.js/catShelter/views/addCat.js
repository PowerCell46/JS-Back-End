const { headerView } = require("./header");
const { upperBase, lowerBase } = require("./base");


function createCatView() {
    const html = `
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
                <option value="Fluffy Cat">Fluffy Cat</option>
                <option value="Fluffy Cat">Fluffy Cat</option>
                <option value="Fluffy Cat">Fluffy Cat</option>
            </select>
            <button type="submit">Add Cat</button>
        </form>
    </main>
    ${lowerBase()}
    `;
    return html;
}


module.exports = createCatView;
