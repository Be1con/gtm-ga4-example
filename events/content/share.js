// Initial share channel, content type, and item ID variables, you can create or reuse existing variable for faster implementation
// loginChannel can be "facebook", "twitter", or "line", based on channel that they use to share content on the page.
// Item ID can be use based on the page content or else.
const shareChannel = "facebook";
const contentType = "page";
const itemId = "Home";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After sharing content
dataLayer.push({
    event: "share",
    method: shareChannel,
    content_type: contentType,
    item_id: itemId
});