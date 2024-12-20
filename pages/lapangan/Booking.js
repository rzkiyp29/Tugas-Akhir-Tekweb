import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Booking() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">Form Booking Lapangan</h1>
                <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
                    <div className="mb-4">
                        <label htmlFor="nama" className="block text-gray-700 font-medium">
                            Nama Pemesan
                        </label>
                        <input
                            type="text"
                            id="Nama"
                            className="mt-1 block w-full border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Masukkan nama Anda"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="tanggal" className="block text-gray-700 font-medium">
                            Tanggal
                        </label>
                        <input
                            type="date"
                            id="tanggal"
                            className="mt-1 block w-full border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="jam" className="block text-gray-700 font-medium">
                            Jam
                        </label>
                        <input
                            type="time"
                            id="jam"
                            className="mt-1 block w-full border-gray-300 rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-500"
                    >
                        Booking
                    </button>
                </form>
            </main>
            <Footer />
        </div>
    );
}
