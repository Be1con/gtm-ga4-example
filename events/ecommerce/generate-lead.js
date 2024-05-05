// Initial currency and lead value variables, you can create or reuse existing variable for faster implementation
const currency = "THB";
const leadValue = 500.00;

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After getting lead
dataLayer.push({
    event: "generate_lead",
    currency: currency,
    value: leadValue
});