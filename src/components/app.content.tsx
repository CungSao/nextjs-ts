"use client";
import Link from "next/link";

function AppHeader() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/facebook">facebook</Link>
        </li>
        <li style={{ margin: "20px 0px" }}>
          <Link href="/youtube">youtube</Link>
        </li>
        <li>
          <Link href="/twitter">twitter</Link>
        </li>
      </ul>
    </div>
  );
}

export default AppHeader;
