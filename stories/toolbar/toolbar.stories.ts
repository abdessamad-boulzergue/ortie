import { ArgTypes, Meta, moduleMetadata, Story } from '@storybook/angular';
import { ToolbarComponent, ToolbarPosition} from 'projects/ortie/src/lib/components/top-bar/top-bar.component';
import { ToolbarModule } from 'projects/ortie/src/lib/components/top-bar/top-bar.module';

export default { 
    component: ToolbarComponent,
     decorators: [
moduleMetadata({
 declarations: [],
 imports: [ToolbarModule,],
}), ],
 title: 'Components/Header',
  excludeStories: /.*Data$/,
   argTypes: {
        position: {
        control: {type: 'select'},
        options: ['fixed', 'absolute', 'relative', 'static'] as Array<ToolbarPosition>,
        },
        actions: {
        control: {type: 'array',}
        } 
    } as ArgTypes,
} as Meta<ToolbarComponent>;

const Template: Story<ToolbarComponent> = args => ({ 
    props: {...args, }, 
    styles: [], 
    template: `
            <ort-toolbar [actions]="actions" [position]="position">
                <ng-template #logo>
                <img src="/assets/flow.svg" />
                </ng-template>
                <ng-template toolbarUser>
                <ort-toolbar-user firstname="first name"></ort-toolbar-user>
                </ng-template> 
            </ort-toolbar>
         `,
    });
export const ToolBar = Template.bind({});
ToolBar.args = { 
    actions: [
        {
        id: '1',
        icon: 'dashboard',
        label: 'dashboard',
        onClick: () => console.log('dashboard clicked'),
        },
        {
        id: '2',
        icon: 'settings',
        label: 'settings',
        onClick: () => console.log('settings clicked!'),
        }, 
], 
position: 'relative',
};