import Image from "next/image";

export const Blog = () => {
  const posts = [
    "/images/arabic-businessman-standing-on-street-and-using-laptop-9623794.png",
    "/images/office.png",
    "/images/apple-monitors-326518.png",
  ];

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-[#052161]">
          Insights & Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((img, i) => (
            <Image key={i} src={img} width={400} height={300} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

