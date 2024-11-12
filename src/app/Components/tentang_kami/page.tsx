import Image from "next/image";
import Foto4 from "../../img/foto4.jpg";

export default function TentangKami() {
  return (
    <main className="flex flex-col lg:flex-row items-start justify-center bg-[#F3F9F3] p-8 space-y-8 lg:space-y-0 h-auto">
      {/* Bagian Kiri: Gambar */}
      <div className="flex p-2 -ml-50">
        <div className="rounded-lg overflow-hidden">
          <Image src={Foto4} alt="Foto Kegiatan 1" layout="responsive" width={600} height={800} className="object-cover" />
        </div>
      </div>

      {/* Bagian Kanan: Teks */}
      <div className="lg:w-2/3 space-y-8 pl-8">
        <section>
          <h2 className="text-2xl font-bold text-[#7BA428]">TENTANG KAMI</h2>
          <p className="mt-4 text-gray-700 text-justify">
            Selamat datang di Gerakan Peduli Sampah (GPS)! Kami adalah inisiatif sosial yang bertujuan meningkatkan
            kesadaran tentang pentingnya pengelolaan sampah yang baik dan berkelanjutan. Melalui platform ini, Anda
            dapat melaporkan masalah sampah di lingkungan sekitar, yang akan segera ditangani. Bergabunglah bersama kami untuk menjaga kebersihan dan menciptakan
            lingkungan yang lebih sehat. Setiap tindakan kecil, seperti melaporkan sampah atau mengelola sampah
            dengan bijak, akan memberi dampak besar bagi masa depan yang lebih bersih.
          </p>
        </section>
        
        {/* Container untuk card */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="bg-green-600 rounded-lg p-4 shadow-md text-center text-white">
            <h3 className="text-xl font-bold text-center">1,5 Ton</h3>
            <p>Sampah terkelola</p>
          </div>
          <div className="bg-green-600 rounded-lg p-4 shadow-md text-center text-white">
            <h3 className="text-xl font-bold text-center">120</h3>
            <p>Pengguna</p>
          </div>
          <div className="bg-green-600 rounded-lg p-4 shadow-md text-center text-white">
            <h3 className="text-xl font-bold text-center">2</h3>
            <p>Kolaborasi</p>
          </div>
          <div className="bg-green-600 rounded-lg p-4 shadow-md text-center text-white">
            <h3 className="text-xl font-bold text-center">6</h3>
            <p>Armada</p>
          </div>
        </div>
      </div>
    </main>
  );
}