import UserAvatar from "../UserAvatar/UserAvatar";

import "./UserCardHeader.css";

function UserCardHeader(props) {
  const {
    user: { firstName, lastName },
  } = props;

  return (
    <div className="card-header">
      <UserAvatar user={props.user} />
      <p className="user-name">{firstName} {lastName}</p>
    </div>
  );
}

export default UserCardHeader;
