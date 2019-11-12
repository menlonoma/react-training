import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "@athena/forge";

function Users({ users, deleteUser }) {
  const h1Style = {
    color: "red",
    marginBottom: 20
  };

  return (
    <>
      <h1 className="header" style={h1Style}>
        Users
      </h1>
      <Link to="/user">
        <Button text="Add User" icon="Add" />
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              {/* Delay execution via arrow func */}
              <td>
                <button
                  aria-label={`Delete user ${user.name}`}
                  onClick={event => deleteUser(user.id)}
                >
                  Delete
                </button>
                <Link to={"/user/" + user.id}>
                  <button>Edit</button>
                </Link>
              </td>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default Users;
