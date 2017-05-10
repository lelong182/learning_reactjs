import React from "react";
import "./index.css";

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);

export const StudentTable = ({records, deleteRecord}) => (
  <table className="table table-striped table-bordered">
    <thead>
      <tr>
        <th>ID</th>
        <th>Avatar</th>
        <th>Fullname</th>
        <th>Role</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {records.map((record) => (
        <tr key={record.id}>
          <td>{record.id}</td>
          <td><img width={50} src={record.avatar} alt="img"/></td>
          <td>
            {capitalizeFirstLetter(record.fullname)}
          </td>
          <td>{record.role}</td>
          <td>
            <button type="button" className="btn btn-primary mgr-10">Update</button>
            <button onClick={() => deleteRecord(record.id)} type="button" className="btn btn-danger">Remove</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);