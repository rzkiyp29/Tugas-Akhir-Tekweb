import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto p-6 text-center">
                <h1 className="text-4xl font-bold mb-4">Selamat Datang di Booking Futsal</h1>
                <p className="text-lg text-gray-700 mb-6">
                    Aplikasi untuk mempermudah Anda dalam memesan lapangan futsal dengan cepat dan mudah.
                </p>
                <a
                    href="/lapangan"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-500"
                >
                    Lihat Daftar Lapangan
                </a>
            </main>
            <Footer />
        </div>
    );
}
