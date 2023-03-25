import classNames from "classnames";
import PropTypes from "prop-types";
import { ITable } from "./types";

export default function Table({
  columnData,
  data,
  customHeader = false,
  children,
}: ITable) {
  console.log(columnData[0], data[0], customHeader, children);

  return (
    <div className="px-4 sm:px-6 md:px-0 ">
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 p-1 sm:p-0 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
              {customHeader ? (
                <div className="flex justify-between bg-[#eceff5] py-3.5 px-4 md:px-5">
                  {children}
                </div>
              ) : null}

              <table className="min-w-full divide-y divide-gray-300">
                <thead
                  className={classNames(
                    customHeader ? "bg-white " : "bg-[#eceff5]"
                  )}
                >
                  <tr>
                    {columnData?.map((field, idx) => (
                      <th
                        key={idx}
                        scope="col"
                        className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-regular font-bold text-[#404759] sm:pl-6"
                      >
                        {field.field}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {data?.map((person, id) => {
                    console.log(person);

                    return (
                      <tr key={id}>
                        {columnData?.map((obj, idx) => {
                          console.log(obj, "sady");

                          return (
                            <td
                              key={idx}
                              className={classNames(
                                person.is_unlocked ? "bg-theme-green-100" : "",
                                "whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 text-[#404759]"
                              )}
                            >
                              {obj?.render(person)}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Table.propTypes = {
  /* 
     table header and the fields to render
  */
  columnData: PropTypes.array.isRequired,

  /*
  contains array of {} 
  */
  data: PropTypes.array.isRequired,
};

Table.defaultProps = {
  columnData: [],
  data: [],
};
