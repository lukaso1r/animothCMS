module.exports = ({ env }) =>[
  'strapi::errors',
  {
    name: 'strapi::cors',
    config: {
      origin: ['https://cms.animoth.com', 'https://animoth.com', 'https://www.animoth.com', 'https://cdn.animoth.com', "http://localhost:5173"],
    },
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "default-src": ["'self'", "https://cdn.animoth.com"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "https://market-assets.strapi.io",
            "https://cdn.animoth.com",
            env("R2_ENDPOINT") ? env("R2_ENDPOINT").replace(/^https?:\/\//, "") : "",
            env("CF_PUBLIC_ACCESS_URL")
              ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "")
              : "",
          ],
          "media-src": [
              "'self'", 
              "blob:", 
              "https://cdn.animoth.com", 
              env("R2_ENDPOINT") ? env("R2_ENDPOINT").replace(/^https?:\/\//, "") : "",
              env("CF_PUBLIC_ACCESS_URL")
                ? env("CF_PUBLIC_ACCESS_URL").replace(/^https?:\/\//, "")
                : "",
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];