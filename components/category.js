import { useEffect } from "../libs";

const Category = ({ categories, onClick }) => {
  useEffect(() => {
    const btns = document.querySelectorAll(".btn");
    for (const btn of btns) {
      btn.addEventListener("click", function () {
        const id = btn.dataset.id;
        onClick(id);
      });
    }
  });
  return `
    <div>${categories.map((category) => {
      return `<button data-id="${category.id}" class="btn text-white fs-3">${category.name}</button>`;
    }).join("")}</div>
  `;
};

export default Category;

// const categories = [];

// function onHandleClick(id) {
//   console.log(id) // ????? 20
// }

// function Category({ categories, onClick } ) {
//   // categories
//   onClick(20);
// };

// Category({categories, onClick: onHandleClick})
