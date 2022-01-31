import { defineConfig, presetUno } from 'unocss'
import { presetTypography } from 'unocss-preset-typography'

export default defineConfig({
    presets: [
        presetUno(),
        presetTypography(),
    ],
    shortcuts: []
})