import React from "react";

function About() {
  return (
    <section className=" relative  pb-4">
      <div className="container-wrapper relative z-50 max-w-3xl mx-auto">
        <div className="bg-[#a149a96c] rounded-2xl  relative ">
          <img src="images/shit.png" alt="" className="w-full top-0 absolute left-0 right-0 h-full" />
          <div className="py-2 sm:py-8 px-2 relative z-10">
            <h1
              className=" archo-black   text-white text-2xl 
      font-semibold text-center"
            >
              ABOUT KIX
            </h1>
            <div className=" max-w-xl mx-auto text-center">
              <p className="font-work font-medium text-white text-lg sm:text-2xl let-space  py-5">
                Welcome to <span className="txt-s font-semibold">KiX </span> , a
                Live Football Gaming Platform where users can buy and sell
                digital assets representing the world’s most exciting
                footballers and compete to win based on their real-world match
                performances.
              </p>

              <p className="font-work font-medium text-white text-lg sm:text-2xl let-space">
                <span className="txt-s font-semibold">KiX </span> is Alpha
                Testing on the Polygon Testnet NOW and{" "}
                <span className="txt-s font-semibold">Tradeathon</span> is our
                biggest and best game yet, with prizes to be won twice a week,
                EVERY WEEK!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
