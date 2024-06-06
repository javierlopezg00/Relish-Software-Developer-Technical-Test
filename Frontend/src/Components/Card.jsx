import { FaBuilding, FaMusic, FaPhoneAlt, FaUser } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoIosAlbums, IoMdMail } from "react-icons/io";
import { MdOutlineNumbers } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

/* eslint-disable react/prop-types */

export default function Card({ id, title, url, albumTitle, userName, userEmail, userAddress, userPhone, userWebsite, userCompany }){

  return(
    <div className="card p-1 m-4" style={{width: "20rem"}}>
      <img src={url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"><p><MdOutlineNumbers />: {id}</p><FaMusic /> {title}</h5>
        <p className="card-text"><IoIosAlbums /> {albumTitle}</p>
      </div>
      <div className="card-body d-flex flex-column">
        <p><FaUser /> {userName}</p>
        <p><FaPhoneAlt /> <a href="#" className="card-link">{userPhone}</a></p>
        <p><IoMdMail /> <a href="#" className="card-link">{userEmail}</a></p>
        <p><TbWorldWww /> <a href="#" className="card-link">{userWebsite}</a></p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><FaLocationCrosshairs /> {userAddress}</li>
        <li className="list-group-item"><FaBuilding /> {userCompany}</li>
      </ul>
    </div>
  )
}