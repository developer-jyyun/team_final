import React from "react";

interface Props {
  text: string;
  iconSrc: string;
  iconAlt: string;
}

const Schedule = ({ text, iconSrc, iconAlt }: Props) => {
  return (
    <div className="relative">
      <li className="flex">
        <img src={iconSrc} alt={iconAlt} />
        <p className="ml-1.5 text-black-4 text-xxs font-normal">{text}</p>
      </li>
    </div>
  );
};

export default Schedule;
