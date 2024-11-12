import Image from "next/image";
import Foto from "./img/fotobg.jpg"; // Ensure this path is correct
import TentangKami from "./Components/tentang_kami/page";
import Produk from "./Components/produk/page";
import Faq from "./Components/faq/page";
import Footer from "./Components/footer/page";
import Pengaduan from "./Components/pengaduan/page"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Image
        src={Foto}
        layout="responsive"
        width={600}
        height={300}
        className="object-cover mb-4"
        alt="Foto" // Deskripsi untuk aksesibilitas
      />
      < TentangKami />
      < Pengaduan />
      < Produk />
      < Faq/>
      < Footer />
    </main>
  );
}
