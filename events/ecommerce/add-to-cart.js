// Create total price parameters for cart, you can use LocalStorage for this part
const totalPrice = 75.99;
const currency = "MMK"; // For Cambodia, change to "KHR"

// Create item constants as example of the product in checkout process
const productCode = "515855";
const affiliation = "MakroClick Warehouse";
const itemCouponCode = "DISCOUNT_CODE";
const itemDiscount = 100;
const cartIndex = cart.length(); // Get length of array
const brand = "Generic";
const category = "Butchery & Egg";
const subCategoryL1 = "Fresh Chicken & Poultry";
const subCategoryL2 = "Chilled Chicken";
const variant = "Chilled";
const itemListId = "subcategory_l2_page";
const itemListName = "Subcategory Level 2 Page";
const originalPrice = 6950;
const quantity = 1;

// Clear previous ecommerce object
dataLayer.push({ ecommerce: null });

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
        currency: currency,
        value: totalPrice,
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
    }
});