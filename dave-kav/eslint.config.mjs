import eslint from '@ev/eslint-config';

export default eslint.config({
  languageOptions: {
    parserOptions: {
      project: './tsconfig.json',
    },
  },
});
