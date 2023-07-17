const Shimmer = () => {
  return (
    <div className="restaurant-list" data-testid="shimmer">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div key={index} className="shimmer-card bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 animate-pulse rounded-lg h-40 my-4">
            
            <div className="flex items-center justify-center h-full">
              <div className="w-3/4 h-3 bg-white rounded-full"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

