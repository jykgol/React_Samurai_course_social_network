import axios from "axios";
import User from "./User/User";
import s from "./Users.module.css"
import img from "./../../assets/images/default_user.png"

let Users = (props) => {

    if (props.UsersData.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
            props.setUsers(Response.data.items)
        })
    }


    let NavbarDataRestore = props.UsersData.map(el => {
        return (
            <User key={el.id} id={el.id} follow={props.follow} unFollow={props.unFollow} followed={el.followed} img={el.photos.small != null ? el.photos.small : img} city="{el.city}" country="{el.country}" name={el.name} status={el.status} />
        )
    })
    return (
        <div className={s.Users}>
            {NavbarDataRestore}
        </div>
    )
}

export default Users;