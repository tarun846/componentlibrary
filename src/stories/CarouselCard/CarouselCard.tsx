import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { ICarouselCard } from "./types";

export function CarouselCard({
  classnames,
  content,
  imageSrc,
  name,
  place,
  ...rest
}: ICarouselCard) {
  return (
    <div
      {...rest}
      className={classNames(
        classnames,
        "md:w-cardWidth border min-h-[337px] mx-auto border-theme-gray-100 rounded-lg p-8 flex flex-col gap-6 justify-between shadow-carosuleCard"
      )}
    >
      <p className="text-left h-fit font-regular text-sm font-normal overflow-hidden leading-[21px] text-ellipsis">
        {content}
      </p>
      <div className="flex items-center gap-4 ">
        <img
          src={imageSrc}
          alt={name}
          className="rounded-full h-[60px] w-[60px]"
        />
        <div className="flex flex-col gap-1">
          <span className="font-medium">{name}</span>
          <span className="font-regular text-sm text-theme-gray-400">
            {place}
          </span>
        </div>
      </div>
    </div>
  );
}

CarouselCard.propTypes = {
  classnames: PropTypes.string,
  content: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  place: PropTypes.string,
};

CarouselCard.defaultProps = {
  classnames: "",
  content: "this is from storybook",
  imageSrc: "",
  name: "dev",
  place: "place",
};
