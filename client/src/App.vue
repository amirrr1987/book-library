<template>
  <ConfigProvider
    :theme="appSettingStore.themeStorage"
    :componentSize="appSettingStore.sizeStorage"
    :locale="appSettingStore.locale"
    :direction="appSettingStore.directionStorage"
  >
    <AppSettingDrawer v-model:open="open" @ok="open = false" @close="open = false" />

    <Layout class="h-screen">
      <!-- Sidebar -->
      <LayoutSider class="overflow-y-auto h-screen shadow-lg" collapsible theme="dark">
        <div class="h-16 flex justify-center items-center text-primary">Nahal</div>
        <Menu mode="inline" @select="handleMenuSelect">
          <MenuItem key="TheHome">
            Home
            <template #icon>
              <Icon icon="tabler:home" />
            </template>
          </MenuItem>

          <MenuItem key="TheAbout">
            About
            <template #icon>
              <Icon icon="tabler:info-circle" />
            </template>
          </MenuItem>
          <MenuDivider />
        </Menu>
      </LayoutSider>

      <!-- Main Content -->
      <Layout>
        <LayoutHeader class="!px-4 flex justify-between items-center">
          <div>
            <Button type="primary" @click="open = true">
              <Icon icon="icon-park-outline:setting" />
            </Button>
          </div>

          <div>
            <Dropdown :trigger="['click']">
              <Button type="link" class="ant-dropdown-link" @click.prevent> Click me </Button>
              <template #overlay>
                <Menu>
                  <MenuItem key="0">
                    <a href="http://www.alipay.com/">1st menu item</a>
                  </MenuItem>
                  <MenuItem key="1">
                    <a href="http://www.taobao.com/">2nd menu item</a>
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem key="3">3rd menu item</MenuItem>
                </Menu>
              </template>
            </Dropdown>

            <Button type="primary" @click="open = true">
              <Icon icon="icon-park-outline:setting" />
            </Button>
          </div>
        </LayoutHeader>

        <LayoutContent class="py-0 px-8">
          <!-- Tabs -->
          <Tabs v-model:activeKey="activeKey" type="editable-card" hide-add @edit="handleTabEdit">
            <TabPane v-for="tab in tabs" :key="tab.key" :tab="tab.title" :closable="tab.closable" />
          </Tabs>

          <div>
            <div class="overflow-y-auto">
              <Transition name="fade">
                <RouterView :key="activeKey" />
              </Transition>
            </div>
          </div>
        </LayoutContent>
      </Layout>
    </Layout>
  </ConfigProvider>
</template>

<script setup lang="ts">
import {
  ConfigProvider,
  Button,
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutSider,
  Menu,
  MenuItem,
  MenuDivider,
  Dropdown,
  Tabs,
  TabPane,
} from 'ant-design-vue/es'
import { Icon } from '@iconify/vue'
import { useAppSettingStore } from '@/stores/appSetting.store.ts'
import AppSettingDrawer from './components/AppSettingDrawer.vue'
import { ref, watch } from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'

const appSettingStore = useAppSettingStore()
const router = useRouter()
const route = useRoute()
const open = ref<boolean>(true)

// State for managing tabs
const tabs = ref<Array<{ key: string; title: string; closable: boolean }>>([])
const activeKey = ref<string>('')

// Add a new tab when a menu item is selected
const handleMenuSelect = ({ key }: { key: string }) => {
  const tabExists = tabs.value.some((tab) => tab.key === key)
  if (!tabExists) {
    tabs.value.push({
      key,
      title: key,
      closable: true,
    })
  }
  activeKey.value = key
  router.push({ name: key }) // Navigate to the corresponding route
}

// Handle tab edit (remove)
const handleTabEdit = (targetKey: string, action: string) => {
  if (action === 'remove') {
    tabs.value = tabs.value.filter((tab) => tab.key !== targetKey)
    if (activeKey.value === targetKey) {
      activeKey.value = tabs.value[0]?.key || ''
      if (activeKey.value) {
        router.push({ name: activeKey.value }) // Navigate to the first remaining tab
      } else {
        router.push('/') // Navigate to home if no tabs are left
      }
    }
  }
}

// Sync activeKey with the current route
watch(
  () => route.name,
  (newRouteName) => {
    console.log('🚀 ~ newRouteName:', newRouteName)
    if (newRouteName && !tabs.value.some((tab) => tab.key === newRouteName)) {
      tabs.value.push({
        key: newRouteName as string,
        title: newRouteName as string, // Set tab title based on route name
        closable: true,
      })
    }
    activeKey.value = newRouteName as string
  },
  { immediate: true },
)

// Watch for activeKey changes and update the route
watch(activeKey, (newKey) => {
  if (newKey) {
    router.push({ name: newKey })
  }
})
</script>

<style>
.ant-tabs-top > .ant-tabs-nav {
  margin: 0 0 0px 0;
}
</style>
