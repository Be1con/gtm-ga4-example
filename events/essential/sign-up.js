// Initialized sign up channel variable, which can be "emailphone" or "facebook", based on channel that they use for signing up
const signUpChannel = "emailphone"

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// For initial login
dataLayer.push({
    event: "sign_up",
    method: signUpChannel
});

// After that, store the user ID to the global variable (detailed in ../website/user-id.js)