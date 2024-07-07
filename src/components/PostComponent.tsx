import { Post } from "@/utils/PostsInterface";
import Link from "next/link";

interface PostProps{
  post: Post;
}

export default function PostComponent({post}: PostProps) {
  
  return (
    <div className={cardContainerStyles}>
      <Link href={`/posts/${post?.slug?.current}`} className="p-4 display: inline-block">
        <h2 className="uppercase m-2">{post?.title || `Post Title`}</h2>
        <p className="mx-2 m-4">{post?.excerpt.substring(0, 150) || `Post Excerpt`}{post?.excerpt.length > 0 && `...`}</p>
        <p className="ml-2">{post?.publishedAt || `post published at 00.00`}</p>
      </Link>
    </div>
  )
}

const cardContainerStyles = `
  mb-8
  border
  border-neutral-200
  shadow-sm
  transition-all
  duration-[200ms]
  shadow-amber-50
  hover:shadow-md
  hover:bg-purpe-500
  dark:hover:bg-gray-950
`