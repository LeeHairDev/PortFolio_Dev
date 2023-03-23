import Header from "../components/header";
import { projectList } from "../data/data";
import Projects from "../components/projectList";
import Category from "../components/category";
import { useState, useEffect } from "../libs";
const Projectpage = () => {
  const [categories, setCategories] = useState([]);
  const [project, setProjects] = useState([]);
useEffect(() => {
  fetch("https://6409c607d16b1f3ed6dc6e4e.mockapi.io/categories")
    .then((response) => response.json())
    .then((data) => setCategories(data));
}, []);
useEffect(() => {
  fetch("https://6409c607d16b1f3ed6dc6e4e.mockapi.io/Api_products")
    .then((response) => response.json())
    .then((project) => setProjects(project.slice(0, 3)));
}, []);
// console.log(data);
  const onHandleClick = (id) => {
    let url = "https://6409c607d16b1f3ed6dc6e4e.mockapi.io/Api_products";
    if (id > 1) {
      url = `https://6409c607d16b1f3ed6dc6e4e.mockapi.io/categories/${id}?_embed=project`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setProjects(data.project));
    }else{
      fetch(url)
        .then((response) => response.json())
        .then((data) => setProjects(data));
    }
  };

  // console.log(data);
  /*html*/
  return `
      <div class="container" id="myproject">
      <div class="box-portfolio" id="#/project">
          <div class="title-portfolio text-center py-5 text-white">
            <h3 class="text-primary-emphasis">My Project</h3>
          <h2>What I Do for My Clients</h2>
          </div>
          <div class="project-portfolio">
            <div class="filter-project ">
              <ul class="filter d-flex align-items-center justify-content-center gap-5 fw-bold fs-4">
              ${Category({ categories, onClick: onHandleClick })}
              </ul>
            </div>
            <div class="box-grid-project row gap-2 d-flex">
               ${Projects({ project })}
            </div>
          </div>
      </div>
      <div class="git-hub text-center mt-5 mb-5"><a href="https://github.com/LeeHairDev" target="_blank"><button class="btn button-85">View GitHub</button></a></div>
    </div>
    `;
};
export default Projectpage;