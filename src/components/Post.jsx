import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";

export default function Post({ user, img, caption, profile }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(120);
  const [showHeart, setShowHeart] = useState(false);

  function handleLike() {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  }

  function doubleClickLike() {
    if (!liked) {
      setLiked(true);
      setLikes(likes + 1);
    }

    // AGORA SIM CORRETO
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 800);
  }

  return (
    <div className="post">

      <div className="post-header">
        <img src={profile} alt="" />
        <span>{user}</span>
      </div>

      <div className="post-img-container">
        <img
          className="post-image"
          src={img}
          alt=""
          onDoubleClick={doubleClickLike}
        />

        {showHeart && <div className="big-heart">❤️</div>}
      </div>

        <div className="post-actions">
            <Heart
                onClick={handleLike}
                color={liked ? "red" : "black"}
                fill={liked ? "red" : "none"}
             />

            <MessageCircle />
            <Send />
        </div>

      <div className="post-info">
        <strong>{likes} curtidas</strong>
        <p><b>{user}</b> {caption}</p>
      </div>

    </div>
  );
}