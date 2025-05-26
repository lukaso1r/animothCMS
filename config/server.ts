export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env("PUBLIC_URL", "https://cdn.animoth.com", "http://localhost:5173"),
  app: {
    keys: env.array('APP_KEYS'),
  },
  body: {
    formLimit: "100mb",
    jsonLimit: "100mb",
    textLimit: "100mb",
  }
});










