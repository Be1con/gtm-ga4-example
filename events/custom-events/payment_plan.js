// Create variable for payment plan
const coupon = {
    paymentPlan: 'Yearly',
    price: 40000
};

// Use data layer for throwing coupon validation
// No custom event for Meta Pixel and TikTok Pixel, use the same event name the same as GA4
dataLayer.push({
    'event': 'select_payment_plan',
    'ecommerce': {
        'payment_plan':  paymentPlan,
        'currency': 'THB',
        'value': price
    }
});