// This is for global variable in JavaScript
import { useRouter } from 'next/router'

// Initial variables. If you store the user id in the session, you can reuse those variable.
const router = useRouter();
const URL_PATH = router.pathname;
const USER_ID = "userId";
const SITE_LANGUAGE = "th-th";

// Privacy-related variable, based on user's consent (optional)
const ALLOW_CONVERSION = true;
const AD_PERSONALIZATION = true;
const CLIENT_ID = "aaa.bbb";
const IGNORE_REFERRER = false;
const SEND_PAGE_VIEW = true;

// Get promotion-related data from URL (optional)
const UTM_ID = "utm_id";
const UTM_CAMPAIGN = "utm_campaign";
const UTM_SOURCE = "utm_source";
const UTM_MEDIUM = "utm_medium";
const UTM_CONTENT = "utm_content";
const UTM_TERM = "utm_term"; // can be search query.

//  Cookies-related variable (optional)
const COOKIE_EXPIRY = 28 * 24 * 60 * 60; /* 28 days, in seconds */
const COOKIE_FLAGS = "SameSite=None;Secure";
const COOKIE_PATH = "/"; /* Place Where to Store Cookies */
const COOKIE_PREFIX = "jwc_"; /* In case of custom cookie prefix tag. */
const COOKIE_UPDATE = true; /* Use for updating cookie on the browser */

//  User properties (optional, based on use cases, these are some of example of the use cases. Maximum custom properties = 25).
const APPLY_TRACK = "Web Content";
const APPLY_PROVINCE = "Bangkok";

// Use these configurations to configure the experience of the website

// Optional
gtag('set', 'allow_google_signals', ALLOW_CONVERSION);
gtag('set', 'allow_ad_personalization_signals', AD_PERSONALIZATION);
gtag('set', 'send_page_view', SEND_PAGE_VIEW);
gtag('set', 'client_id', CLIENT_ID);
gtag('set', 'ignore_referrer', IGNORE_REFERRER);
gtag('set', 'campaign', {
    'id': UTM_ID,
    'source': UTM_SOURCE,
    'medium': UTM_MEDIUM,
    'name': UTM_CAMPAIGN,
    'term': UTM_TERM,
    'content': UTM_CONTENT
});

// Cookies (Optionals)
gtag('set', 'cookie_expires', COOKIE_EXPIRY);
gtag('set', 'cookie_flags', COOKIE_FLAGS);
gtag('set', 'cookie_path', COOKIE_PATH);
gtag('set', 'cookie_prefix', COOKIE_PREFIX);
gtag('set', 'cookie_update', COOKIE_UPDATE);

// Essential
gtag('set', 'content_group', URL_PATH);
gtag('set', 'language', SITE_LANGUAGE);
gtag('set', 'user_id', USER_ID);
gtag('set', 'user_properties', {
    'apply_track': APPLY_TRACK,
    'apply_province': APPLY_PROVINCE
});