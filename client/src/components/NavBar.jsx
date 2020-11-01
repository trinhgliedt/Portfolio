import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '../styles/NavBarStyle.scss';

function NavBar(props) {
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

  const {selectedTab, setSelectedTab} = props;


    function handleSelection(e){
      setSelectedTab(e.target.id);
    }

  return (
    <>
    <div id="navbarwrap" className="row" style={{ position: 'relative', zIndex: '2'}}>
    {/* <h2  className="text-center mb-4 pt-4 mt-0">Trinh Gliedt</h2> */}
      <div className="col hoverable mx-2 text-center" >
        <div id="intro"
        className={selectedTab === "intro" ? "activeTab btn selected col text-white" : "menuItem hoverable btn selected col text-white"} 
        onClick={e => handleSelection(e)}
        >About Me</div>
      </div>

      <div  className="col hoverable mr-2 text-center" >
        <div id="projects" 
        className={selectedTab === "projects" ? "activeTab btn selected col text-white" : "menuItem hoverable btn selected col text-white"} 
        onClick={e => handleSelection(e)}
        >Projects</div>
      </div>

      <div  className="col hoverable mr-2 text-center">
        <div id="resume" 
        className={selectedTab === "resume" ? "activeTab btn selected col text-white" : "menuItem hoverable btn selected col text-white"} 
        onClick={e => handleSelection(e)}
        >Resume</div>
      </div>
      <div  className="col hoverable mr-2 text-center">
        
        <a href="https://www.linkedin.com/in/trinhgliedt/" 
        id="linkedIn"
        style={{ position: 'relative', zIndex: '3'}}
        className="menuItem hoverable menuItem btn selected col text-white"
        onClick={e => handleSelection(e)}
        >LinkedIn</a>
      </div>
      <div id="gitHubWrap" className="col hoverable mr-2 text-center">
        <a href="https://github.com/trinhgliedt" 
        id="gitHub" 
        className="menuItem hoverable btn selected col text-white"
        onClick={e => handleSelection(e)}
        >GitHub</a>
      </div>

      <div id="certificates" className="col mr-2 text-center hoverable">
      <div id="certificates" 
        className={selectedTab === "certificates" ? "activeTab btn selected col text-white" : "menuItem hoverable btn selected col text-white"} 
        onClick={e => handleSelection(e)}
        >Certificates</div>
      </div>
    </div>
    </>
  );
}

export default NavBar;
