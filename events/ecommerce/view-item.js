// Create trip information
const destinations = ["Singapore", "Australia", "Japan"];
const departure_date = "2025-04-30";
const arrival_date = "2025-05-05";
const total_passenger = 4;

// Create item constants as example of the product in view item process
const planCode = "D2CTAGAS";
const planName = 'GEN Travel Safe - Gold Asia'
const affiliation = "GEN Click"; // In case of affiliated channel, you can change it to its channel, i.e., King Power, Thai Airways
const itemCouponCode = "COUPON_CODE";
const itemDiscount = 100;
const itemIndex = 1; // Sequence of item displayed on the page (start at 0)
const policyType = "Non-Life Policy";
const policySubType = "Travel Policy";
const productGroup = "GEN Travel Safe";
const variant = "Standard"; // In case of insurer age 6M-14Y, set as "Underage". For 76-80Y, set as "Elder".
const itemListId = "d2c_travel";
const itemListName = "GEN Click - GEN Travel Safe";
const originalPrice = 357; // Show full-price only, since the discounted price is collected on itemDiscount already.
const quantity = 1;

// Clear previous ecommerce object
dataLayer.push({ ecommerce: null });

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// For Meta Pixel, use 
dataLayer.push({
    'event': 'view_item',
    'ecommerce': {
        'currency': 'THB',
        'items': [
            {
                'item_id': planCode,
                'item_name': planName,
                'affiliation': affiliation,
                'coupon': itemCouponCode,
                'discount': itemDiscount,
                'index': itemIndex,
                'item_category': policyType,
                'item_category2': policySubType,
                'item_category3': productGroup,
                'destinations': destinations,
                'departure_date': departure_date,
                'arrival_date': arrival_date,
                'item_variant': variant,
                'item_list_id': itemListId,
                'item_list_name': itemListName,
                'price': originalPrice,
                'quantity': quantity
            }
        ]
    }
});