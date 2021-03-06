import s from "./Leftmenu.module.css"
import LeftmenuItem from "./Leftmenu_item/LeftmenuItem";

function Leftmenu(props) {
  let NavbarDataRestore = props.LeftmenuPage.NavbarData.map( el => { return(
    <li>
    <LeftmenuItem navLink_to= {el.navLink_to} text={el.text} img_src={el.img_src}></LeftmenuItem>
  </li>
  )  
  })
  return (
    <div className={s.main_body}>
      <div className={s.navigation}>
        <ul>
          {NavbarDataRestore}                 
        </ul>
      </div>
      <button className={s.box_button}>
        click
      </button>
    </div>
  );
}

export default Leftmenu;