// Initial game score, character's level, and character's name variables, you can create or reuse existing variable for faster implementation
const gameScore = 10000;        // Accept Number
const characterLevel = 5;       // Accept Number
const characterName = "Thor";   // Accept String

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After the game ended and get the score.
dataLayer.push({
    event: "post_score",
    score: gameScore,
    level: characterLevel,
    character: characterName
});