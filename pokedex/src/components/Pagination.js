import React from "react";


const Pagination = (props) => {
    const {page, totalPages, onLeftClick, onRightClick} = props
    return(
        <div className="pagination-container">
            <button className="pagination-letf-button" onClick={onLeftClick}></button>
            <div>{page} de {totalPages}</div>
            <button className="pagination-right-button" onClick={onRightClick}></button>
        </div>
    )
}

export default Pagination