import React from "react";
import fencingStudentImg from "../../assets/fencing-students/img.jpg";

function FencingStudent() {
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
        <div className="fencing-student-box-shadow rounded-2xl overflow-hidden">
          <img
            className="md:w-[400px] md:h-[400px] object-cover"
            src={fencingStudentImg}
            alt="fencing-student"
          />
        </div>
        <div className="text-center md:text-left md:w-[60%]">
          <h3 className="text-special-red font-semibold text-lg md:text-2xl uppercase">Fencing for everyone</h3>
          <h1 className="text-special-green font-bold mt-[15px] text-2xl md:text-4xl md:w-[70%]">Already more than 12,000 students initiated in 2 years!</h1>
          <p className="mt-[50px] font-medium text-sm md:text-lg">
            Thanks to its dedicated “Fencing at School” program and with the
            help of its clubs and teachers, the Federation has initiated more
            than 20,000 young school and college students. An ambitious program
            that encourages sports practice in schools and the discovery of an
            Olympic sport at the dawn of the Paris 2024 Olympic Games.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FencingStudent;
