function Social(props) {
  const {
    social: { name, link, pathToLogo },
  } = props;

  return (
    <li>
      <a href={link} target="_blank" rel="noreferrer noopener">
        <img src={pathToLogo} alt={name} />
      </a>
    </li>
  );
}

export default Social;
