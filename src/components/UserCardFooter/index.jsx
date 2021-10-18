import Socials from "./Socials";
import Buttons from "./Buttons";

import "./UserCardFooter.css";

function UserCardFooter(props) {
  const {
    user: { message },
  } = props;

  return (
    <div className="card-footer">
      <p className="lorem">{message}</p>
      <div className="interactive">
        <Buttons />
        <Socials />
      </div>
    </div>
  );
}

export default UserCardFooter;
