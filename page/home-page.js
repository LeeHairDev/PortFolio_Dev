import Header from "../components/header";
import Categorypage from "./category-page";
import Projectpage from "./project-page";
import notFoundPage from "./not-found";
import projectDetailPage from "./project-detail-page";
import aboutPage from "./aboutPage";
import contact from "./contact";
import footer from "../components/footer";
import banner from "../components/banner";
const Homepage = () => {
  return `
    ${Header()}
    ${banner()}
     ${aboutPage()}
     ${Projectpage()}
    ${contact()}
    ${footer()}
    `;
};

export default Homepage;