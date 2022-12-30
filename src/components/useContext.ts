import { inject, InjectionKey } from "vue";
export interface Context {
  sortableListItemClass: string;
  sortableListHandleClass: string;
}
export const injectionKey = Symbol() as InjectionKey<Context>;

export const useContext = () => {
  const context = inject(injectionKey);
  if (!context) {
    throw new Error("컨텍스트 데이터 없음!");
  }
  return context;
};
