import UserCard from "./components/UserCard";

import "./App.css";

const user = {
  firstName: "John",
  lastName: "Doe",
  avatarPath: "./images/avatar.png",
  message:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem dolore error dicta, numquam neque.",
  socials: [
    {
      name: "facebook",
      link: "https://facebook.com",
      pathToLogo: "./images/facebook.svg",
    },
    {
      name: "twitter",
      link: "https://twitter.com",
      pathToLogo: "./images/twitter.svg",
    },
    {
      name: "googlePlus",
      link: "https://plus.google.com/",
      pathToLogo: "./images/google-plus.svg",
    },
    {
      name: "linkedin",
      link: "https://linkedin.com",
      pathToLogo: "./images/linkedin.svg",
    },
  ],
};

function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}

export default App;
