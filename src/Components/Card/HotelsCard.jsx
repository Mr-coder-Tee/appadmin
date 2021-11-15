import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faUnlockAlt, faUser } from "@fortawesome/free-solid-svg-icons";


const HotelsCard = () => {
    return (
        <div className="hotelTap">
            <div className="hotelName">
                <h3>1.</h3>
                <FontAwesomeIcon icon={faUser} />
                <h3> Hotel name</h3>
            </div>
            <div className="btnSetter">
                <FontAwesomeIcon icon={faTrashAlt} className="deleteBtn"/>
                <FontAwesomeIcon icon={faUnlockAlt} />
            </div>
        </div>
    );
}

export default HotelsCard;