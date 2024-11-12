export default function Login() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green-500">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          
          {/* Header */}
          <h1 className="text-3xl font-bold text-center text-green-700 mb-2">Sahabat Lingkungan</h1>
          <p className="text-center text-gray-600 mb-6">SELAMAT DATANG</p>
          
          {/* Form Login */}
          <form>
            {/* Email or Username Field */}
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
                E-mail atau Username
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Masukkan email atau username"
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
  
            {/* Login Button as Link */}
            <a href="https://wa.me/6282141499490" className="block">
              <button
                type="button"
                className="w-full bg-green-600 text-white py-2 rounded font-semibold hover:bg-green-700 transition duration-200"
              >
                LOGIN
              </button>
            </a>
          </form>
        </div>
      </div>
    );
}