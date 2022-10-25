import User from "./User/User";
import s from "./Users.module.css"
import img from "./../../assets/images/default_user.png"

let Users = (props) => {

    let PagesCount = Math.ceil(props.TotalUsers / props.PageSize);

    let Pagination = [];

    switch (props.CurrentPage) {

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
            for (let i = props.CurrentPage - 1; i <= props.CurrentPage + 1; i++) {
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
                        return <button onClick={() => { props.onPageChange(el); }}
                            className={el === props.CurrentPage ? s.pag_current_page : s.pag_page}>{el}</button>
                })
            }
        </div>
        <div className={s.Users}>
            {props.UsersData.map(el => {
                return (
                    <User key={el.id}
                        id={el.id}
                        follow={props.follow}
                        unFollow={props.unFollow}
                        followed={el.followed}
                        img={el.photos.small != null ? el.photos.small : img}
                        name={el.name}
                        status={el.status} />
                )
            })}
        </div>
    </div>
}

export default Users;