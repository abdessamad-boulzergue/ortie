import { InteractiveCardComponent ,InteractiveCardModule} from "@abdos/ortie/interactive-card";
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";

export default {
    title: 'Cards/Card',
    component: InteractiveCardComponent,
    decorators: [
      moduleMetadata({
        declarations: [],
        imports: [InteractiveCardModule],
      }),
    ], 
     argTypes: { },
  } as Meta;

  const Template: Story<InteractiveCardComponent> = (args: InteractiveCardComponent) => ({
    props: args,
    template:`
    <div style="display:flex; flex-direction:row">
        <ort-interactive-card  [size]="{ width: '500px', height: '580px' }" > 

        <h2 card-head>Card Title</h2>
        <p card-head>This is the card's main content.</p>

        <img card-body data-src="https://rituals.scene7.com/is/image/rituals/2021_Aug_GWPKitchenPrivateCollection_3449RC:4-by-3" 
        src="https://rituals.scene7.com/is/image/rituals/2021_Aug_GWPKitchenPrivateCollection_3449RC:4-by-3?wid=1280&amp;hei=960"
       alt="Placeholder Image">

       <p card-footer-left>Left text</p>
       <button card-footer-right>Click me</button>
       <button card-footer-right>Another button</button>

        </ort-interactive-card>

        
        
    <div style="display:flex; flex-direction:row">
    <ort-interactive-card  [size]="{ width: '500px', height: '580px' }" > 

    <h2 card-head>Card Title</h2>
    <p card-head>This is the card's main content.</p>

    <img card-body data-src="https://rituals.scene7.com/is/image/rituals/2021_Aug_GWPKitchenPrivateCollection_3449RC:4-by-3" 
    src="https://rituals.scene7.com/is/image/rituals/1115172-rituals-karma-2023-summer-box-of-joy-multi-2:4-by-3?wid=1280&hei=960"
   alt="Placeholder Image">

   <p card-footer-left>Left text</p>
   <button card-footer-right>Click me</button>
   <button card-footer-right>Another button</button>

    </ort-interactive-card>

    
        </div>
    `
  });

  export const InteractiveCard = Template.bind({});