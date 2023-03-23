const contact = () => {
    /*html*/
  return `
    <div class="container-main app container" id="about">
      <div class="container" id="contact">
      <div class="box-contact">
        <div class="title-contact text-center">
          <h3 class="text-primary">Contact</h3>
          <h2 class="text-white">I Want to Hear from You</h2>
        </div>
        <div class="grid-2-contact row mt-5">
          <div class="icon-text col-sm-6" >
            <div class="ic-t">
              <i class="fa-solid fa-map-location-dot"></i>
              <div class="text">
                <h2>Address</h2>
                <p>Dong Hoa - Thanh Hoa</p>
              </div>
            </div>
            <div class="ic-t">
              <i class="fa-sharp fa-regular fa-envelope"></i>
              <div class="text">
                <h2>Email</h2>
                <p>leehairdev.it@gmail.com</p>
              </div>
            </div>
            <div class="ic-t">
              <i class="fa-solid fa-phone"></i>
              <div class="text">
                <h2>Phone</h2>
                <p>0357.902.068</p>
              </div>
            </div>
          </div>
          <div class="input-button-submit-contact col-sm-6" >
            <div class="input-grid-box row w-100">
              <div class="input-grid col-sm-6 ">
                <input class='w-110' type="text" placeholder="Your Name">
                <input class='w-100' type="text" placeholder="Your Phone">
              </div>
              <div class="input-grid col-sm-6">
                <input class='w-100' type="text" placeholder="Your Email">
                <input class='w-100' type="text" placeholder="Subject">
              </div>
            </div>
            <textarea class='w-100' name="" id="" cols="" rows="10" placeholder="Write your message here"></textarea>
           <div class="btn-smt"> <button class="Submit-contact button-86">Submit Now</button></div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `;
}

export default contact
