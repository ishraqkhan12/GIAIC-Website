import Image from "next/image";
import image from '../Assets/governer.png'
import image2 from '../Assets/bg_house.jpg'
import "./globals.css";



export default function Home() {
  return (
   <>
   <div className=" max-h-fit lg:h-fit w-full lg:flex bg-house " >
    
    {/* <Image src={image2} alt="background-img"/> */}

{/* 1st child */}

   <div className="h-auto w-screen text-center lg:text-left  lg:w-4/5 2xl:pl-44">
   <div className="md:p-20 p-10 mt-6" >
   <h1 className=" text-4xl md:text-6xl text-darkCerulean font-extrabold">Governor Sindh</h1>
   <p className=" text-3xl md:text-5xl font-sans text-darkCerulean">Kamran Khan Tessori</p>
   <h3 className="text-2xl md:text-4xl my-6 font-extrabold text-sky md:leading-[3rem]">Certified Cloud <br /> Applied Generative AI <br /> Engineer (GenEng)</h3>
   <div className="lg:flex md:gap-16">
      <button className="border-2  px-12  py-3 rounded-lg bg-darkCerulean text-white font-bold text-lg container lg:w-auto hover:bg-white hover:text-darkCerulean hover:border-2 hover:border-darkCerulean hover:border-solid ">Apply Now</button>
      <div className="w-"><p className=" container md:w-auto font-black text-2xl text-center text-darkCerulean ">562,143</p> <p className="text-darkCerulean text-center md:inline">Accepted Applications</p></div>
   </div>
   </div>
   </div>

{/* 2nd child    */}
   <div className=" h-auto items-end overflow-hidden 2xl:pr-44 " >
   <Image src={image} alt="image"  className="h-[580px] w-[660px]  md:ml-48 mt-4 object-cover "  />
   </div>
   </div>

   
   </>   
  );
}
