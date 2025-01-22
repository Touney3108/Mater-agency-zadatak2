import React from 'react';
import style from "./UserDetails.module.css"
import { formatDate } from '../../utlis/formatDate';
const UserDetails = ({ user, onBack }) => {
  
  const {avatar,
    first_name,
    last_name,
    employment,
    email,
    phone_number,
    date_of_birth,
    address } = user
  
  return (
    <div className={ style.profileContainer}>
      <button
        onClick={onBack}
        className={style.backBtn}
      >Back</button>
      <div className={style.basicInfo}>
        <img
          src={avatar}
          alt={`${first_name} ${last_name}`}
          className={ style.img}
        />
        <h2>{first_name} {last_name}</h2>
        <p>{employment.title}</p>
      </div>
      <div className={style.details}>
        <p>Email: {email}</p>
        <p>Phone: {phone_number}</p>
        <p>Date of Birth: {formatDate(date_of_birth)}</p>
        <p>City: {address.city}</p>
        <p>Street: {address.street_name} {address.street_address}</p>
        <p>Country: {address.country}</p>
        <a
          href={`https://www.google.com/maps?q=${address.coordinates.lat},
          ${address.coordinates.lng}`}
          target="_blank"
          rel="noopener noreferrer"
          className={style.locationLink}
        >
          See location
        </a>
      </div>
    </div>
  );
};

export default UserDetails;