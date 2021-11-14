import React from "react";

const OverView = () => {
  return (
    <div className={`overviewContainer taps`}>
      <div className="cols">
        <div className="hotelAdmins">
          <h3>Hotel Admin</h3>
          <h4>+27 new users</h4>
          <h2>Total Users: 277</h2>
        </div>
        <div className="hotelMonthlyUsers">
            <h2>Hotel Admin Statistics</h2>
        </div>
      </div>
      <div className="cols">
        <div className="appUser">
          <h3>App User</h3>
          <h4>+27 new users</h4>
          <h2>Total Users: 490</h2>
        </div>
        <div className="monthlyAppUsers">
        <h2>Peace Mobile App</h2>
        </div>
      </div>
    </div>
  );
};

export default OverView;
