<script lang="ts">
import { onMounted } from "vue";
import { useContext } from "./useContext";
import { useSlotRef } from "./useSlotRef";

export default {
  setup(props, ctx) {
    const [slotRef, setRef] = useSlotRef();
    onMounted(() => {
      const context = useContext();
      slotRef?.value?.classList.add(context.sortableListItemClass);
    });
    return { setRef  };
  },
};
</script>

<template>
  <slot :setRef="setRef" />
</template>
