import { defineConfig } from 'unocss';
import { presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  // Add your custom rules here
  rules: [
    // example: ['custom-rule', { color: 'red' }]
  ],
  // Add your custom shortcuts here
  shortcuts: {
    // example: 'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md'
  },
});
