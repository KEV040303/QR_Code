import React from "react";
import img from "../../public/images/image-qr-code.png";

export const Target = () => {
  return (
    <>
      <div className="w-[320px] mx-auto my-[3%] p-[16px] pb-[40px] bg-[#FFFFFF] rounded-2xl shadow-[0_0px_60px_0px_rgb(0,0,0,0.1)] font-outfit leading-tight">
        <img className="rounded-lg" src={img} alt="QR" />
        <div className="px-[16px] mt-[24px] mb-[16px] text-center text-[141%] font-bold text-[#1F3251]">
          <h3>Improve your front-end skills by building projects</h3>
        </div>
        <div className="px-[16px] text-center text-[99%] text-[#6A7485]">
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </>
  );
};
