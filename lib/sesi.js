/* ==========================================================================
   Satu sumber isi Zychrome: sesi berikutnya, papan hasil sesi lalu, dan soal
   untuk halaman coba. Sesi 95 menit, enam titik interaksi, tiap Selasa ketiga.
   Semua nama, angka, jadwal, dan harga adalah contoh untuk purwarupa desain.
   ========================================================================== */

export const SITE = 'https://landing-zychrome.pintuweb.id';

// Jadwal bergulir: sesi digelar tiap Selasa ketiga. "Sesi berikutnya" adalah
// Selasa ketiga bulan ini bila belum lewat (WIB), selain itu bulan depan;
// tiga sesi lalu mundur sebulan demi sebulan. Halaman dibangun ulang harian
// (revalidate di app/layout.js) supaya tanggal pendaftaran tidak pernah lewat.
// Komponen klien tidak membaca tanggal ini langsung (dikirim lewat props).
const BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
const KINI = new Date(Date.now() + 7 * 3600e3);
const HARI_INI = Date.UTC(KINI.getUTCFullYear(), KINI.getUTCMonth(), KINI.getUTCDate());
const selasaKetiga = (tahun, bulan) => {
  const awal = new Date(Date.UTC(tahun, bulan, 1));
  return new Date(Date.UTC(tahun, bulan, 1 + ((2 - awal.getUTCDay() + 7) % 7) + 14));
};
let berikut = selasaKetiga(KINI.getUTCFullYear(), KINI.getUTCMonth());
if (berikut.getTime() < HARI_INI) berikut = selasaKetiga(KINI.getUTCFullYear(), KINI.getUTCMonth() + 1);
const sesiLalu = (n) => selasaKetiga(berikut.getUTCFullYear(), berikut.getUTCMonth() - n);
const teks = (d) => `Selasa, ${d.getUTCDate()} ${BULAN[d.getUTCMonth()]} ${d.getUTCFullYear()}`;

export const SESI = {
  nomor: '07',
  judul: 'Mengenali penipuan digital untuk usaha kecil',
  hari: teks(berikut),
  iso: berikut.toISOString().slice(0, 10),
  jam: '19.30–21.05 WIB',
  ringkas:
    'Pesan yang mengaku dari bank, kurir, atau marketplace makin sulit dibedakan dari yang asli. Sesi ini melatih Anda dan tim kasir mengenalinya — lewat polling dan kuis, bukan ceramah.',
  dibahas: [
    ['Anatomi pesan palsu', 'Tautan, nada mendesak, dan permintaan kode: tiga tanda yang hampir selalu muncul.'],
    ['Transfer yang "salah kirim"', 'Pola penipuan paling sering menimpa usaha kecil, dan cara menjawabnya.'],
    ['Akun marketplace & dompet digital', 'Verifikasi dua langkah, kata sandi, dan siapa saja yang boleh memegangnya.'],
    ['Saat sudah terlanjur', 'Urutan langkah dalam satu jam pertama setelah Anda sadar tertipu.'],
  ],
};

export const NARASUMBER = [
  { potret: 'rendra-wiratmaja', nama: 'Rendra Wiratmaja', peran: 'Analis keamanan siber', ringkas: 'Sepuluh tahun menangani laporan penipuan daring. Membawa pesan asli yang sudah disamarkan.', sinyal: 5 },
  { potret: 'anisa-rahmaniar', nama: 'Anisa Rahmaniar', peran: 'Edukator literasi keuangan digital', ringkas: 'Melatih pedagang pasar dan pemilik warung menggunakan dompet digital dengan aman.', sinyal: 4 },
  { potret: 'kevin-hartawijaya', nama: 'Kevin Hartawijaya', peran: 'Pemandu interaksi Zychrome', ringkas: 'Menjalankan polling dan kuis, lalu membacakan hasilnya ke pembicara saat itu juga.', sinyal: 3 },
];

export const RUNDOWN = [
  ['19.30', 'Masuk & uji polling', 'Satu polling percobaan supaya semua tahu letak tombolnya.'],
  ['19.35', 'Polling pembuka', 'Seberapa sering Anda menerima pesan mencurigakan minggu ini?'],
  ['19.48', 'Papan pertanyaan dibuka', 'Pertanyaan dengan suara terbanyak dijawab lebih dulu.'],
  ['20.04', 'Kuis: asli atau palsu?', 'Lima tangkapan layar pesan; tebak mana yang asli.'],
  ['20.22', 'Reaksi langsung', 'Pembicara melambat bila reaksi "bingung" menumpuk.'],
  ['20.40', 'Ruang diskusi kecil', 'Kelompok lima orang menyusun prosedur untuk kasir.'],
  ['20.58', 'Tanya jawab terbuka', 'Pertanyaan yang tersisa dibereskan sampai 21.05.'],
];

export const UNTUK = [
  ['Pemilik usaha kecil', 'Yang rekeningnya dipakai untuk menerima pembayaran pelanggan setiap hari.'],
  ['Kasir & admin toko daring', 'Yang paling sering menerima pesan "bukti transfer" dan permintaan kode.'],
  ['Pengelola akun marketplace', 'Yang memegang akses toko dan dompet digital milik usaha.'],
];

export const HARGA = [
  { nama: 'Gratis', harga: 'Rp 0', satuan: '', dapat: ['Sesi langsung 95 menit', 'Ikut polling, kuis, dan papan pertanyaan'] },
  { nama: 'Pro', harga: 'Rp 99.000', satuan: '/ orang', unggulan: 'dengan rekaman', dapat: ['Semua isi paket Gratis', 'Rekaman dan papan hasil sesi', 'Lembar prosedur untuk kasir (PDF)', 'Sertifikat elektronik'] },
  { nama: 'Tim', harga: 'Rp 1.500.000', satuan: '/ hingga 15 orang', dapat: ['Semua isi paket Pro', 'Ruang diskusi khusus tim Anda', 'Laporan hasil kuis per anggota tim'] },
];

export const FAQ = [
  { t: 'Apakah saya harus aktif menjawab?', j: 'Tidak wajib, tetapi sesi dirancang untuk itu. Polling dan kuis bersifat anonim — pembicara hanya melihat angka keseluruhan, bukan nama.' },
  { t: 'Perangkat apa yang dibutuhkan?', j: 'Peramban di laptop atau ponsel. Polling dan kuis berjalan di jendela yang sama dengan siaran, tidak perlu aplikasi tambahan.' },
  { t: 'Apakah pesan penipuan yang ditampilkan asli?', j: 'Ya, tetapi nomor, nama, dan tautan di dalamnya sudah disamarkan. Jangan menyalin tautan dari layar.' },
  { t: 'Bagaimana dengan rekaman?', j: 'Paket Pro dan Tim menerima rekaman beserta papan hasil — ringkasan jawaban polling, skor kuis, dan pertanyaan teratas — dalam 24 jam.' },
  { t: 'Apakah Zychrome mewakili bank atau marketplace tertentu?', j: 'Tidak. Zychrome tidak berafiliasi dengan bank, dompet digital, atau marketplace mana pun, dan tidak akan pernah meminta kode atau kata sandi Anda.' },
];

/* Papan hasil sesi lalu — angka keseluruhan, anonim. */
export const PAPAN = [
  {
    nomor: '06',
    judul: 'Mengatur arus kas harian',
    hari: teks(sesiLalu(1)),
    peserta: 1184,
    polling: { tanya: 'Apakah uang usaha dan uang pribadi Anda masih bercampur?', pilihan: [['Masih bercampur', 58], ['Sebagian terpisah', 29], ['Sudah terpisah penuh', 13]] },
    kuis: [['Membedakan kas dan laba', 71], ['Menghitung modal kerja', 54], ['Membaca catatan harian', 83]],
    pertanyaan: [
      ['Berapa persen uang yang aman diambil untuk kebutuhan pribadi?', 212],
      ['Perlukah rekening terpisah kalau usahanya masih kecil?', 187],
      ['Aplikasi pencatatan apa yang paling sederhana?', 141],
    ],
    reaksi: { jelas: 64, bingung: 22, lebihCepat: 14 },
  },
  {
    nomor: '05',
    judul: 'Memotret produk dengan ponsel',
    hari: teks(sesiLalu(2)),
    peserta: 1407,
    polling: { tanya: 'Di mana Anda biasanya memotret produk?', pilihan: [['Di meja dekat jendela', 46], ['Di lantai atau kasur', 31], ['Pakai kotak foto', 23]] },
    kuis: [['Memilih arah cahaya', 79], ['Mengatur latar polos', 88], ['Menyunting tanpa berlebihan', 61]],
    pertanyaan: [
      ['Bagaimana memotret produk mengilap tanpa pantulan?', 264],
      ['Perlukah membeli lampu khusus?', 198],
      ['Berapa foto yang ideal per produk?', 120],
    ],
    reaksi: { jelas: 72, bingung: 15, lebihCepat: 13 },
  },
  {
    nomor: '04',
    judul: 'Membalas ulasan buruk',
    hari: teks(sesiLalu(3)),
    peserta: 962,
    polling: { tanya: 'Apa yang biasanya Anda lakukan pada ulasan bintang satu?', pilihan: [['Tidak membalas', 41], ['Membalas singkat', 37], ['Menghubungi pembeli langsung', 22]] },
    kuis: [['Membalas tanpa defensif', 66], ['Memindahkan ke pesan pribadi', 74], ['Kapan meminta ulasan dihapus', 48]],
    pertanyaan: [
      ['Bagaimana kalau ulasannya jelas-jelas bohong?', 231],
      ['Apakah perlu memberi kompensasi?', 176],
      ['Berapa lama waktu terbaik untuk membalas?', 109],
    ],
    reaksi: { jelas: 58, bingung: 27, lebihCepat: 15 },
  },
];

/* Soal untuk halaman /coba. Hasil "peserta sesi lalu" adalah angka contoh. */
export const COBA_POLLING = {
  tanya: 'Minggu ini, pernahkah Anda menerima pesan yang mengaku dari bank atau kurir?',
  pilihan: [['Ya, lebih dari sekali', 412], ['Ya, sekali', 297], ['Tidak ingat', 138], ['Tidak pernah', 153]],
};

export const COBA_KUIS = [
  {
    pesan: '“Paket Anda tertahan karena alamat tidak lengkap. Konfirmasi di tautan berikut dalam 2 jam: kurir-konfirmasi.example/xk2”',
    palsu: true,
    alasan: 'Tenggat mendesak dan tautan pendek ke domain yang bukan milik kurir. Kurir resmi tidak meminta konfirmasi alamat lewat tautan asing.',
  },
  {
    pesan: '“Pesanan #20931 sudah dikirim. Lacak paket Anda di aplikasi atau situs resmi kami.”',
    palsu: false,
    alasan: 'Tidak ada tautan, tidak ada permintaan data, dan Anda diarahkan ke aplikasi atau situs yang sudah Anda kenal.',
  },
  {
    pesan: '“Maaf kak, saya salah transfer Rp 750.000 ke rekening kakak. Tolong kembalikan ke nomor ini ya, buktinya saya kirim.”',
    palsu: true,
    alasan: 'Pola "salah transfer": bukti transfer bisa dipalsukan. Cek mutasi rekening sendiri, dan kembalikan hanya lewat bank bila dana memang masuk.',
  },
];

export const papanByNomor = (n) => PAPAN.find((p) => p.nomor === n);
