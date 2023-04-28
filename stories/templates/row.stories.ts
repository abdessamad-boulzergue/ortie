import { VerticalAlignModule,VerticalAlignComponent,VERTICALALIGN } from "@abdos/ortie/vertical-align";
import { Meta , moduleMetadata , Story } from "@storybook/angular";

export default {
    title: 'Templates/Grid',
    component: VerticalAlignComponent,
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [VerticalAlignModule],
        }),
      ],  
    argTypes: { 
        vposition:{
            control:{type:"select"},
            options:["start","center","stretch","end"] as Array<VERTICALALIGN>
        },
        hposition:{
            control:{type:"select"},
            options:["start","center","stretch","space-evenly","end"] as Array<VERTICALALIGN>
        }
    },
  } as Meta;

  const Template: Story<VerticalAlignComponent> = (args: VerticalAlignComponent) => ({
    props: args,
    styles: [`  `],
    template:`
    <ort-vertical-align [width]="width" [vposition]="vposition"  [hposition]="hposition" >
       <span> first item</span>
       <span> second item</span>
       <span> third item</span>
    </ort-vertical-align>
    `
  });


  export const row = Template.bind({}); 

  row.args={
    width:'100%',
    vposition:'start',
    hposition:'start'
  }