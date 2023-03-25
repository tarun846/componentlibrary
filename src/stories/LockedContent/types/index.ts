export interface ILockedContent {
  className: string;
  hospitalImageURL: string;
  title: string;
  subtitle: string[];
  time: {
    start_date: string;
    end_date: string;
    experience: string;
  };
  location: string;
  locked: boolean;
  education: boolean;
  [key: string]: any;
}
