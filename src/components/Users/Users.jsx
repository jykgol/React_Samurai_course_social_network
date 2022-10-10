import User from "./User/User";
import s from "./Users.module.css"


let Users = (props) => {

    if (props.UsersData.length === 0) {
        props.setUsers([
            { id: 0, followed: false, img: "https://cdn131.picsart.com/316291060191201.png?type=webp&to=crop&r=256", name: "Dima", status: "Okey bro", country: "Russia", city: "Saint-Petersburg" },
            { id: 1, followed: false, img: "https://cdn131.picsart.com/316291060191201.png?type=webp&to=crop&r=256", name: "Oleg", status: "Okey bro", country: "Russia", city: "Saint-Petersburg" },
            { id: 2, followed: true, img: "https://cdn131.picsart.com/316291060191201.png?type=webp&to=crop&r=256", name: "MegaRita", status: "Okey bro", country: "Russia", city: "Saint-Petersburg" },
            { id: 3, followed: false, img: "https://cdn131.picsart.com/316291060191201.png?type=webp&to=crop&r=256", name: "Boss", status: "Okey bro", country: "Russia", city: "Saint-Petersburg" },
            { id: 4, followed: true, img: "https://cdn131.picsart.com/316291060191201.png?type=webp&to=crop&r=256", name: "Mariya", status: "Okey bro", country: "Russia", city: "Saint-Petersburg" },
        ]
        );
    }

    let NavbarDataRestore = props.UsersData.map(el => {
        return (
            <User key={el.id} id={el.id} follow={props.follow} unFollow={props.unFollow} followed={el.followed} img={el.img} city={el.city} country={el.country} name={el.name} status={el.status} />
        )
    })
    return (
        <div className={s.Users}>
            {NavbarDataRestore}
        </div>
    )
}

export default Users;