import Image from "next/image";
import Link from "next/link"; // Import Link untuk navigasi
import Esampah from "../../img/pengaduan.png";

export default function LayananPengaduan() {
  return (
    <main className="flex flex-col lg:flex-row-reverse items-start justify-center bg-[#F3F9F3] p-2 space-y-2 lg:space-y-2 h-auto">
      {/* Bagian Kanan: Gambar */}
      <div className="flex p-2 lg:ml-50">
        <div className="rounded-lg overflow-hidden" style={{ width: '230px', height: '250px' }}>
          <Image
            src={Esampah}
            alt="Foto Layanan Pengaduan"
            layout="responsive"
            width={500}
            height={500}
            className="object-cover"
          />
        </div>
      </div>

      {/* Bagian Kiri: Teks */}
      <div className="lg:w-2/3 space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#7BA428]">LAYANAN PENGADUAN</h2>
          <p className="mt-4 text-gray-700 text-justify">
            Selamat datang di Layanan Pengaduan! Kami siap membantu Anda dalam melaporkan masalah terkait kebersihan lingkungan
            dan pengelolaan sampah. Layanan ini dibuat untuk memudahkan masyarakat dalam menyampaikan pengaduan dan memberikan
            solusi cepat serta efisien. Bersama-sama, kita bisa menjaga lingkungan agar tetap bersih dan nyaman.
          </p>
        </section>

        {/* Tombol untuk pengaduan */}
        <div className="mt-8">
          <Link href="/login">
            <button className="bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-green-700 transition duration-300">
              Klik di sini
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
