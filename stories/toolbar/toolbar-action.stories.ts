import { ArgTypes, Meta, moduleMetadata, Story } from '@storybook/angular';
import { ToolbarModule } from 'projects/ortie/src/lib/components/top-bar/top-bar.module';

import { ActionComponent } from 'projects/ortie/src/lib/components/top-bar/action/action.component';
export default { 
    component: ActionComponent,
     decorators: [
        moduleMetadata({
        declarations: [],
        imports: [ToolbarModule,],
        }), 
    ],
 title: 'Components/Header',
  excludeStories: /.*Data$/,
   argTypes: {
        icon: {
            control: {type: 'select'},
             options: ['settings', 'dashboard', 'home'] as Array<String>,
            },
        label: {
                type: { name: 'string', required: true },
                control: {type: 'text'},
            } 
    } as ArgTypes,
} as Meta<ActionComponent>;

const Template: Story<ActionComponent> = args => ({ 
    props: {...args, }, 
    styles: [], 
    template: `
            <ort-toolbar-action  [icon]="icon" [label]="label"
            ></ort-toolbar-action>
        `,
    });
export const ToolBarAction = Template.bind({});
ToolBarAction.args = { 
        icon: 'dashboard',
        label: 'components',
        
        };

