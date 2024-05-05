// Note that this event is optional, you can add this to the codebase if you want to, but not necessary for business goal.

// Initialized category-related menu for tracking category
const pageType = "category";
const category = "Butchery & Egg";
const subCategory = "Fresh Chicken & Poultry";
const productType = "Chilled Chicken";
const pageDestination = "/category/Butchery_Egg/Fresh_Chicken_&_Poultry/Chilled_Chicken";
const selectSource = "Menu Bar";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "category_select",
    page_type: pageType,
    item_category: category,
    item_category2: subCategory,
    item_category3: productType,
    page_destination: pageDestination,
    select_source: selectSource
});