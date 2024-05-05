// Initial level name variable, you can create or reuse existing variable for faster implementation
const levelName = "5";  // Accept String

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After starting new level
dataLayer.push({
    event: "level_start",
    level_name: levelName
});