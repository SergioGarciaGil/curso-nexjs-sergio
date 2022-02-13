import Layout from "../components/layout";
import Head from "next/Head";
import Title from "../components/title";
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Landing pages de Home</title>
        <meta
          name="description"
          content="En este curso de webtutoriales aprenderas sobre Next JS"
        />
      </Head>
      <Title>Home Page</Title>
      <p>Aprendamos NextJS con sergio Garcia</p>
      <style>
        {`
        p {
          color: darkGray;
        }
        p:hover{
          color:darkred;
        }
        `}
      </style>
    </Layout>
  );
}
