import React from 'react';
const Modal=({show,item,onClose})=>{
    if(!show)
    {
        return null;
    }
    let thumbnail=id.title.formats && id.title.formats.smallThumbnail;
    return(
        <>
            <div className="overlay">
                <div className="overlay-inner">
                    <button className="close" onClick={onClose}><i class="fas fa-times"></i></button>
                    <div className="inner-box">
                        <img src={thumbnail} alt="" />
                        <div className="info">
                            <h1>{id.title.formats}</h1>

                            <a href={id.title.previewLink}><button>More</button></a>
                        </div>
                    </div>
                    <h4 className="description">{id.title.formats}</h4>
                </div>
            </div>
        </>
    )
}
export default Modal;