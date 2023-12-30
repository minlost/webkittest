export default function Home() {
  return (
    <div className="h-full">
      <div className=" border-blue-500 ">
        <div className="bg-red-200 w-full">this is header</div>
      </div>
      <div className="bg-blue-200 h-64">next part</div>{" "}
      <div className="bg-blue-200 h-64">next part</div>
      <div className="bg-red-200 h-64">next part</div>
      <div className="bg-blue-200 h-64">next part</div>
      <div className="bg-red-500 w-full ">this bottom part</div>
      <div className="w-[30%] bg-yellow-200 absolute right-0 top-0 h-full">
        sidebar
      </div>
    </div>
  );
}
