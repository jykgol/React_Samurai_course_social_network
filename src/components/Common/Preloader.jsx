import s from "./Preloader.module.css"
import preloader from "./../../assets/images/Preloader.svg"

let Preloader = () => {
    return (
        <div className={s.preloader_box} >
            <img src={preloader} alt="" className={s.preloader} />
        </div >
    )
}

export default Preloader;