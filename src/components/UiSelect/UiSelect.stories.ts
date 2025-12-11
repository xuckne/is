import { Meta, StoryObj } from '@storybook/vue3';

import { UiSelect } from '..';
import { html } from '../../helpers';

const meta: Meta<typeof UiSelect> = {
  component: UiSelect,
  args: {
    modelValue: 'Опция 1',
    isDisabled: false,
    options: ['Опция 1', 'Опция 2', 'Опция 3'],
  },
};

export default meta;

export const Default: StoryObj<typeof UiSelect> = {
  render: (args, { updateArgs }) => ({
    components: { UiSelect },
    setup: () => ({ args }),
    methods: {
      handleChange(value: string) {
        updateArgs({ modelValue: value });
      },
    },
    template: html`
      <UiSelect v-bind="args" @update:modelValue="handleChange" />
    `,
  }),
};

export const Disabled: StoryObj<typeof UiSelect> = {
  args: { isDisabled: true },
};
