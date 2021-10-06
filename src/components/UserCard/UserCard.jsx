import UserCardHeader from "../UserCardHeader/UserCardHeader";
import UserCardFooter from "../UserCardFooter/UserCardFooter";

import "./UserCard.css";

function UserCard() {
  return (
    <div className="card">
      <UserCardHeader />
      <UserCardFooter />
    </div>
  );
}

export default UserCard;
