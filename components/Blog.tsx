"use client";
import { useEffect, useState } from "react";


type Post = {
    id: string;
    title: string;
    excerpt: string;
    image?: string;
  };
  
export const Blog = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      fetch("/api/posts")
        .then((res) => res.json())
        .then(setPosts);
    }, []);

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#052161]">
          Insights & Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-2xl">
                <img
                src={post.image || "/images/fallback.png"}
                className="w-full h-[220px] object-cover"
                />
            </div>

            <div className="mt-4">
                <h3 className="mt-2 font-semibold text-lg">
                {post.title}
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                {post.excerpt}
                </p>
            </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

