import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { IProgressTracker } from "./types";

export default function ProgressTracker({ className, children }: IProgressTracker) {
  return (
    <div
      id="parentDiv"
      className={classNames(
        "h-4 bg-neutral-300 shadow-inner relative",
        className
      )}
    >
      <div
        className="bg-theme-green-500 shadow-inner h-4 absolute transition-width ease-in duration-500"
        style={{ width: `${children > 100 ? 100 : children}%` }}
      ></div>
    </div>
  );
}

ProgressTracker.propTypes = {
  className: PropTypes.string,
};

ProgressTracker.defaultProps = {
  className: "",
};
