import React from "react";

function Create() {
  return (
    <section className=" relative overflow-y-hidden sm:pt-4 pt-2" >
      <div className="container-wrapper relative z-50 max-w-3xl mx-auto">
        <div className="bg-[#0a7574e3] rounded-2xl  relative ">
          <img
            src="images/shit.png"
            alt=""
            className="w-full top-0 absolute left-0 right-0 h-full"
          />
          <div className="py-2 sm:py-6 px-2 relative z-10">
            <div className=" max-w-xl mx-auto text-center">
              <p className="font-work font-normal text-white text-lg sm:text-2xl let-space lh-1_6  py-5">
                <span className=" font-semibold archo-black ">
                  {" "}
                  Create an account{" "}
                </span>{" "}
                , a with a social login in less than 20 secs OR just connect
                your wallet. Either way it’s a{" "}
                <span className=" font-semibold archo-black ">
                  {" "}
                  seamless, secure experience!{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Create;
