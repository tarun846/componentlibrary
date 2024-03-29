import classNames from "classnames";
import PropTypes from "prop-types";

const sizeClassValues = {
  small: "h-3 w-3",
  medium: "h-5 w-5",
  large: "h-8 w-8",
};

export default function Loader({
  className,
  size,
}: {
  className: string;
  size:  'small' | 'medium' | 'large';
}) {
  return (
    <svg
      className={classNames(
        sizeClassValues[size],
        "animate-spin my-1",
        className || "text-gray-900"
      )}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      ></path>
    </svg>
  );
}

Loader.propTypes = {
  /**
   * additional class anmes
   */
  className: PropTypes.string,
  /**
   * size of loader
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Loader.defaultProps = {
  className: "",
  size: "medium",
};
