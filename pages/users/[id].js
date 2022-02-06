import { useRouter } from "next/router";
export default function User() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>User Details</h1>
      <p>User ID: {router.query.id}</p>
    </div>
  );
}
