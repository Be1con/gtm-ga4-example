// Create trip information
const destinations = ["Singapore", "Australia", "Japan"];
const departure_date = "2025-04-30";
const arrival_date = "2025-05-05";
const total_passenger = 4;

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// For travel assurance, we recommended to use destinations as multiple locations.
// No custom event for Meta Pixel and TikTok Pixel
dataLayer.push({
    'event': "trip_detail",
    'destinations': destinations,
    'departure_date': departure_date,
    'arrival_date': arrival_date,
    'total_passenger': total_passenger
});