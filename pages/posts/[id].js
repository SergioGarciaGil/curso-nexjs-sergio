import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function Post() {
  const router = useRouter();
  return (
    <Layout>
      <Title>Post Details</Title>
      <p>Post ID: {router.query.id}</p>
    </Layout>
  );
}
