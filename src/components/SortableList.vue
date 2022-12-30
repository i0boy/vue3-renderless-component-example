<template>
  <slot :setRef="setRef" />
</template>

<script lang="ts">
import { Sortable } from "@shopify/draggable";
import { defineComponent, onMounted, PropType, provide } from "vue";
import { injectionKey } from "./useContext";
import { useSlotRef } from "./useSlotRef";
type SortableItem = { id: number };

function move(items: SortableItem[], oldIndex: number, newIndex: number) {
  const itemRemovedArray = [
    ...items.slice(0, oldIndex),
    ...items.slice(oldIndex + 1, items.length),
  ];

  return [
    ...itemRemovedArray.slice(0, newIndex),
    items[oldIndex],
    ...itemRemovedArray.slice(newIndex, itemRemovedArray.length),
  ];
}

export default defineComponent({
  props: {
    modelValue: {
      required: true,
      type: Array as PropType<SortableItem[]>,
    },
    itemClass: {
      default: "sortable-list-item",
    },
    handleClass: {
      default: "sortable-list-handle",
    },
  },
  emits: ["update:modelValue"],
  setup(props, ctx) {
    const [slotRef, setRef] = useSlotRef();
    provide(injectionKey, {
      sortableListItemClass: props.itemClass,
      sortableListHandleClass: props.handleClass,
    });
    onMounted(() => {
      if (slotRef?.value)
        new Sortable(slotRef.value, {
          draggable: `.${props.itemClass}`,
          handle: `.${props.handleClass}`,
          mirror: {
            constrainDimensions: true,
          },
        }).on(
          "sortable:stop",
          (evt: { oldIndex: number; newIndex: number }) => {
            ctx.emit(
              "update:modelValue",
              move(props.modelValue, evt?.oldIndex, evt?.newIndex)
            );
          }
        );
    });
    return { setRef };
  },
});
</script>
