export interface IDragnDrop {
  className: string;
  uploadFun: (data: File) => void;
  [x: string]: any;
}
