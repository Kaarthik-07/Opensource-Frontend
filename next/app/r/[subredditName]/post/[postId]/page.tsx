// app/post/page.tsx
import Post from "@/app/components/posting";
const page = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Centered Post Section */}
      <main className="flex-1 w-full flex justify-center px-4 mt-4">
        <div className="w-full max-w-2xl">
          <Post />
        </div>
      </main>
    </div>
  );
};

export default page;
