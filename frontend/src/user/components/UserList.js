import React from "react";
import "./UserItem.css";
import UserItem from "./UserItem";

const UserList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className='center'>
        <h2>No user found.</h2>
      </div>
    );
  }
  return (
    <ul>
      {props.items.map((user) => {
        return (
          <UserItem
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            placeCount={user.places}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
