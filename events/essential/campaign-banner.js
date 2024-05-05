// Initialized category-related menu for tracking category
const bannerId = "id";
const creativeName = "Member Special Promotion (11 - 24 Aug) Banner";
const creativeSlot = "Member_Special_Promotion_11_24_Aug_Banner";
const promotionId = "Member_Special_Promotion_11_24_Aug";
const promotionName = "Member Special Promotion (11 - 24 Aug)";
const source = "Slider Banner";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "promotion_banner",
    banner_id: bannerId,
    creative_name: creativeName,
    creative_slot: creativeSlot,
    promotion_id: promotionId,
    promotion_name: promotionName,
    select_source: source
});