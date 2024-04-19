const { upperBase, lowerBase } = require("./base");
const { headerView } = require("./header");


function shelterCatHtmlTemplate(catData, catId) {
    return `
    ${upperBase()}
    ${headerView()}
        <main>
            <form action="/shelter/${catId}" method="POST" class="cat-form">
                <h2>Shelter the cat</h2>
                <img src="${catData.image}" alt="${catData.name}">
                <label for="name">Name</label>
                <input type="text" id="name" value="${catData.name}" disabled>
                <label for="description">Description</label>
                <textarea id="description" disabled>${catData.description}</textarea>
                <label for="group">Breed</label>
                <select id="group" disabled>
                    <option value="${catData.breed}">${catData.breed}</option>
                </select>
                <button>SHELTER THE CAT</button>
            </form>
        </main>
    ${lowerBase()}
`;
}


module.exports = shelterCatHtmlTemplate;