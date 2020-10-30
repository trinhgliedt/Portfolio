import React,  { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../pdf/Resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import $ from 'jquery';

const Resume = (props) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

   
    function removeTextLayerOffset() {
        const textLayers = document.querySelectorAll(".react-pdf__Page__textContent");
          textLayers.forEach(layer => {
            const { style } = layer;
            style.top = "0";
            style.left = "0";
            style.transform = "";
        });
      }

    return (
        <>
        <div className="row justify-content-center">
            <div className=" col-sm-12 col-md-10 col-lg-10 col-xl-6 text-xl-right">
            <Document
                file={resume}
                onLoadSuccess={removeTextLayerOffset}
            >
                <Page pageNumber={1} 
                renderTextLayer={false}/>
            </Document>
            </div>
            <div className=" col-sm-12 col-md-10 col-lg-10 col-xl-6 text-xl-left">
            <Document
                file={MyResume}
                onLoadSuccess={removeTextLayerOffset}
            >
                <Page pageNumber={2} 
                renderTextLayer={false}/>
            </Document>
            </div>
        </div>
        </>
    );
}
 
export default Resume;
