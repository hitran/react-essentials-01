export type Concept = {
  title: string;
  description: string;
  image: string;
};

export type Concepts = Concept[];

export type Example = {
  title: string;
  description: string;
  code: string;
};

export type Examples = {
  [key: string]: Example;
};
