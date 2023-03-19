export { menu };
import "./style.css";

const menu = function ({ category, image }, items) {
  let itemList = "";
  items.forEach((item) => {
    itemList += `
    <li class="md:w-[242px] flex-grow">
    <h3 class="text-xl font-Jost font-medium text-dark-grey mb-1 tracking-wide">${item.name}</h3>
    <p class="font-Jost font-light text-base text-dark-grey tracking-wide">${item.description}</p>
    </li>
    `;
  });
  return `
      <div class="relative text-center">
          <h2 class="text-8xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-LobsterTwo text-center text-pale-yellow absolute z-30">${category}</h2>
          <img src=${image} alt="pizza-image" class="h-[272px] object-cover w-full brightness-90"/>
      </div>
      <ul class="list-items flex md:flex-row flex-col md:flex-nowrap flex-wrap justify-between gap-14 mt-12 mx-14 pb-16">${itemList}</ul>
      `;
};
