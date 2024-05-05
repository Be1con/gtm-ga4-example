// Note that this event is optional, you can add this to the codebase if you want to, but not necessary for business goal.

// Initial session keeping for tracking specific event
const sessionKeep = false;

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "remember_me",
    value: sessionKeep
});