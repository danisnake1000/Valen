import React from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import {Lato, Pacifico } from "next/font/google";

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function Cards() {
  const ubi =
    "https://www.google.com/maps/place/Finca+Don+Gino/@-32.9340164,-68.6770274,17z/data=!3m1!4b1!4m6!3m5!1s0x967e124c449cc7bf:0x4edfa6784aa89e2!8m2!3d-32.9340164!4d-68.6770274!16s%2Fg%2F11g020519x?entry=ttu";
  return (
    <div className={pacifico.className}>
      <Card className=" border-2 border-gray-800 rounded-lg p-5 m-4 flex justify-center text-center">
        <CardBody className="leading-10  ">
          <div >
            <h1  >SALON</h1>
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
  );
}
