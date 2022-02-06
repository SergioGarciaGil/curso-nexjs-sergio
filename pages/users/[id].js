import { useRouter } from "next/router";
import Navbar from "../../components/navbar";
import Title from "../../components/title";

export default function User() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Navbar />
      <Title>User Details</Title>
      <p>User ID: {router.query.id}</p>
    </div>
  );
}
