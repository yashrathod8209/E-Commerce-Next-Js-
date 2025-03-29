import React from "react";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base">
      <div className="">
        <img src="assets/images/exchange.png" alt="exchange"  className="w-12 m-auto mb-5"/>
        <h3 className="text-lg font-semibold">Easy Exchange Policy</h3>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div className="">
        <img src="assets/images/return.png" alt="exchange"  className="w-12 m-auto mb-5"/>
        <h3 className="text-lg font-semibold">Easy Exchange Policy</h3>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
      <div className="">
        <img src="assets/images/support.png" alt="exchange"  className="w-12 m-auto mb-5"/>
        <h3 className="text-lg font-semibold">Easy Exchange Policy</h3>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>
    </div>
  );
};

export default OurPolicy;
