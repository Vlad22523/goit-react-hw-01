import s from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={s.card}>
      <div className={s.card_block}>
        <img src={image} alt="User avatar" className={s.card_img} />
        <h2>{name}</h2>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={s.card_list}>
        <li>
          <span>Followers</span>
          <span> {followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span> {views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
