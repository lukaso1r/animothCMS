module.exports = {
    apps: [
      {
        name: "strapi",
        script: "yarn",
        args: "start",
        env_file: ".env", 
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };
  