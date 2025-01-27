<template>
  <LayoutContent class="py-0 px-0">
    <Tabs
      v-model:activeKey="activeKey"
      type="editable-card"
      hide-add
      @edit="handleTabEdit"
      animated
    >
      <TabPane
        v-for="element in navList"
        :key="element.key"
        :tab="element.title"
        :closable="element.closable"
      />
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
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { LayoutContent, TabPane, Tabs } from 'ant-design-vue'
</script>
<style scoped></style>
