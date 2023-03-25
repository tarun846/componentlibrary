import { ReactNode } from "react";

export interface IApplicantStatus {
  className: string;
  children: string;
  type: "Active" | "Paused" | "Inactive";
  [x: string]: any;
}
