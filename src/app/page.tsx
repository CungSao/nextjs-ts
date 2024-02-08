import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li><Link href="/facebook">facebook</Link></li>
        <li style={{ margin: "20px 0px" }}><Link href="/youtube">youtube</Link></li>
        <li><Link href="/twitter">twitter</Link></li>
      </ul>
    </div>
  )
}
