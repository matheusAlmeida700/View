const StatsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto">
      <div className="flex items-center justify-center lg:justify-start">
        <div className="flex text-sm py-12 md:text-xl items-center text-muted-custom">
            <div className="border-r-2 pr-4 md:pr-8 border-gray-600">
              <span>100% Client Approval</span>
            </div>
            <div className="border-r-2 px-2 md:px-8 border-gray-600">
              <span>KPI Performance</span>
            </div>
            <div className="border-r-2 px-2 md:px-8 border-gray-600">
              <span>+500 Customers</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;