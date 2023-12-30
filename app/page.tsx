export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <div className="bg-red-200 w-full">this is header</div>
        </main>
        <div className="bg-red-500 w-full mt-auto">
          this bottom part of 100vh
        </div>
      </div>
      <div className="bg-blue-200 h-64">next part</div>
    </div>
  );
}
