export const Process = () => {
    const steps = ["Strategy", "Design", "Development", "Launch"];
  
    return (
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#052161]">
            Our Process
          </h2>
  
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i}>
                <div className="text-3xl font-bold text-[#A675A1] mb-3">
                  0{i + 1}
                </div>
                <h4 className="font-semibold">{step}</h4>
                <p className="text-sm text-gray-500 mt-2">
                  We ensure quality at every stage.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};
  
