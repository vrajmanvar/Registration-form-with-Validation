import React, { useState } from "react";
import "./App.css";
import { RegistrationForm } from "./Component/RegistrationForm";
import { UserDetails } from "./Component/UserDetails";

function App() {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );
  const [currentUserIndex, setCurrentUserIndex] = useState(null);

  const addUser = (newUser) => {
    const updatedUserData =
      currentUserIndex !== null
        ? users.map((user, index) =>
            index === currentUserIndex ? newUser : user
          )
        : [...users, newUser];
    setUsers(updatedUserData);
    localStorage.setItem("users", JSON.stringify(updatedUserData));
    setCurrentUserIndex(null);
  };

  const deleteUser = (index) => {
    const updatedUserData = users.filter((_, i) => i !== index);
    setUsers(updatedUserData);
    localStorage.setItem("users", JSON.stringify(updatedUserData));
  };

  const editUser = (index) => {
    setCurrentUserIndex(index);
  };

  return (
    <div className="main">
      <RegistrationForm
        addUser={addUser}
        currentUser={currentUserIndex !== null ? users[currentUserIndex] : null}
      />
      <UserDetails users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
