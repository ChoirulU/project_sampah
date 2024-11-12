export default function MainContentDashboard() {
    return (
        <div className="flex min-h-screen bg-green-700">
            {/* Main Content */}
            <div className="flex-1 p-8 bg-gray-100">
                {/* Header */}
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard Bank Sampah</h1>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {/* Card 1: Total Sampah Terkumpul */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Total Sampah Terkumpul</h2>
                        <p className="text-4xl font-bold text-blue-600">5,300 kg</p>
                    </div>

                    {/* Card 2: Sampah Terverifikasi */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sampah Terverifikasi</h2>
                        <p className="text-4xl font-bold text-green-600">4,800 kg</p>
                    </div>

                    {/* Card 3: Sampah Menunggu Verifikasi */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sampah Menunggu Verifikasi</h2>
                        <p className="text-4xl font-bold text-yellow-500">500 kg</p>
                    </div>
                </div>

                {/* Table Section: Manajemen Data Sampah */}
                <div className="mt-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Manajemen Data Sampah</h2>
                    <table className="min-w-full bg-white shadow-lg rounded-lg">
                        <thead>
                            <tr className="bg-green-600 text-white">
                                <th className="px-4 py-2 text-left">ID</th>
                                <th className="px-4 py-2 text-left">Jenis Sampah</th>
                                <th className="px-4 py-2 text-left">Berat</th>
                                <th className="px-4 py-2 text-left">Tanggal</th>
                                <th className="px-4 py-2 text-left">Status</th>
                                <th className="px-4 py-2 text-left">Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Sampah 1 */}
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">1</td>
                                <td className="px-4 py-2">Plastik</td>
                                <td className="px-4 py-2">500 kg</td>
                                <td className="px-4 py-2">01-11-2024</td>
                                <td className="px-4 py-2 text-green-600">Terverifikasi</td>
                                <td className="px-4 py-2">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Hapus</button>
                                </td>
                            </tr>

                            {/* Sampah 2 */}
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">2</td>
                                <td className="px-4 py-2">Kertas</td>
                                <td className="px-4 py-2">300 kg</td>
                                <td className="px-4 py-2">01-11-2024</td>
                                <td className="px-4 py-2 text-yellow-500">Menunggu Verifikasi</td>
                                <td className="px-4 py-2">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Hapus</button>
                                </td>
                            </tr>

                            {/* Sampah 3 */}
                            <tr className="border-t border-gray-200">
                                <td className="px-4 py-2">3</td>
                                <td className="px-4 py-2">Botol</td>
                                <td className="px-4 py-2">200 kg</td>
                                <td className="px-4 py-2">02-11-2024</td>
                                <td className="px-4 py-2 text-green-600">Terverifikasi</td>
                                <td className="px-4 py-2">
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
                                    <button className="bg-red-500 text-white px-4 py-2 rounded-md ml-2">Hapus</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-gray-600">
                    <p>&copy; 2024 Bank Sampah - Panel Admin</p>
                </div>
            </div>
        </div>
    );
}
