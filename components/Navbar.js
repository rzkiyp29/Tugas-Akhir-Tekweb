export default function Navbar() {
    return (
        <nav className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-lg font-bold">Booking Futsal</h1>
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/lapangan" className="hover:underline">Lapangan</a></li>
                    <li><a href="/booking" className="hover:underline">Booking</a></li>
                    <li><a href="/riwayat" className="hover:underline">Riwayat</a></li>
                </ul>
            </div>
        </nav>
    );
}
