import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import lapanganData from "../../data/lapangan.json";

export default function DetailLapangan() {
    const router = useRouter();
    const { id } = router.query;

    const lapangan = lapanganData.find((item) => item.id === parseInt(id));

    if (!lapangan) {
        return (
            <div className="flex flex-col min-h-screen">
                <Navbar />
                <main className="flex-grow container mx-auto p-6 text-center">
                    <h1 className="text-2xl font-bold">Lapangan tidak ditemukan</h1>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto p-6">
                <div className="flex flex-col items-center">
                    <img
                        src={lapangan.gambar}
                        alt={lapangan.nama}
                        className="w-full max-w-2xl h-64 object-cover rounded-lg"
                    />
                    <h1 className="text-3xl font-bold mt-6">{lapangan.nama}</h1>
                    <p className="text-gray-700 mt-2">{lapangan.lokasi}</p>
                    <p className="text-blue-600 text-xl font-semibold mt-2">
                        Rp {lapangan.harga.toLocaleString()} / jam
                    </p>
                    <a
                        href="/booking"
                        className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
                    >
                        Booking Sekarang
                    </a>
                </div>
            </main>
            <Footer />
        </div>
    );
}
