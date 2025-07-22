// Create variable for checking Critical Illness
const ciStatus = false;

// Use data layer
// No custom event for Meta Pixel and TikTok Pixel, use the same event name the same as GA4
dataLayer.push({
    'event': 'ci_check',
    'ci_status': ciStatus
});