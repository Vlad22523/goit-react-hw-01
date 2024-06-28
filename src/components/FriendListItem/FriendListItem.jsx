import s from "../FriendList/FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={s.list_li}>
      <img src={avatar} alt={name} />
      <h2>{name}</h2>
      <p className={clsx(isOnline ? s.green : s.red)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
