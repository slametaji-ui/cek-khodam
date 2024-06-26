import React, { useState } from 'react';
import ResultCheckNama from './ResultCheckNama';

const FormCheckNama = () => {
  const [nama, setNama] = useState('');
  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the request starts

    try {
      const response = await fetch('https://check-khodam-eosin.vercel.app/api/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nama }),
      });

      if (!response.ok) {
        throw new Error('Gagal mendapatkan data dari server.');
      }

      const data = await response.json();
      setHasil(data);
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
    } finally {
      setLoading(false); // Set loading to false when the request completes
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-cover bg-center" style={{ backgroundImage: `url('https://i.pinimg.com/originals/83/78/19/8378198c94c91ced15f33e371c35c392.jpg')` }}>
      <div className="flex flex-col items-center bg-white bg-opacity-15 p-9 shadow-lg pt-4 mt-4 text-center rounded-xl py-4 px-4">
      <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-tiger-funny-png-image_9014537.png" alt="Pertamina Logo" className="mb-2 h-24" />
        <h1 className="text-2xl font-bold mb-8 px-28 text-center">Cek Khodam</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-xl">
          <div className="flex items-center border border-gray-300 rounded-full shadow-sm p-2 bg-white">
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              disabled={loading}
              placeholder="Masukkan nama Anda"
              className="flex-grow px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full focus:outline-none"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Check'}
            </button>
          </div>
        </form>
      </div>
      {hasil && (
        <div className="mt-8 w-full max-w-xl">
          <ResultCheckNama data={hasil} />
        </div>
      )}
    </div>
  );
};

export default FormCheckNama;
