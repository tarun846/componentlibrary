import PropTypes from "prop-types";
import classNames from "classnames";
import _ from "lodash";

import default_experience from "../assets/Exp.png";
import default_education from "../assets/Edu.png";
import { ILockedContent } from "./types";

export default function LockedContent({
  className,
  hospitalImageURL,
  title,
  subtitle,
  time: { start_date, end_date, experience },
  locked,
  location,
  education,
  ...rest
}: ILockedContent) {
  let startYear = _.chain(start_date).split(" ").last().value();
  let endYear = _.chain(end_date).split(" ").last().value();

  const DummyData = () => (
    <div className={classNames("flex space-x-6 blur-sm", className)} {...rest}>
      <div className="h-12 w-12 mt-2 bg-[#c9f0e933] flex justify-center items-center rounded border border-[#D7DDE7]">
        {education ? (
          <img src={default_education} alt="education_image" />
        ) : (
          <img
            src={default_experience}
            alt="name"
            className={classNames("w-7 h-7")}
          />
        )}
      </div>
      <div className="flex-col space-y-2 text-sm text-theme-gray-500 font-regular">
        <p className="text-xl text-theme-gray-800 font-sans">
          {"Position Title"}
        </p>
        <div className="flex">
          <p>Some Company</p>
          <div className="w-1 h-1 m-2 rounded-lg bg-[#d9d9d9]"></div>
          <p>No-Time</p>
        </div>
        {education ? (
          <div>{"Jan 1900 - Jan 1900"}</div>
        ) : (
          <div className="flex">
            <div>{"Jan 1900 - Jan 1900"}</div>
            <div className="w-1 h-1 m-2 rounded-lg bg-[#d9d9d9]"></div>
            <p>{"0 yr 0 mos"}</p>
          </div>
        )}
        <p>{"location"}</p>
      </div>
    </div>
  );

  return locked ? (
    <DummyData />
  ) : (
    <div className={classNames("flex space-x-6 ", className)} {...rest}>
      <div className="h-12 w-12 mt-2 bg-[#c9f0e933] flex justify-center items-center rounded border border-[#D7DDE7]">
        {education ? (
          <img src={default_education} alt="education_image" />
        ) : (
          <img
            src={
              hospitalImageURL && !locked
                ? hospitalImageURL
                : default_experience
            }
            alt="hospital_image"
            className={classNames(
              !hospitalImageURL ? "w-2 h-2" : "object-contain"
            )}
          />
        )}
      </div>
      <div className="flex-col space-y-2 text-sm text-theme-gray-500 font-regular">
        <p className="text-xl text-theme-gray-800 font-sans">{title}</p>
        <div className="flex">
          {subtitle?.map((value, index) => (
            <div key={index} className="flex">
              {index === 1 && (
                <div className="w-1 h-1 m-2 rounded-lg bg-[#d9d9d9]"></div>
              )}
              <p className="text-theme-gray-700">{value}</p>
            </div>
          ))}
        </div>
        {education ? (
          <div>{`${startYear} - ${endYear}`}</div>
        ) : (
          <div className="flex">
            <div>{`${start_date} - ${end_date}`}</div>
            <div className="w-1 h-1 m-2 rounded-lg bg-[#d9d9d9]"></div>
            <p>{experience}</p>
          </div>
        )}
        {location && <p>{locked ? "location" : location}</p>}
      </div>
    </div>
  );
}

LockedContent.PropTypes = {
  className: PropTypes.string,
  hospitalImageURL: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.string),
  time: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.string,
  locked: PropTypes.bool,
  education: PropTypes.bool,
};

LockedContent.defaultProps = {
  className: "",
  hospitalImageURL: "",
  title: "",
  subtitle: [],
  time: {
    start_date: "Jan 2019",
    end_date: "Feb 2020",
    experience: "1 yr 10 mos",
  },
  location: "Nandanam, Chennai, Tamil Nadu",

  locked: true,

  education: false,
};
