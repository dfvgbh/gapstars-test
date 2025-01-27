export type Industry = {
  id: number;
  name: string;
};

export type Company = {
  uuid: string;
  images: {
    "32x32": string;
    "74x74": string;
    "100x100": string;
  };
  income_streams: {
    id: number;
    name: string;
  }[];
  industries: Industry[];
  name: string;
  tagline: string;
  total_jobs_available: number;
};

export type IndustryGroup = {
  industry: Industry;
  companies: Company[];
};
