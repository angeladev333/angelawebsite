import React from "react";

function CardItem(props) {
  return (
    <>
      <li className="flex flex-col justify-start items-center bg-primary max-w-[690px] min-h-[250px] text-center rounded-lg transition-all ease-in-out flex-1 m-4 shadow-lg">
        <a
          href={props.path}
          className="flex flex-col w-full rounded-lg overflow-hidden no-underline shadow-lg"  
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="relative w-full pt-[20rem]">
            <img
              src={props.src}
              alt={props.text}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-200 ease-linear hover:scale-110" // Added scale transformation on hover
            />
          </figure>
        </a>
        <div className="flex flex-col justify-between p-6">
          <h5 className="text-lg font-bold">{props.text}</h5>
          <p className="text-tertiary mt-4">{props.techstack}</p>
          <p className="text-secondary mt-2">{props.description}</p>
          <p className="text-tertiary mt-4">{props.collaboration}</p>
        </div>
      </li>
    </>
  );
}

export default CardItem;
