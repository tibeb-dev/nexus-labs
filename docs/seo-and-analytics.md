# Nexus search and analytics launch guide

## What is implemented

- Shared responsive design on home, projects, contact, privacy, and the 13 real project detail pages.
- Unique page titles/descriptions, absolute canonical URLs, Open Graph/Twitter previews, vector branding, and a generated Apple icon.
- Organization and WebSite JSON-LD; project CreativeWork and BreadcrumbList markup; a projects ItemList and ContactPage markup. No invented ratings or awards.
- Crawlable server-rendered content and project links, descriptive image alternatives, a corrected sitemap, and robots.txt.
- Real pages explicitly opt into indexing. Unused public template routes have been removed and return 404; remaining private template source retained for uncommitted work is not routed. The root metadata defaults to `noindex, follow` so future pages must explicitly opt in.
- Invalid project IDs render not-found content. `/portfolio-details` permanently redirects to `/projects`.
- Bundled local fonts remove the build-time Google Fonts dependency.
- Production GA4 uses `G-7V661TP5TL`, configured in `.env.production`. It loads only after visitor opt-in. Preferences can be changed at `/privacy`. Development remains disabled unless a measurement ID is explicitly provided.

## Before deployment

Confirm `https://nexustechnologyet.com` is the preferred production origin. The source is `src/lib/site.ts`. Configure HTTP and alternate-host redirects at your hosting provider to that HTTPS origin. Password-protect staging; do not submit a staging sitemap.

Review the portfolio descriptions, project roles, timelines, and permission to name clients. These are retained from existing project data, not independently verified. Add real project outcomes only when you can substantiate them. Review the privacy notice against actual company practices and hosting/communication providers before enabling analytics.

Deploy, then check `/sitemap.xml`, `/robots.txt`, `/icon.svg`, `/apple-icon`, `/opengraph-image`, and the pages listed in the sitemap. Run Google's Rich Results Test and Search Console URL Inspection against the live site. Schema describes the content; it does not guarantee a rich result or AI citation.

## First priorities for Google visibility

1. Add a Domain property for `nexustechnologyet.com` in Google Search Console and verify with its DNS TXT record. Submit `https://nexustechnologyet.com/sitemap.xml`. Inspect the homepage, projects, contact, and strongest case studies. If using URL-prefix verification instead, `GOOGLE_SITE_VERIFICATION` accepts the verification meta-token; rebuild after setting it.
2. If eligible, verify a Google Business Profile. Use the same business name, phone, website, and actual address. Add accurate services, hours, original team/workplace photos, and genuine customer reviews. Do not invent reviews or incentivize them.
3. Create substantive service pages for web development, mobile apps, and AI/business automation. Explain who each service helps, deliverables, process, integrations, pricing factors, and relevant work. Natural local language such as “web development in Addis Ababa” is useful where accurate; avoid repetitive keyword stuffing or copied city pages.
4. Improve case studies with the client challenge, your exact contribution, technical decisions, screenshots, and verified outcomes. Publish named team expertise and useful answers based on first-hand work. Request legitimate client/partner links where appropriate.
5. Measure mobile Core Web Vitals using PageSpeed Insights and Search Console. Aim for LCP ≤ 2.5 seconds, INP ≤ 200 ms, and CLS ≤ 0.1 at the 75th percentile. Evaluate real-user data after deployment; a local build is not a performance score. Optimize large project images, hosting/cache behavior, and unused template CSS/JavaScript as indicated by measurement.
6. Review Search Console monthly: relevant queries, indexed pages, impressions, clicks, CTR, and technical issues. Improve pages that get impressions but do not answer the query well. Evaluate useful inquiries, not traffic alone. Rankings are not guaranteed, and there is no single “Google rating” for a website.

## AI search visibility

Google says its AI features use the same fundamental SEO practices, with no special schema or AI file required. Keep key facts explicit in readable page text: what Nexus does, where it works, which services it offers, and what it actually built. The contact page has direct answers to practical questions, and the structured data matches visible facts.

Prioritize original, verifiable case studies, clear headings, concise answers, citations when making factual claims, and consistent business details across credible profiles. Do not publish mass-generated generic articles or manufactured mentions. An `llms.txt` file is not a Google indexing requirement or a guaranteed route to AI recommendations. Crawl access, indexing, content quality, and independent reputation remain the priority. AI answers and citations can vary; inclusion cannot be promised.

## Set up Google Analytics 4

The supplied measurement ID is already configured in `.env.production`. Complete the stream settings and live verification below after deployment. Hosting environment variables override this file; ensure any existing override uses the same ID. Keep secrets out of this tracked file.

1. Create an Analytics account and GA4 property owned by the business. Select the appropriate reporting time zone and currency. Add a Web data stream for the production HTTPS domain.
2. Copy its Measurement ID, starting with `G-`, into your deployment environment:

   ```env
   NEXT_GA_MEASUREMENT_ID=G-7V661TP5TL
   ```

   The measurement ID is public configuration. Never put service-account credentials or an API secret in a `NEXT_PUBLIC_` variable. Leave the ID unset on local and staging deployments unless using a separate test property. Rebuild/redeploy after changing it.
3. This implementation sends explicit `page_view` events on App Router pathname changes. In the GA4 web stream, disable Enhanced Measurement (especially automatic page views/history-change tracking) to prevent duplicate events and unintended collection. Do not install a second GA tag or a second Google Tag Manager page-view tag alongside this integration.
4. With Enhanced Measurement disabled, the implemented events are:

   | Event | Meaning | Parameters |
   | --- | --- | --- |
   | `page_view` | One viewed pathname, after opt-in | Sanitized page location/referrer, page title |
   | `contact_click` | Email, telephone, or WhatsApp link selected | `contact_method`: `email`, `phone`, or `whatsapp` |

   `contact_click` is an intent signal, not proof of an inquiry or sale. Only add a `generate_lead` event if a future form/backend can confirm a successful submission. Do not send names, emails, phone numbers, message contents, or personal query parameters as events.
5. Use Google Tag Assistant and GA4 Realtime/DebugView after deployment. Before consent, check that the Google Analytics script is absent. Accept and verify exactly one initial page view, one per route navigation, and a contact-click event. Decline/revoke and confirm further collection stops. Test direct page loads, browser back/forward, and repeat visits. The preference is browser-specific; revocation does not erase past data.
6. Register `contact_method` as an event-scoped custom dimension if needed in reports. Decide whether to mark `contact_click` as a key event, clearly labeled as a contact intent. Filter internal traffic carefully, and link Search Console to GA4.
7. Start with a small report: acquisition source, landing page, engaged sessions, contact intent by method, and actual qualified inquiries from your sales records. Assess campaign quality using consistent UTM tags. Analytics measures behavior; installing it does not itself improve rankings.

## Official references

- [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Google's generative AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Search Console properties](https://support.google.com/webmasters/answer/34592)
- [Local ranking guidance](https://support.google.com/business/answer/7091)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- [Set up Analytics](https://support.google.com/analytics/answer/9304153)
- [Measure single-page applications](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications)
- [Consent implementation](https://developers.google.com/tag-platform/security/guides/consent)
