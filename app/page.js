import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center content-center pt-16">
      <Image className="mb-8" src="/logotipo.png" alt="CapacitaJá" width={266} height={300} />
      <p className="text-4xl font-bold p-6 items-center justify-center content-center text-[#ff1d25]">Site em Construção</p>
      <p className="text-xl items-center justify-center content-center text-center font-bold">Dúvidas ou Sugestões? <br /> Entre em contato: (35) 98426-5018</p>
      <Link className="mt-6 font-bold border-2 border-[#ff1d25] p-3 hover:border-[#0d0d0d] ease-in-out duration-300 hover:bg-[#0d0d0d] hover:text-white" href="https://github.com/CapacitaJa/site" target="_blank">Projeto no GitHub</Link>
    </div>
  );
}
