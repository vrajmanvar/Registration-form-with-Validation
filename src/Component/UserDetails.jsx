import React from "react";
import "./UserDetails.css";
import { FaUser } from "react-icons/fa";

export const UserDetails = ({ users, deleteUser, editUser }) => {
  return (
    <form className="user-details-form">
      <h3 id="ud">User Details</h3>
      <div className="table-main">
        {users.length > 0 ? (
          <table className="ud-table">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Birth Date</th>
                <th>Address</th>
                <th>Birth Place</th>
                <th>Mobile Number</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>
                    {user.picture ? (
                      <img
                        src={user.picture}
                        alt="Profile"
                        style={{ width: 50, height: 50, borderRadius: "50%" }}
                      />
                    ) : (
                      <FaUser />
                    )}
                  </td>
                  <td>{`${user.fname} ${user.lname}`}</td>
                  <td>{user.birth_date}</td>
                  <td>{`${user.address1}, ${user.address2}`}</td>
                  <td>{user.birth_place}</td>
                  <td>{user.ph}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => editUser(index)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteUser(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3 className="no-data-message">No User Found</h3>
        )}
      </div>
    </form>
  );
};
