import { router, useState, useEffect } from "../libs";
import Header from "../components/header";
import axios from "axios";
import contact from "./contact";
import footer from "../components/footer";

const projectDetailPage = ({ data: { id } }) => {
  const [project, setProject] = useState(null);

  useEffect(() => { 
    axios
      .get(`https://6409c607d16b1f3ed6dc6e4e.mockapi.io/Api_products/${id}`)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error(error);
        router.navigate("/#myproject");
      });
  }, [id]);

  if (!project) {
    return null;
  }

  return ` 
     ${Header()}

    <div class="box-detail-project">
        <div class="grid-top-detail-2 container d-flex justify-content-between">
        <div class="text-name-detail">
                <div class="name-project-detail">
                <h1 class="text-white">DỰ ÁN TỐT NGHIỆP</h1>
            </div>
            <div class="text">
                <div class="time">
                    <h3>Từ 20/02-23/02</h3>
                </div>
                <div class="language">
                    <h5>Dự án này được viết bằng Html, Css, React Js, Bootstrap, Php</h5>
                </div>
                <a href="${
                  project.git
                }" target="_blank"><button class="btn button-detail button-86">Xem Thêm</button></a>
            </div>
        </div>
        <div class="image-detail">
            <img src="${project.link}" alt="">
        </div>
        </div>
        <div class="content-detail container">
            <h1>Giới Thiệu tổng quan về sản phẩm</h1>
            <p>${project.content}</p>
        </div>
    </div>
    ${contact()}
    ${footer()}
     
  `;
};

export default projectDetailPage;
