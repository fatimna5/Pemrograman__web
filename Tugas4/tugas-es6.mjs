 const barang = [
    { id: 1, nama: 'sling bag', qty: 2, harga: 3_700, katgori: 'tas'},
    { id: 2, nama: 'dress', qty: 3, harga: 6_200, kategori: 'baju'},
    { id: 3, nama: 'hijab', qty: 4, harga: 2_000, kategori: 'hijab'},
    { id: 4, nama: 'flatshoes', qty: 6, harga: 4_000, kategori: 'sepatu'},
    { id: 5, nama: 'cushion', qty: 7, harga: 1_500, kategori: 'makeup'},
    { id: 6, nama: 'serum', qty: 1, harga: 5_000, kategori: 'skincare'}
 ];
 const filter = barang.filter(i => i.harga > 4000)
 console.log(filter); 
const hasilmap = barang.map(({barang, qty, harga}) => ({ 
   barang,
   subtotal: qty * harga
}));

console.log("\n=== Hasil Map (subtotal tiap barang)")
console.log(hasilmap)
const totalKeseluruhan = hasilmap.reduce((total, {subtotal}) => total + subtotal, 0);
console.log(totalKeseluruhan);