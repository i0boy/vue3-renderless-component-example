<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <div class="card">
        <h1 class="text-2xl font-bold mb-6">Your Contacts</h1>

        <sortable-list
          v-model="contacts"
          v-slot="{ setRef }: { setRef: (el: Element) => void }"
        >
          <div
            class="contact-list"
            :ref="(el) =>{ el && setRef(el as Element)}"
          >
            <sortable-item
              v-for="contact in contacts"
              :key="contact.id"
              v-slot="{ setRef }: { setRef: (el: Element) => void }"
            >
              <div
                class="contact-list-item"
                :ref="(el) =>{ el && setRef(el as Element)}"
              >
                <div class="contact-list-contact">
                  <img
                    :src="contact.avatar"
                    class="contact-list-avatar"
                    alt=""
                  />
                  <div>
                    <div class="contact-list-name">
                      {{ contact.name }}
                    </div>
                    <div class="contact-list-email">
                      {{ contact.email }}
                    </div>
                  </div>
                </div>
                <sortable-handle
                  v-slot="{ setRef }: { setRef: (el: Element) => void }"
                >
                  <svg
                    :ref="(el) =>{ el && setRef(el as Element)}"
                    class="contact-list-handle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M14 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 4h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm6 6h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1zm-6 0h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1z"
                    />
                  </svg>
                </sortable-handle>
              </div>
            </sortable-item>
          </div>
        </sortable-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import SortableList from "./components/SortableList.vue";
import SortableItem from "./components/SortableItem.vue";
import SortableHandle from "./components/SortableHandle.vue";
import { data } from "./fake/contacts";
import { defineComponent, reactive, ref, VNodeRef } from "vue";

export default defineComponent({
  components: {
    SortableList,
    SortableItem,
    SortableHandle,
  },
  setup() {
    const contacts = ref(data);
    return { contacts };
  },
});
</script>

<style src="./assets/app.css" />
