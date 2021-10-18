import "./Socials.css";
// import facebook from "./images/facebook.svg";
// import twitter from "./images/twitter.svg";
// import google from "./images/google-plus.svg";
// import linkedin from "./images/linkedin.svg";

function Socials(props) {
  const {user : {socials}} = props;

  return (
    <div className="socials">
      <ul className="socials-list">
        <li>
          <a href="/">
            <img src={socials[0].pathToLogo} alt="" />
          </a>
        </li>
             </ul>
    </div>
  );
}

export default Socials;
