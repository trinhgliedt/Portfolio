import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import video1 from '../videos/Products - Google Chrome 2020-10-25 14-59-20_Trim.mp4'
import video2 from '../videos/Products - Google Chrome 2020-10-25 15-11-09_Trim.mp4'
function Projects() {


return (
    <div id="projects" className="row pt-4 overflow-auto" style={{ position: 'relative', zIndex: '2'}}>
        {/* First project */}
        <div className="card ml-5 mr-3 col-5 bgGradient mb-4" style={{position: 'relative', zIndex: '2' }}>
            <h5 className="mt-0">Sunflowers - An eCommerce site in Django</h5>
            <video width="100%"  controls>
                <source src={video1} type="video/mp4"/>
            </video>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
                <a href="/" className="card-link">Card link</a>
                <a href="/" className="card-link">Another link</a>
            </div>
        </div>
        {/* Second project */}
        <div className="card ml-5 mr-3 col-5 bgGradient mb-4" style={{position: 'relative', zIndex: '2' }}>
            <h5 className="mt-0">Sunflowers - An eCommerce site in Django</h5>
            <video width="100%"  controls>
                <source src={video2} type="video/mp4"/>
            </video>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
                <a href="/" className="card-link">Card link</a>
                <a href="/" className="card-link">Another link</a>
            </div>
        </div>
        {/* Third project */}
        <div className="card ml-5 mr-3 col-5 bgGradient mb-4" style={{position: 'relative', zIndex: '2' }}>
            <h5 className="mt-0">Sunflowers - An eCommerce site in Django</h5>
            <video width="100%"  controls>
                <source src={video1} type="video/mp4"/>
            </video>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
                <a href="/" className="card-link">Card link</a>
                <a href="/" className="card-link">Another link</a>
            </div>
        </div>
    </div>


  );
}

export default Projects;
