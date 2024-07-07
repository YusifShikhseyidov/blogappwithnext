import { Posts } from "@/utils/PostsInterface";
import Link from "next/link";

interface PostsProps{
  post: Posts;
}

export default function PostComponent({post}: PostsProps) {
  return (
    <div>
      <Link href={`/posts/${post?.slug?.current}`}>
        <h2>post title</h2>
        <p>post excerpt</p>
        <span>post published at</span>
      </Link>
    </div>
  )
}