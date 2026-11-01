import { redirect } from "next/navigation";
import { getBlogBySlug } from "@/data/blogs";

interface BlogPostRedirectProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostRedirectPage({ params }: BlogPostRedirectProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (post?.externalUrl) {
    redirect(post.externalUrl);
  }

  redirect("/blog");
}
