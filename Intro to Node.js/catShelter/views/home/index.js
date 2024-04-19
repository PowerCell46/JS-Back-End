const {upperBase, lowerBase} = require("../base");
const { homeHeaderView } = require("../header");


    function homePageHtmlTemplate(catsData) {
        return `
        ${upperBase()}
        ${homeHeaderView()}
        
            <main>
                <section class="cats">
                    <ul>
                        ${catsData.map((cat, index) => `
                        <li>
                            <img src="${cat.image}" alt="${cat.name}">
                            <h3>${cat.name}</h3>
                            <!-- <p><span>Price: </span>350$</p> -->
                            <p><span>Breed: </span>${cat.breed}</p>
                            <p><span>Description: </span>${cat.description}</p>
                            <ul class="buttons">
                                <li class="btn edit"><a href="/edit/${index}">Change Info</a></li>
                                <li class="btn delete"><a href="/shelter/${index}">New Home</a></li>
                            </ul>
                        </li>
                        `)}
                    </ul>
                </section>
            </main>
        
        ${lowerBase()}
        `;
    }


module.exports = homePageHtmlTemplate;