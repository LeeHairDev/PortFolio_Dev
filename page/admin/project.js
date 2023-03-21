// import { projectList } from "../../data/data";
// console.log(projectList);
import Header from "../../components/header";
import { useEffect, useState } from "../../libs";
import menuAdmin from "../../components/menuAdmin";
const projectAdmin = () => {
  // const [projects, setProjects] = useState(projectList);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
  // const projects = JSON.parse(localStorage.getItem("project"))||[];
  // setProjects(projects);

    fetch("https://6409c607d16b1f3ed6dc6e4e.mockapi.io/Api_products") // call api
      .then((response) => response.json())
      .then((data) => setProjects(data));
      },[]);
  useEffect(() => {
    const btns = document.querySelectorAll(".btn-remove");
    for (let btn of btns) {
      // console.log(btn);
      btn.addEventListener("click", () => {
        const id = btn.dataset.id;
        console.log(id);
        
        // xóa ở sever
        const result = confirm("Bạn có chắc chắn muốn xóa dự án này?");
        if (result === true) {
    const newProjects = projects.filter((project) => project.id != id);
    // Xóa ở local
    setProjects(newProjects);
    console.log(projects);
        fetch(
          `https://6409c607d16b1f3ed6dc6e4e.mockapi.io/Api_products/${id}`,
          {
            method: "DELETE",
          }
        );
  }
      });
    }
  });

  return `
  <div class="d-flex gap-5 body-admin">
  ${menuAdmin()}
<section class="intro">
  <div class="bg-image h-100" style="background-image: url('https://mdbootstrap.com/img/Photos/new-templates/tables/img2.jpg');">
    <div class="mask d-flex align-items-center h-100" style="background-color: rgba(0,0,0,.25);">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="card bg-dark shadow-2-strong">
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table table-dark table-borderless mb-0">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Link Github</th>
                        <th scope="col">Title</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
${projects
  .map(
    (project, index) => `
            <tr>
          <td>${index + 1}</td>
          <td>${project.name}</td>
          <td> <img class="img-table" src="${project.link}" alt=""></td>
          <td>${project.git}</td>
          <td>${project.title}</td>
           <td ><button data-id="${
             project.id
           }" class="btn btn-remove btn-danger mb-2">Remove</button>
           <a href="/admin/projects/${
             project.id
           }/edit"<button class="btn btn-warning mb-2">Edit</button></a></td>
        </tr>
      `
  )
  .join("")}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  `;
};

export default projectAdmin;
