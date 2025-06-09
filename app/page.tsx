import { Link } from "@heroui/link";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@heroui/button";
import ImagemCasa from "@/public/ImagemCasa.png"
import Image from "next/image";
import clsx from "clsx";

export default function Home() {
  return (<>
      
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10">
        <div className="relative w-full h-[75vh] pt-20 md:h-[90vh] overflow-hidden px-5">
          {/* Imagem de fundo */}
          <Image
            alt="Cafeteria"
            src={ImagemCasa}
            className="absolute inset-0 w-full h-full md:top-0 object-cover z-0 opacity-30"
          />

          {/* Conteúdo acima da imagem */}
          <div className="relative z-10 max-w-xl text-center mx-auto pt-20">
            <span className={"text-4xl font-bold"}>Realize o&nbsp;</span>
            <span className={"text-4xl font-bold text-green-600"}>Agendamento&nbsp;</span>
            <br />
            <span className={"text-4xl font-bold"}>de forma on-line.</span>
            <br />
            <div className={"text-lg font-medium opacity-80 mt-5"}>
              Esperamos você em nossa cafeteria.
            </div>
            <Button
              variant="solid"
              as={Link}
              href={"/agendamento"}
              className="bg-[#90e7b0] mt-1"
            >
              Realizar reserva
            </Button>
          </div>
        </div>
        <div className="bg-blue-500 h-[65vh] md:h-[90vh] w-full">
          
        </div>
        <div className="bg-white h-[65vh] md:h-[90vh] w-full">
          
        </div>
        <div className="bg-green-600 h-[65vh] md:h-[90vh] w-full">
          
        </div>
      </section>
  </>
  );
}
