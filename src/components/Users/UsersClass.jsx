import axios from "axios";
import User from "./User/User";
import s from "./Users.module.css"
import img from "./../../assets/images/default_user.png"
import React from "react";

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + this.props.CurrentPage + "&count=" + this.props.PageSize).then(Response => {
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsers(Response.data.totalCount);
        })
    }

    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + page + "&count=" + this.props.PageSize).then(Response => {
            this.props.setUsers(Response.data.items);
        })
    }

    render() {

        let PagesCount = Math.ceil(this.props.TotalUsers / this.props.PageSize);

        let Pagination = [];

        switch (this.props.CurrentPage) {

            case (1):
            case (2):
            case (3):
                for (let i = 1; i <= PagesCount && i <= 4; i++) {
                    Pagination.push(i);
                }
                if (PagesCount > 5) {
                    Pagination.push("Dots");
                    Pagination.push(PagesCount);
                }
                if (PagesCount === 5) {
                    Pagination.push(PagesCount);
                }
                break;

            case (PagesCount - 2):
            case (PagesCount - 1):
            case (PagesCount):
                if (PagesCount > 5) {
                    Pagination.push(1);
                    Pagination.push("Dots");
                }
                if (PagesCount === 5) {
                    Pagination.push(1);
                }
                for (let i = PagesCount - 3; i <= PagesCount; i++) {
                    Pagination.push(i);
                }
                break;

            default:
                Pagination.push(1);
                Pagination.push("Dots");
                for (let i = this.props.CurrentPage - 1; i <= this.props.CurrentPage + 1; i++) {
                    Pagination.push(i);
                }
                Pagination.push("Dots");
                Pagination.push(PagesCount);
                break;
        }



        return <div className={s.UsersPage}>
            <div className={s.pagination}>
                {
                    Pagination.map(el => {
                        if (el === "Dots") {
                            return <button className={s.pag_dots}>...</button>
                        } else
                            return <button onClick={() => { this.onPageChange(el); }} className={el === this.props.CurrentPage ? s.pag_current_page : s.pag_page}>{el}</button>
                    })
                }
            </div>
            <div className={s.Users}>
                {this.props.UsersData.map(el => {
                    return (
                        <User key={el.id}
                            id={el.id}
                            follow={this.props.follow}
                            unFollow={this.props.unFollow}
                            followed={el.followed}
                            img={el.photos.small != null ? el.photos.small : img}
                            name={el.name}
                            status={el.status} />
                    )
                })}
            </div>
        </div>
    }

}

export default Users;