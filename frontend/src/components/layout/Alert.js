import React from "react";
import Alert from "react-bootstrap/Alert";
import { BsCheckAll, BsXLg } from "react-icons/bs";

export const successAlert = (message) => {
  return (
    <>
      <Alert variant="dark">
        <BsCheckAll className="text-success" /> {message}
      </Alert>
    </>
  );
};

export const errorAlert = (message) => {
  return (
    <>
      <Alert variant="dark">
        <BsXLg className="text-danger" /> {message}
      </Alert>
    </>
  );
};
