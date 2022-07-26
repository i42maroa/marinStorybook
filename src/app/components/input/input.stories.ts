
import { Meta, Story } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { InputComponent } from './input.component';


export default {
  title: 'InputComponent',
  component: InputComponent,
} as Meta;

const actionsData = {
    onSubmit: action('onSubmit'),
};

//👇 We create a “template” of how args map to rendering
const Template: Story<InputComponent> = (args) => ({
    component: InputComponent,
    props: {
        ...args,
        onSubmit:actionsData.onSubmit,
      },
});
  
  //👇 Each story then reuses that template
export const TextInput = Template.bind({});
TextInput.args = {
        inputValue:"", 
        inputType:'text',
        enabled:true,     
        maxLength:20,
        label:'Text',
        primaryColor:"#833ab4",
        secondaryColor:"#aaa", 
};

export const NumberInput = Template.bind({});
NumberInput.args = {
        inputValue:"", 
        inputType:'number',
        enabled:true,     
        maxLength:20,
        label:'Number',
        primaryColor:"#833ab4",
        secondaryColor:"#aaa", 
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
        inputValue:"", 
        inputType:'password',
        enabled:true,     
        maxLength:20,
        label:'Password',
        primaryColor:"#833ab4",
        secondaryColor:"#aaa", 
};

export const EmailInput = Template.bind({});
EmailInput.args = {
        inputValue:"", 
        inputType:'email',
        enabled:true,     
        maxLength:20,
        label:'Email',
        primaryColor:"#833ab4",
        secondaryColor:"#aaa", 
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
        inputValue:"", 
        inputType:'text',
        enabled:false,     
        maxLength:20,
        label:'Disabled',
        primaryColor:"#833ab4",
        secondaryColor:"#aaa", 
};

export const PrechargeInput = Template.bind({});
PrechargeInput.args = {
        inputValue:"Antonio", 
        inputType:'text',
        enabled:true,     
        maxLength:20,
        label:'Name',
        primaryColor:"#833ab4",
        secondaryColor:"#aaa", 
};
