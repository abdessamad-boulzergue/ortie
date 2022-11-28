import { ArgTypes, Meta, moduleMetadata, Story } from '@storybook/angular';
import { TopBarModule } from 'projects/ortie/src/lib/components/top-bar/top-bar.module';

import { ActionComponent } from 'projects/ortie/src/lib/components/top-bar/action/action.component';
export default { 
    component: ActionComponent,
     decorators: [
        moduleMetadata({
        declarations: [],
        imports: [TopBarModule,],
        }), 
    ],
 title: 'Components/HeaderAction',
  excludeStories: /.*Data$/,
   argTypes: {
    icon: {
        control: {type: 'srting'},
        },
        label: {
        control: {type: 'string',}
        } 
    } as ArgTypes,
} as Meta<ActionComponent>;

const Template: Story<ActionComponent> = args => ({ 
    props: {...args, }, 
    styles: [], 
    template: `
            <cb-topbar-action  [icon]="'dashboard'" label="Tinmel-Board"
            ></cb-topbar-action>
        `,
    });
export const TopBar = Template.bind({});
TopBar.args = { 
        icon: 'dashboard',
        label: 'components',
        
        };

