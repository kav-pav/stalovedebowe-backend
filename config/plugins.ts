module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "image-optimizer": {
    enabled: true,
    config: {
      include: ["jpeg", "jpg", "png"],
      exclude: ["gif"],
      formats: ["webp"],
      sizes: [
        {
          name: "xs",
          width: 300,
        },
        {
          name: "s",
          width: 768,
        },
        {
          name: "m",
          width: 1280,
        },
        {
          name: "l",
          width: 1920,
        },
        {
          name: "xl",
          width: 2840,
        },
      ],
      additionalResolutions: [1.5, 3],
      quality: 70,
    },
  },

  //
  graphql: {
    enable: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true,
      depthLimit: 7,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
  // ...
});
