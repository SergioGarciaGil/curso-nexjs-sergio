import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function Post() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <Title>Post Details</Title>
      <p>Post ID: {router.query.id}</p>
    </div>
  );
}
