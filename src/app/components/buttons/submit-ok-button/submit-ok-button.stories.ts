
import { Meta, Story } from '@storybook/angular';
import { SubmitOkButtonComponent } from './submit-ok-button.component';
import { action } from '@storybook/addon-actions';


export default {
  title: 'SubmitOkButton',
  component: SubmitOkButtonComponent,
} as Meta;

const actionsData = {
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
export const Classic = Template.bind({});
Classic.args = { 
        textLabel:"Button",
        primaryColor:"#833ab4",
        secondaryColor:"#39d56b",
        buttonType: 'classic',
        enabled:true,       
};

export const LeftButton = Template.bind({});
LeftButton.args = { 
        textLabel:"Button",
        primaryColor:"#833ab4",
        secondaryColor:"#39d56b",
        buttonType: 'left',
        enabled:true,       
};

export const TopButton = Template.bind({});
TopButton.args = { 
        textLabel:"Button",
        primaryColor:"#833ab4",
        secondaryColor:"#39d56b",
        buttonType: 'top',
        enabled:true,       
};

export const CircleButton = Template.bind({});
CircleButton.args = { 
        textLabel:"Button",
        primaryColor:"#833ab4",
        secondaryColor:"#39d56b",
        buttonType: 'circle',
        enabled:true,       
};

export const Disabled = Template.bind({});
Disabled.args = { 
        textLabel:"Button",
        primaryColor:"#833ab4",
        secondaryColor:"#39d56b",
        buttonType: 'left',
        enabled:false,       
};

