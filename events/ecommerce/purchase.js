// Create parameters for each transactions, you can use LocalStorage for this part
const transactionId = "4000067854"
const value = 45000;
const tax = 3000;
const shippingCost = 0;
const currency = "MMK"; // For Cambodia, change to "KHR"
const cartCoupon = "DISCOUNT_CODE"; // Cart-leveled coupon is not the same as item-leveled one
const codeCDM = "312990";

// Create item constants as example of the product in checkout process
const productCode = "515855";
const affiliation = "MakroClick Warehouse";
const itemCouponCode = "DISCOUNT_CODE";
const itemDiscount = 100;
const cartIndex = 0;
const brand = "Generic";
const category = "Butchery & Egg";
const subCategoryL1 = "Fresh Chicken & Poultry";
const subCategoryL2 = "Chilled Chicken";
const variant = "Chilled";
const itemListId = "subcategory_l2_page";
const itemListName = "Subcategory Level 2 Page";
const originalPrice = 6950;
const quantity = 1;

// Clear the previous ecommerce object.
dataLayer.push({ ecommerce: null });

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "purchase",
    ecommerce: {
        transaction_id: transactionId,
        value: value,
        tax: tax,
        shipping: shippingCost,
        currency: currency,
        coupon: cartCoupon,
        code_cdm: codeCDM,
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
            // In this example, it will show just 1 item, but you can have more than 1 item in the same array.
        ]
    }
});