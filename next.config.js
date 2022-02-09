const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const i18n = {
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "ja",
  },
};

module.exports = withPlugins([withBundleAnalyzer({}), i18n]);