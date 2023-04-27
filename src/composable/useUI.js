import { useStore } from "vuex";
import { computed } from "vue";
const useUI = () => {
  const store = useStore();
  /* return {
    //SIDE MENU OPTIONS
    SideMenuOpen: computed(() => store.getters["UI/isSideMenuOpen"]),
    toggleSideMenu() {
      store.commit("UI/toggleSideMenu");
    },
  }; */

  return {
    //SIDE MENU OPTIONS
    SideMenuOpen: computed({
      get() {
        return store.getters["UI/isSideMenuOpen"];
      },
      set(val) {
        console.log(val);
        store.commit("UI/toggleSideMenu");
      },
    }),
    toggleSideMenu() {
      store.commit("UI/toggleSideMenu");
    },
  };
};
export default useUI;
