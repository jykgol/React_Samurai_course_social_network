import s from "./User.module.css"


let User = (props) => {
    return (
        <div className={s.User}>
            <div className={s.UserLeft}>
                <img className={s.UserLeftImg} alt="no img(" src={props.img}></img>
                {props.followed ?
                    <button onClick={() => { props.unFollow(props.id) }}>Unfollow</button>
                    : <button onClick={() => { props.follow(props.id) }}>Follow</button>}
            </div>
            <div className={s.UserRight}>
                <div className={s.UserRightL}>
                    <div className={s.UserRightName}>Name: {props.name}</div>
                    <div className={s.UserRightStatus}>Status: {props.status}</div>
                </div>
                <div className={s.UserRightL}>
                    <div className={s.UserRightCountry}>{props.country}</div>
                    <div className={s.UserRightCity}>{props.city}</div>
                </div>
            </div>
        </div>
    )
}

export default User;