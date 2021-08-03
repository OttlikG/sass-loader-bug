const path = require('path');

module.exports = {
  "stories": [
    "../**/*.story.mdx",
    "../**/*.story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
		config.module.rules.push({
			test: /\.scss$/,
			use: ['style-loader', 'css-loader?modules&importLoaders', 'sass-loader'],
			include: path.resolve(__dirname, '../'),
		});

		return config;
	},
}