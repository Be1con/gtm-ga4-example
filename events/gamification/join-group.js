// Initial group ID variable, you can create or reuse existing variable for faster implementation
// Group ID should be the same as in the database.
const groupId = "A98303";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// For initial login
dataLayer.push({
    event: "join_group",
    group_id: groupId
});