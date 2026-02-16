// Fetch the navigation component
fetch('navbar.html')
.then(response =>
{
    // Check if the request was successful
    if (!response.ok)
    {
        throw new Error(`Failed to load nav: ${response.status}`);
    }
    return response.text(); // Convert response to text
})
.then(navHTML =>
{
    // Insert the navigation HTML
    const nav = document.createElement('nav');
    nav.innerHTML = navHTML;
    document.body.prepend(nav);
})
.catch(error =>
{
    // Log errors (e.g., if nav.html is missing)
    console.error('Error loading navigation:', error);
});
createMenu();

// Hamburger menu button
function createMenu()
{
    // Fetch the nav drawer component
    fetch('nav-drawer.html')
    .then(response =>
    {
        // Check if the request was successful
        if (!response.ok)
        {
            throw new Error(`Failed to load foldout nav drawer: ${response.status}`);
        }
        return response.text(); // Convert response to text
    })
    .then(drawerHTML =>
    {
        // Insert the nav drawer HTML
        const drawer = document.createElement('nav-drawer');
        drawer.innerHTML = drawerHTML;
        document.body.prepend(drawer);
    })
    .catch(error =>
    {
        // Log errors (e.g., if nav-drawer.html is missing)
        console.error('Error loading nav drawer:', error);
    });
}

drawerExtended = false;
function toggleMenu()
{
    drawerExtended = !drawerExtended;
    if (drawerExtended)
    {
        document.getElementById("nav-drawer").style.display = "flex";
    }
    else
    {
        document.getElementById("nav-drawer").style.display = "none";
    }
}

window.onresize = function onResize()
{
    if (window.innerWidth >= 950 && drawerExtended) toggleMenu();
}
