export { loadPage };
import { menu } from "./menu.js";
import "./style.css";
import pizzaImage from "./saundarya-srinivasan-60nzTP7_hMQ-unsplash.jpg";
import pastaImage from "./paish-zaini--9UJTnXpUXM-unsplash.jpg";
import dessertImage from "./diliara-garifullina-sXlpMo4eTv4-unsplash.jpg";
import aboutImage from "./cathal-mac-an-bheatha-CJAKsppS2co-unsplash.jpg";
import orderImage from "./girl-with-red-hat-aTEX9xTyevY-unsplash.jpg";
import servicesImage from "./pablo-lancaster-jones-TRvgY5ri7u4-unsplash.jpg";

const contentElement = document.querySelector("#content");
const menuTab = document.getElementById("menu");
const aboutTab = document.getElementById("about");
const orderTab = document.getElementById("order");

const menuTabActive =
  "border-2 border-b-0 border-pale-yellow bg-pale-yellow rounded-t-2xl w-44 pb-1 pt-2 text-dark-grey";

const menuTabInactive =
  "border-2 border-b-0 border-pale-yellow rounded-t-2xl w-44 pb-1 pt-2";

menuTab.addEventListener("click", (event) => {
  event.preventDefault();
  orderTab.classList = menuTabInactive;
  aboutTab.classList = menuTabInactive;
  menuTab.classList = menuTabActive;
  loadMenuPage();
});

aboutTab.addEventListener("click", (event) => {
  event.preventDefault();
  orderTab.classList = menuTabInactive;
  menuTab.classList = menuTabInactive;
  aboutTab.classList = menuTabActive;
  loadAboutPage();
});

orderTab.addEventListener("click", (event) => {
  event.preventDefault();
  aboutTab.classList = menuTabInactive;
  menuTab.classList = menuTabInactive;
  orderTab.classList = menuTabActive;
  loadOrderPage();
});

const loadPage = function () {
  loadMenuPage();
};

const loadMenuPage = function () {
  contentElement.innerHTML = "";
  const section01 = menu(
    {
      category: "Pizza",
      image: pizzaImage,
    },
    [
      {
        name: "Pizza Bianca",
        description:
          "Neapolitan style crust with a light garlic-infused white sauce. Topped with sun dried tomatoes, ricotta cheese, caramelized onions, and wilted spinach. ",
      },
      {
        name: "Pizza Classico",
        description:
          "Our take on this classic pizza starts with a deeply complex tomato sauce, topped with house-made peperoni and mozzarella di Bufala, finished with shaved parmesan.",
      },
      {
        name: "Pizza Ortaggio",
        description:
          "A vegetarian pizza made to impress. Hearty grilled eggplant on a red & white sauce base, topped with grilled portobello mushrooms and mozzarella di Bufala.",
      },
    ]
  );
  const section02 = menu(
    {
      category: "Pasta",
      image: pastaImage,
    },
    [
      {
        name: "Ragù Bolognese",
        description:
          "A hearty meat and vegetable sauce slow simmered for hours as per tradition in Bologna. Served over house made tagliatelle, produced from locally sourced eggs.",
      },
      {
        name: "Fettuccine Alfredo",
        description:
          "A silky, creamy white sauce made with locally source butter and the finest parmigiano reggiano from italy. Served over our house made fettucine pasta.",
      },
      {
        name: "Lasagna Alla Norma",
        description:
          "A vegetarian lasagna that makes no compromises. Made with layers of roasted eggplant, ricotta cheese, portobello mushrooms, tomato sauce and fresh basil.",
      },
    ]
  );
  const section03 = menu(
    {
      category: "Dessert",
      image: dessertImage,
    },
    [
      {
        name: "Tiramisu",
        description:
          "The classic coffee infused dessert made with mascarpone cheese, whipped eggs, sugar, cocoa powder, and ladyfinger pastry soaked in locally roasted espresso.",
      },
      {
        name: "Gelato",
        description:
          "A luxuriously smooth frozen confection that is rich but not overwhelming. Available in coffee, chocolate, vanilla, pistachio, and strawberry flavours.",
      },
      {
        name: "Bomboloni",
        description:
          "A deep fried pastry filled with raspberry jam, or chocolate ganache and topped with cinnamon, star anise, and cardamom spiced sugar.",
      },
    ]
  );
  contentElement.innerHTML = section01 + section02 + section03;
};

const loadAboutPage = function () {
  contentElement.innerHTML = "";
  const section01 = menu(
    {
      category: "About Us",
      image: aboutImage,
    },
    [
      {
        name: "Delicious food, made simply.",
        description:
          "Trattoria Felicità was founded on a passion for simple, authentic foods, made with quality ingredients sourced from local producers. We're not trying to redefine the culinary world, or invent a whole new category of culinary fusion, we just want to sell delicious eats at affordable prices prepared with love and care.",
      },
    ]
  );
  const section02 = menu(
    {
      category: "Catering",
      image: servicesImage,
    },
    [
      {
        name: "Full service catering",
        description:
          "We cater events large and small, from casual brunches to corporate events and weddings, we want to help make your next outing unforgettable.",
      },
    ]
  );

  contentElement.innerHTML = section01 + section02;
};

const loadOrderPage = function () {
  contentElement.innerHTML = "";
  const section01 = menu(
    {
      category: "Order Online",
      image: orderImage,
    },
    [
      {
        name: "Find us on your favorite food delivery services:",
        description: "",
      },
      {
        name: "UberEats",
        description: `<a href="#order" class="underline">Order Now</a>`,
      },
      {
        name: "Doordash",
        description: `<a href="#order" class="underline">Order Now</a>`,
      },
      {
        name: "Grubhub",
        description: `<a href="#order" class="underline">Order Now</a>`,
      },
    ]
  );

  contentElement.innerHTML = section01;
};
