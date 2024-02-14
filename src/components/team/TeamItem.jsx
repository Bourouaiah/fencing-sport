import React from "react";

function TeamItem({ id, name, image }) {
  return (
    <div className="h-[600px] pb-[90px] relative rounded-lg overflow-hidden">
      <img
        className="w-[100%] h-[100%] object-top object-cover"
        src={image}
        alt="athlete"
      />
      <h2 className="absolute left-0 w-[100%] bg-special-green font-bold text-special-gray p-[7px] text-center">{name}</h2>
    </div>
  );
}

export default TeamItem;
