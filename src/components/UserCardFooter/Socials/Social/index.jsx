function Social(props) {
  const {
    social: { name, link, pathToLogo },
  } = props;

  return (
    <li>
      <a href={link} target="_blank">
        <img src={pathToLogo} alt={name} />
      </a>
    </li>
  );
}

export default Social;
