import { router, useEffect, useState } from "../../libs";
import menuAdmin from "../../components/menuAdmin";
import axios from "axios";
const AdminProjectUpdatePage = ({id}) => {
  // console.log(id);
  // const projectList = JSON.parse(localStorage.getItem("project"))||[];
  // const currentProject = projectList.find((project)=> project.id == id);
  // console.log(currentProject);
  /*
        B1: call api -> lấy data
        B2: set lại data để đổ dữ liệu ra form
        B3: submit form -> call api (truyền theo id cần update)
        B4: sau khi submit form thành công thì điều hướng về admin/projects
    */
   const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3000/project/${id}`) // call api
      .then((response) => response.json())
      .then((data) => setData(data));
  },[]);
      console.log(data);

  useEffect(() => {
    const form = document.getElementById("form-add");
    // console.log(form);
  var flag = true;
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
        const projectName = document.getElementById("project-name");
        const imageValue = document.getElementById("formFileMultiple");
        const titleValue = document.getElementById("titleValue");
        const gitValue = document.getElementById("gitValue");
      // if (projectName.value == "" && imageValue.value == "" && titleValue.value == "" && gitValue.value == ""){
  if (projectName.value.trim() === "") {
    alert("Vui lòng nhập tên dự án!");
    flag = false;
  }

  // Validate gitValue
  const gitRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9]+$/i;
  if (!gitRegex.test(gitValue.value.trim())) {
    alert("Vui lòng nhập URL đúng định dạng của Github!");
    flag = false;
  }

  // Validate titleValue
  if (titleValue.value.trim() === "") {
    alert("Vui lòng nhập tiêu đề!");
    flag = false;
  }
  if (flag == true){
      // }
     const urls = await uploadFile(imageValue.files);
      // console.log(urls);
      const newProject = {
        id: id,
        name: projectName.value,
        link: urls,
        title: titleValue.value,
        git: gitValue.value,
      };
      fetch(`http://localhost:3000/project/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newProject),
      }).then(() => router.navigate("/admin/projects"));
    }
    });
      const uploadFile = async (files) => {
        if (files) {
          const CLOUD_NAME = "dlu4tkcct";
          const PRESET_NAME = "upload-image";
          const FOLDER_NAME = "ECMA";
          const urls = [];
          const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
          console.log(api);
          const formData = new FormData(); // key: value
          formData.append("upload_preset", PRESET_NAME);
          formData.append("folder", FOLDER_NAME);

          for (const file of files) {
            formData.append("file", file);
            const response = await axios.put(api, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            urls.push(response.data.secure_url);
            return urls;
          }
        }
      };
  });
  return `
  <div class="d-flex gap-5 body-admin">
   ${menuAdmin()}
       <div class="box-image-add w-100 bg-image" style="background-image: url('https://mdbootstrap.com/img/Photos/new-templates/tables/img2.jpg');">
        <div class="container container-add " >
      <h1>EDIT PROJECT</h1>
      <form action="" id="form-add">
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Name</span>
  <input type="text" class="form-control form-control" id="project-name" placeholder="Username...." aria-label="Username" aria-describedby="basic-addon1" value="${
    data.name
  }">
</div>
          <div class="mb-3">
  <div class="mb-3">
  <input class="form-control" type="file" id="formFileMultiple" multiple value="${
    data.link
  }">
</div>
</div>
<div class="input-group">
    <span class="input-group-text" id="basic-addon3">Link GitHub</span>
    <input type="text" class="form-control"  id="gitValue" aria-describedby="basic-addon3" placeholder="Link GitHub...." value="${
      data.git
    }">
  </div>
<div class="input-group mt-3">
    <span class="input-group-text" id="basic-addon3">Title</span>
    <input type="text" class="form-control"  id="titleValue" aria-describedby="basic-addon3" placeholder="Title......." value="${
      data.title
    }">
  </div>
          <div class="form-group  mt-3">
            <button class="btn btn-add button-86">Add Project</button>
          </div>
      </form>
    </div>
    </div>
    </div>
  `;
};

export default AdminProjectUpdatePage;
