import axios from "axios";
import React from "react";
import Users from "./Users";
import Preloader from "./../Common/Preloader"

class UsersClass extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + this.props.CurrentPage + "&count=" + this.props.PageSize).then(Response => {
            this.props.setUsers(Response.data.items);
            this.props.setTotalUsers(Response.data.totalCount);
            this.props.toggleIsFetching(false);
        })
    }

    onPageChange = (page) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);
        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=" + page + "&count=" + this.props.PageSize).then(Response => {
            this.props.setUsers(Response.data.items);
            this.props.toggleIsFetching(false);
        })
    }

    render() {
        return <>
        
            {this.props.isFetching ? <Preloader/> : 
            <Users TotalUsers={this.props.TotalUsers}
                PageSize={this.props.PageSize}
                CurrentPage={this.props.CurrentPage}
                UsersData={this.props.UsersData}
                unFollow={this.props.unFollow}
                follow={this.props.follow}
                onPageChange={this.onPageChange}
            />}
        
            
        </>
    }

}

export default UsersClass;