import { Meta, StoryObj } from '@storybook/vue3';

import { UiInput } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiInput> = {
  component: UiInput,
  args: {
    modelValue: '',
    placeholder: 'Введите текст',
    isDisabled: false,
    type: 'text',
  },
  argTypes: {
    type: { options: ['text', 'email', 'password'], control: { type: 'radio' } },
  },
};

export default meta;

export const Default: StoryObj<typeof UiInput> = {
  render: (args, { updateArgs }) => ({
    components: { UiInput },
    setup: () => ({ args }),
    methods: {
      handleInput(value: string) {
        updateArgs({ modelValue: value });
      },
    },
    template: html`<UiInput v-bind="args" @update:modelValue="handleInput" />`,
  }),
};

export const Disabled: StoryObj<typeof UiInput> = {
  args: { isDisabled: true, modelValue: 'Недоступно' },
};
