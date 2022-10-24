import s from "./User.module.css"


let User = (props) => {
    return (
        <div className={s.User}>
            <div className={s.UserTop}>
                <img className={s.UserTopImg} alt="no img(" src={props.img}></img>
                {props.followed ?
                    <button onClick={() => { props.unFollow(props.id) }}>Unfollow</button>
                    : <button onClick={() => { props.follow(props.id) }}>Follow</button>}
            </div>
            <div className={s.UserInfo}>
                <div className={s.UserInfoName}>Name: <span className={s.UserInfoNameText}>{props.name}</span></div>
                <div className={s.UserInfoStatus}>Status: <span className={s.UserInfoStatusText}>{props.status}</span></div>
            </div>
        </div>
    )
}

export default User;