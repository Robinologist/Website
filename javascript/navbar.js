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
