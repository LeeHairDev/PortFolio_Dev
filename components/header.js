import { navbar } from "./navbar";
import logo from "./logo";
const Header = () => {
  // console.log(navbar());
  /*html*/
  return ` 
     <nav class="navbar navbar-expand-lg" id="/#home">
  <div class="container-fluid">
    ${logo()}
    <button class="navbar-toggler btn-menu-sub" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class=""><i class="fa-solid fa-bars"></i></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-around">
        ${navbar()}
      </ul>
      <form class="d-flex" role="search">
           <div class="icon d-flex align-items-center gap-3">
    <a target="_blank" href="https://www.facebook.com/leehairdev.03"><i class="fa-brands fa-facebook"></i></a>
    <a target="_blank" href="#"><i class="fa-brands fa-telegram gap-1"></i></i></a>
    <a href="/admin/login"><i class="fa-regular fa-user"></i></i></a>
  </div>
      </form>
    </div>
  </div>
</nav>


    `;
};
export default Header;
