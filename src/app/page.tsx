import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [

  "https://mgga5jh3v5.ufs.sh/f/07ZO2NqoIuMHrDH9Px1MdGhQReXJogFrU48vBkI1Hicab0jZ",
  "https://mgga5jh3v5.ufs.sh/f/07ZO2NqoIuMHxiEtG8h06YfFZ5iyhWrXT9zwIKbSQ8UPckNJ",
  "https://mgga5jh3v5.ufs.sh/f/07ZO2NqoIuMHVbUDkNPGXy3CQnYpDct2dB8JaUiVAo6wbhvk",
  "https://mgga5jh3v5.ufs.sh/f/07ZO2NqoIuMHQ97q3DbIbKiGPESkWTB2mxjHRfyL4uNa5XgC",
  "https://mgga5jh3v5.ufs.sh/f/07ZO2NqoIuMHAuYPmBkw4Op1ukxqD5loQeg32EaTXFjbcdYK",
  "https://mgga5jh3v5.ufs.sh/f/07ZO2NqoIuMHNw5EfEHcnfbAr5FRSYMClJ4txpQ9ouhm8GkK",
  "https://mgga5jh3v5.ufs.sh/f/07ZO2NqoIuMHv548G4iwj5w8YhqSgQ7XHBvVRkTaZ3sxAbFc",
  "https://mgga5jh3v5.ufs.sh/f/07ZO2NqoIuMHUylH92OfhDx5Vqp28LrJXBFH97NMRd3QUytY",
  "https://mgga5jh3v5.ufs.sh/f/07ZO2NqoIuMHPLxBy5Wrot7UvlCFknApfYM8yNEsROxDz5G9"

];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url 
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
          ))
        }
        </div>
    </main>
  );
}
