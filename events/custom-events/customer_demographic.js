// Create variable for adding customer demographic
const marriageStatus = 'โสด';
const salary = 'ไม่เกิน 20,000 บาทต่อเดือน';

// Use data layer
// No custom event for Meta Pixel and TikTok Pixel, use the same event name the same as GA4
dataLayer.push({
    'event': 'customer_demographic',
    'marriage_status': marriageStatus,
    'salary': salary
});