// import avatar from "./avatar.png";

import "./UserAvatar.css";

function UserAvatar(props) {
  const {
    UserCardHeaderProps: {
      UserCardProps: {
        user: { avatarPath },
      },
    },
  } = props;

  return <img src={avatarPath} alt="avatar" className="avatar" />;
}

export default UserAvatar;
