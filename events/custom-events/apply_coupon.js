// Create variable for coupons
const coupon = {
    couponCode: 'TEST',
    isValid: false
};

// Use data layer for throwing coupon validation
// No custom event for Meta Pixel and TikTok Pixel
dataLayer.push({
    'event': 'apply_coupon',
    'coupon_code':  couponCode,
    'is_valid': isValid
});