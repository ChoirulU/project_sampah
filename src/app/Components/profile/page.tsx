// pages/Profile.js

export default function Profile() {
    return (
      <div className="flex min-h-screen items-center justify-center bg-green-500">
        <div className="bg-white p-6 rounded-lg shadow-md w-80">
          
          {/* Bingkai Foto */}
          <div className="flex justify-center mb-4">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              <img 
                src="https://via.placeholder.com/150" 
                alt="Profile Photo" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Header */}
          <h1 className="text-2xl font-bold text-center mb-4">PROFILE</h1>
  
          {/* NIK */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">NIK:</h2>
            <p>351688907457</p>
          </div>
  
          {/* Nama */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">Nama:</h2>
            <p>JOSEP PRAYOGI</p>
          </div>
  
          {/* Alamat */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">Alamat:</h2>
            <p>DUSUN KRAJAN, DESA KABAT, RT/RW 01/04</p>
          </div>
  
          {/* Nomor Telepon */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">No. Telepon:</h2>
            <p>087654236789</p>
          </div>
  
          {/* Email */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">Email:</h2>
            <p>josep@gmail.com</p>
          </div>
  
          {/* Kolom Kosong atau Informasi Rahasia */}
          <div className="mb-2">
            <h2 className="text-lg font-semibold">*********</h2>
          </div>
        </div>
      </div>
    );
  }
  