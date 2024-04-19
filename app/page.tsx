"use client";

import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();

  const navigate = (page: any) => {
    router.push(page);
  };
  return (
    <section>
      <h1>useRouter</h1>
      <button className=" border px-2 py-4" onClick={() => navigate("about")}>
        Goto About Page
      </button>
      <br />
      <button className=" border px-2 py-4" onClick={() => navigate("login")}>
        Goto Login Page
      </button>
    </section>
  );
};

export default Home;
