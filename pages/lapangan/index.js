import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import lapanganData from "../../data/lapangan.json";

export default function DaftarLapangan() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Daftar Lapangan Futsal</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lapanganData.map((lapangan) => (
                        <div
                            key={lapangan.id}
                            className="border rounded-lg shadow hover:shadow-lg transition p-4"
                        >
                            <img
                                src={lapangan.gambar}
                                alt={lapangan.nama}
                                className="w-full h-48 object-cover rounded-t-lg"
                            />
                            <h2 className="text-xl font-bold mt-4">{lapangan.nama}</h2>
                            <p className="text-gray-700">{lapangan.lokasi}</p>
                            <p className="text-blue-600 font-semibold">
                                Rp {lapangan.harga.toLocaleString()} / jam
                            </p>
                            <a
                                href={`/lapangan/${lapangan.id}`}
                                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                            >
                                Lihat Detail
                            </a>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
