import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { ComponentsSizesEnum, DirectionsEnum, LanguagesEnum, LocaleMapping } from '@/enums'
import type { ThemeConfig } from 'ant-design-vue/es/config-provider/context'
import {ref} from "vue";
export const useAppLayoutStore = defineStore('App Layout', () => {

  const slider = ref([])

  return { }
})
