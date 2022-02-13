import Layout from "../../components/layout";
import Head from "next/Head";
import Title from "../../components/title";

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>Posts #{post.id}</title>
        <meta
          name="description"
          content="En este curso de webtutoriales aprenderas sobre Next JS"
        />
      </Head>
      <Title>Post Details</Title>
      <div className="card1" id="grid1">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <style jsx>
        {`
          #grid1 {
            display: flex;
            flex-wrap: wrap;
            max-width: 600px;
            margin-top: 2rem;
          }
          .card1 {
            margin: 2rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: black;
            text-decoration: none;
            border: 2px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card1:hover,
          .card1:focus,
          .card1:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card1 h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card1 p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
