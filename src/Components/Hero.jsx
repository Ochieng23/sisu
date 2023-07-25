import React from "react";

function Hero() {
  return (
    <div className="bg-grey-200 border border-transparent-500">
      <div className="hero-text">
        <h1
          className="font-extrabold text-5xl text-grey-400 mb-0 "
          style={{ paddingTop: "20px" }}
        >
          Empower your business to sell <br />
          <strong className="text-blue-400">more</strong> and operate{" "}
          <strong className="text-blue-400">efficiently</strong> using AI.
        </h1>
        <p className="mt-3">
          Boost your sales, reduce operational costs, and increase revenue with
          immediate access to timely, <br /> accurate, and relevant distribution
          and retail customer insights in your supply chain.
        </p>
      </div>
      <div className="flex justify-center  " style={{ paddingTop: "30px" }}>
        <div>
          <button className=" text-base font-semibold w-70 h-19   px-6 py-4 bg-blue-600 ... leading-none border rounded-full text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-blue mt-4 lg:mt-0 mr-2">
            Schedule a Meeting
          </button>
        </div>
        <div>
          <button className=" text-base font-semibold w-70 h-19  px-6 py-4 bg-blue-600 ... leading-none border rounded-full text-black border-white hover:border-transparent hover:text-teal-500 hover:bg-blue mt-4 lg:mt-0 mr-2">
            Learn More
          </button>
        </div>
      </div>
      <div className="countries  mt-10" style={{ paddingBottom: "40px" }}>
        <h3 className="font-semibold text-base text-2xl">
          Countries of Operation
        </h3>

        <div className="flex justify-center gap-3">
          <div className="kenya">
            <img
              className="h-12 w-15"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <div className="USA">
            <img
              className="h-12 w-15"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_the_United_States_%28reversed%29.svg/2560px-Flag_of_the_United_States_%28reversed%29.svg.png"
              alt=""
            />
          </div>
          <div className="Tanzania">
            <img
              className="h-12 w-13"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Flag_of_Tanzania.svg/1024px-Flag_of_Tanzania.svg.png"
              alt=""
            />
          </div>
          <div className="South Africa">
            <img
              className="h-12 w-13"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Flag_of_South_Africa.svg/1024px-Flag_of_South_Africa.svg.png"
              alt=""
            />
          </div>
          <div className="Ethiopia">
            <img
              className="h-12 w-13"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Flag_of_Ethiopia.svg/640px-Flag_of_Ethiopia.svg.png"
              alt=""
            />
          </div>
          <div className="Uganda">
            <img
              className="h-12 w-13"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/800px-Flag_of_Uganda.svg.png?20221207005450"
              alt=""
            />
          </div>
          <div className="Nigeria">
            <img
              className="h-12 w-13"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/1280px-Flag_of_Nigeria.svg.png"
              alt=""
            />
          </div>
          <div className="DRC">
            <img
              className="h-12 w-13"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg/1280px-Flag_of_the_Democratic_Republic_of_the_Congo.svg.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
