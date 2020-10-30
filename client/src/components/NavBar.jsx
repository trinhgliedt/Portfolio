import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
// import '../styles/NavBarStyle.scss';

function NavBar() {

  $(function(){
    $(document).ready(function(){
      var i, stop;
      i = 1;
      stop = 4; //num elements
      setInterval(function(){
        if (i > stop){
          return;
        }
        $('#len'+(i++)).toggleClass('bounce');
      }, 500)
    });
  });


  return (
    <div class="row " style={{ position: 'relative', zIndex: '2'}}>
      <div id="len1" class="col mx-2 text-center hoverable" ><a href="/projects" class="header btn selected col text-white">Projects</a></div>
      <div id="len2" class="col mr-2 text-center hoverable"><a href="/resume" class="header btn col text-white">Resume</a></div>
      <div id="len3" class="col  mr-2 text-center hoverable"><a href="https://www.linkedin.com/in/trinhgliedt/" class="header btn col text-white">LinkedIn</a></div>
      <div id="len4" class="col mr-2 text-center hoverable"><a href="https://github.com/trinhgliedt" class="header btn col text-white">GitHub</a></div>
    </div>


  );
}

export default NavBar;
