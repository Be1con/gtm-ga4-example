// This is for global variable in JavaScript
import { useRouter } from 'next/router'

// Initial variables. If you store the user id in the session, you can reuse those variable.
const router = useRouter();
const URL_PATH = router.pathname;
const USER_ID = "userId";

// Privacy-related variable, based on user's consent (optional)
const ALLOW_CONVERSION = true;
const AD_PERSONALIZATION = true;

// Get promotion-related data from URL (optional)
const UTM_CAMPAIGN = "utm_campaign";
const UTM_SOURCE = "utm_source";
const UTM_MEDIUM = "utm_medium";
const PAID_SEARCH = "search_queries";

// Use these configurations to configure the experience of the website

// Optional
gtag('set', 'allow_google_signals', ALLOW_CONVERSION);
gtag('set', 'allow_ad_personalization_signals', AD_PERSONALIZATION);
gtag('set', 'campaign', {
    'id': CAMPAIGN_ID,
    'source': UTM_SOURCE,
    'medium': UTM_MEDIUM,
    'name': UTM_CAMPAIGN,
    'term': PAID_SEARCH,
    'content': null
});

// Essential
gtag('set', 'content_group', URL_PATH);
gtag('set', 'user_id', USER_ID);