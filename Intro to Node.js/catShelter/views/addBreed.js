const { upperBase, lowerBase } = require("./base");
const { headerView } = require("./header");


module.exports = `
    ${upperBase()}
    ${headerView()}
        <main>
            <form action="/cats/add-breed" method="POST" class="cat-form">
                <h2>Add Cat Breed</h2>
                <label for="breed-name">Breed Name</label>
                <input name="breed" type="text" id="breed-name">
                <button type="submit">Add Breed</button>
            </form>
        </main>
    ${lowerBase()}
`;
