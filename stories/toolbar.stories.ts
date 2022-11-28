import { ArgTypes, Meta, moduleMetadata, Story } from '@storybook/angular';
import { TopBarComponent, TopBarPosition} from 'projects/ortie/src/lib/components/top-bar/top-bar.component';
import { TopBarModule } from 'projects/ortie/src/lib/components/top-bar/top-bar.module';

export default { 
    component: TopBarComponent,
     decorators: [
moduleMetadata({
 declarations: [],
 imports: [TopBarModule,],
}), ],
 title: 'Components/Header',
  excludeStories: /.*Data$/,
   argTypes: {
        position: {
        control: {type: 'select'},
        options: ['fixed', 'absolute', 'relative', 'static'] as Array<TopBarPosition>,
        },
        actions: {
        control: {type: 'array',}
        } 
    } as ArgTypes,
} as Meta<TopBarComponent>;

const Template: Story<TopBarComponent> = args => ({ 
    props: {...args, }, 
    styles: [], 
    template: `
            <cb-top-bar [actions]="actions" [position]="position">
                <ng-template #logo>
                <img src="/assets/flow.svg" />
                </ng-template>
                <ng-template topBarUser>
                <cb-topbar-user firstname="first name"></cb-topbar-user>
                </ng-template> 
            </cb-top-bar>
         `,
    });
export const TopBar = Template.bind({});TopBar.args = { 
    actions: [
        {
        id: '1',
        icon: 'dashboard',
        label: 'components',
        onClick: () => console.log('hello components'),
        },
        {
        id: '2',
        icon: 'settings',
        label: 'users',
        onClick: () => console.log('hello users'),
        }, 
], 
position: 'relative',
};