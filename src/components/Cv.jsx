import React, { Component } from 'react'
import './cv.css'
import jsPDF from 'jspdf'
import logo from '../img/resume.jpg'

class Cv extends Component {
    pdfGenerate = () =>{
        var doc = new jsPDF('portrait','mm','a4','false')
        doc.addImage(logo,'JPG',0,0,200,300)
        doc.save('resume(rakhimberganov).pdf')
    }
    
    render() {
        return (
            <div> 
                <button className='cvd' onClick={this.pdfGenerate}> 
                  <i class="fas resume fa-file-download"></i>
                    <h6>RESUME</h6>
                </button>
            </div>
        )
    }
}
export default Cv