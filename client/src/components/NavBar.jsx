import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import '../styles/NavBarStyle.css';
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
    <div className="row" style={{ position: 'relative', zIndex: '2'}}>
      <div className="col hoverable mx-2 text-center" >
        <div id="intro"
        className={selectedTab === "intro" ? "activeTab btn selected col text-white" : "menuItem hoverable menuItem btn selected col text-white"} 
        onClick={e => handleSelection(e)}
        >About Me</div>
      </div>

      <div  className="col hoverable mr-2 text-center" >
        <div id="projects" 
        className={selectedTab === "projects" ? "activeTab btn selected col text-white" : "menuItem hoverable menuItem btn selected col text-white"} 
        onClick={e => handleSelection(e)}
        >Projects</div>
      </div>

      <div  className="col hoverable mr-2 text-center">
        <div id="resume" 
        className={selectedTab === "resume" ? "activeTab btn selected col text-white" : "menuItem hoverable menuItem btn selected col text-white"} 
        onClick={e => handleSelection(e)}
        >Resume</div>
      </div>
      <div  className="col hoverable mr-2 text-center">
        
        <a href="https://www.linkedin.com/in/trinhgliedt/" 
        id="linkedIn"
        className="menuItem hoverable menuItem btn selected col text-white"
        onClick={e => handleSelection(e)}
        >LinkedIn</a>
      </div>
      <div className="col hoverable mr-2 text-center">
        <a href="https://github.com/trinhgliedt" 
        id="gitHub" 
        className="menuItem hoverable menuItem btn selected col text-white"
        onClick={e => handleSelection(e)}
        >GitHub</a>
      </div>

      <div id="certificates" className="col mr-2 text-center hoverable">
      <div id="certificates" 
        className={selectedTab === "certificates" ? "activeTab btn selected col text-white" : "menuItem hoverable menuItem btn selected col text-white"} 
        onClick={e => handleSelection(e)}
        >Certificates</div>
      </div>
    </div>
    <div id="infoBox" style={{ zIndex: '2'}}>
      <span id="msgBoxLinkedIn">This will direct you to my profile on LinkedIn!</span>
      <span id="msgBoxGitHub">This will direct you to my profile on GitHub!</span>
    </div>

    {/* <a href="#" class="info">Shailender Arora <span>TOOLTIP</span></a> */}
    </>
  );
}

export default NavBar;
