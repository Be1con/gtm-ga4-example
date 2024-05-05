// Initial content type and content ID variables, you can create or reuse existing variable for faster implementation
const contentType = "article";
const contentId = "JWC13";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After select content on the page.
dataLayer.push({
    event: "select_content",
    content_type: contentType,
    content_id: contentId
});