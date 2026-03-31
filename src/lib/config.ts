// =====================
// SITE CONFIG — edit ini untuk update konten dari sini
// Nanti bisa dihubungkan ke database / CMS untuk dashboard admin
// =====================

export const siteConfig = {
  name: "UKM FPPI",
  fullName: "Forum Penalaran Penelitian Ilmiah",
  tagline: "Wadah pengembangan penalaran, penelitian, dan karya ilmiah mahasiswa menuju prestasi yang gemilang.",
  foundedYear: "2014",
  stats: [
    { number: "20", label: "Anggota Aktif" },
    { number: "5", label: "Karya Ilmiah" },
    { number: "3", label: "Prestasi Nasional" },
    { number: "2013", label: "Tahun Berdiri" },
  ],
};

export const ketuaData = {
  name: "KELVIN ",
  role: "Ketua UKM FPPI 2025",
  nameFormal: "KELVIN LIE, 2025",
  photo: "/image/Screenshot 2026-03-30 114522.png",
  description:
    "Mahasiswa aktif yang berpengalaman dalam penelitian ilmiah dan kompetisi karya tulis tingkat nasional. Memiliki visi menjadikan FPPI sebagai wadah terdepan dalam mencetak peneliti muda yang inovatif dan berdedikasi untuk kemajuan bangsa.",
  phone: "+62 812 3456 7890",
  email: "ketua.fppi@university.ac.id",
};

export const beritaData = [
  {
    id: 1,
    category: "Kompetisi",
    title: "PEMBEBEKALAN CALON ANGGOTA FPPI ",
    date: "15 Maret 2025",
    image: "/image/IMG_20251109_090617892.jpg",
    slug: "fppi-raih-juara-1-lktin-2024",
  },
  {
    id: 2,
    category: "Kegiatan",
    title: "Workshop Penulisan Karya Ilmiah Batch 5 Resmi Dibuka",
    date: "10 Maret 2025",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&q=60",
    slug: "workshop-karya-ilmiah-batch-5",
  },
  {
    id: 3,
    category: "Diskusi",
    title: "Forum Diskusi Ilmiah: Inovasi Teknologi di Era AI",
    date: "5 Maret 2025",
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=400&q=60",
    slug: "forum-diskusi-inovasi-teknologi-ai",
  },
  {
    id: 4,
    category: "Pengumuman",
    title: "Pendaftaran Anggota Baru FPPI 2025 Telah Dibuka",
    date: "1 Maret 2025",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&q=60",
    slug: "pendaftaran-anggota-baru-2025",
  },
  {
    id: 5,
    category: "Kolaborasi",
    title: "MoU FPPI dengan Lembaga Penelitian Eksternal 2025",
    date: "25 Feb 2025",
    image: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=400&q=60",
    slug: "mou-fppi-lembaga-penelitian-2025",
  },
  {
    id: 6,
    category: "Prestasi",
    title: "3 Anggota FPPI Lolos Seleksi PKM Pendanaan 2025",
    date: "20 Feb 2025",
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&q=60",
    slug: "3-anggota-lolos-pkm-2025",
  },
];

export const contactData = {
  phone: "+62 812 3456 7890",
  whatsapp: "+62 812 3456 7891",
  email: "fppi@university.ac.id",
  instagram: "@ukm_fppi",
};

export const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Program", href: "/program" },
  { label: "Anggota", href: "/anggota" },
  { label: "Berita", href: "/berita" },
];


// =====================
// DATA DIVISI & ANGGOTA
// =====================

export const divisiData = [
  {
    id: "pengurus-harian",
    nama: "Pengurus Harian",
    deskripsi: "Inti kepemimpinan FPPI yang bertanggung jawab atas koordinasi dan arah organisasi.",
    foto: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=70",
    jumlahAnggota: 5,
    jumlahProgram: 4,
    anggota: [
      { nama: "Nama Ketua", jabatan: "Ketua Umum", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=70" },
      { nama: "Nama Wakil", jabatan: "Wakil Ketua", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=70" },
      { nama: "Nama Sekretaris", jabatan: "Sekretaris", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=70" },
      { nama: "Nama Bendahara", jabatan: "bendahara", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=70"}
    ],
  },
  {
    id: "penelitian-karya-ilmiah",
    nama: "Penelitian & Karya Ilmiah",
    deskripsi: "Divisi yang berfokus pada pengembangan penelitian dan karya tulis ilmiah anggota.",
    foto: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=70",
    jumlahAnggota: 12,
    jumlahProgram: 6,
    anggota: [
      { nama: "Nama Kepala Divisi", jabatan: "Kepala Divisi", foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=70" },
      { nama: "Nama Anggota 1", jabatan: "Anggota", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=70" },
      {nama: "Nama Aggota 2", jabatan: "Anggota", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=70" },
      {nama: "Nama Anggota 3", jabatan: "Anggota", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=70" },
    ],
  },
  {
    id: "media-komunikasi",
    nama: "Media & Komunikasi",
    deskripsi: "Divisi yang mengelola media sosial, publikasi, dan komunikasi organisasi.",
    foto: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=800&q=70",
    jumlahAnggota: 8,
    jumlahProgram: 5,
    anggota: [
      { nama: "Dylan putry Setyono", jabatan: "Kepala Divisi", foto: "/image/Screenshot 2026-03-30 122807.png" },
      {nama: "Irsan Ali Wardaana", jabatan: "Anggota", foto: "/image/Screenshot 2026-03-30 221420.png" },
      {nama: "Iqbal Budi Nugroho", jabatan: "Anggota", foto: "/image/DSC03343.jpg" },
      {nama: "Nama Anggota 3", jabatan: "Anggota", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=70" },
    ],
  },
  {
    id: "pengembangan-sdm",
    nama: "Pengembangan SDM",
    deskripsi: "Divisi yang berfokus pada pelatihan, pembinaan, dan pengembangan potensi anggota.",
    foto: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=70",
    jumlahAnggota: 10,
    jumlahProgram: 7,
    anggota: [
      { nama: "Nama Kepala Divisi", jabatan: "Kepala Divisi", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=70" },
      {nama: "Nama Anggota 1", jabatan: "Anggota", foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=70" },
      {nama: "Nama Anggota 2", jabatan: "Anggota", foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=70" },
      {nama: "Nama Anggota 3", jabatan: "Anggota", foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=70" },
    ],
  },
];

export type Divisi = (typeof divisiData)[number];
export type Anggota = (typeof divisiData)[number]["anggota"][number];




// Types
export type Berita = (typeof beritaData)[number];
export type ContactData = typeof contactData;
export type KetuaData = typeof ketuaData;
