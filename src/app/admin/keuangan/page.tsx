"use client"
import React, { useState } from 'react';

export default function LaporanKeuangan() {
  // State untuk menyimpan data transaksi
  const [transaksi, setTransaksi] = useState([
    { id: 1, tanggal: '2024-10-01', jenis: 'Kas Masuk', deskripsi: 'Penjualan Sampah Plastik', jumlah: 150000 },
    { id: 2, tanggal: '2024-10-02', jenis: 'Kas Keluar', deskripsi: 'Pembelian Kantong Plastik', jumlah: 50000 },
    { id: 3, tanggal: '2024-10-05', jenis: 'Kas Masuk', deskripsi: 'Penjualan Sampah Organik', jumlah: 200000 },
    { id: 4, tanggal: '2024-10-07', jenis: 'Kas Keluar', deskripsi: 'Gaji Pegawai', jumlah: 100000 },
  ]);

  // State untuk filter transaksi (kas masuk atau kas keluar)
  const [filterJenis, setFilterJenis] = useState('Semua');

  // Filter transaksi berdasarkan jenis
  const filteredTransaksi = filterJenis === 'Semua'
    ? transaksi
    : transaksi.filter(trans => trans.jenis === filterJenis);

  // Menghitung total kas masuk dan keluar
  const totalKasMasuk = transaksi.filter(t => t.jenis === 'Kas Masuk').reduce((total, t) => total + t.jumlah, 0);
  const totalKasKeluar = transaksi.filter(t => t.jenis === 'Kas Keluar').reduce((total, t) => total + t.jumlah, 0);

  return (
    <div className="min-h-screen w-full bg-blue-100 p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Laporan Keuangan Bank Sampah</h1>

      {/* Filter untuk transaksi */}
      <div className="mb-6">
        <label htmlFor="filter" className="mr-4">Filter Jenis Transaksi:</label>
        <select
          id="filter"
          className="p-2 border rounded"
          value={filterJenis}
          onChange={(e) => setFilterJenis(e.target.value)}
        >
          <option value="Semua">Semua</option>
          <option value="Kas Masuk">Kas Masuk</option>
          <option value="Kas Keluar">Kas Keluar</option>
        </select>
      </div>

      {/* Tabel Laporan Keuangan */}
      <table className="w-full bg-white shadow-lg rounded-lg mb-6">
        <thead>
          <tr className="bg-green-600 text-white">
            <th className="px-4 py-2 text-left">No.</th>
            <th className="px-4 py-2 text-left">Tanggal</th>
            <th className="px-4 py-2 text-left">Jenis</th>
            <th className="px-4 py-2 text-left">Deskripsi</th>
            <th className="px-4 py-2 text-left">Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransaksi.map((transaksi, index) => (
            <tr key={transaksi.id} className="border-t border-gray-200">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2">{transaksi.tanggal}</td>
              <td className="px-4 py-2">{transaksi.jenis}</td>
              <td className="px-4 py-2">{transaksi.deskripsi}</td>
              <td className="px-4 py-2">{transaksi.jumlah.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Laporan Total Keuangan */}
      <div className="bg-white p-4 rounded-lg shadow-lg mt-6">
        <h2 className="text-xl font-semibold mb-4">Ringkasan Keuangan</h2>
        <div className="mb-4">
          <span className="font-bold">Total Kas Masuk:</span> {totalKasMasuk.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
        </div>
        <div className="mb-4">
          <span className="font-bold">Total Kas Keluar:</span> {totalKasKeluar.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
        </div>
        <div>
          <span className="font-bold">Saldo Akhir:</span> 
          { (totalKasMasuk - totalKasKeluar).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }) }
        </div>
      </div>
    </div>
  );
}
