import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "lodash";
import { IApplicantStatus } from "./types";
export default function ApplicantStatus({
  className,
  children,
  type,
  ...rest
}: IApplicantStatus) {
  const statuses = {
    0: [
      "Active",
      "Submitted",
      "Cv Shortlisted",
      "Hired",
      "Interviewed",
      "active",
      "Success",
    ],
    1: ["Paused", "Draft", "Applied", "On Hold", "Pending"],
    2: ["Inactive", "Rejected", "Closed", "Failed"],
  };

  function findStatusType(type: string) {
    if (statuses[0].includes(type))
      return "bg-theme-green-10 text-theme-green-500";
    else if (statuses[1].includes(type))
      return "bg-theme-yellow-10 text-theme-yellow-500";
    else if (statuses[2].includes(type))
      return "bg-theme-red-10 text-theme-red-500";
  }
  console.log(children);

  return (
    <div
      className={classNames(
        "w-fit font-regular text-sm px-3 rounded capitalize leading-6",
        findStatusType(_.startCase(type)),
        className
      )}
      {...rest}
    >
      <p>{children?.replace("_", " ")}</p>
    </div>
  );
}

ApplicantStatus.propTypes = {
  // to add additional classes later on
  className: PropTypes.string,

  // to determine what type of tag it is
  type: PropTypes.string,
};

ApplicantStatus.defaultProps = {
  className: "",
};
