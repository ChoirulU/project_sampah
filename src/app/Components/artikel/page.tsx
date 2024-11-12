import Image from "next/image";
import Link from "next/link";
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
            <p className="mb-5">
              Dewasa ini, persoalan sampah di perkotaan tak kunjung selesai.
              Kepadatan penduduk membuat konsumsi masyarakat tinggi lahan untuk
              sisa konsumsi terbatas. Hasil riset Jenna R Jambeck dan
              kawan-kawan menyebutkan Indonesia berada di posisi kedua
              penyumbang sampah plastik ke laut setelah Tiongkok, disusul
              Filipina, Vietnam, dan Sri Lanka. Persoalan semakin bertambah.
              Sampah konsumsi warga perkotaan itu ternyata banyak yang tidak
              mudah terurai, terutama plastik. Semakin menumpuknya sampah
              plastik menimbulkan pencemaran serius. Kantong plastik baru dapat
              mulai terurai paling tidak selama lebih dari 20 tahun di dalam
              tanah. Jika kantong plastik itu berada di air, akan lebih sulit
              lagi terurai.
            </p>
            <p className="mb-5">
              Kondisi ini disadari sebagian masyarakat dengan menumbuhkan upaya
              pengurangan sampah plastik. Menurut Riset Greeneration, organisasi
              nonpemerintah yang 10 tahun mengikuti isu sampah, satu orang di
              Indonesia rata-rata menghasilkan 700 kantong plastik per tahun. Di
              alam, kantong plastik yang tak terurai menjadi ancaman kehidupan
              dan ekosistem.Kondisi ini menjadi salah satu pemicu Indonesia
              dalam kondisi darurat sampah. Namun, tidak semua masyarakat
              menyadari kondisi ini. Menurut Yerri Noer Kartiko, Kepala Kantor
              Lingkungan Hidup di Kota Metro, Produksi sampah rerata per orang
              adalah 0,7 kilogram setiap harinya, dan hampir 1000 s.d. 7000 ton
              timbulan sampah setiap harinya yang diangkut ke TPA.
            </p>
            <p className="mb-5">
              Sumber timbulan sampah adalah kegiatan rumah tangga, komposisi
              sampah organik melebihi 50%, dibuang dan diangkut ke TPA berkisar
              69%, yang belum terkelola sekitar 8,5% dan yang dimanfaatkan baru
              sekitar 7,5%, sebanyak 10% open burning dan buang sampah ke badan
              air/air permukaan. Lebih lanjut Yeri mengatakan dari 357 kota atau
              kabupaten yang dipantau baru sebanyak 43% kota yang Tempat
              Pembuangan Akhir Sampah yang telah non open dumping,
              sekurang-kurangnya controlled landfill. Di samping itu, salah satu
              upaya pengelolaan sampah adalah Bank Sampah. Sampai dengan tahun
              2015, di Indonesia telah berdiri 3533 unit Bank Sampah, yang telah
              berhasil mengelola sampah sebanyak 5.550.333 kilogram setiap
              bulan, memiliki nilai potensi ekonomi sebanyak 34 milyar setiap
              bulan dengan jumlah nasabah sebanyak 174.413 orang.
            </p>
            <p>
              “Melihat kondisi ini, Rencana jangka panjang sangat diperlukan dan
              mendesak bagi Pemerintah Kota Metro untuk memprioritaskan konversi
              TPA. Selain itu, mulai menjadikan konsep smart city, sustainable
              environment city, green city, green and blue economy,”
              pungkasnya.Artikel di atas dapat dibaca. Sampah yang tidak
              terkelola dengan baik dapat mencemari lingkungan, merusak habitat,
              dan menimbulkan dampak kesehatan pada manusia. Pencemaran udara,
              tanah, dan air merupakan beberapa dampak buruk yang disebabkan
              oleh sampah. Beberapa solusi yang bisa diterapkan antara lain:
              daur ulang, pengurangan konsumsi plastik, serta pengolahan limbah
              secara efisien. Kolaborasi antara pemerintah, masyarakat, dan
              perusahaan juga sangat penting untuk mewujudkan pengelolaan sampah
              yang berkelanjutan. Baca disini
            </p>
          </section>
          <footer className="flex py-4">
                <p className="text-center text-gray-600">Bagikan artikel ini: 
                    <button className="ml-2 text-blue-600">Facebook</button> | 
                    <button className="ml-2 text-blue-400">Twitter</button> | 
                    <button className="ml-2 text-red-600">Instagram</button>
                </p>
            </footer>
        </article>
      </main>
    </div>
  );
}
