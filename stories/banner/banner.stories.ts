import { BannerComponent,BannerModule } from "@abdos/ortie/banner";
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";

export default {
    title: 'Banner/Banner',
    component: BannerComponent,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [BannerModule],
      }),
    ], 
     argTypes: { },
  } as Meta;

  const Template: Story<BannerComponent> = (args: BannerComponent) => ({
    props: args,
    template:`
    <lib-banner [imageUrl]="'https://rituals.scene7.com/is/image/rituals/2023-summerlimited-mgouna-campaign-03-055:Widescreen?wid=3038&hei=1709'"></lib-banner>
    `
  });

  export const Banner = Template.bind({});