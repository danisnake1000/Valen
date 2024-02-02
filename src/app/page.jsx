import React from "react";
import Image from "next/image";
import Cuenta from "./components/Cuenta";
const Home = () => {
  return (
    <div className="flex justify-center items-center ">
      <div>
        <Image
          src="/imagenes/valen2.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <p className="text-yellow-200 text-center text-6xl pt-16 font-bold">
          23/03/2024
        </p>
        <h1 className="text-yellow-200 font-medium text-6xl p-10 text-center">
          Valentina
        </h1>

        <div className="border border-yellow-200 text-center  "></div>

        <div className="container mx-auto px-4 py-8 ">
          <Cuenta targetDate="2024-03-23T23:59:59" />
        </div>
      </div>
    </div>
  );
};

export default Home;
