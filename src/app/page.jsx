import React from "react";
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

import { Roboto, Pacifico, Caveat, Lato } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const lato = Lato({
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
        <div>
          <h1 className=" text-pink-400 font-extrabold text-6xl p-10 ">VALE</h1>
        </div>

        <div className={caveat.className}>
          <p className="p-12 text-2xl">
            QUIERO COMPARTIR JUNTO A VOS UNA NOCHE UNICA
          </p>
        </div>

        <div className="border   "></div>
        <div className="p-12">
          <Cuenta targetDate="2024-03-23T23:59:59" />
        </div>

        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center ">
            <CardBody className=" ">
              <div className="text-2xl leading-10 ">
                <h1 className="text-4xl ">SALON</h1>
                <p> FINCA DON GINO</p>

                <div>
                  <FmdGoodIcon className="text-4xl m-2"></FmdGoodIcon>
                  <Button
                    variant="contained"
                    radius="full"
                    color="primary"
                    size="md"
                  >
                    <a href={ubi} target="_blank">
                      UBICACION{" "}
                    </a>
                    <p></p>
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
                <AccessTimeIcon className="text-4xl"/>
                <h1 className="text-4xl m-1">HORARIO</h1>
                <p className="text-2xl"> 21:00HS</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <h1 className="text-2xl">CONFIRMAR ASISTENCIA</h1>
                <a href="https://wa.me/542614604776" target="_blank">
                  <WhatsAppIcon className="text-4xl"/>
                </a>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <AudiotrackIcon className="text-4xl" />
                <h1 className="text-2xl">ELIJE TU CANCION</h1>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <AssignmentIndIcon className="text-4xl"/>
                <h1 className="text-2xl">DRESS CODE</h1>
                <p className="text-2xl">FORMAL</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div className="text-2xl ">
                <CardGiftcardIcon className="text-4xl" />
                <h1>REGALOS</h1>
                <h2>Deposito en cuenta</h2>
                <h2>TITULAR: Rivero Mariela</h2>
                <h2>CBU: 0720441288000035590668</h2>
                <h2>ALIAS: mis-15-vale</h2>
              </div>
            </CardBody>
          </Card>
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

        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <PhotoCameraIcon className="text-4xl" />
                <h1 className="text-2xl">FOTOS CENA</h1>
                <p className="text-2xl"> PROXIMAMENTE....</p>
              </div>
            </CardBody>
          </Card>
        </div>
        <div>
          <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
            <CardBody className="leading-10  ">
              <div>
                <PhotoCameraIcon className="text-4xl" />
                <h1 className="text-2xl">FOTOS BAILE</h1>
                <p className="text-2xl"> PROXIMAMENTE....</p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
