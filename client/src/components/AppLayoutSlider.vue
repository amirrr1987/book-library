

<template>
  <LayoutSider class="overflow-y-auto h-screen shadow-lg" collapsible theme="dark">
    <div class="h-16 flex justify-center items-center text-primary">Nahal</div>
    <Menu mode="inline" @select="handleMenuSelect">
      <MenuItem  v-for="nav in navList" :key="nav.key">
        {{ nav.title }}
        <template #icon>
          <Icon icon="tabler:home" />
        </template>
      </MenuItem>


      <MenuDivider />
    </Menu>
  </LayoutSider>

</template>
<script setup lang="ts">

import {Icon} from "@iconify/vue";
import {LayoutSider, Menu, MenuDivider, MenuItem} from "ant-design-vue";
import {reactive} from "vue";

const navList = reactive([
  { key: 'TheHome', title: 'TheHome', closable: false },
  { key: 'TheUsers', title: 'TheUsers', closable: true },
  { key: 'TheBooks', title: 'TheBooks', closable: true },
  { key: 'TheAuthors', title: 'TheAuthors', closable: true }
])


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
</script>
<style scoped>

</style>
