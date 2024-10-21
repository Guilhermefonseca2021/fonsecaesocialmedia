

export default function AboutMe() {
  return (
    <div
      id=""
      className="min-w-full flex  items-center justify-center py-16 h-screen"
    >
      <img src="" />
      <div className="flex flex-col max-w-xl">
        <h1 className="text-brand text-6xl py-4">Quem sou?</h1>
        <p className="text-base text-balance">
          Me chamo Gabriel trabalho com medias socias a mais de 2 anos,
          engajando empresas com pessoas e crescendo negocios a partir da
          internet. Voce sabia que pode almentar mais de{" "}
          <b className="text-green-400">23%</b> de cliente ao decorrer dos anos
          cada momento que se expoe na internet, estou aqui para te ajudar!!
        </p>
        <section className="flex py-3 gap-2">
          <img
            src="https://4.bp.blogspot.com/-Db66HMBxrUs/WQtYtTDZojI/AAAAAAAAFy4/Hh9K72AzHXo9xUXkPueGabdoQuCuj2wZACK4B/s1600/photoshop-1065296_1920.jpg"
            width={50}
            alt=""
          />
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/sony-vegas-logo-icon.png"
            width={50}
            alt=""
          />
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.OO3SoBVLbcmSCL_Cct8gAQHaHa&pid=Api&P=0&h=180"
            width={50}
            alt=""
          />
        </section>
      </div>
    </div>
  );
}
