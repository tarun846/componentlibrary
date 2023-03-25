import { ReactNode } from 'react';
export interface IButton {
  className : string ;
  labelClassName : string ;
  type : 'primary' | 'secondary' | 'plain'  ;
  submit : boolean;
  href : string ;
  warning : boolean ;
  loading : boolean ;
  size : "small" | "medium" | "large" ;
  label : string ;
  rounded : boolean ;
  icon : ReactNode ;
  onClick : () => void  ;
  children : ReactNode ;
  disabled : boolean ;
}