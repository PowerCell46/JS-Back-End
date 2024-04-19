function headerView() {
    return `
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cats/add-breed">Add Breed</a></li>
                <li><a href="/cats/add-cat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
    </header>`;
}


function homeHeaderView(searchQuery) {
    return `
    <header>
        <nav>
            <ul class="navigation">
                <li><a href="/">Home Page</a></li>
                <li><a href="/cats/add-breed">Add Breed</a></li>
                <li><a href="/cats/add-cat">Add Cat</a></li>
            </ul>
        </nav>
        <h1>Cat Shelter</h1>
        <form action="/search" method="POST">
            <input type="text" name="search" value="${searchQuery ? searchQuery : ""}">
            <button type="submit">Search</button>
        </form>
    </header>
    `;
}


module.exports = {headerView, homeHeaderView};