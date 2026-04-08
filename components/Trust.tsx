export const Trust = () => {
    const brands = ["Google", "Slack", "Shopify", "Stripe"];
  
    return (
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-10">
            Trusted by fast-growing companies
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="text-gray-400 font-semibold text-xl hover:text-black transition"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
  