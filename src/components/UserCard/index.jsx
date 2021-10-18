import UserCardHeader from "../UserCardHeader";
import UserCardFooter from "../UserCardFooter";

import "./UserCard.css";

function UserCard(props) {
  return (
    <div className="card">
      <UserCardHeader user={props.user} />
      <UserCardFooter user={props.user} />
    </div>
  );
}

export default UserCard;
