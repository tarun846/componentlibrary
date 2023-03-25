import React, { useCallback } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDropzone } from "react-dropzone";
import { IDragnDrop } from "./types";
export const DragnDrop = ({ className, uploadFun, ...rest }: IDragnDrop) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    uploadFun(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className={classNames(
        isDragActive ? "opacity-50" : "",
        "w-auto h-96 border-[1px]  border-dashed border-theme-green-500 rounded self-stretch grow-0 gap-4 p-3 flex flex-col items-center justify-center bg-theme-green-100/50",
        className
      )}
      {...rest}
    >
      <div className="w-full">
        <input {...getInputProps()} accept="application/pdf" />

        <div className="flex justify-center mb-4 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
            />
          </svg>
        </div>

        <div className="hidden max-w-72 h-14 md:flex flex-col justify-start items-center gap-2 p-0 grow-0">
          <div className="h-8 font-sans text-xl leading-7 text-theme-gray-800 grow-0 font-medium not-italic tracking-normal text-left">
            Select a Resume file to upload
            {isDragActive}
          </div>
          <div className="w-40 h-5 text-sm font-regular grow-0 font-normal not-italic leading-7 tracking-normal text-left text-theme-gray-600">
            or drag or drop it here
          </div>
        </div>
      </div>
    </div>
  );
};
DragnDrop.propTypes = {
  allowedFiles: PropTypes.array.isRequired,
  fileSelected: PropTypes.bool,
};

DragnDrop.defaultProps = {
  allowedFiles: [],
  fileSelected: false,
};
