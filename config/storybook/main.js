const path = require("path");

module.exports = {
  stories: ["../../src/**/*.stories.(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-notes",
    "@storybook/addon-viewport/register"
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("ts-loader")
        }
      ]
    });
    config.resolve.extensions.push(".ts", ".tsx");

    const svgFolder = "./public/img/noun";
    config.module.rules.push({
      test: /\.svg$/,
      include: path.resolve(svgFolder),
      use: ["svg-inline-loader"]
    });
    config.resolve.extensions.push(".svg");

    return config;
  }
};
