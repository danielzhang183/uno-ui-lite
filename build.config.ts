import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  declaration: true,
  entries: [
    { input: 'src/module', format: 'esm' },
    { input: 'src/unocss', format: 'esm' },
    { input: 'src/components/', outDir: 'dist/components' },
    { input: 'src/composables/', outDir: 'dist/composables', format: 'esm' },
    { input: 'src/assets/', outDir: 'dist/assets' },
  ],
  externals: [
    'vite',
    'unocss.mjs',
    'unocss',
    '@unocss/core',
    '@unocss/preset-mini/utils',
    '@unocss/preset-mini',
    '@unocss/preset-mini/rules',
    '@unocss/extractor-arbitrary-variants',
  ],
  clean: true,
})
