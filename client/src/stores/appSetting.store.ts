import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { ComponentsSizesEnum, DirectionsEnum, LanguagesEnum, LocaleMapping } from '@/enums'
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
export const useAppSettingStore = defineStore('App setting', () => {
  const themeStorage = useLocalStorage<ThemeConfig>('theme', {
    token: {
      colorPrimary: '#1890ff',
      fontFamily: 'Vazirmatn',
    },
  })
  const directionStorage = useLocalStorage<DirectionsEnum>('direction', DirectionsEnum.LTR)
  const sizeStorage = useLocalStorage<ComponentsSizesEnum>('size', ComponentsSizesEnum.Large)
  const localeStorage = useLocalStorage<LanguagesEnum>('locale', LanguagesEnum.ENGLISH)
  const locale = useLocalStorage('locale', LocaleMapping[localeStorage.value])

  return { themeStorage, localeStorage, directionStorage, sizeStorage, locale }
})
