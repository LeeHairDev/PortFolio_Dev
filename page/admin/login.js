import { useState, useEffect } from "../../libs";

const login = () => {

       useEffect(()=>{
         const form = document.getElementById("form");

         form.addEventListener("submit", (event) => {
           event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

      if (username === "leehaidev.it@gmail.com" && password === "123456789") {
        alert("Chào mừng Lê Sỹ Hải");
        window.location.href = "/admin/projects";
        return;
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
