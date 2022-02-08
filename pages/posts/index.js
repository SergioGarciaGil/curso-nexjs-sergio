import Title from "../../components/title";
import Layout from "../../components/layout";
import Link from "next/link";

// CLIENTE SIDE RENDERIN..

export default function Posts({ posts }) {
  //   const [posts, setPosts] = React.useState([]);

  //   React.useEffect(() => {
  //     const fetchPosts = async () => {
  //       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //       const newPosts = await res.json();
  //       setPosts(newPosts);
  //     };

  //     fetchPosts();
  //   }, []);

  return (
    <Layout>
      <Title>Posts Page</Title>
      <div>
        {posts.map((post) => {
          return (
            <Link href={`/posts/[id]`} as={`/posts/${post.id}`} key={post.id}>
              <a>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
              </a>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}
export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
