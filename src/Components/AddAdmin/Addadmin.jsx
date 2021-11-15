import React, { useState } from "react";
import HotelsCard from "../Card/HotelsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faEye, faEyeSlash, faAt, faLock } from "@fortawesome/free-solid-svg-icons";

const AddAdmin = () => {
    const [type, setType] = useState('password');

    const EyeChanger = () => (
        type === 'password' ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />
    )
    const passwordVisibility = () => {
        if (type === 'password') {
            setType('text')
        } else {
            setType('password')
        }
    }


    return (<div className={`taps addAdminContainer`}>
        <div className="searchBar">
            <div className="searchInputContainer">
                <FontAwesomeIcon icon={faSearch} className="icon" />
                <input placeholder='search' className={`inputs`} />
            </div>
        </div>

        <div className="addForm">
            <div className="inputHolder">
                Email
                <div className="textInputContainer">
                    <div className="inputIcons">
                        <FontAwesomeIcon icon={faAt} />
                        <input placeholder="Email" className="inputs" type='email' />
                    </div>
                </div>
            </div>
            <div className="inputHolder marginLeft">
                Password
                <div className="textInputContainer">
                    <div className="inputIcons">
                        <FontAwesomeIcon icon={faLock} />
                        <input placeholder="Password" className="inputs" type={type} />
                        <button type="button" onClick={() => passwordVisibility()} className="passwordbtn">
                            <EyeChanger />
                        </button>
                    </div>
                </div>
            </div>
            <button className='addBtn' >Add Hotel Admin</button>
        </div>
        <div className="hotelList">
            <HotelsCard/>
        </div>
    </div>);
}

export default AddAdmin;