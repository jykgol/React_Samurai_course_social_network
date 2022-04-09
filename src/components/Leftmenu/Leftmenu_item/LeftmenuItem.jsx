import { NavLink } from "react-router-dom";
import s from "./LeftmenuItem.module.css"

function LeftmenuItem(props) {
  return (
    <div>
      <NavLink to={props.navLink_to} className={navData => navData.isActive ? s.activeLink : s.item}>
        <span className={s.indicator}></span>
        <span className={s.text}>{props.text}</span>
        <span className={s.icon}>
          <img src={props.img_src} alt="no img bro" />
        </span>
      </NavLink>
    </div>
  );
}

export default LeftmenuItem;