"use client"
import React, { useState } from 'react';
import Link from 'next/link'; // Impor Link dari next/link

export default function HalamanDataPengguna() {
  // State untuk toggle visibilitas password
  const [tampilkanPassword, setTampilkanPassword] = useState(true);

  return (
    <div className="min-h-screen w-full bg-blue-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Data Pengguna</h1>

      <table className="flex-col w-full bg-white shadow-lg rounded-lg h-64">
        <thead>
          <tr className="bg-green-600 w-full text-white">
            <th className="px-4 py-2 text-left">No.</th>
            <th className="px-4 py-2 text-left">Nama</th>
            <th className="px-4 py-2 text-left">Nomor KK</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left">Password</th>
          </tr>
        </thead>
        <tbody>
          {/* Baris Data Pengguna */}
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">1</td>
            <td className="px-4 py-2">Ali Fauzi</td>
            <td className="px-4 py-2">123456789012</td>
            <td className="px-4 py-2">ali@email.com</td>
            <td className="px-4 py-2">
              {tampilkanPassword ? 'password123' : '******'}
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">2</td>
            <td className="px-4 py-2">Budi Santoso</td>
            <td className="px-4 py-2">123456789013</td>
            <td className="px-4 py-2">budi@email.com</td>
            <td className="px-4 py-2">
              {tampilkanPassword ? 'budi2024' : '******'}
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">3</td>
            <td className="px-4 py-2">Citra Dewi</td>
            <td className="px-4 py-2">123456789014</td>
            <td className="px-4 py-2">citra@email.com</td>
            <td className="px-4 py-2">
              {tampilkanPassword ? 'citra789' : '******'}
            </td>
          </tr>
          <tr className="border-t border-gray-200">
            <td className="px-4 py-2">4</td>
            <td className="px-4 py-2">Dwi Pratama</td>
            <td className="px-4 py-2">123456789015</td>
            <td className="px-4 py-2">dwi@email.com</td>
            <td className="px-4 py-2">
              {tampilkanPassword ? 'dwi2025' : '******'}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Button untuk menambahkan pengguna */}
      <Link href="/register"> {/* Link menuju halaman register */}
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Tambah Pengguna
        </button>
      </Link>
    </div>
  );
}
