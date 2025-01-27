<template>
  <Drawer title="Panel setting" :placement="placement">
    <Form layout="vertical" class="flex flex-col h-full">
      <FormItem label="Overall style settings">
        <RadioGroupImage v-model:value="checkedRadio" :items="items" />
      </FormItem>

      <FormItem label="Theme color">
        <RadioGroupColor
          v-model:value="appSettingStore.themeStorage.token.colorPrimary"
          :colorList="colorList"
        />
      </FormItem>

      <Divider />
      <FormItem label="Language">
        <Select v-model:value="appSettingStore.localeStorage">
          <SelectOption :value="LanguagesEnum.FARSI">FARSI</SelectOption>
          <SelectOption :value="LanguagesEnum.ENGLISH">English</SelectOption>
        </Select>
      </FormItem>

      <FormItem label="Direction">
        <RadioGroup v-model:value="appSettingStore.directionStorage">
          <RadioButton :value="DirectionsEnum.LTR">ltr</RadioButton>
          <RadioButton :value="DirectionsEnum.RTL">rtl</RadioButton>
        </RadioGroup>
      </FormItem>

      <FormItem label="Components size">
        <RadioGroup v-model:value="appSettingStore.sizeStorage">
          <RadioButton :value="ComponentsSizesEnum.Large">Large</RadioButton>
          <RadioButton :value="ComponentsSizesEnum.Middle">Middle</RadioButton>
          <RadioButton :value="ComponentsSizesEnum.Small">Small</RadioButton>
        </RadioGroup>
      </FormItem>

      <Divider class="flex-1" />

      <Divider />
      <div class="flex gap-x-4">
        <Button type="primary" @click="emits('ok', false)"> Save </Button>
        <Button type="ghost" @click="emits('close', false)"> Reset </Button>
      </div>
    </Form>
  </Drawer>
</template>
<script setup lang="ts">
import 'tailwindcss/theme.css'

import { computed, reactive, ref, watch } from 'vue'
import { useAppSettingStore } from '@/stores/appSetting.store.ts'
import {
  Button,
  Select,
  SelectOption,
  Drawer,
  Form,
  FormItem,
  RadioButton,
  RadioGroup,
  Divider,
} from 'ant-design-vue/es'

import RadioGroupColor from '@/components/RadioGroupColor.vue'
import { DirectionsEnum, ComponentsSizesEnum, LocaleMapping, LanguagesEnum } from '@/enums'
import RadioGroupImage from '@/components/RadioGroupImage.vue'
const appSettingStore = useAppSettingStore()

const placement = computed(() => {
  return appSettingStore.directionStorage === DirectionsEnum.LTR ? 'right' : 'left'
})
const emits = defineEmits(['close','ok'])
const colorList = reactive([
  {
    label: 'Blue',
    value: 'blue',
  },

  {
    label: 'Green',
    value: 'green',
  },

  {
    label: 'Purple',
    value: 'purple',
  },

  {
    label: 'sky',
    value: 'sky',
  },

  {
    label: 'slate',
    value: 'slate',
  },

  {
    label: 'primary',
    value: 'primary',
  },
])

const checkedRadio = ref()
const items = reactive([
  {
    label: 'Dark',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg',
    value: 'dark',
  },
  {
    label: 'Light',
    src: 'https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg',
    value: 'light',
  },
  {
    label: 'Night',
    src: 'https://gw.alipayobjects.com/zos/antfincdn/hmKaLQvmY2/LCkqqYNmvBEbokSDscrm.svg',
    value: 'night',
  },
])
</script>
