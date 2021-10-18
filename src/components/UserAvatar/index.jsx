import "./UserAvatar.css";

function UserAvatar(props) {
  const {
    user: { avatarPath },
  } = props;

  return <img src={avatarPath} alt="avatar" className="avatar" />;
}

export default UserAvatar;
