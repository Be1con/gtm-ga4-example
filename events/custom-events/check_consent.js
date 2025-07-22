// Create variable for checking consent
const isAccept = true;

// Use data layer
// No custom event for Meta Pixel and TikTok Pixel, use the same event name the same as GA4
dataLayer.push({
    'event': 'check_consent',
    'is_accept': isAccept
});