import React from "react";

const Card = ({ info }) => {
  return (
    <div className="fnf-card border rounded m-2 p-2 text-center shadow-sm">
      <img
        src={`https://robohash.org/${info.id}?size=200x200`}
        alt="fnf card"
      />
      <div className="pt-4">
        <h4>{info.name}</h4>
        <p>{info.username}</p>
        <p>{info.email}</p>
      </div>
    </div>
  );
};

export default Card;
