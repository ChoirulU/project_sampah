import Image from "next/image";
import Foto from "../img/foto2.png"; // Pastikan path ini benar

export default function TentangKami() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-blue-100 p-4">
      <div className=" max-w-4xl text-center shadow-lg rounded-lg p-6">
        <Image
          src={Foto}
          layout="responsive"
          width={600}
          height={500}
          className="w-full h-auto object-cover mb-4 rounded-lg"
          alt="Foto anak-anak GPS" // Deskripsi untuk aksesibilitas
        />
        <h1 className="text-3xl font-bold mb-4">Tentang Kami</h1>
        <p className="text-left mt-4">
          Selamat datang di website kami! Kami adalah anak-anak dari Gerakan
          Peduli Sampah (GPS) yang berkomitmen untuk meningkatkan kesadaran
          masyarakat tentang pentingnya pengelolaan sampah yang baik dan
          berkelanjutan.
        </p>
        <p className="text-left mt-4">
          Website ini diciptakan sebagai platform untuk menerima pengaduan
          mengenai masalah sampah di lingkungan sekitar. Kami percaya bahwa
          setiap suara dan keluhan masyarakat sangat berarti dalam upaya
          menciptakan lingkungan yang bersih dan sehat.
        </p>
        <p className="text-left mt-4">
          Melalui website ini, kami ingin memfasilitasi masyarakat untuk
          menyampaikan pengaduan terkait sampah secara cepat dan responsif. Kami
          juga menyediakan informasi edukatif tentang cara-cara pengelolaan
          sampah yang ramah lingkungan.
        </p>
        <p className="text-left mt-4">
          Mari bergabung bersama kami dalam gerakan ini untuk menjaga kebersihan
          dan keindahan lingkungan kita. Setiap tindakan kecil dapat memberikan
          dampak besar untuk masa depan yang lebih baik!
        </p>
        <p className="text-left mt-5">
          Visi: Menjadi platform terdepan dalam menggerakkan kesadaran masyarakat untuk pengelolaan sampah yang baik dan berkelanjutan, serta menciptakan lingkungan yang bersih, sehat, dan asri melalui partisipasi aktif masyarakat.
        </p>
        <p className="text-left mt-5">
          Misi:
          1. Memfasilitasi masyarakat dalam menyampaikan pengaduan terkait masalah sampah dengan cepat, responsif, dan mudah diakses.
          2. Menyediakan informasi edukatif yang komprehensif tentang metode pengelolaan sampah yang ramah lingkungan untuk meningkatkan pengetahuan dan kesadaran masyarakat.
          3. Mendorong partisipasi aktif semua elemen masyarakat dalam menjaga kebersihan lingkungan dan mempromosikan praktik pengelolaan sampah yang berkelanjutan.
          4. Membina kerja sama dengan berbagai pihak untuk memperkuat gerakan kolektif dalam menciptakan lingkungan yang lebih bersih dan sehat.
          5. Menginspirasi perubahan perilaku dalam pengelolaan sampah melalui kampanye kesadaran dan kegiatan berkelanjutan yang berdampak positif pada komunitas.
        </p>
      </div>
    </main>
  );
}
