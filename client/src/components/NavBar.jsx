import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '../styles/NavBarStyle.css';

function NavBar() {
  var tabs = $('.tabs');
  var selector = $('.tabs').find('a').length;
  var activeItem = tabs.find('.active');
  var activeWidth = activeItem.innerWidth();
  $(".selector").css({
    "left": activeItem.position.left + "px", 
    "width": activeWidth + "px"
  });
  
  $(".tabs").on("click","a",function(e){
    e.preventDefault();
    $('.tabs a').removeClass("active");
    $(this).addClass('active');
    var activeWidth = $(this).innerWidth();
    var itemPos = $(this).position();
    $(".selector").css({
      "left":itemPos.left + "px", 
      "width": activeWidth + "px"
    });
  });


  return (
    <>
    {/* <div class="row" style={{ position: 'relative', zIndex: '2'}}>
      <div id="len1" class="col mx-2 text-center hoverable" ><a href="/projects" class="header btn selected col text-white">Projects</a></div>
      <div id="len2" class="col mr-2 text-center hoverable"><a href="/resume" class="header btn col text-white">Resume</a></div>
      <div id="len3" class="col  mr-2 text-center hoverable"><a href="https://www.linkedin.com/in/trinhgliedt/" class="header btn col text-white">LinkedIn</a></div>
      <div id="len4" class="col mr-2 text-center hoverable"><a href="https://github.com/trinhgliedt" class="header btn col text-white">GitHub</a></div>
    </div> */}
    <nav class="tabs " style={{ position: 'relative', zIndex: '2'}}>
    <div class="selector"></div>
    <a href="#" class="active"><i class="fab fa-superpowers"></i>Projects</a>
    <a href="/"><i class="fas fa-hand-rock"></i>Resume</a>
    <a href="/"><i class="fas fa-bolt"></i>LinkedIn</a>
    <a href="/"><i class="fas fa-burn"></i>GitHub</a>
  </nav>
    </>
  );
}

export default NavBar;
