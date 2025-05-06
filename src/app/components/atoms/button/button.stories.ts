import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

// Extend  prop for rendering content
type ExtendedArgs = Partial<ButtonComponent> & {
  content: string;
};

const meta: Meta<ExtendedArgs> = {
  title: 'Components/Button',
  component: ButtonComponent,
  // user controls
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
      options: ['default', 'outlined'],
      description: 'Visual style of button',
    },
    content: {
      control: 'text',
      description: 'Inner text of the button',
    },
    buttonSize: {
      control: {
        type: 'select',
      },
      options: ['default', 'sm', 'lg', 'icon', 'xxl'],
      description: 'Options for different button sizes',
    },
  },
};

export default meta;

type Story = StoryObj<ExtendedArgs>;

export const Button: Story = {
  render: args => ({
    props: args,
    template: `<app-button [buttonType]="buttonType" [variant]="variant" [disabled]="disabled" [buttonSize]="buttonSize">{{ content }}</app-button>`,
  }),
  // props
  args: {
    buttonType: 'button',
    variant: 'default',
    disabled: false,
    content: 'Hi, I am content!',
    buttonSize: 'xxl',
  },
};
