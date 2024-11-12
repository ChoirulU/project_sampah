export default function LoginAdmin() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-800">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          
          {/* Header */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Admin Bank Sampah</h1>
          <p className="text-center text-gray-500 mb-6">Silakan login untuk mengakses panel admin</p>
          
          {/* Form Login */}
          <form>
            {/* Username Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Masukkan username"
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
  
            {/* Login Button */}
            <a
              href="admin/dashboard"  // Mengarahkan ke halaman dashboard
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition duration-200 block text-center"
            >
              LOGIN
            </a>
          </form>
  
          {/* Footer Links */}
          <div className="mt-4 text-center">
            <p className="text-gray-500">
              Lupa password? <a href="/forgot-password" className="text-blue-600 font-semibold hover:underline">Reset di sini</a>
            </p>
          </div>
        </div>
      </div>
    );
}
