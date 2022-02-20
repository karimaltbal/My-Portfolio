/*دا الى بيكتب الكلام الى موجود فى بدايةا بصفحة  */

var txt_header=`I'm KARIM AHMED Front End Developer.`,
    header_element=document.getElementById('txt_header'),
    i=0;

var write_method = setInterval(function (){
    header_element.textContent += txt_header[i];
    i++;
    if( i>txt_header.length-1 ){
        clearInterval(write_method);
    }
},100);








/*دا خاص بتقليب صور المشروع */
function changeImage(element) {

    var main_prodcut_image = document.getElementById('main_product_image');
    main_prodcut_image.src = element.src;
    
}









/***********(app section)**************/
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });




  


/*****************(model-zoom)********************* */
let btn_zoom = document.querySelectorAll(".btn_zoom"),
    div_zoom = document.getElementById("zoom_image"),
    hide_div = document.getElementById("ovarlay");

    let src_img_1 = [`images/Projects/Car Relant/2.png`,`images/Projects/Car Relant/4.png`,
                      `images/Projects/Car Relant/6.png`,`images/Projects/Car Relant/7.png` ],
        src_img_2 = [`images/Projects/creat table/1.png`,`images/Projects/creat table/2.png`
                      ,`images/Projects/creat table/3.png`,`images/Projects/creat table/4.jpg`],
        src_img_3 = [`images/Projects/universty housing/1.png`],
        src_img_4 = [`images/Projects/Sing Song/1.png`,`images/Projects/Sing Song/2.png`,
                      `images/Projects/Sing Song/3.png`,`images/Projects/Sing Song/4.png`],
        src_img_5 = [`images/Projects/arab suaq/1.png`,`images/Projects/arab suaq/4.png`,
                      `images/Projects/arab suaq/6.png`,`images/Projects/arab suaq/8.png`]



btn_zoom.forEach(element => {
  element.onclick = function(){
    div_zoom.style.display = "block"

    var result;
    if(this.id == "btn_1"){ result = src_img_1
    }else if(this.id == "btn_2"){ result = src_img_2  
    }else if(this.id == "btn_3"){ result = src_img_3
    }else if(this.id == "btn_4"){ result = src_img_4
    }else if(this.id == "btn_5"){ result = src_img_5}

    let content_table = document.querySelector(".model-zoom .carousel-inner");
    content_table.innerHTML = ' ';
    let tr = document.createElement("div");
    let temaple = 
    `
    <div class="carousel-item active">
      <img src="${result[0]}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="${result[1]}" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
    <img src="${result[2]}" class="d-block w-100" alt="...">
    <div class="carousel-caption d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the second slide.</p>
    </div>
  </div>
  <div class="carousel-item">
  <img src="${result[3]}" class="d-block w-100" alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>Second slide label</h5>
    <p>Some representative placeholder content for the second slide.</p>
  </div>
</div>
    `;
    tr.innerHTML = temaple;
    content_table.append(tr);
    }
  
})


hide_div.onclick = function () {
  div_zoom.style.display = "none";
};











/************(top btn)**************/
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 2500 ||
    document.documentElement.scrollTop > 2500
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}















/************************************* */


// portofolio item filter

const filterContainer=document.querySelector(".Portofolio-filter"),
      filterBtns=filterContainer.children,
      totalfilterBtn=filterBtns.length,
      portofolioItems=document.querySelectorAll(".Portofolio-item"),
      totalportofolioItem=portofolioItems.length;

for (let i = 0; i < totalfilterBtn; i++) {

      filterBtns[i].addEventListener("click" , function(){
        filterContainer.querySelector(".active").classList.remove("active")
        this.classList.add("active")


        const filterValue=this.getAttribute("data-filter")
          for (let k = 0; k < totalportofolioItem; k++) {
              if (filterValue === portofolioItems[k].getAttribute("data-category")){
                portofolioItems[k].classList.remove("hide")
                portofolioItems[k].classList.add("show")

              }
              
              else{
                        portofolioItems[k].classList.remove("show")
                        portofolioItems[k].classList.add("hide")

              }
              if (filterValue === "all") {
                portofolioItems[k].classList.remove("hide")
                portofolioItems[k].classList.add("show")
                
              }
          }
      })

}



/*
const nav_fix = document.getElementById("nav_fixed");
window.onscroll = function(){
  if(window.scrollY >= 100){
    nav_fix.style.cssText = "background: #022242 !important; box-shadow: 0px 1px 10px black;"
  }else{
    nav_fix.style.cssText = "background: transparent !important;"
  }
}*/
