
import { Meta, Story } from '@storybook/angular';
import { SubmitOkButtonComponent } from './submit-ok-button.component';
import { action } from '@storybook/addon-actions';


export default {
  title: 'SubmitOkButton',
  component: SubmitOkButtonComponent,
} as Meta;

export const actionsData = {
    onSubmit: action('onSubmit'),
};

//👇 We create a “template” of how args map to rendering
const Template: Story<SubmitOkButtonComponent> = (args) => ({
    component: SubmitOkButtonComponent,
    props: {
        ...args,
        onSubmit:actionsData.onSubmit,
      },
});
  
  //👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = { 
        textLabel:"Button",
        primaryColor:"#000",
        secondaryColor:"#fff",
        enabled:true
};