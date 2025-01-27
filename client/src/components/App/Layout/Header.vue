

<template>
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


</template>
<script setup lang="ts">

</script>
<style scoped>

</style>
