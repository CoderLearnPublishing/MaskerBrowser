/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// This file contains branding-specific prefs.

pref("startup.homepage_override_url", "");
pref("startup.homepage_welcome_url", "");
pref("startup.homepage_welcome_url.additional", "");
// The time interval between checks for a new version (in seconds)
pref("app.update.interval", 86400); // 24 hours
// Give the user x seconds to react before showing the big UI. default=24 hours
pref("app.update.promptWaitTime", 86400);
// URL user can browse to manually if for some reason all update installation
// attempts fail.
pref("app.update.url.manual", "https://nightly.mozilla.org");
// A default value for the "More information about this update" link
// supplied in the "An update is available" page of the update wizard.
pref("app.update.url.details", "https://nightly.mozilla.org");

// The number of days a binary is permitted to be old
// without checking for an update.  This assumes that
// app.update.checkInstallTime is true.
pref("app.update.checkInstallTime.days", 2);

// Give the user x seconds to reboot before showing a badge on the hamburger
// button. default=immediately
pref("app.update.badgeWaitTime", 0);

// Number of usages of the web console.
// If this is less than 5, then pasting code into the web console is disabled
pref("devtools.selfxss.count", 5);

pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
pref("browser.newtabpage.activity-stream.feeds.topsites", false);
pref("browser.toolbars.bookmarks.visibility", "never");

pref("app.update.auto", false);
pref("app.update.enabled", false);
pref("app.update.suppressPrompts", true);
pref("app.update.service.enabled", false);
pref("app.update.staging.enabled", false);
pref("app.update.checkInstallTime", false);
pref("app.update.url", "");
pref("browser.shell.checkDefaultBrowser", false);
pref("app.update.service.enabled", false);
pref("browser.uitour.enabled", false);
pref("browser.urlbar.suggest.topsites", false);
pref("browser.theme.content-theme", 0);
pref("browser.privatebrowsing.enable-new-indicator", false);
pref("browser.privatebrowsing.enable-new-logo", false);
pref("browser.privateWindowSeparation.enabled", false);
pref("browser.theme.dark-private-windows", false);
pref("browser.startup.homepage", "about:blank");

pref("browser.privatebrowsing.autostart", true);
pref("browser.tabs.firefox-view", false);
pref("browser.bookmarks.defaultLocation", "unfiled");
pref("privacy.purge_trackers.date_in_cookie_database", 0);
pref("accessibility.indicator.enabled", false);
pref("apz.minimap.enabled", false);
pref("browser.download.manager.addToRecentDocs", false);
pref("browser.places.importBookmarksHTML", false);
pref("browser.preferences.experimental", false);
pref("network.proxy.socks", "127.0.0.1");
pref("network.proxy.type", 1);
pref("browser.region.network.url", "");
pref("browser.region.update.enabled", false);
pref("browser.safebrowsing.provider.google.gethashURL",""); 
pref("browser.safebrowsing.provider.google.updateURL","");
pref("browser.safebrowsing.provider.google4.gethashURL","");
pref("browser.safebrowsing.provider.google4.updateURL","");
pref("browser.safebrowsing.provider.mozilla.gethashURL","");
pref("browser.safebrowsing.provider.mozilla.lists", "base-track-digest256,mozstd-trackwhite-digest256,google-trackwhite-digest256,content-track-digest256,mozplugin-block-digest256,mozplugin2-block-digest256,block-flash-digest256,except-flash-digest256,allow-flashallow-digest256,except-flashallow-digest256,block-flashsubdoc-digest256,except-flashsubdoc-digest256,ads-track-digest256,social-track-digest256,analytics-track-digest256,base-fingerprinting-track-digest256,content-fingerprinting-track-digest256,base-cryptomining-track-digest256,content-cryptomining-track-digest256,fanboyannoyance-ads-digest256,fanboysocial-ads-digest256,easylist-ads-digest256,easyprivacy-ads-digest256,adguard-ads-digest256,social-tracking-protection-digest256,social-tracking-protection-facebook-digest256,social-tracking-protection-linkedin-digest256,social-tracking-protection-twitter-digest256");
pref("browser.search.geoip.url","");

pref("app.normandy.api_url", "");
pref("app.normandy.enabled", false);
pref("app.update.auto", false);
pref("app.update.enabled", false);
pref("beacon.enabled", false);
pref("browser.aboutHomeSnippets.updateUrl", "");
pref("browser.cache.disk_cache_ssl", false);
pref("browser.cache.disk.enable", false);
pref("browser.cache.offline.enable", false);
pref("browser.disableResetPrompt", true);
pref("browser.display.use_document_fonts", 0);
pref("browser.fixup.alternate.enabled", false);
pref("browser.formfill.enable", false);
pref("browser.library.activity-stream.enabled", false);
pref("browser.newtabpage.activity-stream.disableSnippets", true);
pref("browser.newtabpage.activity-stream.enabled", false);
pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
pref("browser.newtabpage.activity-stream.feeds.snippets", false);
pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
pref("browser.newtabpage.activity-stream.feeds.topsites", false);
pref("browser.newtabpage.activity-stream.prerender", false);
pref("browser.newtabpage.activity-stream.showSearch", false);
pref("browser.newtabpage.enhanced", false);
pref("browser.newtabpage.introShown", true);
pref("browser.newtab.preload", false);
pref("browser.onboarding.enabled", false);
pref("browser.pagethumbnails.capturing_disabled", true);
pref("browser.safebrowsing.appRepURL", "");
pref("browser.safebrowsing.blockedURIs.enabled", false);
pref("browser.safebrowsing.downloads.enabled", false);
pref("browser.safebrowsing.downloads.remote.enabled", false);
pref("browser.safebrowsing.downloads.remote.url", "");
pref("browser.safebrowsing.enabled", false);
pref("browser.safebrowsing.malware.enabled", false);
pref("browser.safebrowsing.phishing.enabled", false);
pref("browser.search.geoip.timeout", 1);
pref("browser.search.suggest.enabled", false);
pref("browser.selfsupport.url", "");
pref("browser.send_pings", false);
pref("browser.shell.checkDefaultBrowser", false);
pref("browser.startup.homepage_override.mstone", "ignore");
pref("browser.startup.page", 0);
pref("browser.toolbarbuttons.introduced.pocket-button", true);
pref("browser.urlbar.speculativeConnect.enabled", false);
pref("browser.urlbar.trimURLs", false);
pref("datareporting.healthreport.uploadEnabled", false);
pref("datareporting.policy.dataSubmissionEnabled", false);
pref("dom.battery.enabled", false);
pref("dom.enable_performance", false);
pref("dom.enable_performance_navigation_timing", false);
pref("dom.enable_resource_timing", false);
pref("dom.event.clipboardevents.enabled", false);
pref("dom.gamepad.enabled", false);
pref("dom.indexedDB.enabled", false);
pref("dom.min_timeout_value", 400);
pref("dom.push.connection.enabled", false);
pref("dom.push.enabled", false);
pref("dom.serviceWorkers.enabled", false);
pref("dom.serviceWorkers.interception.enabled", false);
pref("dom.storage.enabled", false);
pref("dom.webaudio.enabled", false);
pref("extensions.autoDisableScopes", 14);
pref("extensions.getAddons.cache.enabled", false);
pref("extensions.getAddons.showPane", false);
pref("extensions.pocket.enabled", false);
pref("extensions.screenshots.disabled", true);
pref("extensions.webservice.discoverURL", "");
pref("geo.enabled", false);
pref("geo.wifi.uri", "");
pref("gfx.downloadable_fonts.disable_cache", true);
pref("javascript.options.shared_memory", false);
pref("layout.css.visited_links_enabled", false);
pref("media.autoplay.enabled", false);
pref("media.cache_size", 0);
pref("media.navigator.enabled", false);
pref("media.peerconnection.enabled", false);
pref("media.video_stats.enabled", false);
pref("captivedetect.canonicalURL", "");
pref("network.captive-portal-service.enabled", false);
pref("network.cookie.cookieBehavior", 1);
pref("network.cookie.lifetimePolicy", 2);
pref("network.dns.disablePrefetch", true);
pref("network.http.referer.spoofSource", true);
pref("network.http.referer.trimmingPolicy", 2);
pref("network.http.referer.XOriginPolicy", 2);
pref("network.prefetch-next", false);
pref("privacy.donottrackheader.enabled", true);
pref("privacy.donottrackheader.value", 1);
pref("toolkit.telemetry.archive.enabled", false);
pref("toolkit.telemetry.coverage.opt-out", true);
pref("toolkit.telemetry.enabled", false);
pref("toolkit.telemetry.server", "");
pref("toolkit.telemetry.unified", false);
pref("webgl.disabled", true);
pref("browser.chrome.errorReporter.infoURL", "");
pref("breakpad.reportURL", "");
pref("browser.newtabpage.activity-stream.default.sites", "");