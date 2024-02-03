$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('#main-nav').addClass("sticky");
      }else{
          $('#main-nav').removeClass("sticky");
      }
      
  })

  // togel/menu nevbar script
  $('.menu-btn').click(function(){
      $('#main-nav .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });


  $('.menu li a').click(function(){
      $('#main-nav .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  

 




});

// resume section 

document.getElementById("resume-link-1").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1jh_ep3H6D-rwX3lHYcJT0BdEFB4FoEpX/view?usp=sharing"
  );
};

document.getElementById("resume-link-2").onclick = () => {
  window.open(
    "https://drive.google.com/file/d/1jh_ep3H6D-rwX3lHYcJT0BdEFB4FoEpX/view?usp=sharing"
  );
};