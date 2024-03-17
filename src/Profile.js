import React, { useState } from 'react';
import toggle from "./assets/toggle.png";
import mainlogo from "./assets/mainlogo.png";

const Profile = () => {
  const data = [
    {
      "id": 1,
      "name": "Arjun",
      "dob": "16-11-2000",
      "role": "Software Engineer"
    },
    {
      "id": 2,
      "name": "Sara",
      "dob": "03-05-1995",
      "role": "Data Scientist"
    },
    {
      "id": 3,
      "name": "Ravi",
      "dob": "22-09-1992",
      "role": "Web Developer"
    },
    {
      "id": 4,
      "name": "Priya",
      "dob": "11-07-1988",
      "role": "Project Manager"
    },
    {
      "id": 5,
      "name": "Vikram",
      "dob": "29-03-1979",
      "role": "UX Designer"
    },
    {
      "id": 6,
      "name": "Aisha",
      "dob": "14-02-1985",
      "role": "Quality Assurance Engineer"
    },
    {
      "id": 7,
      "name": "Rahul",
      "dob": "09-12-1998",
      "role": "DevOps Engineer"
    }
  ];

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='maincontainer'>
      <div className="container1">
        <div className="navbar">
          <img src={toggle} alt="" />
        </div>

        <div className="mainlogo">
          <center> <img src={mainlogo} alt="" /></center>
        </div>

        <div>
          <center>
            <input 
              type="text" 
              placeholder='Search by name' 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <i style={{ color: "whitesmoke" }} class="fa-solid fa-magnifying-glass"></i>
          </center>
        </div>
      </div>

      <div className="profilesdata">
        {filteredData.map((eachItem) => {
          const { id, name, dob, role } = eachItem;
          return (
            <div className="profile">
              <p>EMP ID: {id}</p>
              <p>NAME: {name}</p>
              <p>DOB: {dob}</p>
              <p>Role: {role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
