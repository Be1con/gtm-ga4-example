// Initial login channel variable, you can create or reuse existing variable for faster implementation
// loginChannel can be "emailphone" or "facebook", based on channel that they use to login
const loginChannel = "emailphone"

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// For initial login
dataLayer.push({
    event: "login",
    method: loginChannel
});

// After that, store the user ID to the global variable (detailed in ../website/user-id.js)