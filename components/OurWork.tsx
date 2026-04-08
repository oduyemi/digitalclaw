import Image from "next/image";

export const OurWork = () => {
  const images = [
    "/images/Card.png",
    "/images/Card1.png",
    "/images/Rectangle1313.png",
  ];

  return (
    <div id="ourWork" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">Our Work</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <Image key={i} src={img} width={500} height={400} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};
