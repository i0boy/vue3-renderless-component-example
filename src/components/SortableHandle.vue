<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useContext } from "./useContext";
import { useSlotRef } from "./useSlotRef";

export default defineComponent({
  setup(props, ctx) {
    const context = useContext();
    const [slotRef, setRef] = useSlotRef();

    onMounted(() => {
      slotRef?.value?.classList.add(context.sortableListHandleClass);
    });
    return { setRef  };
  },
});
</script>

<template>
  <slot :set-ref="setRef" />
</template>
