import Link from "next/link";
export default function Home() {
  return (
    <div>
      
      <h1 className ="bg-linear-to-r from-[#667A56] to-[#0b3754] rounded-4xl p-5 text-[#ffffff]">Welcome to my page!</h1>
      <p>Helooooo</p>
      <Link href={"/profile"}>Profile</Link>
    </div>
  );
}
