import Image from "next/image";
import Link from "next/link"; // Impor Link dari Next.js
import Foto from "..//../img/foto3.webp";

export default function ProfilPage() {
  return (
    <div className="flex flex-col items-center p-8 bg-blue-100 min-h-screen w-full">
      <main className="w-full max-w-3xl overflow-hidden">
        <div className="relative mb-4">
          <Image
            src={Foto}
            width={400}
            height={200} // Disesuaikan untuk mencocokkan rasio gambar
            className="w-full h-auto object-cover"
            alt="Tumpukan sampah yang menunjukkan pentingnya pengelolaan sampah yang baik"
          />
        </div>

        {/* Header positioned below the image */}
        <header className="flex flex-col items-start ml-5">
          <p className="text-gray-600 text-sm">5 November 2024</p>
          <h1 className="text-3xl font-bold mb-2 hover:text-blue-700">
            Urgensi Pengelolaan Sampah
          </h1>
        </header>

        {/* Konten Artikel */}
        <article className="p-6 text-justify leading-relaxed text-gray-800">
          <section className="mb-6">
            <p>
              Dewasa ini, persoalan sampah di perkotaan tak kunjung selesai.
              Kepadatan penduduk membuat konsumsi masyarakat tinggi lahan untuk
              sisa konsumsi terbatas. Hasil riset Jenna R Jambeck dan
              kawan-kawan menyebutkan Indonesia berada di posisi kedua
              penyumbang sampah plastik ke laut setelah Tiongkok, disusul
              Filipina, Vietnam, dan Sri Lanka. Persoalan semakin bertambah.
              Sampah konsumsi warga perkotaan itu ternyata banyak yang tidak
              mudah terurai, terutama plastik.
            </p>
            {/* Konten paragraf lainnya... */}
            <p>
              Artikel di atas dapat dibaca{" "}
              <Link href="/Components/artikel"className="text-red-600">Baca di sini</Link> untuk informasi
              lebih lanjut mengenai pengelolaan sampah yang berkelanjutan.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
}
