import "./UserCardFooter.css";

function UserCardFooter() {
  return (
    <div className="card-footer">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, sed.
      </p>

      <div className="buttons">
        <a href="/" className="button message">
          Message
        </a>
        <a href="/" className="button message">
          Follow
        </a>
      </div>

      <div className="socials">
        <ul>
          <li>
            <a href="/">Link</a>
          </li>
          <li>
            <a href="/">Link</a>
          </li>
          <li>
            <a href="/">Link</a>
          </li>
          <li>
            <a href="/">Link</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserCardFooter;
