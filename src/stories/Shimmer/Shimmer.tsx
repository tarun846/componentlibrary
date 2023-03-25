import classNames from "classnames";
import React from "react";
import PropTypes from "prop-types";
import { IShimmer } from "./types";

export default function Shimmer({
  className,
  rows,
  cols,
  showTitleShimmer = true,
  shimmerObjectClass,
  shimmerTitleClass,
  ...rest
}: IShimmer) {
  console.log(
    className,
    rows,
    cols,
    showTitleShimmer,
    shimmerObjectClass,
    shimmerTitleClass
  );

  return (
    <div
      className={classNames(
        "h-max p-8 bg-white rounded flex flex-col gap-6 ring-1 ring-[#E5EAF5]",
        className
      )}
      {...rest}
    >
      {showTitleShimmer && (
        <div
          className={classNames(
            "h-8 bg-[#ECEFF5] animate-pulse rounded",
            shimmerTitleClass
          )}
        />
      )}
      {new Array(rows).fill(0).map((id, idx) => (
        <div key={`r-${idx}`} className="flex gap-6">
          {new Array(cols)?.fill(0).map((_, index) => (
            <div
              key={`c-${index}`}
              className={classNames(
                "h-8 bg-[#E5EAF5] animate-pulse rounded w-full ring-1 ring-[#E5EAF5]",
                shimmerObjectClass
              )}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

Shimmer.defaultProps = {
  rows: 10,
  cols: 4,
};

Shimmer.propTypes = {
  /**
   * additional classname to add
   */
  className: PropTypes.string,
};
