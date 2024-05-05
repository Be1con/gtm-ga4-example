// Initial character's level and character's name variables, you can create or reuse existing variable for faster implementation
const characterLevel = 5;  // Accept Number
const characterName = "Thor"; // Accept String

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After the character leveled up.
dataLayer.push({
    event: "level_up",
    level: characterLevel,
    character: characterName
});