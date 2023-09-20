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

  products: [
    {
      id: "1",
      title: "blackberry stuffed bread",
      priceA: 12.32,
      priceB: 12.32,
      img: "/images/product/blackberry-stuffed-bread.jpg",
    },
    {
      id: "2",
      title: "strawberry jam cookies",
      priceA: 15.23,
      priceB: 12.32,
      img: "/images/product/strawberry-jam-cookies.jpg",
    },
    {
      id: "3",
      title: "cherry cake",
      priceA: 43.13,
      priceB: 78.65,
      img: "/images/product/cherry-cake.jpg",
    },
    {
      id: "4",
      title: "choco chip cookies",
      priceA: 11,
      priceB: 22,
      img: "/images/product/choco-chip-cookies.jpg",
    },
    {
      id: "5",
      title: "cookies with ice-cream",
      priceA: 42.5,
      priceB: 89.3,
      img: "/images/product/cookies-with-ice-cream.jpg",
    },
    {
      id: "6",
      title: "glazed pancake with lemon",
      priceA: 16.12,
      priceB: 76.33,
      img: "/images/product/glazed-pancake-with-lemon.jpg",
    },
    {
      id: "7",
      title: "home bread",
      priceA: 1.2,
      priceB: 3.4,
      img: "/images/product/home-bread.jpg",
    },
    {
      id: "8",
      title: "perfect macarons",
      priceA: 123.45,
      priceB: 678.9,
      img: "/images/product/perfect-macarons.jpg",
    },
    {
      id: "9",
      title: "premium bread",
      priceA: 0.44,
      priceB: 2.34,
      img: "/images/product/premium-bread.jpg",
    },
    {
      id: "10",
      title: "small cupcake",
      priceA: 33,
      priceB: 33.5,
      img: "/images/product/small-cupcake.jpg",
    },
    {
      id: "11",
      title: "strawberry donut",
      priceA: 11,
      priceB: 66,
      img: "/images/product/strawberry-donut.jpg",
    },
  ],
});
