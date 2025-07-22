// Create variable for checking Critical Illness
const rejectStatus = false;

// Use data layer
// No custom event for Meta Pixel and TikTok Pixel, use the same event name the same as GA4
dataLayer.push({
    'event': 'policy_reject_check',
    'reject_status': rejectCheck
});