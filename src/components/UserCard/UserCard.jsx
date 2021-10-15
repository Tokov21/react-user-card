import UserCardHeader from "../UserCardHeader/UserCardHeader";
import UserCardFooter from "../UserCardFooter/UserCardFooter";

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
