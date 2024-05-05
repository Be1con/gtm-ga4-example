// Note that this event is optional, you can add this to the codebase if you want to, but not necessary for business goal.

// Initialized subdistrict, district, and province for selecting shipping
const subDistrict = "Sub District";
const district = "District";
const province = "Province";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "select_shipping",
    shipping_subdistrict: subDistrict,
    shipping_district: district,
    shipping_province: province
});