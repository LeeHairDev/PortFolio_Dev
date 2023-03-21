import { router, useEffect } from "../../libs";
import instance from "../../api/config";
import axios from "axios";
import menuAdmin from "../../components/menuAdmin";
const AdminProjectAddPage = () => {
  // kiểm tra localStorage có dữ liệu không?
  // nếu có thì lấy dữ liệu
  // ngược lại thì gán mảng rỗng

  const projectList = JSON.parse(localStorage.getItem("project")) || [];
  // console.log(projectList);

  // chạy sau khi render
  useEffect(() => {
    const form = document.getElementById("form-add");
    //  console.log(form);
    const projectName = document.getElementById("project-name");
    const imageValue = document.getElementById("formFileMultiple");
    const titleValue = document.getElementById("titleValue");
    const gitValue = document.getElementById("gitValue");

    var flag = true;
    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // chặn sự kiện load lại trang
      // Tạo ra project mới lấy dữ liệu từ form
      // console.log(form);
      // Validate projectName

      const projectName = document.getElementById("project-name");
      const imageValue = document.getElementById("formFileMultiple");
      const titleValue = document.getElementById("titleValue");
      const gitValue = document.getElementById("gitValue");

      if (projectName.value.trim() === "") {
        alert("Vui lòng nhập tên dự án!");
        flag = false;
      }

      // Validate imageValue
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/;
      if (!allowedExtensions.exec(imageValue.value)) {
        alert(
          "Chỉ hỗ trợ tải lên file ảnh với định dạng JPG, JPEG, PNG hoặc GIF!"
        );
        flag = false;
      }

      // Validate gitValue
      const gitRegex = /^(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9]+$/;
      if (!gitRegex.test(gitValue.value.trim())) {
        alert("Vui lòng nhập URL đúng định dạng của Github!");
        flag = false;
      }

      // Validate titleValue
      if (titleValue.value.trim() === "") {
        alert("Vui lòng nhập tiêu đề!");
        flag = false;
      }

      // const kq = return true;
      if (flag == true) {
        const urls = await uploadFile(imageValue.files);
        // console.log(urls);
        const newProjects = {
          // id: projectList.length + 1,

          name: projectName.value,
          link: urls,
          title: titleValue.value,
          git: gitValue.value,
        };
        // console.log(imageValue.files);
        fetch("https://6409c607d16b1f3ed6dc6e4e.mockapi.io/Api_products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newProjects), // Lưu vào mảng theo dạng chuỗi
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
          const response = await axios.post(api, formData, {
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
  /*html*/
  return `
  <div class="d-flex gap-5 body-admin">
   ${menuAdmin()}
   <div class="box-image-add w-100 bg-image" style="background-image: url('https://mdbootstrap.com/img/Photos/new-templates/tables/img2.jpg');">
        <div class="container container-add " >
      <h1>ADD PROJECT</h1>
      <form action="" id="form-add">
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Name</span>
  <input type="text" class="form-control form-control" id="project-name" placeholder="Username...." aria-label="Username" aria-describedby="basic-addon1">
</div>
          <div class="mb-3">
  <div class="mb-3">
  <input class="form-control" type="file" id="formFileMultiple" multiple>
</div>
</div>
<div class="input-group">
    <span class="input-group-text" id="basic-addon3">Link GitHub</span>
    <input type="text" class="form-control"  id="gitValue" aria-describedby="basic-addon3" placeholder="Link GitHub....">
  </div>
<div class="input-group mt-3">
    <span class="input-group-text" id="basic-addon3">Title</span>
    <input type="text" class="form-control"  id="titleValue" aria-describedby="basic-addon3" placeholder="Title.......">
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

export default AdminProjectAddPage;
