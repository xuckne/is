# Библиотека компонентов (IS)

Vue 3 + TypeScript библиотека с базовыми UI-компонентами: кнопка, инпут, поле-обёртка и селект. Готова к сборке в npm-пакет и к локальной разработке в Storybook.

## Стек
- Vite (бандл для библиотеки)
- Storybook 9 (storybook dev/build)
- Vue 3 (script setup)
- TypeScript
- SCSS

## Быстрый старт
```bash
npm install
npm run dev   # storybook на http://localhost:6006
```

Полезные команды:
- `npm run build` — сборка библиотеки + статики Storybook.
- `npm run lint` — ESLint + Stylelint.
- `npm run ts` — проверка типов.

## Структура
- `src/components/` — компоненты и сторисы:
  - `UiButton` — кнопка с layout `primary`/`secondary`, проп `isDisabled`, тип `submit`/`button`.
  - `UiInput` — текстовое поле (`modelValue`, `placeholder`, `type`, `isDisabled`), эмит `update:modelValue`.
  - `UiField` — обёртка с подписью `label` и слотом под `UiInput`/`UiSelect`.
  - `UiSelect` — селект (`modelValue`, `options: string[]`, `isDisabled`), эмит `update:modelValue`.
- `src/styles/colors.scss` — общие CSS-переменные (primary, gray шкала, success/error).
- `src/styles/main.scss` — базовые стили Storybook-превью.
- `src/docs/Colors.mdx` — документация по цветам для Storybook.
- `src/helpers/html.ts` — утилита шаблонов для сторисов.

## Поведение и стили
- Все пропсы/эмиты типизированы через `IProps` и `IEmit`.
- Состояния и варианты прокидываются через data-атрибуты (`data-layout`, `data-disabled`) для стилизации.
- Кнопка имеет градиентный primary и спокойный secondary; состояния hover/active/disabled заданы в SCSS.
- Инпут и селект поддерживают disabled и фокус-обводку; селект отрисовывает стрелку через фоновые слои.
- UiField отвечает только за подпись/отступы; контент передается через слот.

## Использование в приложении
```ts
import { UiButton, UiField, UiInput, UiSelect } from 'is-components-new';
```
Компоненты опираются на переменные из `colors.scss` — подключите их в своих глобальных стилях или скопируйте значения при интеграции.

### Быстрый пример
```vue
<template>
  <UiField label="E-mail">
    <UiInput v-model="email" type="email" placeholder="user@example.com" />
  </UiField>

  <UiField label="Опция">
    <UiSelect v-model="option" :options="['Опция 1', 'Опция 2']" />
  </UiField>

  <UiButton :is-disabled="!email">Отправить</UiButton>
  <UiButton layout="secondary" type="button">Отмена</UiButton>
</template>
```

## Разработка и сборка
- `npm run dev` — Storybook для локальной разработки компонентов.
- `npm run build` — собирает библиотеку (vite) и статическую версию Storybook (storybook-static).
- Артефакты библиотеки лежат в `dist/`; структура сборки повторяет названия компонентов (`UiButton/UiButton.js`, `UiButton/UiButton.css`, d.ts).

## Стилизация
- Цвета задаются через переменные: `--color-primary`, `--color-primary-dark`, шкала серого `--color-gray-50..600`, `--color-success`, `--color-error`.
- Компоненты используют data-атрибуты (`data-layout`, `data-disabled`) — можно переопределять стили на их основе.
- Для единообразия подключите `src/styles/colors.scss` в своё приложение или скопируйте значения переменных.

## Замечания
- Публикация в npm не выполнялась — текущая версия готова к локальной установке (`npm install ../is`).
- Storybook предупреждает про `import.meta` в `.storybook/main.ts` при сборке в CJS — это штатно, на работу статики не влияет.***
