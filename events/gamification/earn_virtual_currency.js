// Initial currency name and earned value variables, you can create or reuse existing variable for faster implementation
const currencyName = "Coin";
const earnedValue = 5;

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After earning virtual currency
dataLayer.push({
    event: "earn_virtual_currency",
    virtual_currency_name: currencyName,
    value: earnedValue
});