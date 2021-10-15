import Socials from "../Socials/Socials";
import Buttons from "../Buttons/Buttons";

import "./UserCardFooter.css";

function UserCardFooter() {
  return (
    <div className="card-footer">
      <p className="lorem">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quibusdam
        minus labore facere dolor odit optio doloremque debitis iusto tempora.
      </p>
      <div className="interactive">
        <Buttons />
        <Socials />
      </div>
    </div>
  );
}

export default UserCardFooter;
