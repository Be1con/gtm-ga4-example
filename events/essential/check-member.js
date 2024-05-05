// Initialized member checking for tracking specific event (you can insert logic for checking whether the global variable is existed on the page or not)
const memberNumber = "member";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "check_member",
    user_id: memberNumber
});