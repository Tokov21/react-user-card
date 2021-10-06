import UserAvatar from "../UserAvatar/UserAvatar";

import "./UserCardHeader.css";

function UserCardHeader() {
  return (
    <div className="card-header">
      <UserAvatar />
      <p className="user-name">John Doe</p>
    </div>
  );
}

export default UserCardHeader;
