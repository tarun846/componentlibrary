import classNames from "classnames";
import PropTypes from "prop-types";
import { IFormError } from "./types";

export default function FormError({ className, meta, ...props }: IFormError) {
  console.log(meta);

  if (meta?.touched && meta?.error)
    return (
      <p
        className={classNames(
          `mt-1 text-[11px] text-[#db4d4d] font-regular ${props.name}-ErrorMessage`,
          className
        )}
        {...props}
      >
        {meta?.error}
      </p>
    );
  return null;
}

FormError.propTypes = {
  /**
   * additional class anmes
   */
  className: PropTypes.string,
  /**
   * size of loader
   */
  meta: PropTypes.shape({
    touched: PropTypes.bool.isRequired,
    error: PropTypes.string,
  }),
};

FormError.defaultProps = {
  className: "",
  error: null,
};
