export default function Registrasi() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green-500">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          
          {/* Header */}
          <h1 className="text-3xl font-bold text-center text-green-700 mb-6">REGISTRASI</h1>
          
          {/* Form Registrasi */}
          <form>
            {/* NIK Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="nokk">
                No.KK
              </label>
              <input
                type="text"
                id="nokk"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Masukkan No.KK"
              />
            </div>
  
            {/* Nama Lengkap Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="nama">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Masukkan nama lengkap"
              />
            </div>
  
            {/* Alamat Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="alamat">
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Masukkan alamat"
              />
            </div>
  
            {/* No HP Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="no_hp">
                No HP
              </label>
              <input
                type="text"
                id="no_hp"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Masukkan nomor HP"
              />
            </div>
  
            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Masukkan email"
              />
            </div>
  
            {/* Password Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Masukkan password"
              />
            </div>
  
            {/* Daftar Button as Link */}
            <a href="admins/users" className="block">
              <button
                type="button"
                className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition duration-200"
              >
                DAFTAR
              </button>
            </a>
          </form>
        </div>
      </div>
    );
}
