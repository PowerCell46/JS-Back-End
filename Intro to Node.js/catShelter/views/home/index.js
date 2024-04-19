const {upperBase, lowerBase} = require("../base");
const { homeHeaderView } = require("../header");
const catData = [
    {
        name: "Black Cat",
        imageURL: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."
    },
    {
        name: "Pretty Kitty",
        imageURL: "https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."
    },
    {
        name: "Pretty Kitty",
        imageURL: "https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."
    },
    {
        name: "Pretty Kitty",
        imageURL: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
        breed: "Bombay Cat",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho."
    },

];


module.exports = `
${upperBase()}
${homeHeaderView()}

    <main>
        <section class="cats">
            <ul>
                ${catData.map(cat => `
                <li>
                    <img src="${cat.imageURL}" alt="${cat.name}">
                    <h3>${cat.name}</h3>
                    <!-- <p><span>Price: </span>350$</p> -->
                    <p><span>Breed: </span>${cat.breed}</p>
                    <p><span>Description: </span>${cat.description}</p>
                    <ul class="buttons">
                        <li class="btn edit"><a href="">Change Info</a></li>
                        <li class="btn delete"><a href="">New Home</a></li>
                    </ul>
                </li>
                `)}
            </ul>
        </section>
    </main>

${lowerBase()}
`;