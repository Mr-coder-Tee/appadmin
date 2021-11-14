import React from "react";
import image from "../../img/logo.png";
import { Link ,useLocation} from "react-router-dom";

const SideNav = () => {
    const location = useLocation();
  return (
    <div className="sideNavContainer">
      <div className="logoHolder">
        <img src={image} alt="logo" />
      </div>
      <div className="buttons">
        <Link className={`btn ${location.pathname=='/'?'currentlocation':'otherLocation'}`} to="/">
          OverView
        </Link>
        <Link className={`btn ${location.pathname=='/addadmin'?'currentlocation':'otherLocation'}`} to="/addadmin">
          Add Admin
        </Link>
      </div>
      <div className="logOut">
        <a href="">Log out</a>
      </div>
    </div>
  );
};

export default SideNav;
