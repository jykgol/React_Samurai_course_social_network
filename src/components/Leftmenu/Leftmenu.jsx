import s from "./Leftmenu.module.css"
import LeftmenuItem from "./Leftmenu_item/LeftmenuItem";

function Leftmenu(props) {
    let NavbarDataRestore = props.NavbarData.map(el => {
        return (
            <li key={el.id}>
                <LeftmenuItem navLink_to={el.navLink_to} text={el.text} img_src={el.img_src} />
            </li>
        )
    })
    return (<>
        <div className={s.main_body} hidden={props.isHiddenMenu}>
            <div className={s.navigation}>
                <ul>
                    {NavbarDataRestore}
                </ul>
            </div>
        </div>
    </>
    );
}

export default Leftmenu;