import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import blog_default_img from "../assets/blog_default_img.png";
import { IArticleCard } from "./types";
export default function ArticleCard({
  articleSlug,
  imgSrc,
  title,
  topic,
  name,
  date,
  monthyear,
  className,
  ...rest
}: IArticleCard) {
  console.log(blog_default_img);

  return (
    <div
      className={classNames(
        "max-w-[350px] lg:min-w-[305px] lg:max-w-[374px] bg-transparent mb-10 lg:mb-0 flex-col justify-center items-center mx-auto",
        className
      )}
      {...rest}
    >
      <a href={`/blog/${articleSlug}`}>
        <img
          src={imgSrc ? imgSrc : blog_default_img}
          alt="article"
          className="max-h-[8.8rem] lg:max-h-[200px] lg:w-[310px] xl:min-w-[373px] object-cover object-center rounded-xl w-full cursor-pointer"
        />
      </a>
      <div className="flex justify-between my-4">
        <a href={`/blog/${articleSlug}`}>
          <div className="lg:min-h-[114px] lg:max-h-[114px]">
            <h4 className="text-xl font-mulish font-medium lg:text-[24px] lg:leading-[28.4px] cursor-pointer overflow-hidden line-clamp-3 py-1">
              {title}
            </h4>
          </div>
        </a>
        <div className="flex-col font-sans font-medium pl-3">
          <p className="flex justify-end text-[32px] leading-[38.4px]">
            {date}
          </p>
          <p className="whitespace-nowrap text-base ">{monthyear}</p>
        </div>
      </div>

      <div
        className={classNames("w-full h-[1px] bg-[#DAE8E5]", className)}
      ></div>
      <div className="flex justify-start items-center mt-4 font-regular text-sm ">
        <a href={`/blog?topic=${topic}`}>
          <a>{topic}</a>
        </a>

        <div className="w-1 h-1 bg-[#D9D9D9] rounded-xl mx-4"></div>
        <a href={`/blog?name=${name}`}>
          <a>{name}</a>
        </a>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  monthyear: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ArticleCard.defaultProps = {
  title: "Next of kin in the medical decision making process",
  topic: "Business of health",
  name: "Karan modi",
  date: "05",
  monthyear: "Oct 2022",
  imgSrc: "",
};
