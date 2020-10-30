import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import resume from '../pdf/Resume.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Document, Page, pdfjs } from "react-pdf";

const Resume = (props) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    return (
        <div>
        <div class="row justify-content-center pt-3">
            <div class="">
            <Document
                file={resume}
            >
                <Page pageNumber={1} 
                renderTextLayer={false}/>
            </Document>
            </div>
            <div class="">
            <Document
                file={resume}
            >
                <Page pageNumber={2} 
                renderTextLayer={false}/>
            </Document>
            </div>
        </div>
        </div>
    );
}
 
export default Resume;
