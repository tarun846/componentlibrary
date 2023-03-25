import classNames from "classnames";
import PropTypes from "prop-types";
import { usePopperTooltip } from "react-popper-tooltip";
import "react-popper-tooltip/dist/styles.css";
import { IFormLabel } from "./types";

const TooltipButton = ({ tooltip }: { tooltip: string }) => {
  console.log();

  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip();

  return (
    <>
      <button type="button" ref={setTriggerRef}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-4 w-4 text-theme-gray-600"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
      </button>

      {visible && (
        <div
          ref={setTooltipRef}
          {...getTooltipProps({
            className:
              "tooltip-container bg-black text-white border-black font-regular text-xxs",
          })}
        >
          <div
            {...getArrowProps({
              className: "border-black tooltip-arrow",
            })}
          />
          {tooltip}
        </div>
      )}
    </>
  );
};
export default function FormLabel({
  className,
  required,
  children,
  tooltip,
}: IFormLabel) {
  return (
    <div className="font-sans flex flex-row gap-2">
      <label
        className={classNames(
          "text-[15px] leading-6 text-theme-gray-800",
          className
        )}
      >
        {children}
        {required && <span className="text-red-600">*</span>}
      </label>
      {tooltip && <TooltipButton tooltip={tooltip} />}
    </div>
  );
}

FormLabel.propTypes = {
  /**
   * additional class anmes
   */
  className: PropTypes.string,

  /**
   * breadcrumbs
   */
  required: PropTypes.bool,

  /**
   * breadcrumbs
   */
  tooltip: PropTypes.string,
};

FormLabel.defaultProps = {
  className: "",
  required: false,
  tooltip: null,
};
