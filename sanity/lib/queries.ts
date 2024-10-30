export const STARTUP_QUERY = `*[_type == "startup"&&defined(slug.current) && !defined($search)||category match $search||title match $search|| author->name match $search]  | order(_createdAt desc) {
    _id,
    title,
    _createdAt,
    author ->{
    _id,name,image,bio
    },
    views,
    description,
    image,
    slug,
    category
  }`;


export const STARTUP_BY_ID_QUERY = `*[_type == "startup"&& _id==$id][0]{
  _id,
  title,
  _createdAt,
  author ->{
  _id,name,image,bio,username
  },
  views,
  description,
  image,
  slug,
  category,
  pitch
}`;

export const STARTUP_VIEWS_QUERY = `*[_type == "startup"&& _id==$id][0]{
  _id,
  views
}`;

