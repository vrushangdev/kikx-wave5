import React from "react";

function ClickStart() {
  return (
    <section className=" relative -mt-[5%] sm:-mt-[1%] btn-hov">
      <img src="images/btn.png" alt="" className=" absolute top-0 left-0 right-0" />
        <div className=" mx-auto  justify-center mt-5 mb-2  flex relative z-10">
            <a
              href="https://test.kix.digital/onboarding?utm_source=landingpage&utm_medium=website&utm_campaign=tradeathon&utm_content=wave3&utm_term=1millionkixtokens" 
              className="  tracking-[-0.11em] -mt-2 sm:-mt-1 uppercase archo-black text-4xl  sm:text-6xl  py-2 px-4 sm:px-6        mx-auto    text-[#94339d]"
            >
              {" "}
              Click to Play
              {/* <img src="images/click.png" alt="" className=" h-[34px] sm:h-[45px]" /> */}
            </a>
          </div>
   
    </section>
  );
}

export default ClickStart;
