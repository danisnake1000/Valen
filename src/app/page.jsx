import React from "react";
import Image from "next/image";
import Cuenta from "./components/Cuenta.jsx";
import Cards from "./components/Cards.jsx";

const Home = () => {
  return (
    <div className="flex justify-center  text-yellow-200  text-center">
      <div>
        <div className="p-auto">
          <Image
            src="/imagenes/valen2.jpg"
            width={700}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <p className="text-yellow-200  text-3xl pt-16 font-bold">23/03/2024</p>
        <h1 className="text-yellow-200 font-extrabold text-6xl p-10 ">VALE</h1>


        <p className="p-12 text-2xl">
          QUIERO COMPARTIR JUNTO A VOS UNA NOCHE UNICA
        </p>
        <div className="border border-yellow-200  "></div>
        <div className="p-12">
          <Cuenta  targetDate="2024-03-23T23:59:59" />
        </div>

        

        <Cards />
        
      </div>

      
    </div>
  );
};

export default Home;
