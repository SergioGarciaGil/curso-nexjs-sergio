import { useRouter } from "next/router";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function User() {
  const router = useRouter();
  console.log(router);
  return (
    <Layout>
      <Title>User Details</Title>
      <p>User ID: {router.query.id}</p>
    </Layout>
  );
}
