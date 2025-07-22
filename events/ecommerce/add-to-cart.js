// Create item constants as example of the product in checkout process
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
const itemListId = "d2c_health";
const itemListName = "GEN Click - GEN Travel Safe";
const originalPrice = 357;
const quantity = 1;

// Clear previous ecommerce object
dataLayer.push({ ecommerce: null });

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
// On Meta Pixel and TikTok Pixel, map to the event 'AddToCart'
dataLayer.push({
    'event': "add_to_cart",
    'ecommerce': {
        'currency': 'THB',
        'value': totalPrice,
        items: [
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
                'item_variant': variant,
                'item_list_id': itemListId,
                'item_list_name': itemListName,
                'price': originalPrice,
                'quantity': quantity
            }
        ]
    }
});