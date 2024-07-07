import Header from "@/components/Header";
import {client} from "../../../sanity/lib/client"
import { Post } from "@/utils/PostsInterface";
import PostComponent from "@/components/PostComponent";

async function getPosts(){
  const query = `
    *[_type=="post"]{
      title,
      slug,
      excerpt,
      body,
      publishedAt,
    }
  `
  const postsData = await client.fetch(query)
  return postsData;
}

export default async function Home() {
  const posts: Post[]= await getPosts()
  return (
    <div className="flex min-h-screen flex-col items-start justify-start py-16">
      <Header title='Posts'/>
      <div>
        {posts?.length > 0 && posts?.map(post=>(
          <PostComponent post={post} key={post.slug.current} />
        ))}
      </div>
    </div>
  );
}
