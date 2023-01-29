import React from "react"
import { PropTypes } from "prop-types"


function Picture({ imgURL, altTag }){
    return <img 
    src={imgURL}
    alt={altTag}/>

}

Picture.prototype = {
    imgURL: PropTypes.string.isRequired,
    altTag: PropTypes.string.isRequired
}

export default Picture

