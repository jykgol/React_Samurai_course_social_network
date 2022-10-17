import s from "./Profile.module.css"


function Profile(props) {

    let getPhotos = (start=0) =>  {

        let array = props.ProfileData.Photos.map(el => {
            if (el.id > start)
            return <div key={el.id} className={s.image_container}> <img src={el.src} alt=""></img> </div>
        }
        )
        return array;
    }
    
    return (
        <div>
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
                        <div>Санкт-Петербург</div>
                        <div>Был онлайн никогда</div>
                    </div>
                </div>
            </div>
            <div className={s.profile_content}>
                <div className={s.content_container}>
                    <button onClick={props.ReduceButton}>(</button>
                    <div className={s.content_photos}>
                        {getPhotos(props.ProfileData.PhotosStart)}
                    </div>
                    <button onClick={props.IncreaseButton}>)</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;