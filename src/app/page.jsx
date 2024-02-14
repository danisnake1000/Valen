import React from "react";
import Link from "next/link";
import Image from "next/image";
import Cuenta from "./components/Cuenta.jsx";
import { Card, CardBody, Button } from "@nextui-org/react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import CelebrationIcon from "@mui/icons-material/Celebration";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import TableBarIcon from "@mui/icons-material/TableBar";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import Mesa from "./components/Mesa.jsx";

import { Caveat, Cinzel, Abril_Fatface } from "next/font/google";
import { Icons } from "./components/Icons.jsx";
import { Regalo } from "./components/Regalo.jsx";
import { Hora } from "./components/Hora.jsx";
import { Ubicacion } from "./components/Ubicacion.jsx";
import { Formal } from "./components/Formal.jsx";
import { Musica } from "./components/Musica.jsx";

const cinzel = Cinzel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const abril = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

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
    <div className="flex justify-center flex-col text-center text-yellow-200 ">
      <div className={cinzel.className}>
        <div className="p-auto">
          <Image
            src="/imagenes/vale4.jpg"
            width={500}
            height={500}
            alt="Picture of the author"
            priority={true}
          />
        </div>

        <p className=" text-3xl pt-16 font-bold">23/03/2024</p>
        <div className={abril.className}>
          <h1 className="text-white font-extrabold text-6xl p-10 ">VALE</h1>
        </div>

        <div className={abril.className}>
          <p className="p-12 text-4xl">
            QUIERO COMPARTIR JUNTO A VOS UNA NOCHE UNICA
          </p>
        </div>

        <div className="border   "></div>
        <div className="p-12">
          <Cuenta targetDate="2024-03-23T23:59:59" />
        </div>
        <Link href={ubi} target="_blank">
          <div>
            <Card className=" border-2  rounded-lg p-5 m-4 flex justify-center text-center ">
              <CardBody >
                <div className="text-2xl leading-10 ">
                  
                  <h1 className="text-4xl ">SALON</h1>
                  <p> FINCA DON GINO</p>

                  <div>
                    <FmdGoodIcon className="text-5xl text-white m-5"/>
                  {/* <Ubicacion/> */}
                    <Button
                      variant="contained"
                      radius="full"
                      color="primary"
                      size="md"
                    >
                      <p> UBICACION</p>
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Link>

        <div>
          <Card className=" border-2 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <AccessTimeIcon className="text-5xl text-white m-5"/>
              {/* <Hora/> */}
                <h1 className="text-4xl m-1">HORARIO</h1>
                <p className="text-2xl"> 21:00HS</p>
              </div>
            </CardBody>
          </Card>
        </div>

        <Link href="https://wa.me/542614604776" target="_blank">
          <div>
            <Card className=" border-2 rounded-lg p-5 m-4 flex justify-center text-center">
              <CardBody className="leading-10  ">
                <div className="text-6xl" >
                    <WhatsAppIcon className="text-5xl text-white m-5"  fontSize="large" />
                  <h1 className="text-2xl">CONFIRMAR ASISTENCIA</h1>
                  <div>
                    <p className="text-xl">WHATSAPP</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </Link>

        <div>
          <Card className=" border-2 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <AudiotrackIcon className= "text-5xl text-white m-5"/>
                {/* <Musica/> */}
                <h1 className="text-2xl">RECOMIENDA UNA CANCION</h1>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className=" border-2 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <AssignmentIndIcon className= "text-5xl text-white m-5"/>
               {/* <Formal/> */}
                <h1 className="text-2xl">DRESS CODE</h1>
                <p className="text-2xl">FORMAL</p>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="xl:flex justify-center text-center ">
          <div>
            <Card className=" border-2  rounded-lg p-5 m-4 flex justify-center text-center">
              <CardBody className="leading-10  ">
                <div className="text-2xl ">
                  <CardGiftcardIcon className="text-5xl text-white m-5" />
                  {/* <Regalo /> */}
                  <h1>REGALOS</h1>

                  <p>Tu presencia es lo mas importante</p>
                  <p>Pero si deseas regalarme algo mas ....</p>
                  <h2>CBU: 0720441288000035590668</h2>
                  <h2>ALIAS: mis-15-vale</h2>
                  <h2>TITULAR: Rivero Mariela</h2>
                  <p>En el salon tambien habra una urna</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>

        {/* <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-4 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <TableBarIcon />
                <h1 className="text-2xl">Buscar tu mesa</h1>

                <Mesa datos={datos}></Mesa>
              </div>
            </CardBody>
          </Card>
        </div> */}
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
        <div className="xl:flex justify-center">
          <div>
            <Card className=" border-2 rounded-lg p-5 m-4 flex justify-center text-center ">
              <CardBody className="leading-10  ">
                <div>
                <PhotoCameraIcon className="text-5xl text-white m-5"/>
                  {/* <Icons></Icons> */}
                  <h1 className="text-2xl">FOTOS CENA</h1>
                  <p className="text-2xl"> PROXIMAMENTE....</p>
                </div>
              </CardBody>
            </Card>
          </div>
          <div>
            <Card className=" border-2 rounded-lg p-5 m-4 flex justify-center text-center">
              <CardBody className="leading-10  ">
                <div>
                  <PhotoCameraIcon className="text-5xl text-white m-5"/>
                  {/* <Icons></Icons> */}
                  <h1 className="text-2xl">FOTOS BAILE</h1>
                  <p className="text-2xl"> PROXIMAMENTE....</p>
                </div>
              </CardBody>
            </Card>
          </div>
          
        </div>
        <div className="xl:flex justify-center text-center ">
        <div className=" text-6xl mb-6">
          <h1 className={abril.className}>TE ESPERO</h1>
          <div className="p-10">
            <Image
            src="/imagenes/vale3.jpg"
            width={700}
            height={500}
            alt="Picture of the author"
            priority={true}
          />
          </div>
          
        </div>
            {/* <Card className=" border-2 rounded-lg p-5 m-4 flex justify-center text-center">
              <CardBody className="leading-10  ">
                <div>
                  <h1 className="text-5xl">TE ESPERO !!!!!</h1>
                </div>
              </CardBody>
            </Card> */}
          </div>
      </div>
    </div>
  );
};

export default Home;
