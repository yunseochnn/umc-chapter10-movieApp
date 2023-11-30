import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { URL } from "../components/Movie";

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();

  return (
    <div className="page-container">
      <div style={{ display: "flex" }}>
        <img
          style={{ width: "300px", height: "450px" }}
          src={URL + state.poster_path}
          alt="영화 포스터 이미지"
        />
        <div>
          <div style={{ fontSize: "30px" }}>{title}</div>
        </div>
      </div>
    </div>
  );
}
