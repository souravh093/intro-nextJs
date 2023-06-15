"use client";

import { useParams, useSearchParams } from "next/navigation";
import React from "react";

const SinglePage = ({ params, searchParams }) => {
  const [year, id] = params.segments || [];
  const params2 = useParams();
  const searchParams2 = useSearchParams();

  console.log(params2.segments.split("/"), searchParams2.get("title"));

  return (
    <div>
      this blog publish on {year} at {id}
      <br />
      {searchParams.title}
    </div>
  );
};

export default SinglePage;
