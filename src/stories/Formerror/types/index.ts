export interface Imeta {
  touched: boolean;
  error: string;
}

export interface IFormError {
  className: string;
  meta: Imeta;
  [key: string]: any;
}
