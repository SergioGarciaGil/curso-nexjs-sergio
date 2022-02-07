import Layout from "../components/layout";
import Title from "../components/title";
export default function Home() {
  return (
    <Layout>
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
