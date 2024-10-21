import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export default function Projetos() {
  return (
    <div id="projetos">
      <div className="flex items-center gap-16 p-4 w-max">
        <div>
          <h2 className="font-normal text-2xl py-3"> Clientes: </h2>
          <p className="">
            Nosso trabalho é confiado por:
            <br />
            matutu gourmet, conveniencia,
            <br />
            madelin cafe etc.
          </p>
        </div>
        <section className="">
          <Carousel className="w-[600px]">
            <CarouselContent>
              <CarouselItem>
                <img src="https://img.freepik.com/free-vector/geometric-business-banner-with-photo_52683-84267.jpg?t=st=1729437379~exp=1729440979~hmac=d690f00c3af35fb7f3c1c017a2777df75c8ae061db26353b3d5dcc15ff2f9791&w=1060" />
              </CarouselItem>
              <CarouselItem>
                <img src="https://img.freepik.com/free-vector/geometric-business-banner-with-photo_52683-84267.jpg?t=st=1729437379~exp=1729440979~hmac=d690f00c3af35fb7f3c1c017a2777df75c8ae061db26353b3d5dcc15ff2f9791&w=1060" />
              </CarouselItem>
              <CarouselItem>
                <img src="https://img.freepik.com/free-vector/geometric-business-banner-with-photo_52683-84267.jpg?t=st=1729437379~exp=1729440979~hmac=d690f00c3af35fb7f3c1c017a2777df75c8ae061db26353b3d5dcc15ff2f9791&w=1060" />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </div>
      <div className="pt-10">
        <h2 className=" text-2xl font-bold ">Habilidades</h2>
        
      </div>
    </div>
  );
}
