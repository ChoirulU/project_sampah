    import Image from "next/image";
    import Product1 from "../../img/produk1.jpg";
    import Product2 from "../../img/produk2.jpg";
    import Product3 from "../../img/produk3.jpeg";

    export default function Produk() {
    const products = [
        { id: 1, name: 'Kompos Padat', image: Product1, price: 'Rp 100.000' },
        { id: 2, name: 'Magot Kering', image: Product2, price: 'Rp 150.000' },
        { id: 3, name: 'Kompos Cair', image: Product3, price: 'Rp 200.000' },
    ];

    return (
        <main className="w-full flex flex-col items-center justify-center bg-[#8da8ac] p-8 min-h-screen">
        <h2 className="text-2xl font-bold text-[#FFFF] mb-8">Produk Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {products.map((product) => (
            <div key={product.id} className="bg-[#FFFF] rounded-lg shadow-md p-4 w-60">
                <div className="rounded-lg overflow-hidden h-52"> {/* Tinggi gambar diatur di sini */}
                <Image
                    src={product.image}
                    alt={`Foto Produk ${product.id}`}
                    layout="responsive"
                    width={300}
                    height={250} // Menambahkan height agar lebih tinggi
                    className="object-cover h-full w-full"
                />
                </div>
                <div className="mt-4 bg-[#afc5c3] p-2 rounded-t-lg">
                <p className="text-center font-bold text-gray-800">{product.name}</p>
                </div>
                <div className="bg-[#afc5c3] p-2 rounded-b-lg">
                <p className="text-center font-semibold text-gray-700">{product.price}</p>
                </div>
            </div>
            ))}
        </div>
        </main>
    );
    }
