import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="bg-red-200 w-full"> this is header</div>
      <div className="bg-red-500 w-full absolute bottom-0 left-0 ">
        {" "}
        this is footer
      </div>
    </main>
  );
}
