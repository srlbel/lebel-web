import type { PageLoad } from "./$types";

export const load: PageLoad = async () => {
  const posts = import.meta.glob("/src/lib/blogs/*.md", { eager: true });

  const postList = Object.entries(posts).map(([path, post]) => {
    const slug = path.split("/").pop().replace(".md", "");

    return {
      slug,
      ...(post as { metadata: { title: string; date: string } }).metadata,
    };
  });

  return {
    posts: postList,
  };
};
