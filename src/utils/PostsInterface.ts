export interface Posts{
  title: "string";
  slug: {current: "string"};
  publishedAt: "string";
  excerpt: "string";
  body: any;
  tags: Array<Tags>;
  _id: 'string';
}

export interface Tags{
  name: 'string',
  slug: {current: 'string'};
  _id: 'string';
}