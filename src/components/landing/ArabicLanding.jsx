import React from "react";
import landingImg from "../../assets/landing/landing-img.png";

function ArabicLanding() {
  return (
    <section id="landing" className="relative">
      <div className="w-[100%] absolute top-[0px] left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#337D53"
            fill-opacity="1"
            d="M0,288L80,250.7C160,213,320,139,480,96C640,53,800,43,960,32C1120,21,1280,11,1360,5.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center justify-between px-[50px] py-[20px] space-x-7 relative overflow-hidden z-10">
        <div className="z-10 text-center md:text-left">
          <h1 className="text-4xl text-center md:text-right xl:text-6xl font-extrabold">
            الإتحادية الجزائرية للمبارزة
          </h1>
          <p className="text-md text-center md:text-right xl:text-xl font-semibold my-[20px]">
            أرنا مواهبك
          </p>
          <p className="text-sm font-medium text-center md:text-right">
            اكتشف فنون ورياضة المبارزة من خلال برامج التدريب الشاملة لدينا
            والتدريب الخبير. سواء كنت تحلم بالمجد الأولمبي أو تبحث عن هواية
            جديدة، يوفر اتحادنا الدعم والموارد التي تحتاجها للنجاح في عالم
            المبارزة
          </p>
        </div>
        <div className="w-[80%] md:w-[65%] z-10">
          <img className="w-[700px]" src={landingImg} alt="fencing-fighter" />
        </div>
      </div>
      <div className="w-[100%] absolute bottom-[-200px] left-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#DC383E"
            fill-opacity="1"
            d="M0,96L40,85.3C80,75,160,53,240,64C320,75,400,117,480,117.3C560,117,640,75,720,90.7C800,107,880,181,960,224C1040,267,1120,277,1200,277.3C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default ArabicLanding;
