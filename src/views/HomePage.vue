<template>
  <appHeader></appHeader>
  <div class="flex flex-row">
    <Sidebar></Sidebar>
    <appBookmarkList></appBookmarkList>

  </div>
</template>

<script>
import Sidebar from "@/components/Home/sidebarComp"

export default {
  components : {
    Sidebar
  }
}

</script>