import { navbarAdmin } from "./navbar";
import logo from "./logo";
const menuAdmin = () => {
  return `
  <div class="menuAdmin ">
    ${logo()}
    <ul class="nav-left">
    ${navbarAdmin()}
    </ul>
    </div>
  `;
}

export default menuAdmin
