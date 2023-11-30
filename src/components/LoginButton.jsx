import React from "react";
import { Link } from "react-router-dom";

export default function LoginButton() {
  return (
    <>
      <Link to="/login">
        <button className="btn">로그인</button>
      </Link>
    </>
  );
}
