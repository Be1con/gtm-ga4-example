// Initial achievement ID variable, you can create or reuse existing variable for faster implementation
const achievementId = "JWC13Complete";  // Accept String

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After starting new level
dataLayer.push({
    event: "unlock_achievement",
    achievement_id: achievementId
});