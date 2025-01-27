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
      <AppLayoutSlider />

      <!-- Main Content -->
      <Layout>
        <LayoutHeader class="!pe-4 !ps-0 flex justify-between items-center">
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

        <LayoutContent class="py-0 px-0">


          <Tabs
            v-model:activeKey="activeKey"
            type="editable-card"
            hide-add
            @edit="handleTabEdit"
            animated
          >
            <TabPane v-for="element in navList" :key="element.key" :tab="element.title" :closable="element.closable" />

          </Tabs>

          <div>
            <div class="overflow-y-auto p-4">
              <router-view v-slot="{ Component }">
                <transition name="fade">
                  <component :is="Component" :key="activeKey" />
                </transition>
              </router-view>
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
import {reactive, ref, watch} from 'vue'
import { RouterView, useRouter, useRoute } from 'vue-router'
import draggable from 'vuedraggable'
import AppLayoutSlider from "@/components/AppLayoutSlider.vue";

const appSettingStore = useAppSettingStore()
const router = useRouter()
const route = useRoute()
const open = ref<boolean>(true)



// State for managing tabs
const tabs = ref<Array<{ key: string; title: string; closable: boolean }>>([
  { key: 'TheHome', title: 'Home', closable: false },
])
const activeKey = ref<string>('TheHome')

// Add a new tab when a menu item is selected


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

// Handle drag end event
const onDragEnd = () => {
  // You can add any additional logic here if needed
}
</script>

<style>
.ant-tabs-top > .ant-tabs-nav {
  margin: 0 0 0px 0;
}

/* Transition styles */
.flip-list-move {
  transition: transform 0.3s ease;
}
</style>
