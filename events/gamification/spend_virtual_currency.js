// Initial burned value, currency name, and item name variables, you can create or reuse existing variable for faster implementation
const burnedValue = 5;
const currencyName = "Coin";
const itemName = "Magic Clothes";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// After spending virtual currency on an item name "Magic Clothes".
dataLayer.push({
    event: "earn_virtual_currency",
    value: burnedValue,
    virtual_currency_name: currencyName,
    item_name: itemName
});