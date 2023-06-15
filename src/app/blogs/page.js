import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Next Try || blogPage",
  description: "description",
};

const blogs = [
  {
    id: 1,
    year: 2017,
    title: "title 1",
  },
  {
    id: 2,
    year: 2013,
    title: "title 2",
  },
  {
    id: 3,
    year: 2019,
    title: "title 3",
  },
  {
    id: 4,
    year: 2016,
    title: "title 4",
  },
];

const BlogsPage = () => {
  return (
    <div className="container mx-auto">
      {blogs.map(({ id, year, title }) => (
        <Link
          className="border flex flex-col border-blue-500 p-2 my-2"
          key={id}
          href={{
            pathname: `/blogs/${year}/${id}`,
            query: {
              title: title,
            },
          }}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
