"use client";

import { useRouter } from "next/navigation";

export default function Facebook() {
  const router = useRouter();
  const handleBtn = () => {
    router.push("/");
  };

  return (
    <div>
      Facebook page
      <button onClick={() => handleBtn()}>Back Home</button>
    </div>
  );
}
