// Note that this event is optional, you can add this to the codebase if you want to, but not necessary for business goal.

// Initialized subdistrict, district, and province for saving tax invoice information
const subDistrict = "Invoice Sub District";
const district = "Invoice District";
const province = "Invoice Province";

// Use data layer to push the code to Google Tag Manager (and it will push to Google Analytics 4 aka GA4, automatically)
dataLayer.push({
    event: "save_tax_info",
    tax_subdistrict: subDistrict,
    tax_district: district,
    tax_province: province
});