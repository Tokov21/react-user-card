import UserCardHeader from "../UserCardHeader/UserCardHeader";
import UserCardFooter from "../UserCardFooter/UserCardFooter";

import "./UserCard.css";

function UserCard(props) {
  return (
    <div className="card">
      <UserCardHeader UserCardProps={props}/>
      <UserCardFooter UserCardProps={props}/>
    </div>
  );
}

export default UserCard;
