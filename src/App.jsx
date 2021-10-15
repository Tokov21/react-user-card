import UserCard from "./components/UserCard/UserCard";

import "./App.css";

const user = {
  firstName: "John",
  lastName: "Doe",
  avatarPath: "./images/avatar.png",
  message:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem dolore error dicta, numquam neque.",
};

function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}

export default App;
