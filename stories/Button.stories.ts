// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import {ButtonComponent ,ButtonsModule} from '@abdos/ortie/button';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Primary.args = {
  primary: true,
  title: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  title: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  title: 'Button',
};
