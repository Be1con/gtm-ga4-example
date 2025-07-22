// Create item constants as example of the product in item selection process
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
const originalPrice = 357;
const quantity = 1;

// Clear previous ecommerce object
dataLayer.push({ ecommerce: null });

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "select_item",
    ecommerce: {
        item_list_id: pageListId,
        item_list_name: pageListName,
        items: [
            {
                item_id: productCode,
                affiliation: affiliation,
                coupon: itemCouponCode,
                discount: itemDiscount,
                index: cartIndex,
                item_brand: brand,
                item_category: category,
                item_category2: subCategoryL1,
                item_category3: subCategoryL2,
                item_variant: variant,
                item_list_id: itemListId,
                item_list_name: itemListName,
                price: originalPrice,
                quantity: quantity
            }
        ]
        // In this example, it will show just 1 item, but you can have more than 1 item in the same array.
    }
});