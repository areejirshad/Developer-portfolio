import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="mx-5 md:mx-0">
    <footer className="w-full py-20  animate-fade-in opacity-0 [--animation-delay:2000ms] ">
      {/* Heading */}
      <h2 className="font-['Preahvihear'] text-[#683a92] text-[25px] mb-6">
        Contact
      </h2>

      {/* Contact Text */}
      <p className="text-white font-['Preahvihear'] text-[15px] leading-relaxed max-w-2xl ">
        I&apos;m currently looking to join a{" "}
        <span className="text-[#b37df2]">cross-functional</span> team that values
        improving people&apos;s lives through accessible design. <br />
        Or have a project in mind? Let&apos;s connect.
      </p>

      {/* Location + Info */}
      <div className="mt-8 text-[14px] font-['Preahvihear'] leading-relaxed text-[#ccd6f6] space-y-1">
        <p>Doha, Qatar</p>
        <p className="text-white">
          • 97477695948 <br />
          • zaheerahmad2371@gmail.com <br />
          •{" "}
          <a
            href="https://www.linkedin.com/in/zaheer-ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b37df2] hover:underline"
          >
            linkedin.com/in/zaheer-ahmed/
          </a>
        </p>
      </div>

      {/* Social Icons */}
      <div className="mt-8 flex  gap-6">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/Vector (3).svg"
            alt="Social Icon 1"
            width={24}
            height={24}
            className="opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/Vector (4).svg"
            alt="Social Icon 2"
            width={24}
            height={24}
            className="opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <Image
            src="/Vector (5).svg"
            alt="Social Icon 3"
            width={24}
            height={24}
            className="opacity-90 hover:opacity-100 transition-transform hover:scale-110"
          />
        </a>
      </div>

      {/* Button */}
      <div className="mt-6">
        <button
          className="bg-[#2b114f] border border-[#683a92] text-white rounded-[10px] hover:bg-[#683a92] transition-colors px-6 py-2 text-[10px] font-['Poppins'] tracking-wide"
        >
          LEARN MORE
        </button>
      </div>
    </footer>
    </section>
  );
};

export default Footer;
    