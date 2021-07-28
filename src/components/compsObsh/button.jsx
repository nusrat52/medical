import React from 'react'
import "./style.css"
function Button({content, brRadius, color}) {
    return (
        <button className={ brRadius==="small" ? color==="blue" ? "buton bgRadiusSmall":"buton_white bgRadiusSmall" : color==="blue" ? "buton":"buton_white"}>
            {content}
      </button>
    )
}

export default Button
