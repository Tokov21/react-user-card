import Social from "./Social";

import "./Socials.css";

function Socials(props) {
  const arrayJSX = props.user.socials.map((soc) => {
    return <Social social={soc} />;
  });

  console.log(arrayJSX);

  return (
    <div className="socials">
      <ul className="socials-list">{arrayJSX}</ul>
    </div>
  );
}

export default Socials;
