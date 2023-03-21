import { useState, useEffect } from "../../libs";

const login = () => {
      const [projectData, setProjectData] = useState([]);

      useEffect(() => {
        fetch("http://localhost:3000/account")
          .then((response) => response.json())
          .then((data) => setProjectData(data));
      }, []);
       useEffect(()=>{
         const form = document.getElementById("form");

         const usernameInput = document.getElementById("username");
         const passwordInput = document.getElementById("password");
         console.log(usernameInput);

         form.addEventListener("submit", (event) => {
           event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    for (let i = 0; i < projectData.length; i++) {
      const item = projectData[i];
      if (username === item.nameAccount && password === item.password) {
        alert("Chào mừng" + " " + item.name);
        window.location.href = "/admin/projects";
        return;
      }
    }
    alert("Đăng nhập không thành công!");
  })
       })
  /*html*/
  return `
<div class="container-login-main">
<div class="background">
<div class="shape"></div>
<div class="shape"></div>
</div>
<div class="container-login">
    <form class="form-login" id="form">
        <h3>Login Here</h3>
        <label for="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username">

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" >
       <button type="submit">Log In</button>
        <div class="social text-center">
          <a href="/#"><div class="go">Go HomePage</div></a>
        </div>
    </form>
    </div>
    </div>
  `;
};

export default login;
