module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi/provider-upload-aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("R2_ACCESS_KEY"),
          secretAccessKey: env("R2_SECRET_KEY"),
          region: "auto",
          endpoint: env("R2_ENDPOINT"),
          params: {
            Bucket: env("R2_BUCKET"),
          },
        },
        baseUrl: "https://cdn.animoth.com", // 🔹 Upewnij się, że baseUrl jest poza s3Options
        cloudflarePublicAccessUrl: "https://cdn.animoth.com",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },

  // Documentation
  documentation: {
    enabled: true,
    config:{
      info: {
        version: "1.0.0",
        title: "Animoth API",
        description: "Animoth API Documentation for cms.animoth.com",
      },
      openAPI: {
        components: {},
        security: [{ bearerAuth: [] }],
      },
    },
  },



});




