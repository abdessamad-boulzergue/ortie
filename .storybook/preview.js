import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import '!style-loader!css-loader!sass-loader!../projects/ortie/src/style.css'
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}