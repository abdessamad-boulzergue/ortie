import { CardComponent } from "@abdos/ortie/card";
import { Story, Meta } from '@storybook/angular/types-6-0';
export default {
    title: 'Cards/Card',
    component: CardComponent,
    // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
    argTypes: { },
  } as Meta;

  const Template: Story<CardComponent> = (args: CardComponent) => ({
    props: args,
    template:'<ort-card> hello card </ort-card>'
  });

  export const BasicCard = Template.bind({});