import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
// import '../styles/NavBarStyle.scss';

function NavBar() {

  $(function(){
    var str = '#len'; //increment by 1 up to 1-nelemnts
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
      <div id="len1" class="col border-bottom mx-2 text-center hoverable" ><div class="header btn selected col text-white">Projects</div></div>
      <div id="len2" class="col border-bottom mr-2 text-center hoverable"><div class="header btn col text-white">Resume</div></div>
      <div id="len3" class="col border-bottom mr-2 text-center hoverable"><div class="header btn col text-white">LinkedIn</div></div>
      <div id="len4" class="col border-bottom mr-2 text-center hoverable"><div class="header btn col text-white">GitHub</div></div>
    </div>


  );
}

export default NavBar;
