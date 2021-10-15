import UserAvatar from "../UserAvatar/UserAvatar";

import "./UserCardHeader.css";

function UserCardHeader(props) {
  const {
    UserCardProps: {
      user: { firstName },
    },
  } = props;

  const {
    UserCardProps: {
      user: { lastName },
    },
  } = props;

  return (
    <div className="card-header">
      <UserAvatar UserCardHeaderProps={props} />
      <p className="user-name">{firstName + " " + lastName}</p>
    </div>
  );
}

export default UserCardHeader;
