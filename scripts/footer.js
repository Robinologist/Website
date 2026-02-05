// Fetch the footer component
fetch('footer.html')
.then(response =>
{
    // Check if the request was successful
    if (!response.ok)
    {
        throw new Error(`Failed to load footer: ${response.status}`);
    }
    return response.text(); // Convert response to text
})
.then(footerHTML =>
{
    // Insert the footer HTML
    const footer = document.createElement('footer');
    footer.innerHTML = footerHTML;
    document.body.appendChild(footer);
})
.catch(error =>
{
    // Log errors (e.g., if footer.html is missing)
    console.error('Error loading footer:', error);
});

// Back to top button
function topFunction()
{
    window.scrollTo
    ({
        top: 0,
        behavior: 'smooth'
    });
}
