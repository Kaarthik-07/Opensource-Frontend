// /app/r/[subredditName]/post/[postId]/comments/page.tsx

import { Metadata } from "next";
// Fetch the post ID and subreddit name directly from the parameters
interface Params {
  params: {
    subredditName: string;
    postId: string;
  };
}

// Define the page metadata
export const metadata: Metadata = {
  title: "Comments",
};

// This is the main component for the comments page
const CommentsPage = async ({ params }: Params) => {
  const { subredditName, postId } = await params;

  return (
    <div>
      <h1>Comments for Post: {postId}</h1>
      <h2>Subreddit: {subredditName}</h2>
      {/* Render your comments section here */}
      <p>Display comments related to the post here.</p>
    </div>
  );
};

export default CommentsPage;
