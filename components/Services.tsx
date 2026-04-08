export const Services = () => {
    const services = [
      {
        title: "Software Development",
        desc: "Custom web and mobile applications built for performance and scalability.",
      },
      {
        title: "Web Design",
        desc: "Modern, conversion-focused UI/UX design that elevates your brand.",
      },
      {
        title: "SEO & Digital Marketing",
        desc: "Rank higher, get traffic, and convert users into paying customers.",
      },
      {
        title: "Social Media Ads",
        desc: "Data-driven ad campaigns that generate leads and revenue.",
      },
      {
        title: "Social Media Management",
        desc: "Content, strategy, and growth across all major platforms.",
      },
    ];
  
    return (
      <div id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#052161]">
            What We Do
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};