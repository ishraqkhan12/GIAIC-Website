// export default function ContactPage(){
   
//     setTimeout(() => {
//         console.log("hi there");
//      }, 2000);   
//     return(
//         <>
     
//         <div className=" w-[100vw] h-[85vh] flex items-center justify-center ">
//         <div className=" p-6 lg:p-12 h-[80vh]  md:w-[50vw] shadow-lg " >
//           <p className="text-xl font-semibold">
//              Name: Ishraq <br />
//              F.Name: M.Anis <br />
//              Timing: 7:00pm - 10:00pm
//          </p>
//          </div>
//          </div>
       
//             </>
//     )
// }




"use client"; 

import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [showContent, setShowContent] = useState(false);
  const showcontent = false
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true); 
    }, 3000); 
    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
        {showContent ? (
    <div className="w-[100vw] h-[85vh] flex items-center justify-center">
      <div className="p-6 lg:p-12 h-[80vh] md:w-[50vw] shadow-lg">
        <h2 className='text-center text-2xl font-semibold text-darkCerulean mb-8'>Personal Information</h2>
          <p className="text-xl font-medium">
            Name: Ishraq <br />
            F.Name: M.Anis <br />
            Roll No: 00170907 <br />
            Timing: 7:00pm - 10:00pm <br />
            Center: Governer House Karachi <br />
            Trainer: Sir Mubashir <br />
            Email: ishraqkhan645@gmail.com

          </p>
      </div>
    </div>
        ) : (
          <p className="text-xl font-semibold text-center">Loading....</p>
        )}
    </>
  );
}

