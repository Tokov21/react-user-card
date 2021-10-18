import UserCard from "./components/UserCard";

import "./App.css";

const user = {
  firstName: "John",
  lastName: "Doe",
  avatarPath: "./images/avatar.png",
  message:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem dolore error dicta, numquam neque.",
  socials: [
    { name: "facebook", link: "https://facebook.com" },
    { name: "twitter", link: "https://twitter.com" },
    { name: "googlePlus", link: "https://plus.google.com/" },
    { name: "linkedin", link: "https://linkedin.com" },
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
