import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  return (
    <div>
      <h1>Post Details</h1>
      <p>Post ID: {router.query.id}</p>
    </div>
  );
}
