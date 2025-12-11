import { Meta, StoryObj } from '@storybook/vue3';

import { UiField, UiInput } from '..';
import { html } from '../../helpers';

type FieldStoryMeta = Meta<typeof UiField & { modelValue: string }>;

const meta: FieldStoryMeta = {
  component: UiField,
  args: {
    label: 'E-mail',
    modelValue: '',
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  render: (args, { updateArgs }) => ({
    components: { UiField, UiInput },
    setup: () => ({ args }),
    methods: {
      handleInput(value: string) {
        updateArgs({ modelValue: value });
      },
    },
    template: html`
      <UiField :label="args.label">
        <UiInput :model-value="args.modelValue" @update:modelValue="handleInput" />
      </UiField>
    `,
  }),
};
