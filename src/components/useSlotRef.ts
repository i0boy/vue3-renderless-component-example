import { ref } from "vue";

export const useSlotRef = <T extends HTMLElement = HTMLElement>() => {
  const slotRef = ref<T>();
  const setSlotRef = (el: T) => {
    slotRef.value = el;
  };
  return [slotRef, setSlotRef] as const;
};
