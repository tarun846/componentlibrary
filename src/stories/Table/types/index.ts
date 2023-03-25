import { ReactNode } from "react";

export interface Idata {
  age: string;
  name: string;
  position: string;
  years: string;
  is_unlocked?: boolean;
}

export interface IcolumnData {
  field: string;
  render: (rowData: Idata) => ReactNode;
}

export interface ITable {
  columnData: IcolumnData[];
  data: Idata[];
  customHeader: boolean;
  children: ReactNode;
}
