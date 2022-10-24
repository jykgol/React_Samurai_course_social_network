import axios from "axios";
import User from "./User/User";
import s from "./Users.module.css"
import img from "./../../assets/images/default_user.png"
import React from "react";

class Users extends React.Component {

    constructor(props) {
        super(props);
        this.getUsers();
    }

    getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(Response => {
            this.props.setUsers(Response.data.items)
        })
    }

    render() {
        return <div className={s.Users}>
            {this.props.UsersData.map(el => {
                return (
                    <User key={el.id}
                        id={el.id}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        followed={el.followed}
                        img={el.photos.small != null ? el.photos.small : img}
                        city="{el.city}" country="{el.country}"
                        name={el.name}
                        status={el.status} />
                )
            })}
        </div>
    }

}

export default Users;