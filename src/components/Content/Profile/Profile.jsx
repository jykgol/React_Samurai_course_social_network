import s from "./Profile.module.css"


function Profile(props) {
    let getPhotos = (start = 0) => {
        let array = props.ProfileData.Photos.map(el => {
            if (el.id > start)
                return <div key={el.id} className={s.image_container}> <img src={el.src} alt=""></img> </div>
        }
        )
        return array;
    }
    let ReduceButton = () => {
        props.PhotoStartOnChange("REDUCE");
    }
    let IncreaseButton = () => {
        props.PhotoStartOnChange("INCREASE");
    }
    return (
        <div>
            <div className={s.profile}>
                <div className={s.profile_img}>
                    <div className={s.profile_img_box}>
                        <img alt="img" src={props.ProfileServerData != null ? props.ProfileServerData.photos.large : props.ProfileData.ProfileImage}></img>
                    </div>
                    <button className={s.profile_button}>Редактировать</button>
                </div>

                <div className={s.profile_info}>
                    <div className={s.profile_info_content}>
                        <div> {props.ProfileServerData != null ? props.ProfileServerData.fullName : "Евгений Головков"} </div>
                        <div> {props.ProfileServerData != null ? props.ProfileServerData.aboutMe : "Тут был статус, теперь нету"} </div>
                        <div> в поиске работы <img alt={props.ProfileData.Icons.noPNG}
                            src={
                                props.ProfileServerData == null ? props.ProfileData.Icons.noPNG :
                                    props.ProfileServerData.lookingForAJob === false ? props.ProfileData.Icons.noPNG : props.ProfileData.Icons.checkPNG
                            } /> </div>
                        <div> {props.ProfileServerData != null ? props.ProfileServerData.lookingForAJobDescription : "Описание к поиску работы"}</div>
                        <div><a href={props.ProfileServerData != null ? props.ProfileServerData.contacts.twitter : null}>twitter</a></div>

                    </div>
                </div>
            </div>
            <div className={s.profile_content}>
                <div className={s.content_container}>
                    <button onClick={ReduceButton}>(</button>
                    <div className={s.content_photos}>
                        {getPhotos(props.ProfileData.PhotosStart)}
                    </div>
                    <button onClick={IncreaseButton}>)</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;