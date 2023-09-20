// questa parte si trova al minuto 1:06 della lezione 51

import { reactive } from "vue";

// qui dentro mettimao tutti i data globali
export const store = reactive({
  siteSections: [
    { index: "Home", active: true, icon: false },
    { index: "Shop", active: false, icon: false },
    { index: "About", active: false, icon: false },
    { index: "Gallery", active: false, icon: false },
    { index: "Location", active: false, icon: false },
    { index: "Journal", active: false, icon: false },
    { index: "Contact", active: false, icon: false },
    { index: "My Account", active: false, icon: false },
    {
      index: "fa-solid fa-cart-shopping",
      active: false,
      icon: true,
    },
  ],
});
