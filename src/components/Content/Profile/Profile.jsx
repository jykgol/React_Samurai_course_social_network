import s from "./Profile.module.css"


function Profile() {

  return (
    <div className={s.profile}>
      <div className={s.profile_img}>
        <img alt="img not found" src="https://sun9-82.userapi.com/impg/yoNEV77YAGNbEnggrxM2azysdivaE7r2avPB7Q/HIlFUm5Hvyg.jpg?size=863x1080&quality=95&sign=3d0862e05fc06275ab8999115c4162de&type=album"></img>
        <div>
          Редактировать
        </div>
      </div>

      <div className={s.profile_info}>
        <div>Евгений Головков</div>
      </div>
    </div>
  );
}

export default Profile;