"use client";

import { useRouter } from "next/navigation";
const Home = () => {
  const router = useRouter();

  const navigate = (page: any) => {
    router.push(page);
  };
  return <section></section>;
};

export default Home;
