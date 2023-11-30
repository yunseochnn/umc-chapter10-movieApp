import React, { useState } from "react";
import "../index.css";

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="log-container">
      {isLoggedIn ? (
        <button className="btn" onClick={handleLogoutClick}>
          로그아웃
        </button>
      ) : (
        <button className="btn" onClick={handleLoginClick}>
          로그인
        </button>
      )}
      {isLoggedIn ? (
        <p className="log">환영합니다!</p>
      ) : (
        <p className="log">로그인 해주세요!</p>
      )}
    </div>
  );
}

export default LoginControl;
