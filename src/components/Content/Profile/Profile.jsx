import s from "./Profile.module.css"


function Profile(props) {

    return (
        <div className={s.profile}>
            <div className={s.profile_img}>
                <div className={s.profile_img_box}>
                    <img alt="img not found" src={props.ProfileData.ProfileImage}></img>
                </div>
                <button className={s.profile_button}>Редактировать</button>
            </div>

            <div className={s.profile_info}>
                <div className={s.profile_info_content}>
                    <div>Евгений Головков</div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Profile;