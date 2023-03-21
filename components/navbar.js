import { menuList, menuAmin  } from "../data/data";
const navbar = (menu) => {
  return `${menuList
    .map((menu) => {
      return `
            <li class="nav-item ">
          <a class="nav-link text-white" href="${menu.path}">${menu.name}</a>
        </li>
    `;
    })
    .join("")}
      `;
};

const navbarAdmin = (menu) => {
  return `${menuAmin
    .map((item) => {
      return `
            <li class="nav-item ">
          <a class="nav-link text-white" href="${item.path}">${item.name}</a>
        </li>
    `;
    })
    .join("")}
      `;
};

export { navbarAdmin, navbar };

