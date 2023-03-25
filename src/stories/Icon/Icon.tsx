import PropTypes from "prop-types";
import { Iicon } from "./types";

export default function Icon({ icon, className, ...props }: Iicon) {
  console.log(icon);

  switch (icon) {
    case "tick":
      return (
        <svg
          width={20}
          height={20}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <path
            d="m16.875 5.625-8.75 8.75L3.75 10"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "hamburger":
      return (
        <svg
          width={24}
          height={24}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          {...props}
        >
          <rect width="24" height="2" />
          <rect y="10" width="24" height="2" />
          <rect y="20" width="24" height="2" />
        </svg>
      );
    default:
      return null;
  }
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
};

Icon.defaultProps = {};
