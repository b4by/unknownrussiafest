module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "res.cloudinary.com",
            "cdn.jsdelivr.net",
            "strapi.io",
            "s3.amazonaws.com",
            "market-assets.strapi.io",
          ],
          "media-src": ["'self'", "data:", "blob:", "res.cloudinary.com"],
          "script-src": [
            "'self'",
            "editor.unlayer.com",
            "editor.unlayer.com/embed.js",
          ],
          "frame-src": ["'self'", "editor.unlayer.com"],
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
