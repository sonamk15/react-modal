import React from 'react';
import './index.css';
import image from '../IMG/modal.jpg'

const Modal = () => {
  return (
    <div className="modal-wrapper"
    // style={{
    //   transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
    //   opacity: show ? '1' : '0'
    // }}
    >

      <div className="modal-header">
        <p>Material details</p>
        <span className="close-modal-btn">x</span>
      </div>

      <div className="modal-content">
        <div className="modal-body">
          <div className='left-body'>
            <img src={image} width="100" height="100"></img>
          </div>
          <div className='right-body'>
            <h4> Assign to factory</h4>
            <div className='factory'>
              {/* <label for="factory">Factory</label><br/> */}
              <p>Factory</p><br/>
              <select name="factory" id="factory">
                <option value="">Select factory</option>
                <option value="x">X</option>
                <option value="y">Y</option>
                <option value="z">Z</option>
              </select>
            </div>
          </div>

        </div> 
       
      </div>
      <div className="modal-footer">
        <button className="btn-back">BACK</button>

          <button className="btn-next">NEXT</button>
        </div>
   
    </div>
  )
};

export default Modal;