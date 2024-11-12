import Link from 'next/link';
import Image from 'next/image'; // Pastikan untuk mengimpor Image
import Foto from './img/foto.png'; // Mengimpor gambar dari folder img

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-green-800 py-2 px-5">
      <div className="flex items-center">
        <Image 
          src={Foto} 
          alt="Logo Navbar" 
          width={40} 
          height={40} 
          className="mr-2"
        />
      </div>

      <ul className="flex space-x-6 ml-5 mt-2 text-xl">
        <Link href="/">
          <li className="text-gray-300 cursor-pointer hover:text-black">Beranda</li>
        </Link>
        <Link href="/Components">
          <li className="text-gray-300 cursor-pointer hover:text-black">Tentang Kami</li>
        </Link>
        {/* <Link href="/Components/pengaduan">
          <li className="text-gray-300 cursor-pointer hover:text-black">Layanan Pengaduan</li>
        </Link> */}
        <Link href="/Components/produk">
          <li className="text-gray-300 cursor-pointer hover:text-black">Product</li>
        </Link>
        <Link href="/Components/faq">
          <li className="text-gray-300 cursor-pointer hover:text-black">FAQ</li>
        </Link>
        <Link href="/Components/komponen">
          <li className="text-gray-300 cursor-pointer hover:text-black">Berita & Artikel</li>
        </Link>
        <Link href="/Components/informasi">
          <li className="text-gray-300 cursor-pointer hover:text-black">Informasi</li>
        </Link>
        <Link href="/loginadmin">
          <li className="text-white cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-md px-4 py-2">Admin</li>
        </Link>
      </ul>
    </nav>
  );
}
