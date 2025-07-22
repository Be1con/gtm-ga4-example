// Create variable for BMI
const weight = 45;
const height = 183;

// Use data layer
// No custom event for Meta Pixel and TikTok Pixel, use the same event name the same as GA4
dataLayer.push({
    'event': 'bmi_calculation',
    'weight': weight,
    'height': height
});