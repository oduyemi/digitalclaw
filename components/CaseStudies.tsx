import Image from "next/image";

export const CaseStudies = () => {
  return (
    <div id="work" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-12 text-center text-[#052161]">
          Case Studies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg">
              <Image src="/images/Card.png" width={600} height={400} alt="" />
              <div className="p-6">
                <h3 className="font-semibold text-xl text-[#052161]">
                  E-commerce Growth Platform
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Increased conversions by 120%.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};