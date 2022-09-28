import s from "./Header.module.css"

function Header() {

  return (
    <div className= {s.header}>
        <div className={s.header_content}>
          <img className= {s.header_img} alt="img not found" src="https://play-lh.googleusercontent.com/MmLHNN4_lwIN7kMG7XWnOxSYbEju-FBMEn8oDj4Xt8t9EnnH6S6GQeMHJDWpGfeDOSpM"></img>
          <div className={s.header_logo_text}>Вжуктакте</div>
        </div>
    </div>
  );
}

export default Header;