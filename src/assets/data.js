const data = [
  {
    no: 1,
    bab: 'A. Kondisi Eksternal',
    des: 'Konsistensi dengan hasil analisis SWOT dan/atau analisis lain serta rencana pengembangan ke depan.',
    ket: '',
  },
  {
    no: 2,
    bab: 'B. Profil Unit Pengelola Program Studi',
    des: 'Keserbacakupan informasi dalam profil dan konsistensi antara profil dengan data dan informasi yang disampaikan pada masing-masing kriteria, serta menunjukkan iklim yang kondusif untuk pengembangan dan reputasi sebagai rujukan di bidang keilmuannya.',
    ket: '',
  },
  {
    no: 3,
    bab: 'C1. Kriteria Visi, Misi, Tujuan dan Strategi',
    des: 'Kesesuaian Visi, Misi, Tujuan dan Strategi (VMTS) Unit Pengelola Program Studi (UPPS) terhadap VMTS Perguruan Tinggi (PT) dan visi keilmuan Program Studi (PS) yang dikelolanya.',
    ket: '',
  },
  {
    no: 4,
    bab: 'C1. Kriteria Visi, Misi, Tujuan dan Strategi',
    des: 'Mekanisme dan keterlibatan pemangku kepentingan dalam penyusunan VMTS UPPS',
    ket: '',
  },
  {
    no: 5,
    bab: 'C1. Kriteria Visi, Misi, Tujuan dan Strategi',
    des: 'Strategi pencapaian tujuan disusun berdasarkan analisis yang sistematis, serta pada pelaksanaannya dilakukan pemantauan dan evaluasi yang ditindaklanjuti',
    ket: '',
  },
  {
    no: 6,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Kelengkapan struktur organisasi dan keefektifan penyelenggaraan organisasi.',
    ket: '',
  },
  {
    no: 7,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Perwujudan good governance dan pemenuhan lima pilar sistem tata pamong, yang mencakup: 1) Kredibel, 2) Transparan, 3) Akuntabel, 4) Bertanggung jawab, 5) Adil. Skor = (A + (2 x B)) / 3',
    ket: '',
  },
  {
    no: 8,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Komitmen pimpinan UPPS',
    ket: '',
  },
  {
    no: 9,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Kapabilitas pimpinan UPPS, mencakup aspek: 1) perencanaan, 2) pengorganisasian, 3) penempatan personel, 4) pelaksanaan, 5) pengendalian dan pengawasan, dan 6) pelaporan yang menjadi dasar tindak lanjut. Skor = (A + (2 x B)) / 3',
    ket: '',
  },
  {
    no: 10,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Mutu, manfaat, kepuasan dan keberlanjutan kerjasama pendidikan, penelitian dan PkM yang relevan dengan program studi. UPPS memiliki bukti yang sahih terkait kerjasama yang ada telah memenuhi 3 aspek berikut: 1) memberikan manfaat bagi program studi dalam pemenuhan proses pembelajaran, penelitian, PkM. 2) memberikan peningkatan kinerja tridharma dan fasilitas pendukung program studi. 3) memberikan kepuasan kepada mitra industri dan mitra kerjasama lainnya, serta menjamin keberlanjutan kerjasama dan hasilnya',
    ket: '',
  },
  {
    no: 11,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Kerjasama pendidikan, penelitian, dan PkM yang relevan dengan program studi dan dikelola oleh UPPS dalam 3 tahun terakhir. Tabel 1 \nLKPS',
    ket: `N1 = Jumlah kerjasama pendidikan.
N2 = Jumlah kerjasama penelitian.
N3 = Jumlah kerjasama pengabdian kepada masyarakat.
NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi.
`,
  },
  {
    no: 12,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Kerjasama tingkat internasional, nasional, wilayah/lokal yang relevan dengan program studi dan dikelola oleh UPPS dalam 3 tahun terakhir. Tabel 1 LKPS Skor = ((2 x A) + B) / 3',
    ket: '',
  },
  {
    no: 13,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Pelampauan SN-DIKTI yang ditetapkan dengan indikator kinerja tambahan yang berlaku di UPPS berdasarkan standar pendidikan tinggi yang ditetapkan perguruan tinggi pada tiap kriteria.',
    ket: '',
  },
  {
    no: 14,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Analisis keberhasilan dan/atau ketidakberhasilan pencapaian kinerja UPPS yang telah ditetapkan di tiap kriteria memenuhi 2 aspek sebagai berikut: 1) capaian kinerja diukur dengan metoda yang tepat, dan hasilnya dianalisis serta dievaluasi, dan 2) analisis terhadap capaian kinerja mencakup identifikasi akar masalah, faktor pendukung keberhasilan dan faktor penghambat ketercapaian standard, dan deskripsi singkat tindak lanjut yang akan dilakukan.',
    ket: '',
  },
  {
    no: 15,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Keterlaksanaan Sistem Penjaminan Mutu Internal (akademik dan nonakademik) yang dibuktikan dengan keberadaan 5 aspek: 1) dokumen legal pembentukan unsur pelaksana penjaminan mutu. 2) ketersediaan dokumen mutu: kebijakan SPMI, manual SPMI, standar SPMI, dan formulir SPMI. 3) terlaksananya siklus penjaminan mutu (siklus PPEPP) 4) bukti sahih efektivitas pelaksanaan penjaminan mutu. 5) memiliki external benchmarking dalam peningkatan mutu.',
    ket: '',
  },
  {
    no: 16,
    bab: 'C2. Tata Pamong, Tata Kelola dan Kerjasama',
    des: 'Pengukuran kepuasan para pemangku kepentingan (mahasiswa, dosen, tenaga kependidikan, lulusan, pengguna, mitra industri, dan mitra lainnya) terhadap layanan manajemen, yang memenuhi aspekaspek berikut: 1) menggunakan instrumen kepuasan yang sahih, andal, mudah digunakan, 2) dilaksanakan secara berkala, serta datanya terekam secara komprehensif, 3) dianalisis dengan metode yang tepat serta bermanfaat untuk pengambilan keputusan, 4) tingkat kepuasan dan umpan balik ditindaklanjuti untuk perbaikan dan peningkatan mutu luaran secara berkala dan tersistem. 5) dilakukan review terhadap pelaksanaan pengukuran kepuasan dosen dan mahasiswa, serta 6) hasilnya dipublikasikan dan mudah diakses oleh dosen dan mahasiswa',
    ket: '',
  },
  {
    no: 17,
    bab: 'C3. Mahasiswa',
    des: 'Metoda rekrutmen dan keketatan seleksi.',
    ket: '',
  },
  {
    no: 18,
    bab: 'C3. Mahasiswa',
    des: 'Peningkatan animo calon mahasiswa.',
    ket: '',
  },
  {
    no: 19,
    bab: 'C3. Mahasiswa',
    des: 'Mahasiswa asing . Tabel 2.b LKPS',
    ket: '',
  },
  {
    no: 20,
    bab: 'C3. Mahasiswa',
    des: 'Ketersediaan layanan kemahasiswaan di bidang: 1) penalaran, minat dan bakat, 2) kesejahteraan (bimbingan dan konseling, layanan beasiswa, dan layanan kesehatan), dan 3) bimbingan karir dan kewirausahaan.',
    ket: '',
  },
  {
    no: 21,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Kecukupan jumlah DTPS.',
    ket: 'LKPS NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi.',
  },
  {
    no: 22,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Kualifikasi akademik DTPS.',
    ket: 'NDS3 = Jumlah DTPS yang berpendidikan tertinggi Doktor/Doktor Terapan/Subspesialis. NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi. PDS3 = (NDS3 / NDTPS) x 100%',
  },
  {
    no: 23,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Jabatan akademik DTPS.',
    ket: 'NDGB = Jumlah DTPS yang memiliki jabatan akademik Guru Besar. NDLK = Jumlah DTPS yang memiliki jabatan akademik Lektor Kepala. NDL = Jumlah DTPS yang memiliki jabatan akademik Lektor. NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi. PGBLKL = ((NDGB + NDLK + NDL) / NDTPS) x 100%',
  },
  {
    no: 24,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Rasio jumlah mahasiswa program studi terhadap jumlah DTPS.',
    ket: 'NM = Jumlah mahasiswa pada saat TS. NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi. RMD = NM / NDTPS Untuk program studi dengan jumlah kebutuhan lulusan rendah, maka Skor = Skor butir Kualitas Input Mahasiswa',
  },
  {
    no: 25,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Penugasan DTPS sebagai pembimbing utama tugas akhir mahasiswa',
    ket: 'RDPU = Rata-rata jumlah bimbingan sebagai pembimbing utama di seluruh program/ semester.',
  },
  {
    no: 26,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Ekuivalensi Waktu Mengajar Penuh DTPS.',
    ket: '',
  },
  {
    no: 27,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Dosen tidak tetap.',
    ket: 'NDTT = Jumlah dosen tidak tetap yang ditugaskan sebagai pengampu mata kuliah di program studi yang diakreditasi. NDT = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah di program studi yang diakreditasi. PDTT = (NDTT / (NDT + NDTT)) x 100%',
  },
  {
    no: 28,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Pengakuan/rekognisi atas kepakaran/prestasi/kiner ja DTPS.',
    ket: 'Pengakuan/rekognisi atas kepakaran/prestasi/kinerja DTPS dapat berupa: a) menjadi visiting lecturer atau visiting scholar di program studi/perguruan tinggi terakreditasi A/Unggul atau program studi/perguruan tinggi internasional bereputasi. b) menjadi keynote speaker/invited speaker pada pertemuan ilmiah tingkat nasional/ internasional. c) menjadi editor atau mitra bestari pada jurnal nasional terakreditasi/jurnal internasional bereputasi di bidang yang sesuai dengan bidang program studi. d) menjadi staf ahli/narasumber di lembaga tingkat wilayah/nasional/internasional pada bidang yang sesuai dengan bidang program studi (untuk pengusul dari program studi pada program Sarjana/Magister/Doktor), atau menjadi tenaga ahli/konsultan di lembaga/industri tingkat wilayah/nasional/ internasional pada bidang yang sesuai dengan bidang program studi (untuk pengusul dari program studi pada program Diploma Tiga/Sarjana Terapan/Magister Terapan/Doktor Terapan). e) mendapat penghargaan atas prestasi dan kinerja di tingkat wilayah/nasional/internasional. RRD = NRD / NDTPS NRD = Jumlah pengakuan atas prestasi/kinerja DTPS yang relevan dengan bidang keahlian dalam 3 tahun terakhir. NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi.',
  },
  {
    no: 29,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Kegiatan penelitian DTPS yang relevan dengan bidang program studi dalam 3 tahun terakhir.',
    ket: `RI = NI / 3 / NDTPS , RN = NN / 3 / NDTPS , RL = NL / 3 / NDTPS Faktor: a =0,05 , b = 0,3 , c = 1 NI = Jumlah penelitian dengan sumber pembiayaan luar negeri \ndalam 3 tahun terakhir. NN = Jumlah penelitian dengan sumber pembiayaan dalam
negeri dalam 3 tahun terakhir.NL = Jumlah penelitian dengan sumber pembiayaan 
PT/ mandiri dalam 3 tahun terakhir.NDTPS = Jumlah dosen tetap yang ditugaskan 
sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan 
kompetensi inti program studi yang diakreditasi.`,
  },
  {
    no: 30,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Kegiatan PkM DTPS yang relevan dengan bidang program studi dalam 3 tahun terakhir',
    ket: 'RI = NI / 3 / NDTPS , RN = NN / 3 / NDTPS , RL = NL / 3 / NDTPS Faktor: a = 0,05 , b = 0,3 , c = 1 NI = Jumlah PkM dengan sumber pembiayaan luar negeri dalam 3 tahun terakhir. NN = Jumlah PkM dengan sumber pembiayaan dalam negeri dalam 3 tahun terakhir. NL = Jumlah PkM dengan sumber pembiayaan PT/ mandiri dalam 3 tahun terakhir. NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi',
  },
  {
    no: 31,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Publikasi ilmiah dengan tema yang relevan dengan bidang program studi yang dihasilkan DTPS dalam 3 tahun terakhir',
    ket: 'RW = (NA1 + NB1 + NC1) / NDTPS , RN = (NA2 + NA3 + NB2 + NC2) / NDTPS , RI = (NA4 + NB3 + NC3) / NDTPS Faktor: a = 0,1 , b = 1 , c = 2 NA1 = Jumlah publikasi di jurnal nasional tidak terakreditasi. NA2 = Jumlah keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi. publikasi di jurnal nasional terakreditasi. NA3 = Jumlah publikasi di jurnal internasional. NA4 = Jumlah publikasi di jurnal internasional bereputasi. NB1 = Jumlah publikasi di seminar wilayah/lokal/PT. NB2 = Jumlah publikasi di seminar nasional. NB3 = Jumlah publikasi di seminar internasional. NC1 = Jumlah tulisan di media massa wilayah. NC1 = Jumlah tulisan di media massa nasional. NC3 = Jumlah tulisan di media massa internasional. NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang',
  },
  {
    no: 32,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Artikel karya ilmiah DTPS yang disitasi dalam 3 tahun terakhir.',
    ket: 'RS = NAS / NDTPS NAS = jumlah artikel yang disitasi. NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi.',
  },
  {
    no: 33,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Luaran penelitian dan PkM yang dihasilkan DTPS dalam 3 tahun terakhir',
    ket: 'RLP = (2 x (NA + NB + NC) + ND) / NDTPS NA = Jumlah luaran penelitian/PkM yang mendapat pengakuan HKI (Paten, Paten Sederhana) NB = Jumlah luaran penelitian/PkM yang mendapat pengakuan HKI (Hak Cipta, Desain Produk Industri, Perlindungan Varietas Tanaman, Desain Tata Letak Sirkuit Terpadu, dll.) NC = Jumlah luaran penelitian/PkM dalam bentuk Teknologi Tepat Guna, Produk (Produk Terstandarisasi, Produk Tersertifikasi), Karya Seni, Rekayasa Sosial. ND = Jumlah luaran penelitian/PkM yang diterbitkan dalam bentuk Buku ber-ISBN, Book Chapter. NDTPS = Jumlah dosen tetap yang ditugaskan sebagai pengampu mata kuliah dengan bidang keahlian yang sesuai dengan kompetensi inti program studi yang diakreditasi.',
  },
  {
    no: 34,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Upaya pengembangan dosen.',
    ket: '',
  },
  {
    no: 35,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Kualifikasi dan kecukupan tenaga kependidikan berdasarkan jenis pekerjaannya (administrasi, pustakawan, teknisi, dll.) Penilaian kecukupan tidak hanya ditentukan oleh jumlah tenaga kependidikan, namun keberadaan dan pemanfaatan teknologi informasi dan komputer dalam proses administrasi dapat dijadikan pertimbangan untuk menilai efektifitas pekerjaan dan kebutuhan akan tenaga kependidikan.',
    ket: '',
  },
  {
    no: 36,
    bab: 'C4. Sumber Daya Manusia',
    des: 'Kualifikasi dan kecukupan laboran untuk mendukung proses pembelajaran sesuai dengan kebutuhan program studi. Skor = (A + B) / 2',
    ket: '',
  },
  {
    no: 37,
    bab: 'C5. Keuangan, Sarana dan Prasarana',
    des: 'Biaya operasional pendidikan.',
    ket: 'DOP = Rata-rata dana operasional pendidikan/mahasiswa/ tahun dalam 3 tahun terakhir (dalam juta rupiah).',
  },
  {
    no: 38,
    bab: 'C5. Keuangan, Sarana dan Prasarana',
    des: 'Dana penelitian DTPS.',
    ket: 'DPD = Rata-rata dana penelitian DTPS/ tahun dalam 3 tahun terakhir (dalam juta rupiah).',
  },
  {
    no: 39,
    bab: 'C5. Keuangan, Sarana dan Prasarana',
    des: 'Dana pengabdian kepada masyarakat DTPS.',
    ket: 'DPkMD = Rata-rata dana PkM DTPS/ tahun dalam 3 tahun terakhir (dalam juta rupiah).',
  },
  {
    no: 40,
    bab: 'C5. Keuangan, Sarana dan Prasarana',
    des: 'Realisasi investasi (SDM, sarana dan prasarana) yang mendukung penyelenggaraan tridharma. Jika Skor rata-rata butir tentang Profil Dosen, Sarana, dan Prasarana ≥ 3,5 , maka Skor butir ini = 4.',
    ket: '',
  },
  {
    no: 41,
    bab: 'C5. Keuangan, Sarana dan Prasarana',
    des: 'Kecukupan dana untuk menjamin pencapaian capaian pembelajaran.',
    ket: '',
  },
  {
    no: 42,
    bab: 'C5. Keuangan, Sarana dan Prasarana',
    des: 'Kecukupan, aksesibilitas dan mutu sarana dan prasarana untuk menjamin pencapaian capaian pembelajaran dan meningkatkan suasana akademik',
    ket: '',
  },
  {
    no: 43,
    bab: 'C6. Pendidikan',
    des: 'Keterlibatan pemangku kepentingan dalam proses evaluasi dan pemutakhiran kurikulum',
    ket: '',
  },
  {
    no: 44,
    bab: 'C6. Pendidikan',
    des: 'Kesesuaian capaian pembelajaran dengan profil lulusan dan jenjang KKNI/SKKNI',
    ket: '',
  },
  {
    no: 45,
    bab: 'C6. Pendidikan',
    des: 'Ketepatan struktur kurikulum dalam pembentukan capaian pembelajaran Skor = (A + (2 x B) + (2 x C)) / 5',
    ket: '',
  },
  {
    no: 46,
    bab: 'C6. Pendidikan',
    des: 'Pemenuhan karakteristik proses pembelajaran, yang terdiri atas sifat: 1) interaktif, 2) holistik, 3) integratif, 4) saintifik, 5) kontekstual, 6) tematik, 7) efektif, 8) kolaboratif, dan 9) berpusat pada mahasiswa',
    ket: '',
  },
  {
    no: 47,
    bab: 'C6. Pendidikan',
    des: 'Ketersediaan dan kelengkapan dokumen rencana pembelajaran semester (RPS)',
    ket: '',
  },
  {
    no: 48,
    bab: 'C6. Pendidikan',
    des: 'Kedalaman dan keluasan RPS sesuai dengan capaian pembelajaran lulusan. Skor = (A + (2 x B)) / 3',
    ket: '',
  },
  {
    no: 49,
    bab: 'C6. Pendidikan',
    des: 'Bentuk interaksi antara dosen, mahasiswa dan sumber belaja',
    ket: '',
  },
  {
    no: 50,
    bab: 'C6. Pendidikan',
    des: 'Pemantauan kesesuaian proses terhadap rencana pembelajaran',
    ket: '',
  },
  {
    no: 51,
    bab: 'C6. Pendidikan',
    des: 'Proses pembelajaran yang terkait dengan penelitian harus mengacu SN Dikti Penelitian: 1) hasil penelitian: harus memenuhi pengembangan IPTEKS, meningkatkan kesejahteraan masyarakat, dan daya saing bangsa. 2) isi penelitian: memenuhi kedalaman dan keluasan materi penelitian sesuai capaian pembelajaran. 3) proses penelitian: mencakup perencanaan, pelaksanaan, dan pelaporan. 4) penilaian penelitian memenuhi unsur edukatif, obyektif, akuntabel, dan transparan',
    ket: '',
  },
  {
    no: 52,
    bab: 'C6. Pendidikan',
    des: 'Proses pembelajaran yang terkait dengan PkM harus mengacu SN Dikti PkM: 1) hasil PkM: harus memenuhi pengembangan IPTEKS, meningkatkan kesejahteraan masyarakat, dan daya saing bangsa. 2) isi PkM: memenuhi kedalaman dan keluasan materi PkM sesuai capaian pembelajaran. 3) proses PkM: mencakup perencanaan, pelaksanaan, dan pelaporan. 4) penilaian PkM memenuhi unsur edukatif, obyektif, akuntabel, dan transparan',
    ket: '',
  },
  {
    no: 53,
    bab: 'C6. Pendidikan',
    des: 'Kesesuaian metode pembelajaran dengan capaian pembelajaran. Contoh: RBE (research based education), IBE (industry based education), teaching factory/teaching industry, dll. Skor = (A + (2 x B) + (2 x C) + (2 x D) + (2 x E)) / 9',
    ket: '',
  },
  {
    no: 54,
    bab: 'C6. Pendidikan',
    des: 'Pembelajaran yang dilaksanakan dalam bentuk praktikum, praktik studio, praktik bengkel, atau praktik lapangan. Tabel 5.a LKPS JP = Jam pembelajaran praktikum, praktik studio, praktik bengkel, atau praktik lapangan (termasuk KKN) JB = Jam pembelajaran total selama masa pendidikan. PJP = (JP / JB) x 100%',
    ket: '',
  },
  {
    no: 55,
    bab: 'C6. Pendidikan',
    des: 'Monitoring dan evaluasi pelaksanaan proses pembelajaran mencakup karakteristik, perencanaan, pelaksanaan, proses pembelajaran dan beban belajar mahasiswa untuk memperoleh capaian pembelajaran lulusan',
    ket: '',
  },
  {
    no: 56,
    bab: 'C6. Pendidikan',
    des: 'Mutu pelaksanaan penilaian pembelajaran (proses dan hasil belajar mahasiswa) untuk mengukur ketercapaian capaian pembelajaran berdasarkan prinsip penilaian yang mencakup: 1) edukatif, 2) otentik, 3) objektif, 4) akuntabel, dan 5) transparan, yang dilakukan secara terintegrasi',
    ket: '',
  },
  {
    no: 57,
    bab: 'C6. Pendidikan',
    des: 'Pelaksanaan penilaian terdiri atas teknik dan instrumen penilaian. Teknik penilaian terdiri dari: 1) observasi, 2) partisipasi, 3) unjuk kerja, 4) test tertulis, 5) test lisan, dan 6) angket. Instrumen penilaian terdiri dari: 1) penilaian proses dalam bentuk rubrik, dan/ atau; 2) penilaian hasil dalam bentuk portofolio, atau 3) karya disain',
    ket: '',
  },
  {
    no: 58,
    bab: 'C6. Pendidikan',
    des: 'Pelaksanaan penilaian memuat unsurunsur sebagai berikut: 1) mempunyai kontrak rencana penilaian, 2) melaksanakan penilaian sesuai kontrak atau kesepakatan, 3) memberikan umpan balik dan memberi kesempatan untuk mempertanyakan hasil kepada mahasiswa, 4) mempunyai dokumentasi penilaian proses dan hasil belajar mahasiswa, 5) mempunyai prosedur yang mencakup tahap perencanaan, kegiatan pemberian tugas atau soal, observasi kinerja, pengembalian hasil observasi, dan pemberian nilai akhir, 6) pelaporan penilaian berupa kualifikasi keberhasilan mahasiswa dalam menempuh suatu mata kuliah dalam bentuk huruf dan angka, 7) mempunyai buktibukti rencana dan telah melakukan proses perbaikan berdasar hasil monev penilaian. Skor = (A + (2 x B) + (2 x C)) / 5',
    ket: '',
  },
  {
    no: 59,
    bab: 'C6. Pendidikan',
    des: 'Integrasi kegiatan penelitian dan PkM dalam pembelajaran oleh DTPS dalam 3 tahun terakhir. Tabel 5.b LKPS NMKI = Jumlah mata kuliah yang dikembangkan berdasarkan hasil penelitian/PkM DTPS dalam 3 tahun terakhir',
    ket: '',
  },
  {
    no: 60,
    bab: 'C6. Pendidikan',
    des: 'Keterlaksanaan dan keberkalaan program dan kegiatan diluar kegiatan pembelajaran terstruktur untuk meningkatkan suasana akademik. Contoh: kegiatan himpunan mahasiswa, kuliah umum/stadium generale, seminar ilmiah, bedah buku',
    ket: '',
  },
  {
    no: 61,
    bab: 'C6. Pendidikan',
    des: 'Tingkat kepuasan mahasiswa terhadap proses pendidikan. Tabel 5.c LKPS Tingkat kepuasan pengguna pada aspek: TKM1: Reliability; TKM2: Responsiveness; TKM3: Assurance; TKM4: Empathy; TKM5: Tangible. Tingkat kepuasan mahasiswa pada aspek ke-i dihitung dengan rumus sebagai berikut: TKMi = (4 x ai) + (3 x bi) + (2 x ci) + di i = 1, 2, ..., 7 dimana : ai = persentase “Sangat Baik”; bi = persentase “Baik”; ci = persentase “Cukup”; di = persentase “Kurang”. TKM = ƩTKMi / 5',
    ket: '',
  },
  {
    no: 62,
    bab: 'C6. Pendidikan',
    des: 'Analisis dan tindak lanjut dari hasil pengukuran kepuasan mahasiswa. Skor = (A + (2 x B)) / 3',
    ket: '',
  },
  {
    no: 63,
    bab: 'C7. Penelitian',
    des: 'Relevansi penelitian pada UPPS mencakup unsur-unsur sebagai berikut: 1) memiliki peta jalan yang memayungi tema penelitian dosen dan mahasiswa, 2) dosen dan mahasiswa melaksanakan penelitian sesuai dengan agenda penelitian dosen yang merujuk kepada peta jalan penelitian. 3) melakukan evaluasi kesesuaian penelitian dosen dan mahasiswa dengan peta jalan, dan 4) menggunakan hasil evaluasi untuk perbaikan relevansi penelitian dan pengembangan keilmuan program studi.',
    ket: '',
  },
  {
    no: 64,
    bab: 'C7. Penelitian',
    des: 'Penelitian DTPS yang dalam pelaksanaannya melibatkan mahasiswa program studi dalam 3 tahun terakhir. Tabel 6.a LKPS NPM = Jumlah judul penelitian DTPS yang dalam pelaksanaannya melibatkan mahasiswa program studi dalam 3 tahun terakhir. NPD = Jumlah judul penelitian DTPS dalam 3 tahun terakhir. PPDM = (NPM / NPD) x 100% 50',
    ket: '',
  },
  {
    no: 65,
    bab: 'C8. Pengabdian kepada Masyarakat',
    des: 'Relevansi PkM pada UPPS mencakup unsurunsur sebagai berikut: 1) memiliki peta jalan yang memayungi tema PkM dosen dan mahasiswa serta hilirisasi/penerapan keilmuan program studi, 2) dosen dan mahasiswa melaksanakan PkM sesuai dengan peta jalan PkM. 3) melakukan evaluasi kesesuaian PkM dosen dan mahasiswa dengan peta jalan, dan 4) menggunakan hasil evaluasi untuk perbaikan relevansi PkM dan pengembangan keilmuan program studi',
    ket: '',
  },
  {
    no: 66,
    bab: 'C8. Pengabdian kepada Masyarakat',
    des: 'PkM DTPS yang dalam pelaksanaannya melibatkan mahasiswa program studi dalam 3 tahun terakhir. Tabel 7 LKPS NPkMM = Jumlah judul PkM DTPS yang dalam pelaksanaannya melibatkan mahasiswa program studi dalam 3 tahun terakhir. NPkMD = Jumlah judul PkM DTPS dalam 3 tahun terakhir. PPkMDM = (NPkMM / NPkMD) x 100%',
    ket: '',
  },
  {
    no: 67,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Analisis pemenuhan capaian pembelajaran lulusan (CPL) yang diukur dengan metoda yang sahih dan relevan, mencakup aspek: 1) keserbacakupan, 2) kedalaman, dan 3) kebermanfaatan analisis yang ditunjukkan dengan peningkatan CPL dari waktu ke waktu dalam 3 tahun terakhir',
    ket: '',
  },
  {
    no: 68,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Prestasi mahasiswa di bidang akademik dalam 3 tahun terakhir. Tabel 8.b.1) LKPS RI = NI / NM , RN = NN / NM , RW = NW / NM Faktor: a = 0,1% , b = 1% , c = 2% NI = Jumlah prestasi akademik internasional. NN = Jumlah prestasi akademik nasional. NW = Jumlah prestasi akademik wilayah/lokal. NM = Jumlah mahasiswa pada saat TS.',
    ket: '',
  },
  {
    no: 69,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Prestasi mahasiswa di bidang nonakademik dalam 3 tahun terakhir. Tabel 8.b.2) LKPS RI = NI / NM , RN = NN / NM , RW = NW / NM Faktor: a = 0,2% , b = 2% , c = 4% NI = Jumlah prestasi nonakademik internasional. NN = Jumlah prestasi nonakademik nasional. NW = Jumlah prestasi nonakademik wilayah/lokal. NM = Jumlah mahasiswa pada saat TS.',
    ket: '',
  },
  {
    no: 70,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Masa studi. MS = Rata-rata masa studi lulusan (tahun).',
    ket: '',
  },
  {
    no: 71,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Masa studi. MS = Rata-rata masa studi lulusan (tahun).',
    ket: '',
  },
  {
    no: 72,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Keberhasilan studi. PPS = Persentase keberhasilan studi.',
    ket: '',
  },
  {
    no: 73,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Pelaksanaan tracer study yang mencakup 5 aspek sebagai berikut: 1) pelaksanaan tracer study terkoordinasi di tingkat PT, 2) kegiatan tracer study dilakukan secara reguler setiap tahun dan terdokumentasi, 3) isi kuesioner mencakup seluruh pertanyaan inti tracer study DIKTI. 4) ditargetkan pada seluruh populasi (lulusan TS-4 s.d. TS-2), 5) hasilnya disosialisasikan dan digunakan untuk pengembangan kurikulum dan pembelajaran.',
    ket: '',
  },
  {
    no: 74,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Waktu tunggu. WT = waktu tunggu lulusan untuk mendapatkan pekerjaan pertama dalam 3 tahun, mulai TS-4 s.d. TS-2. Tabel 8.d.1) LKPS Ketentuan persentase responden lulusan: - untuk program studi dengan jumlah lulusan dalam 3 tahun (TS-4 s.d. TS-2) ≥ 300 orang, maka Prmin = 30%. - untuk program studi dengan jumlah lulusan dalam 3 tahun (TS4 s.d. TS-2) < 300 orang, maka Prmin = 50% - ((NL / 300) x 20%) Jika persentase responden memenuhi ketentuan diatas, maka Skor akhir = Skor. Jika persentase responden tidak memenuhi ketentuan diatas, maka berlaku penyesuaian sebagai berikut: Skor akhir = (PJ / Prmin) x Skor. NL = Jumlah lulusan dalam 3 tahun (TS-4 s.d. TS-2) NJ = Jumlah lulusan dalam 3 tahun (TS-4 s.d. TS-2) yang terlacak PJ = Persentase lulusan yang terlacak = (NL / NJ) x 100% Prmin = Persentase responden minimum',
    ket: '',
  },
  {
    no: 75,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Kesesuaian bidang kerja. PBS = Kesesuaian bidang kerja lulusan saat mendapatkan pekerjaan pertama dalam 3 tahun, mulai TS-4 s.d. TS-2. Tabel 8.d.2) LKPS Ketentuan persentase responden lulusan: - untuk program studi dengan jumlah lulusan dalam 3 tahun (TS-4 s.d. TS-2) ≥ 300 orang, maka Prmin = 30%. - untuk program studi dengan jumlah lulusan dalam 3 tahun (TS4 s.d. TS-2) < 300 orang, maka Prmin = 50% - ((NL / 300) x 20%) Jika persentase responden memenuhi ketentuan diatas, maka Skor akhir = Skor. Jika persentase responden tidak memenuhi ketentuan diatas, maka berlaku penyesuaian sebagai berikut: Skor akhir = (PJ / Prmin) x Skor. NL = Jumlah lulusan dalam 3 tahun (TS-4 s.d. TS-2) NJ = Jumlah lulusan dalam 3 tahun (TS-4 s.d. TS-2) yang terlacak PJ = Persentase lulusan yang terlacak = (NL / NJ) x 100% Prmin = Persentase responden minimum',
    ket: '',
  },
  {
    no: 76,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: `Tingkat dan ukuran tempat kerja lulusan. Tabel 8.e.1) LKPS RI = (NI / NL) x 100% , RN = (NN / NL) x 100% , RW = (NW / NL) x 100% Faktor: a = 5% , b = 20% , c = 90% . NI = Jumlah lulusan yang bekerja di badan usaha berizin. NW = Jumlah lulusan yang bekerja di badan usaha tingkat \nwilayah/lokal atau berwirausaha tidak berizin. NL = Jumlah lulusan.
Ketentuan persentase responden lulusan:
        - untuk program studi dengan jumlah lulusan dalam 3 tahun(TS - 4 s.d.
            TS - 2) ≥ 300 orang, maka Prmin = 30 %. 
- untuk program studi dengan jumlah lulusan dalam 3 tahun(TS - 4 s.d.
                TS - 2) < 300 orang, maka Prmin = 50 % - ((NL / 300) x 20%)
    Jika persentase responden memenuhi ketentuan diatas, maka Skor akhir
    = Skor.Jika persentase responden tidak memenuhi ketentuan diatas,
    maka berlaku penyesuaian sebagai berikut: Skor akhir = (PJ / Prmin) x 
Skor.NL = Jumlah lulusan dalam 3 tahun(TS - 4 s.d.TS - 2) NJ = Jumlah 
lulusan dalam 3 tahun(TS - 4 s.d.TS - 2) yang bekerja/ berwirausaha PJ =
Persentase lulusan yang terlacak = (NL / NJ) x 100 % Prmin =
    Persentase responden minimum
tingkat multi nasional / internasional.NN = Jumlah lulusan yang bekerja di badan usaha tingkat nasional atau berwirausaha yang`,
    ket: '',
  },
  {
    no: 77,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Tingkat kepuasan pengguna lulusan. Tabel 8.e.2) LKPS Tingkat kepuasan aspek ke-i dihitung dengan rumus sebagai berikut: TKi = (4 x ai) + (3 x bi) + (2 x ci) + di i = 1, 2, ..., 7 ai = persentase “sangat baik”. bi = persentase “baik”. ci = persentase “cukup”. di = persentase “kurang Ketentuan persentase responden pengguna lulusan: - untuk program studi dengan jumlah lulusan dalam 3 tahun (TS-4 s.d. TS-2) ≥ 300 orang, maka Prmin = 30%. - untuk program studi dengan jumlah lulusan dalam 3 tahun (TS-4 s.d. TS-2) < 300 orang, maka Prmin = 50% - ((NL / 300) x 20%) Jika persentase responden memenuhi ketentuan diatas, maka Skor akhir = Skor. Jika persentase responden tidak memenuhi ketentuan diatas, maka berlaku penyesuaian sebagai berikut: Skor akhir = (PJ / Prmin) x Skor. NL = Jumlah lulusan dalam 3 tahun (TS-4 s.d. TS-2) NJ = Jumlah pengguna lulusan yang memberi tanggapan atas studi pelacakan lulusan dalam 3 tahun (TS-4 s.d. TS-2) PJ = Persentase pengguna lulusan yang memberi tanggapan = (NL / NJ) x 100% Prmin = Persentase responden minimum',
    ket: '',
  },
  {
    no: 78,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Publikasi ilmiah mahasiswa, yang dihasilkan secara mandiri atau bersama DTPS, dengan judul yang relevan dengan bidang program studi dalam 3 tahun terakhir. Tabel 8.f.1) LKPS RL = ((NA1 + NB1 + NC1) / NM) x 100% , RN = ((NA2 + NA3 + NB2 + NC2) / NM) x 100% , RI = ((NA4 + NB3 + NC3) / NM) x 100% Faktor: a = 1% , b = 10% , c = 50% NA1 = Jumlah publikasi mahasiswa di jurnal nasional tidak terakreditasi. NA2 = Jumlah publikasi mahasiswa di jurnal nasional terakreditasi. NA3 = Jumlah publikasi mahasiswa di jurnal internasional. NA4 = Jumlah publikasi mahasiswa di jurnal internasional bereputasi. NB1 = Jumlah publikasi mahasiswa di seminar wilayah/lokal/PT. NB2 = Jumlah publikasi mahasiswa di seminar nasional. NB3 = Jumlah publikasi mahasiswa di seminar internasional. NC1 = Jumlah tulisan mahasiswa di media massa wilayah. NC2 = Jumlah tulisan mahasiswa di media massa nasional. NC3 = Jumlah tulisan mahasiswa di media massa internasional. NM = Jumlah mahasiswa pada saat TS.',
    ket: '',
  },
  {
    no: 79,
    bab: 'C9. Luaran dan Capaian Tridharma',
    des: 'Luaran penelitian dan PkM yang dihasilkan mahasiswa, baik secara mandiri atau bersama DTPS dalam 3 tahun terakhir. Tabel 8.f.4) LKPS NLP = 2 x (NA + NB + NC) + ND NA = Jumlah luaran penelitian/PkM mahasiswa yang mendapat pengakuan HKI (Paten, Paten Sederhana) NB = Jumlah luaran penelitian/PkM mahasiswa yang mendapat pengakuan HKI (Hak Cipta, Desain Produk Industri, Perlindungan Varietas Tanaman, Desain Tata Letak Sirkuit Terpadu, dll.) NC = Jumlah luaran penelitian/PkM mahasiswa dalam bentuk Teknologi Tepat Guna, Produk (Produk Terstandarisasi, Produk Tersertifikasi), Karya Seni, Rekayasa Sosial. ND = Jumlah luaran penelitian/PkM mahasiswa yang diterbitkan dalam bentuk Buku ber-ISBN, Book Chapter',
    ket: '',
  },
  {
    no: 80,
    bab: 'D. Analisis dan Penetapan Program Pengembangan\n',
    des: 'Keserbacakupan (kelengkapan, keluasan, dan kedalaman), ketepatan, ketajaman, dan kesesuaian analisis capaian kinerja serta konsistensi dengan setiap kriteria',
    ket: '',
  },
  {
    no: 81,
    bab: 'D. Analisis dan Penetapan Program Pengembangan\n',
    des: 'Ketepatan analisis SWOT atau analisis yang relevan di dalam mengembangkan strategi.',
    ket: '',
  },
  {
    no: 82,
    bab: 'D. Analisis dan Penetapan Program Pengembangan\n',
    des: 'Ketepatan di dalam menetapkan prioritas program pengembangan',
    ket: '',
  },
  {
    no: 83,
    bab: 'D. Analisis dan Penetapan Program Pengembangan\n',
    des: 'UPPS memiliki kebijakan, ketersediaan sumberdaya, kemampuan melaksanakan, dan kerealistikan program',
    ket: '',
  },
];

export default data;
