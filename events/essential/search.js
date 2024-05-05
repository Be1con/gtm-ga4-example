// Create query parameter (you can use existing parameter for search)
const query = "query";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "search",
    search_term: query
});