import React from "react";
import Image from "next/image";
import Cuenta from "./components/Cuenta.jsx";
import Cards from "./components/Cards.jsx";
import { Card, CardBody, Button } from "@nextui-org/react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

import Mesa from "./components/Mesa.jsx";

const datos = [
  {
    mesa: 1,
    nombre: ["Daniel", "Laura", "Lola", "Lupe"],
  },
  {
    mesa: 2,
    nombre: ["Juan Guerra", "Mariela", "Valentina", "Maximo"],
  },
];

const ubi =
"https://www.google.com/maps/place/Finca+Don+Gino/@-32.9340164,-68.6770274,17z/data=!3m1!4b1!4m6!3m5!1s0x967e124c449cc7bf:0x4edfa6784aa89e2!8m2!3d-32.9340164!4d-68.6770274!16s%2Fg%2F11g020519x?entry=ttu";

const Home = () => {
  return (
    <div className="flex justify-center flex-col text-center text-pink-400 ">
      <div>
        <div className="p-auto">
          <Image
            src="/imagenes/valen2.jpg"
            width={700}
            height={500}
            alt="Picture of the author"
          />
        </div>

        <p className=" text-3xl pt-16 font-bold">23/03/2024</p>
        <h1 className=" text-pink-400 font-extrabold text-6xl p-10 ">VALE</h1>

        <p className="p-12 text-2xl">
          QUIERO COMPARTIR JUNTO A VOS UNA NOCHE UNICA
        </p>
        <div className="border   "></div>
        <div className="p-12">
          <Cuenta targetDate="2024-03-23T23:59:59" />
        </div>

     
        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
            <div>
            <h1>SALON</h1>
            <p> FINCA DON GINO</p>

            <div>
              <FmdGoodIcon></FmdGoodIcon>
              <Button
                variant="contained"
                radius="full"
                color="primary"
                size="md"
              >
                <a href={ubi}>UBICACION</a>
              </Button>
            </div>
          </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <h1>HORARIO</h1>
                <p> 21:30HS</p>
              </div>
            </CardBody>
          </Card>
        </div>
        
      
         <div>
         <Card className=" border-2 border-gray-800 rounded-lg p-4 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <h1 className="text-2xl">Buscar tu mesa</h1>

                <Mesa datos={datos}></Mesa>
              </div>
            </CardBody>
          </Card>
         </div>
        {/* <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <h1>FOTOS TIRADA</h1>
                <p> PROXIMAMENTE....</p>
              </div>
            </CardBody>
          </Card>
        </div> */}
        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <h1>FOTOS CENA</h1>
                <p> PROXIMAMENTE....</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <h1>FOTOS BAILE</h1>
                <p> PROXIMAMENTE....</p>
              </div>
            </CardBody>
          </Card>
        </div>
        
      </div>
    </div>
  );
};

export default Home;
