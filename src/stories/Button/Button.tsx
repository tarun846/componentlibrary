import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Loader from "../assets/Loader";
import { IButton } from "./types";

/**
 * Primary UI component for user interaction
 */

const typeClassValues = {
  primary: "text-center",
  secondary: "text-center",
  plain: "text-center",
};

const sizeClassValues = (rounded : boolean ) => ({
  small: classNames("py-2 text-sm", rounded ? "px-3" : "px-2"),
  medium: classNames("py-3 text-lg", rounded ? "px-4" : "px-3"),
  large: classNames("py-5 text-xl", rounded ? "px-5" : "px-4"),
});

const loaderColorClassValues = {
  primary: "text-white",
  secondary: "text-theme-green-500",
  plain: null,
};

const fontColorClassValues = (warning : boolean , loading : boolean ) => ({
  primary: warning
    ? "bg-red-500 text-white"
    : classNames(
        "bg-theme-green-500 text-white",
        !loading && "hover:bg-theme-green-400 active:bg-theme-green-600"
      ),
  secondary: warning
    ? "bg-red-100 text-red-500"
    : classNames(
        "text-theme-green-500 bg-theme-green-100 ",
        !loading && " hover:bg-theme-green-200 active:bg-theme-green-100"
      ),
  plain: warning
    ? "bg-white text-red-500"
    : classNames(
        "text-theme-green-500",
        !loading && " hover:text-theme-green-400 active:text-theme-green-600"
      ),
});

export const Button = ({
  className,
  labelClassName,
  type,
  submit,
  href,
  warning,
  loading,
  size,
  label,
  rounded,
  icon,
  onClick,
  children,
  disabled,
  ...props
}: IButton) => {

  const typeClass = typeClassValues[type];
  console.log(typeClass);

  if (href) {
    return (
      <a
        className={classNames(
          typeClass,
          fontColorClassValues(warning, loading)[type],
          sizeClassValues(rounded)[size],
          rounded ? "rounded-full" : "rounded-lg",
          "inline-block transition-colors font-sans",
          loading ? "hover:cursor-progress" : "",
          className
        )}
        href={href}
        {...props}
      >
        <div
          className={classNames(
            "flex flex-row space-x-2 items-center",
            labelClassName
          )}
        >
          {icon}
          {(label || children) && (
            <span className="w-full">{label || children}</span>
          )}
        </div>
      </a>
    );
  }
  return (
    <button
      type={submit ? "submit" : "button"}
      disabled={disabled ? true : false}
      className={classNames(
        typeClass,
        fontColorClassValues(warning, loading)[type],
        sizeClassValues(rounded)[size],
        rounded ? "rounded-full" : "rounded-lg",
        "transition-colors font-sans",
        loading ? "hover:cursor-progress" : "",
        disabled ? "bg-theme-green-400 opacity-70 cursor-not-allowed" : "",
        className
      )}
      onClick={() => {
        if (!loading) onClick();
      }}
      {...props}
    >
      {loading ? (
        <div className="flex justify-center">
          <Loader size={size} className={loaderColorClassValues[type]!} />
        </div>
      ) : (
        <div
          className={classNames(
            "flex flex-row space-x-2 items-center",
            labelClassName
          )}
        >
          {icon}
          {(label || children) && (
            <span className="w-full">{label || children}</span>
          )}
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  /**
   * Additional classnames to be added
   */
  className: PropTypes.string,
  /**
   * What is the type of button
   */
  type: PropTypes.oneOf(["primary", "secondary", "plain"]),
  /**
   * if the button is of submit type
   */
  submit: PropTypes.bool,
  /**
   * if the button is an anchor link
   */
  href: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Whether the button is to warn users
   */
  warning: PropTypes.bool,
  /**
   * Whether to show loader
   */
  loading: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * rounded fully or not
   */
  rounded: PropTypes.bool,
  /**
   * icon node
   */
  icon: PropTypes.node,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: "",
  type: "primary",
  label: null,
  size: "medium",
  warning: false,
  submit: false,
  href: null,
  loading: false,
  onClick: () => {},
  rounded: false,
  icon: null,
  disabled: false,
};
