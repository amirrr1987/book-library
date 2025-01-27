<template>
    <Tabs
      type="editable-card"
      v-model:activeKey="activeKey"
    >

          <TabPane
            v-for="element in tabs"
            :key="element.key"
            :tab="element.title"
          >
          </TabPane>


    </Tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Tabs, TabPane } from "ant-design-vue/es";

const tabs = ref([
  { key: "1", title: "Tab 1", content: "Content of Tab 1" },
  { key: "2", title: "Tab 2", content: "Content of Tab 2" },
  { key: "3", title: "Tab 3", content: "Content of Tab 3" },
]);

const activeKey = ref<string>("1");

const addTab = () => {
  const newKey = `${tabs.value.length + 1}`;
  tabs.value.push({
    key: newKey,
    title: `Tab ${newKey}`,
    content: `Content of Tab ${newKey}`,
  });
  activeKey.value = newKey;
};

const onEdit = (targetKey: string, action: string) => {
  if (action === "remove") {
    const index = tabs.value.findIndex((tab) => tab.key === targetKey);
    tabs.value.splice(index, 1);
    if (activeKey.value === targetKey) {
      activeKey.value = tabs.value.length ? tabs.value[0].key : "";
    }
  }
};
</script>

<style>
.drag-ghost {
  background: #f0f0f0;
  opacity: 0.7;
}

</style>
