// Create parameter for passenger
const totalPassenger = 10;
const currency = "THB";

// Create passenger A information
const passengerAge = 30; // Calculate from birthdate in the form
const gender = "male";
const beneficiary = "ทายาทโดยธรรม";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// For Meta Pixel and TikTok Pixel, use the same format to pass the data to those platforms.
dataLayer.push({
    event: "passenger_info",
    total_passenger: totalPassenger,
    passengers: [
        {
            passenger_sequence: 1,
            age: passengerAge,
            gender: gender,
            beneficiary: beneficiary
        }
    ]
});