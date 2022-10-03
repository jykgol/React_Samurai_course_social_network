import s from "./Post.module.css"

function Post(props) {
 
  let OnIncrement = () => {
    props.Increment(props.id);
  } 
  let OnDecrement = () => {
    props.Decrement(props.id);
  } 

  let disableCheck = (disabled) => {
    let dis=0;
    if (!disabled){
      dis = {inc:false, dec:true};
    }
    else{
      dis = {inc:true, dec:false};
    }
    return dis;
  };

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
        <h3>Лайков {props.like_count}</h3>
        <button hidden={disableCheck(props.liked).inc} onClick={OnIncrement}>Like</button>
        <button hidden={disableCheck(props.liked).dec} onClick={OnDecrement}>Unlike</button>
      </div>
    </div>
  );
}

export default Post;