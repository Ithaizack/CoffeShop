import Link from "next/link";

export default function Footer() {
    return (
      <footer className="bg-black text-white px-6 md:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Coluna 1 - Logo + slogan */}
          <div>
            <h3 className="font-bold text-lg mb-2">
              Cafeteria em casa<br />Café Bonjour<span className="align-super text-xs">®</span>
            </h3>
          </div>
  
          {/* Coluna 2 - Londres */}
          <div>
            <h4 className="font-semibold uppercase mb-2">Lourdes</h4>
            <p className="text-gray-400">
                cafebonjourbh@gmail.com<br />
              +55 (31) 97358-1503<br />
              Rua Curitiba 1800, Belo Horizonte,<br />
              Brazil 30170122
            </p>
            <Link href="https://maps.app.goo.gl/i2LBeGvqezzPgu8r8" className="text-white underline mt-2 inline-block">Ver no mapa →</Link>
          </div>
  
          {/* Coluna 3 - Buenos Aires */}
          <div>
            <h4 className="font-semibold uppercase mb-2">Minas Gerais</h4>
            <p className="text-gray-400">
              Belo horiznte, Centro, Lourdes
            </p>
          </div>
  
          {/* Coluna 4 - Newsletter e social */}
          <div>
            <h4 className="font-semibold uppercase mb-2">Está tendo algum problema com agendamento?</h4>
            <Link href="https://wa.me/5531973581503" className="underline text-white block mb-4">Entre em contato conosco →</Link>
  
            <p className="uppercase text-sm font-semibold mb-2">Tenha um ótimo café</p>
            <div className="flex gap-4 text-white text-lg">
              {/* Use ícones reais como react-icons, lucide, ou svg direto */}
              <Link href="#"><i className="fab fa-behance" /></Link>
              <Link href="#"><i className="fab fa-instagram" /></Link>
              <Link href="#"><i className="fab fa-twitter" /></Link>
              <Link href="#"><i className="fab fa-linkedin" /></Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }