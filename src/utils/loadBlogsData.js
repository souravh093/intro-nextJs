const loadBlogsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  return blogs = await res.json();
};

export default loadBlogsData;
