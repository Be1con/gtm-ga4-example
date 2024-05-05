// Initial level name and is success variables, you can create or reuse existing variable for faster implementation
const levelName = "5";  // Accept String
const isSuccess = true; // Accept Boolean

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After completed or failed level
dataLayer.push({
    event: "level_end",
    level_name: levelName,
    success: isSuccess
});