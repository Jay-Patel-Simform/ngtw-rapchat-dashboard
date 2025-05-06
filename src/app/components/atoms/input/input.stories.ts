import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
};

export default meta;

type Story = StoryObj<InputComponent>;

export const Input: Story = {
  args: {
    isPassword: false,
    inputType: 'email',
  },
};
