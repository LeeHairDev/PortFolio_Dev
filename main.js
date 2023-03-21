import "./style.css";
// lấy dữ liệu từ bên file contact export  ra
// import { arrContact } from "./page/contact-page";  // Đây là kiểu lấy dữ liệu của export thường 
import Homepage from "./page/home-page"; // Đây là kiểu lấy dữ liệu của export default
import Categorypage from "./page/category-page";
import Projectpage from "./page/project-page";
import notFoundPage from "./page/not-found";
import projectDetailPage from "./page/project-detail-page";
import projectAdmin from "./page/admin/project";
import AdminProjectAddPage from "./page/admin/project-add";
import AdminProjectUpdatePage from "./page/admin/project-update";
import login from "./page/admin/login";
import { router, render } from "./libs";


let app = document.querySelector("#app");
// Nhảy trang không bị load lại

router.on({
  "/": () => render(Homepage, app),
  "/category": () => render(Categorypage, app),
  "/project": () => render(Projectpage, app),
  "/project/:id": (params) => render(() => projectDetailPage(params), app),
  "/admin/login": () => render(login, app),
  "/admin/projects": () => render(projectAdmin, app),
  "/admin/projects/add": () => render(AdminProjectAddPage, app),
  "/admin/projects/:id/edit": ({ data }) =>
    render(() => AdminProjectUpdatePage(data), app),
});
router.notFound(() => {
  render(notFoundPage, app);
});
router.resolve();
