import React from "react";
import fencingStudentImg from "../../assets/fencing-students/img.jpg";

function ArabicFencingStudent() {
  return (
    <section className="mt-[230px] lg:mt-[120px]">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#DC383E"
          fill-opacity="1"
          d="M0,192L120,160C240,128,480,64,720,58.7C960,53,1200,107,1320,133.3L1440,160L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
      <div className="sm:translate-y-[-60px] lg:translate-y-[-90px] px-[50px] flex justify-between items-center flex-wrap md:flex-nowrap gap-[50px]">
        <div className="text-center md:text-right md:w-[60%]">
          <h3 className="text-special-red font-semibold text-lg md:text-2xl uppercase">
            المبارزة للجميع
          </h3>
          <h1 className="text-special-green font-bold mt-[15px] text-2xl md:text-4xl">
            أكثر من 12،000 طالب تم تدريبهم في غضون عامين
          </h1>
          <p className="mt-[50px] font-medium text-sm md:text-lg">
            بفضل برنامجه المكرس "المبارزة في المدرسة" وبمساعدة نواديه ومعلميه،
            بدأ الاتحاد أكثر من 20،000 طالب في المدارس الابتدائية والثانوية.
            برنامج طموح يشجع على ممارسة الرياضة في المدارس واكتشاف رياضة أولمبية
            عتبة ألعاب باريس 2024
          </p>
        </div>
        <div className="fencing-student-box-shadow rounded-2xl overflow-hidden">
          <img
            className="md:w-[400px] md:h-[400px] object-cover"
            src={fencingStudentImg}
            alt="fencing-student"
          />
        </div>
      </div>
    </section>
  );
}

export default ArabicFencingStudent;
