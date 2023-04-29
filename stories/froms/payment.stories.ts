import { PaymentComponent ,PaymentModule} from "@abdos/ortie/payment";
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from "@storybook/angular";
export default {
    title: 'Forms/payment',
    component: PaymentComponent,
    decorators: [
        moduleMetadata({
          declarations: [],
          imports: [PaymentModule],
        }),
      ], 
    argTypes: { },
  } as Meta;

  const Template: Story<PaymentComponent> = (args: PaymentComponent) => ({
    props: args,
    template:'<ort-payment-form> payment service integration </ort-payment-form>'
  });

  export const PaymentForm = Template.bind({});