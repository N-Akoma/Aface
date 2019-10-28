import React from 'react';
import './imageLinkForn.css'

const ImageLinkForm = ({onInputChange, onButtonSumbit}) =>{
    return (
       <div className='f3'>
            <p className='white'>
                {'This magic brian will detect face in your picture, try it...'}
            </p>
            <div className='center'>
                <div className='form center pa3 br3 shadow-8'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                    <button className='w-25 white grow link pa2 f4 ph3 dib form pointer'
                        onClick={onButtonSumbit}> Detect
                    </button>
                </div>
            </div>
       </div>
    );
}

export default ImageLinkForm;