import Link from "next/link";

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">


      <div className="flex">
        <div className="bg-green-800 w-64 p-6 space-y-4">
                  <ul className="text-white font-bold cursor-pointer ">
                    <Link href="/admin/dashboard">
                    <li className="mb-4 hover:text-black" >Dashboard</li>
                    </Link>
                    <Link href="/admin/users">
                    <li className="mb-4 hover:text-black">Pengguna</li>
                    </Link>
                    <Link href="/admin/keuangan">
                    <li className="mb-4 hover:text-black">Laporan</li>
                    </Link>
                    <Link href="/admin/">
                    <li className="mb-4 hover:text-black">Pengaturan</li>
                    </Link>
                </ul>
        </div>
                 {children}
      </div>
    </div>
  );
}
