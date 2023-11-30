import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import LoginControl from "./LoginControl";
import LoginButton from "./LoginButton";
export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-nav">
          <Link className="logo" to="/">
            <img
              style={{ width: "154px", height: "20px" }}
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt="로고"
            />
          </Link>
          <ul>
            <li>
              <Link className="nav" to="/movie">
                영화
              </Link>
            </li>
            <li>
              <Link className="nav" to="/tv">
                TV 프로그램
              </Link>
            </li>

            <li>
              <Link className="nav" to="/person">
                인물
              </Link>
            </li>
            <LoginButton />
          </ul>
        </div>
      </div>
    </div>
  );
}
