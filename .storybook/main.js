module.exports = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "webpack5"
  },
  staticDirs:['../projects/ortie/src/assets','../projects/ortie/src']
}