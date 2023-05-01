import { SliderComponent ,SliderModule} from "@abdos/ortie/slider";
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";
import { CardModule } from "@abdos/ortie/card";
import { InteractiveCardModule } from "@abdos/ortie/interactive-card";
export default {
    title: 'Slider/horizontal',
    component: SliderComponent,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [SliderModule,CardModule,InteractiveCardModule],
      }),
    ], 
     argTypes: { },
  } as Meta;

  const Template: Story<SliderComponent> = (args: SliderComponent) => ({
    props: args,
    template:`
        <ort-slider>
             
      <ort-interactive-card slider-card [size]="{ width: '0px', height: '650px' }" > 

      <h2 card-head>Card Title</h2>
      <p card-head>This is the card's main content.</p>

      <img card-body data-src="https://rituals.scene7.com/is/image/rituals/2021_Aug_GWPKitchenPrivateCollection_3449RC:4-by-3" 
      src="https://rituals.scene7.com/is/image/rituals/2021_Aug_GWPKitchenPrivateCollection_3449RC:4-by-3?wid=1280&amp;hei=960"
     alt="Placeholder Image">

     <p card-footer-left>Left text</p>
     <button card-footer-right>Click me</button>
     <button card-footer-right>Another button</button>

      </ort-interactive-card>

      <ort-interactive-card slider-card [size]="{ width: '450px', height: '650px' }" > 

      <h2 card-head>Card 22</h2>
      <p card-head>This is the card's main content.</p>

      <img card-body data-src="https://rituals.scene7.com/is/image/rituals/2021_Aug_GWPKitchenPrivateCollection_3449RC:4-by-3" 
      src="https://rituals.scene7.com/is/image/rituals/2021_Aug_GWPKitchenPrivateCollection_3449RC:4-by-3?wid=1280&amp;hei=960"
     alt="Placeholder Image">

     <p card-footer-left>Left text</p>
     <button card-footer-right>Click me</button>
     <button card-footer-right>Another button</button>

      </ort-interactive-card>
      <ort-interactive-card slider-card [size]="{ width: '0px', height: '650px' }" > 

      <h2 card-head>Card 22</h2>
      <p card-head>This is the card's main content.</p>

      <img card-body data-src="https://rituals.scene7.com/is/image/rituals/2021_Aug_GWPKitchenPrivateCollection_3449RC:4-by-3" 
      src="https://rituals.scene7.com/is/image/rituals/2021_Aug_GWPKitchenPrivateCollection_3449RC:4-by-3?wid=1280&amp;hei=960"
     alt="Placeholder Image">

     <p card-footer-left>Left text</p>
     <button card-footer-right>Click me</button>
     <button card-footer-right>Another button</button>

      </ort-interactive-card>
       </ort-slider>
    `
  });

  export const HorizontalSlider = Template.bind({});