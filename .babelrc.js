module.exports = (api) => {
  const isTest = api.env("test");
  const isDev = api.env("development");

  return {
    presets: [
      [
        require.resolve("@babel/preset-env"),
        {
          targets: {
            browsers: ["last 2 versions"],
          },
        },
      ],
      require.resolve("@babel/preset-typescript"),
      [
        require.resolve("@babel/preset-react"),
        {
          runtime: "automatic",
          development: isDev,
        },
      ],
    ],
    plugins: [
      require.resolve("babel-plugin-dev-expression"),
      require.resolve("@babel/plugin-transform-runtime"),
    ],
  };
};
