import s from "./Post.module.css"
import Counter from "./../../../Counter"

function Post(props) {
 
  return (
    <div className={s.post}>
      <div className={s.postInfo}>
        <img alt="img not found" src={props.imgSrc} />
        <span className={s.author}>{props.author}</span>
      </div>
      <div className={s.postContent}>
        {props.text}
      </div>
      <div className={s.postLike}>
        <Counter dispatch={props.dispatch} id={props.id} like_count={props.like_count} />
      </div>
    </div>
  );
}

export default Post;