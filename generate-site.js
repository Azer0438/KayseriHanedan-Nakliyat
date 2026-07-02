const fs = require("fs");
const path = require("path");

const root = __dirname;
const siteUrl = "https://kayserihanedannakliyat.com.tr";
const brand = "Kayseri Hanedan Nakliyat";
const primaryPhone = "+90 533 781 38 04";
const primaryTel = "+905337813804";
const secondaryPhone = "+90 554 604 55 82";
const secondaryTel = "+905546045582";
const whatsapp = "905337813804";
const instagramUrl = "https://www.instagram.com/hanedangroup2/";
const googleSearchUrl = "https://www.google.com/search?q=kayserihanedannakliyat";
const googleMapsUrl = "https://maps.app.goo.gl/2327bkojxRDpjAnv5";
const address = "Gülük, Haseki Cd. No 7B, 38050 Melikgazi/Kayseri";
const heroImage = "/assets/images/hero-slide-1.png";
const truckImage = "/assets/images/hanedan-arac.jpeg";
const buildingImage = "/assets/images/hanedan-arac-bina.jpeg";
const secondTruckImage = "/assets/images/hero-slide-4.jpeg";
const heroSlides = [
  {
    image: heroImage,
    alt: "Hanedan Nakliyat ev ve ofis taşıma ana görseli",
    bare: true
  },
  {
    image: truckImage,
    alt: "Kayseri Hanedan Nakliyat taşıma aracı",
    label: "Kayseri Hanedan Nakliyat",
    title: "Kayseri'de Eşyalarınızı Güvenle, Planlı ve Özenli Taşıyoruz",
    text: "Evden eve nakliyat, asansörlü taşıma, şehir içi ve şehirler arası nakliyat için Kayseri merkezli profesyonel ekip ve hızlı teklif desteği.",
    stats: [["Kayseri Geneli", "Melikgazi, Kocasinan, Talas"], ["Planlı Taşıma", "Paketleme, söküm, montaj"], ["Hızlı İletişim", "WhatsApp teklif hattı"]]
  },
  {
    image: buildingImage,
    alt: "Kayseri'de asansörlü ve planlı taşıma hizmeti",
    label: "Asansörlü Nakliyat",
    title: "Yüksek Katlarda Hızlı ve Kontrollü Taşıma",
    text: "Bina yapısı, kat bilgisi ve eşya yoğunluğu önceden analiz edilir; uygun ekipmanla güvenli taşıma planı hazırlanır.",
    stats: [["Asansörlü Sistem", "Dış cephe taşıma"], ["Uzman Ekip", "Söküm ve montaj"], ["Sigortalı Süreç", "Kontrollü teslimat"]]
  },
  {
    image: secondTruckImage,
    alt: "Kayseri Hanedan Nakliyat ikinci araç görseli",
    label: "Kayseri Geneli Nakliyat",
    title: "Şehir İçi ve Şehirler Arasında Yanınızdayız",
    text: "Kayseri merkez ve tüm ilçelerde ev, ofis, parça eşya ve şehirler arası nakliyat talepleriniz için hızlı iletişim kuruyoruz.",
    stats: [["Ev ve Ofis", "Taşıma planı"], ["Parça Eşya", "Hızlı çözüm"], ["7/24 Hat", "Teklif desteği"]]
  }
];
const galleryVideos = Array.from({ length: 9 }, (_, index) => `/assets/media/gallery-video-${index + 1}.mp4`);
const blogPosts = [
  {
    slug: "kayseri-ev-tasima-oncesi-kontrol-listesi",
    title: "Kayseri'de Ev Taşımadan Önce Kontrol Listesi",
    description: "Ev taşıma öncesi adres, kat, paketleme, asansör ve zaman planı için pratik kontrol listesi.",
    date: "2026-07-02",
    category: "Evden Eve Nakliyat",
    keywords: "kayseri ev taşıma, taşınma kontrol listesi, kayseri nakliyat önerileri",
    content: [
      "Taşınma sürecinde en sık yapılan hata, planlamayı son güne bırakmaktır. Kayseri gibi yoğun trafiğin olduğu bölgelerde park alanı, bina giriş genişliği ve taşıma saatinin doğru seçilmesi süreci doğrudan etkiler.",
      "Taşıma tarihinden en az bir hafta önce eşya sınıflandırması yapın. Kırılabilir ürünleri, günlük ihtiyaç kutusunu ve ilk gün kullanılacak eşyaları ayrı hazırlamak yeni adreste düzen kurmayı kolaylaştırır.",
      "Asansörlü taşıma gerekiyorsa bina cephesi ve sokak uygunluğu önceden kontrol edilmelidir. Uygunluk onayı alınmadan yapılan planlar taşıma gününde gecikmeye neden olabilir.",
      "Kayseri içinde ilçe geçişli taşımalar için sabah erken saatler genellikle daha verimlidir. Özellikle Melikgazi, Kocasinan ve Talas hattında trafik saatlerini dikkate almak gerekir.",
      "Teklif alırken yalnızca fiyat değil, hizmet kapsamı da karşılaştırılmalıdır. Paketleme malzemesi, söküm-montaj, kat bilgisi, ek personel ve sigorta kapsamı net yazılmalıdır."
    ]
  },
  {
    slug: "asansorlu-nakliyat-ne-zaman-gerekli",
    title: "Asansörlü Nakliyat Ne Zaman Gerekli Olur?",
    description: "Yüksek katlı binalarda asansörlü nakliyatın avantajları ve uygunluk kriterleri.",
    date: "2026-07-02",
    category: "Asansörlü Nakliyat",
    keywords: "asansörlü nakliyat kayseri, dış cephe asansörü, yüksek kat taşıma",
    content: [
      "Asansörlü nakliyat, özellikle bina içi merdiven boşluklarının dar olduğu yapılarda eşya güvenliği ve hız açısından önemli avantaj sağlar.",
      "Bina dış cephesinde asansör kurulabilecek uygun nokta, araç park alanı ve balkon/pencere erişimi varsa operasyon daha güvenli yürütülür.",
      "Büyük hacimli koltuk, beyaz eşya ve gardırop gibi ürünlerde bina içi taşıma yerine asansörlü sistem hasar riskini ciddi ölçüde azaltır.",
      "Asansör kararı, sadece kat sayısına göre değil eşya tipi, bina mimarisi ve mahalle erişimine göre verilmelidir.",
      "Profesyonel ekip tarafından yapılan ön keşif, taşıma günü sürprizlerini azaltır ve süreyi kısaltır."
    ]
  }
];

const services = [
  {
    slug: "evden-eve-nakliyat",
    title: "Kayseri Evden Eve Nakliyat",
    shortTitle: "Evden Eve Nakliyat",
    icon: "home",
    intro: "Eşyalarınız adresinizden alınır, türüne göre paketlenir ve yeni adresinize planlı şekilde ulaştırılır.",
    keywords: "kayseri evden eve nakliyat, kayseri nakliyat, ev taşıma kayseri",
    content: [
      "Kayseri evden eve nakliyat hizmetinde taşıma sürecini yalnızca araç ve personel organizasyonu olarak görmüyoruz. Kat durumu, bina girişi, eşya yoğunluğu, asansör ihtiyacı ve teslim adresindeki erişim koşulları önceden değerlendirilir.",
      "Kayseri Hanedan Nakliyat, ev taşıma sürecinde paketleme, söküm, yükleme, taşıma ve yerleştirme adımlarını tek akışta yönetir. Amaç eşyalarınızın güvenle taşınması kadar taşınma gününün sakin ve kontrollü geçmesidir.",
      "Melikgazi, Kocasinan, Talas ve Kayseri'nin diğer ilçelerinde evden eve nakliyat talepleriniz için hızlı keşif ve net planlama desteği sunuyoruz."
    ],
    faqs: [
      ["Kayseri evden eve nakliyat fiyatı nasıl belirlenir?", "Eşya yoğunluğu, kat bilgisi, mesafe, asansör ihtiyacı, paketleme kapsamı ve araç sayısı fiyatı belirler."],
      ["Taşıma öncesi keşif yapıyor musunuz?", "Evet. Uygun planlama için telefon, WhatsApp veya yerinde keşif ile taşıma detayları netleştirilir."],
      ["Paketleme hizmeti dahil mi?", "Talebe göre profesyonel paketleme, mobilya söküm-montaj ve hassas eşya koruma hizmeti verilir."]
    ]
  },
  {
    slug: "asansorlu-nakliyat",
    title: "Kayseri Asansörlü Nakliyat",
    shortTitle: "Asansörlü Nakliyat",
    icon: "lift",
    intro: "Yüksek katlı binalarda dış cephe asansörüyle daha hızlı, güvenli ve kontrollü taşıma süreci.",
    keywords: "kayseri asansörlü nakliyat, kayseri asansörlü ev taşıma, dış cephe asansör nakliye",
    content: [
      "Kayseri asansörlü nakliyat, özellikle yüksek katlı binalarda eşyanın merdiven ve dar bina içi alanlardan geçirilmesini azaltarak taşıma riskini düşürür.",
      "Asansör kurulumu yapılmadan önce bina cephesi, sokak uygunluğu, araç konumu ve pencere-balkon erişimi değerlendirilir. Uygun alanda dış cephe asansörüyle taşıma süreci daha hızlı tamamlanır.",
      "Hanedan Nakliyat, Kayseri'de asansörlü taşıma taleplerinde güvenlik, zaman yönetimi ve bina ortak alanlarının korunmasına dikkat eden bir operasyon planı uygular."
    ],
    faqs: [
      ["Her binada asansörlü nakliyat yapılabilir mi?", "Cephe erişimi, sokak genişliği ve balkon/pencere uygunluğu kontrol edilir; uygunsa asansör kurulumu yapılır."],
      ["Asansörlü nakliyat daha hızlı mı?", "Uygun binalarda merdiven taşımasına göre daha hızlı ve kontrollü ilerler."],
      ["Asansörlü taşıma fiyatı neye göre değişir?", "Kat sayısı, eşya yoğunluğu, mesafe, ekip sayısı ve asansör kurulum şartları fiyatı etkiler."]
    ]
  },
  {
    slug: "sehir-ici-nakliyat",
    title: "Kayseri Şehir İçi Nakliyat",
    shortTitle: "Şehir İçi Nakliyat",
    icon: "route",
    intro: "Kayseri merkez ve ilçelerinde aynı gün planlanabilen hızlı, düzenli ve kontrollü nakliye hizmeti.",
    keywords: "kayseri şehir içi nakliyat, kayseri şehir içi taşıma, melikgazi kocasinan talas nakliyat",
    content: [
      "Kayseri şehir içi nakliyat hizmeti; ev, ofis, parça eşya ve küçük çaplı taşıma ihtiyaçları için pratik çözümler sunar.",
      "Taşıma saati, bina yoğunluğu, park alanı ve güzergah önceden değerlendirilerek gün içinde tamamlanabilecek gerçekçi bir plan oluşturulur.",
      "Melikgazi, Kocasinan, Talas, Hacılar, İncesu ve çevre ilçelerde şehir içi nakliyat ihtiyaçlarınız için hızlı teklif alabilirsiniz."
    ],
    faqs: [
      ["Şehir içi nakliyat aynı gün yapılır mı?", "Ekip ve araç uygunluğuna göre aynı gün taşıma planlanabilir."],
      ["Parça eşya şehir içinde taşınır mı?", "Evet. Az eşya, beyaz eşya, kolili ürün ve tek parça taşıma için uygun araç planlanır."],
      ["Kayseri'nin hangi ilçelerine hizmet veriyorsunuz?", "Melikgazi, Kocasinan, Talas başta olmak üzere Kayseri geneline hizmet veriyoruz."]
    ]
  },
  {
    slug: "sehirler-arasi-nakliyat",
    title: "Kayseri Şehirler Arası Nakliyat",
    shortTitle: "Şehirler Arası Nakliyat",
    icon: "highway",
    intro: "Kayseri çıkışlı veya Kayseri varışlı şehirler arası taşımalar için planlı araç ve ekip organizasyonu.",
    keywords: "kayseri şehirler arası nakliyat, şehirler arası ev taşıma kayseri, kayseri nakliye firması",
    content: [
      "Kayseri şehirler arası nakliyat sürecinde doğru araç seçimi, sağlam paketleme ve zaman planı taşımanın en kritik adımlarıdır.",
      "Hanedan Nakliyat, Kayseri'den farklı illere veya farklı illerden Kayseri'ye yapılacak taşımalar için eşya yoğunluğuna göre araç ve ekip planlar.",
      "Uzun yol taşımalarda yükleme sırası, eşya sabitleme, rota planı ve teslimat koordinasyonu ayrıntılı şekilde takip edilir."
    ],
    faqs: [
      ["Şehirler arası nakliyatta fiyat nasıl hesaplanır?", "Mesafe, eşya yoğunluğu, araç tipi, paketleme kapsamı ve teslimat koşulları dikkate alınır."],
      ["Kayseri dışına taşıma yapıyor musunuz?", "Evet. Kayseri çıkışlı ve Kayseri varışlı şehirler arası taşıma hizmeti sunuyoruz."],
      ["Eşyalar uzun yolda nasıl korunur?", "Paketleme, araç içi sabitleme ve doğru yükleme sırası ile eşyalar taşımaya hazırlanır."]
    ]
  },
  {
    slug: "ofis-isyeri-tasima",
    title: "Kayseri Ofis ve İşyeri Taşıma",
    shortTitle: "Ofis ve İşyeri Taşıma",
    icon: "office",
    intro: "İş sürekliliğini koruyan planlı ofis taşıma, ekipman paketleme ve adres geçiş organizasyonu.",
    keywords: "kayseri ofis taşıma, kayseri işyeri taşıma, ofis nakliyat kayseri",
    content: [
      "Ofis ve işyeri taşıma süreçlerinde zaman kaybını azaltmak, ekipman güvenliğini sağlamak ve düzenli yerleşim planı oluşturmak gerekir.",
      "Kayseri Hanedan Nakliyat; masa, dolap, arşiv, elektronik ekipman ve ofis demirbaşlarını taşıma sırasına göre paketler ve etiketleme mantığıyla ilerler.",
      "Küçük ofislerden daha yoğun işyeri taşımalarına kadar, Kayseri'de kurumsal taşıma ihtiyaçlarına uygun ekip ve araç planlanır."
    ],
    faqs: [
      ["Ofis taşıma hafta sonu yapılabilir mi?", "Uygunluk durumuna göre iş akışınızı aksatmayacak saatlerde planlama yapılabilir."],
      ["Elektronik eşyalar nasıl taşınır?", "Monitör, bilgisayar ve hassas ekipmanlar ayrı paketlenir ve araçta güvenli konumlandırılır."],
      ["Arşiv ve dosyalar karışır mı?", "Talep halinde oda veya bölüm bazlı etiketleme yapılarak düzen korunur."]
    ]
  },
  {
    slug: "esya-depolama",
    title: "Kayseri Eşya Depolama",
    shortTitle: "Eşya Depolama",
    icon: "storage",
    intro: "Kısa veya uzun süreli saklama ihtiyaçları için düzenli, kontrollü ve erişilebilir depolama çözümleri.",
    keywords: "kayseri eşya depolama, kayseri depo nakliyat, ev eşyası depolama kayseri",
    content: [
      "Kayseri eşya depolama hizmeti, taşınma tarihleri uyuşmadığında, tadilat sürecinde veya fazla eşyalarınızı güvenle saklamak istediğinizde pratik çözüm sunar.",
      "Eşyalar depolama öncesinde türüne göre paketlenir, kırılabilir ve hassas parçalar ayrılır, hacme göre düzenli şekilde konumlandırılır.",
      "Depolama ve nakliyat sürecinin birlikte planlanması, eşyaların gereksiz yere tekrar taşınmasını azaltır ve operasyonu daha kontrollü hale getirir."
    ],
    faqs: [
      ["Eşya depolama süresi esnek mi?", "Kısa veya uzun dönem depolama ihtiyaçları için süreye göre planlama yapılabilir."],
      ["Eşyalar depoya taşınmadan paketlenir mi?", "Talebinize göre paketleme ve depoya güvenli taşıma hizmeti sağlanır."],
      ["Depolama fiyatı nasıl belirlenir?", "Eşya hacmi, depolama süresi ve taşıma kapsamına göre fiyat çıkarılır."]
    ]
  },
  {
    slug: "profesyonel-paketleme",
    title: "Kayseri Profesyonel Paketleme",
    shortTitle: "Profesyonel Paketleme",
    icon: "box",
    intro: "Mobilya, beyaz eşya, cam ve hassas ürünler için taşımaya uygun korumalı paketleme hizmeti.",
    keywords: "kayseri paketleme hizmeti, nakliyat paketleme kayseri, profesyonel eşya paketleme",
    content: [
      "Paketleme, taşınma sürecinin hasarsız ilerlemesi için en önemli adımdır. Her eşya aynı malzeme ve yöntemle korunmaz.",
      "Kayseri Hanedan Nakliyat; mobilya, beyaz eşya, cam ürünler, kolili eşya ve hassas parçaları kendi yapısına uygun şekilde paketler.",
      "Doğru paketleme sayesinde yükleme, araç içi yerleşim ve teslimat aşamaları daha düzenli ilerler."
    ],
    faqs: [
      ["Paketleme malzemeleri firma tarafından sağlanır mı?", "Talep edilen hizmet kapsamına göre uygun paketleme malzemeleri ekip tarafından temin edilir."],
      ["Kırılacak eşyalar ayrı paketlenir mi?", "Evet. Cam, porselen ve hassas eşyalar ayrı ve korumalı şekilde hazırlanır."],
      ["Mobilya söküm montaj yapılıyor mu?", "Taşıma kapsamına göre mobilya söküm ve montaj desteği verilir."]
    ]
  },
  {
    slug: "parca-esya-tasima",
    title: "Kayseri Parça Eşya Taşıma",
    shortTitle: "Parça Eşya Taşıma",
    icon: "parcel",
    intro: "Az eşya, tek parça ürün, öğrenci eşyası veya küçük ölçekli taşımalar için ekonomik nakliye.",
    keywords: "kayseri parça eşya taşıma, az eşya nakliyat kayseri, tek parça eşya taşıma",
    content: [
      "Kayseri parça eşya taşıma hizmeti; tüm ev taşımadan daha küçük ama dikkat gerektiren nakliye ihtiyaçları için uygundur.",
      "Beyaz eşya, kolili ürün, mobilya, öğrenci eşyası veya tek parça büyük ürünler için uygun araç ve ekip planlanır.",
      "Parça eşya taşıma taleplerinde hızlı fiyatlandırma için eşyanın fotoğrafı, alınacak adres, teslim adresi ve kat bilgisi yeterlidir."
    ],
    faqs: [
      ["Tek parça eşya taşıyor musunuz?", "Evet. Beyaz eşya, koltuk, dolap, yatak ve benzeri tek parça ürünler taşınabilir."],
      ["Parça eşya için asansör gerekir mi?", "Kat ve eşya boyutuna göre gerekirse asansörlü taşıma planlanabilir."],
      ["Az eşya taşıma fiyatı nasıl çıkar?", "Eşya adedi, mesafe, kat bilgisi ve araç ihtiyacına göre teklif hazırlanır."]
    ]
  }
];

const districts = [
  ["melikgazi", "Melikgazi", "Gülük, Alpaslan, Hunat, Köşk, Mimarsinan ve çevresindeki yoğun apartman bölgelerinde planlı taşıma desteği."],
  ["kocasinan", "Kocasinan", "Yenişehir, Erkilet, Sahabiye, Zümrüt ve Kocasinan genelinde şehir içi ve evden eve nakliyat planlaması."],
  ["talas", "Talas", "Mevlana, Bahçelievler, Yenidoğan ve Talas'ın yeni konut bölgelerinde asansörlü taşıma ve ev nakliyesi."],
  ["hacilar", "Hacılar", "Hacılar ve çevresinde ev, ofis, parça eşya ve şehirler arası nakliyat organizasyonu."],
  ["incesu", "İncesu", "İncesu merkez ve sanayi bağlantılı taşımalarda araç, ekip ve paketleme planlaması."],
  ["develi", "Develi", "Develi çıkışlı veya Develi varışlı evden eve ve şehirler arası taşıma çözümleri."],
  ["bunyan", "Bünyan", "Bünyan bölgesinde az eşya, ev taşıma, şehir içi ve şehirler arası nakliyat desteği."],
  ["yesilhisar", "Yeşilhisar", "Yeşilhisar ve çevresinde güvenli yükleme, taşıma ve teslimat odaklı nakliyat hizmeti."],
  ["akkisla", "Akkışla", "Akkışla merkez ve çevre mahallelerinde ev, parça eşya ve şehirler arası nakliyat planlaması."],
  ["felahiye", "Felahiye", "Felahiye bölgesinde az eşya, ev taşıma ve Kayseri bağlantılı şehirler arası nakliyat desteği."],
  ["ozvatan", "Özvatan", "Özvatan çıkışlı veya Özvatan varışlı taşımalar için uygun araç ve ekip organizasyonu."],
  ["pinarbasi", "Pınarbaşı", "Pınarbaşı ve çevresindeki uzak mesafeli taşımalarda planlı rota, paketleme ve teslimat desteği."],
  ["sarioglan", "Sarıoğlan", "Sarıoğlan bölgesinde şehir içi, parça eşya ve şehirler arası nakliyat ihtiyaçlarına çözüm."],
  ["sariz", "Sarız", "Sarız ve çevresinde evden eve nakliyat, eşya taşıma ve Kayseri merkez bağlantılı taşıma hizmeti."],
  ["tomarza", "Tomarza", "Tomarza bölgesinde ev taşıma, ofis taşıma, paketleme ve şehirler arası nakliyat planlaması."],
  ["yahyali", "Yahyalı", "Yahyalı çıkışlı ve Yahyalı varışlı taşımalarda güvenli yükleme ve zamanında teslimat odağı."]
];

const nav = [
  ["Anasayfa", "/"],
  ["Kurumsal", "/kurumsal/hakkimizda/", [
    ["Hakkımızda", "/kurumsal/hakkimizda/"],
    ["Misyonumuz", "/kurumsal/misyonumuz/"],
    ["Vizyonumuz", "/kurumsal/vizyonumuz/"],
    ["Çalışma Sürecimiz", "/kurumsal/calisma-surecimiz/"],
    ["KVKK", "/kurumsal/kvkk/"]
  ]],
  ["Hizmetlerimiz", "/hizmetler/", services.map((service) => [service.shortTitle, `/hizmetler/${service.slug}/`])],
  ["Bölgeler", "/bolgeler/", districts.map(([slug, title]) => [title, `/bolgeler/${slug}-evden-eve-nakliyat/`])],
  ["Blog", "/blog/"],
  ["Galeri", "/galeri/"],
  ["Teklif Al", "/teklif-al/"],
  ["İletişim", "/iletisim/"]
];

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(path.join(root, filePath)), { recursive: true });
}

function write(filePath, content) {
  ensureDir(filePath);
  fs.writeFileSync(path.join(root, filePath), content, "utf8");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function absolute(url) {
  return `${siteUrl}${url === "/" ? "/" : url.replace(/index\.html$/, "")}`;
}

function icon(name) {
  const icons = {
    home: '<path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.5Z"/><path d="M9 21v-6h6v6"/>',
    lift: '<path d="M5 21V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v13"/><path d="M8 21v-8h8v8"/><path d="M10 5V3h4v2"/><path d="m9 10 3-3 3 3"/>',
    route: '<path d="M5 19c4 0 4-14 8-14 2.2 0 3 2 3 4 0 4-3 6-7 10"/><path d="M4 19h4"/><path d="M16 5h4"/><circle cx="16" cy="9" r="2"/>',
    highway: '<path d="m7 21 2-18"/><path d="m17 21-2-18"/><path d="M12 3v3"/><path d="M12 10v4"/><path d="M12 18v3"/><path d="M5 21h14"/>',
    office: '<path d="M4 21V5a2 2 0 0 1 2-2h8v18"/><path d="M14 9h4a2 2 0 0 1 2 2v10"/><path d="M8 7h2M8 11h2M8 15h2M17 13h1M17 17h1"/><path d="M3 21h18"/>',
    storage: '<path d="M4 7h16v14H4z"/><path d="M4 7l2-4h12l2 4"/><path d="M9 11h6"/><path d="M8 15h8"/>',
    box: '<path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/><path d="m7.5 5.5 9 5"/>',
    parcel: '<path d="M5 8h14v12H5z"/><path d="M7 8V5h10v3"/><path d="M9 12h6"/><path d="M9 16h4"/>',
    truck: '<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><path d="M5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M17 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M7 17h8"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6.3 6.3l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z"/>',
    whatsapp: '<path d="M20 11.7a7.8 7.8 0 0 1-11.6 6.8L4 20l1.5-4.2A7.8 7.8 0 1 1 20 11.7Z"/><path d="M9.5 8.3c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4 0 .6l-.4.5c-.1.1-.2.3-.1.5.4.8 1.1 1.5 2 2 .2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.6-.1l1.6.8c.3.1.4.3.4.6-.1.6-.5 1.3-1.1 1.5-.7.2-1.6.1-2.6-.4-2.2-1-4-2.7-5-5-.4-.9-.5-1.7-.2-2.4Z"/>',
    phoneBooth: '<path d="M7 5h10a2 2 0 0 1 2 2v9H5V7a2 2 0 0 1 2-2Z"/><path d="M8 9h8"/><path d="M8 12h8"/><path d="M6 16h12v3H6z"/><path d="M9 19v2M15 19v2"/>',
    instagram: '<rect x="5" y="5" width="14" height="14" rx="4"/><circle cx="12" cy="12" r="3"/><path d="M16.4 7.8h.1"/>',
    check: '<path d="m20 6-11 11-5-5"/>',
    location: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4.5-4.5"/>'
  };
  return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${icons[name] || icons.box}</svg>`;
}

function logoMarkup() {
  return `<a class="brand" href="/" aria-label="${brand} anasayfa">
    <img class="brand-logo" src="/assets/images/logo-navbar.png" alt="${brand}" width="1514" height="350">
  </a>`;
}

function navMarkup() {
  return nav.map(([label, href, children]) => {
    if (!children) {
      return `<li><a href="${href}">${label}</a></li>`;
    }
    return `<li class="has-dropdown"><a href="${href}">${label}<span class="dropdown-toggle" aria-hidden="true">⌄</span></a><ul>${children.map(([childLabel, childHref]) => `<li><a href="${childHref}">${childLabel}</a></li>`).join("")}</ul></li>`;
  }).join("");
}

function baseSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${siteUrl}/#localbusiness`,
    "name": brand,
    "url": siteUrl,
    "image": `${siteUrl}${heroImage}`,
    "logo": `${siteUrl}/assets/images/logo.png`,
    "telephone": [primaryPhone, secondaryPhone],
    "priceRange": "Teklif ile",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gülük, Haseki Cd.",
      "addressLocality": "Melikgazi",
      "addressRegion": "Kayseri",
      "postalCode": "38050",
      "addressCountry": "TR"
    },
    "areaServed": ["Kayseri", "Melikgazi", "Kocasinan", "Talas", "Hacılar", "İncesu", "Develi", "Bünyan", "Yeşilhisar", "Akkışla", "Felahiye", "Özvatan", "Pınarbaşı", "Sarıoğlan", "Sarız", "Tomarza", "Yahyalı"],
    "sameAs": [instagramUrl]
  };
}

function faqSchema(faqs) {
  if (!faqs || !faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(([question, answer]) => ({
      "@type": "Question",
      "name": question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": answer
      }
    }))
  };
}

function pageLayout({ title, description, url, keywords, bodyClass = "", content, schema = [], canonical }) {
  const cleanUrl = canonical || absolute(url);
  const allSchema = [baseSchema(), ...schema.filter(Boolean)];
  return `<!doctype html>
<html lang="tr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="keywords" content="${escapeHtml(keywords || "Kayseri Hanedan Nakliyat, Kayseri nakliyat, evden eve nakliyat Kayseri")}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${cleanUrl}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="tr_TR">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${cleanUrl}">
  <meta property="og:site_name" content="${brand}">
  <meta property="og:image" content="${siteUrl}${heroImage}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="author" content="${brand}">
  <meta name="theme-color" content="#AC0A15">
  <link rel="alternate" hreflang="tr-TR" href="${cleanUrl}">
  <link rel="alternate" hreflang="x-default" href="${cleanUrl}">
  <link rel="icon" href="/assets/images/favicon.png" type="image/png">
  <link rel="apple-touch-icon" href="/assets/images/favicon.png">
  <link rel="dns-prefetch" href="https://fonts.googleapis.com">
  <link rel="dns-prefetch" href="https://www.google-analytics.com">
  <link rel="dns-prefetch" href="https://www.googletagmanager.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preload" as="image" href="${heroImage}">
  <link rel="preload" as="style" href="/assets/css/styles.css">
  <link rel="stylesheet" href="/assets/css/styles.css">
  <script type="application/ld+json">${JSON.stringify(allSchema.length === 1 ? allSchema[0] : { "@context": "https://schema.org", "@graph": allSchema })}</script>
</head>
<body class="${bodyClass}">
  <a class="skip-link" href="#icerik">İçeriğe geç</a>
  <header class="site-header">
    <div class="topbar">
      <div class="container topbar-inner">
        <a href="${mapsUrl()}" target="_blank" rel="noopener">${icon("location")} ${address}</a>
        <span>${icon("clock")} 7/24 teklif ve planlama hattı</span>
        <a href="tel:${primaryTel}">${icon("phone")} ${primaryPhone}</a>
        <div class="topbar-social" aria-label="Sosyal bağlantılar">
          <a href="${instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>
          <a href="${googleSearchUrl}" target="_blank" rel="noopener" aria-label="Google araması">G</a>
          <a href="${mapsUrl()}" target="_blank" rel="noopener" aria-label="Google harita konumu">${icon("location")}</a>
        </div>
      </div>
    </div>
    <div class="nav-shell">
      <div class="container nav-inner">
        ${logoMarkup()}
        <nav class="main-nav" aria-label="Ana menü">
          <ul>${navMarkup()}</ul>
        </nav>
        <div class="header-actions">
          <a class="call-pill" href="tel:${primaryTel}"><span class="call-icon">${icon("phone")}</span><span>Randevu - Bilgi</span><strong>${primaryPhone}</strong><strong>${secondaryPhone}</strong></a>
          <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobileNav" aria-label="Menüyü aç"><span></span><span></span><span></span></button>
        </div>
      </div>
      <nav class="mobile-nav" id="mobileNav" aria-label="Mobil menü">
        <div class="mobile-panel-head">
          <a class="mobile-panel-logo" href="/" aria-label="${brand} anasayfa"><img src="/assets/images/logo.png" alt="${brand}" width="1110" height="312"></a>
          <button class="mobile-close" type="button" aria-label="Menüyü kapat">×</button>
        </div>
        <div class="mobile-search" role="search">
          <input type="search" placeholder="Arama" aria-label="Mobil menüde ara">
          ${icon("search")}
        </div>
        <ul>${navMarkup()}</ul>
      </nav>
    </div>
  </header>
  <main id="icerik">
    ${content}
  </main>
  ${footerMarkup()}
  <div class="floating-actions" aria-label="Hızlı iletişim">
    <a class="float-whatsapp" href="${waLink("Merhaba, Kayseri Hanedan Nakliyat web sitesinden bilgi almak istiyorum.")}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon("whatsapp")}</a>
    <a class="float-call" href="tel:${primaryTel}" aria-label="Telefon">${icon("phoneBooth")}</a>
    <a class="float-instagram" href="${instagramUrl}" target="_blank" rel="noopener" aria-label="Instagram">${icon("instagram")}</a>
  </div>
  <script src="/assets/js/main.js"></script>
</body>
</html>`;
}

function footerMarkup() {
  return `<footer class="site-footer">
    <div class="container footer-grid">
      <div class="footer-cta-card">
        <span class="round-icon">${icon("phone")}</span>
        <h2>Taşımacılıkta En Uygun Teklifi Alın</h2>
        <p>Kayseri şehir içi ve şehirler arası taşıma ihtiyaçlarınız için hızlı planlama yapalım.</p>
        <a class="btn btn-light" href="/teklif-al/">Teklif Al</a>
      </div>
      <div>
        <h3>Kurumsal</h3>
        <ul>
          <li><a href="/kurumsal/hakkimizda/">Hakkımızda</a></li>
          <li><a href="/kurumsal/misyonumuz/">Misyonumuz</a></li>
          <li><a href="/kurumsal/vizyonumuz/">Vizyonumuz</a></li>
          <li><a href="/kurumsal/calisma-surecimiz/">Çalışma Sürecimiz</a></li>
          <li><a href="/kurumsal/kvkk/">KVKK</a></li>
        </ul>
      </div>
      <div>
        <h3>Hizmetlerimiz</h3>
        <ul>${services.map((service) => `<li><a href="/hizmetler/${service.slug}/">${service.shortTitle}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h3>İletişim</h3>
        <ul>
          <li><a href="tel:${primaryTel}">${primaryPhone}</a></li>
          <li><a href="tel:${secondaryTel}">${secondaryPhone}</a></li>
          <li><a href="${mapsUrl()}" target="_blank" rel="noopener">Yol Tarifi</a></li>
          <li><a href="${instagramUrl}" target="_blank" rel="noopener">Instagram</a></li>
          <li><a href="/iletisim/">Bize Ulaşın</a></li>
        </ul>
      </div>
    </div>
    <div class="container footer-contact">
      <div>${icon("phone")} <strong>Destek Hattı</strong><a href="tel:${primaryTel}">${primaryPhone}</a></div>
      <div>${icon("phone")} <strong>Alternatif Hat</strong><a href="tel:${secondaryTel}">${secondaryPhone}</a></div>
      <div>${icon("location")} <strong>Adresimiz</strong><span>${address}</span></div>
    </div>
    <div class="container footer-bottom">
      <p>© 2026 ${brand}. Tüm hakları saklıdır.</p>
      <p>Tasarım <a class="barbarossoft-badge" href="https://barbarossoft.com.tr/" target="_blank" rel="noopener">BarbarosSoft</a> tarafından yapılmıştır.</p>
    </div>
  </footer>`;
}

function waLink(message) {
  return `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;
}

function mapsUrl() {
  return googleMapsUrl;
}

function sectionIntro(kicker, title, text) {
  return `<div class="section-head">
    <span class="kicker">${kicker}</span>
    <h2>${title}</h2>
    <p>${text}</p>
  </div>`;
}

function serviceCards(limit = services.length) {
  return services.slice(0, limit).map((service) => `<article class="service-card">
    <span class="service-icon">${icon(service.icon)}</span>
    <h3>${service.shortTitle}</h3>
    <p>${service.intro}</p>
    <a href="/hizmetler/${service.slug}/">Devamı için...</a>
  </article>`).join("");
}

function quickQuoteForm(compact = false) {
  return `<form class="quote-form ${compact ? "quote-form-compact" : ""}" data-whatsapp="${whatsapp}">
    <h2>Hızlı Teklif Alın</h2>
    <label><span>Adınız ve Soyadınız</span><input name="name" type="text" required placeholder="Ad Soyad"></label>
    <div class="form-row">
      <label><span>Telefon Numaranız</span><input name="phone" type="tel" required placeholder="+90 5xx xxx xx xx"></label>
      <label><span>Taşıma Türü</span><select name="service"><option>Evden Eve Nakliyat</option><option>Asansörlü Nakliyat</option><option>Şehir İçi Nakliyat</option><option>Şehirler Arası Nakliyat</option><option>Ofis ve İşyeri Taşıma</option><option>Eşya Depolama</option><option>Parça Eşya Taşıma</option></select></label>
    </div>
    <div class="form-row">
      <label><span>Alınacak Adres / İlçe</span><input name="from" type="text" placeholder="Örn. Melikgazi"></label>
      <label><span>Teslim Adresi / İlçe</span><input name="to" type="text" placeholder="Örn. Talas"></label>
    </div>
    <div class="form-row">
      <label><span>Kat Bilgisi</span><select name="floor"><option>Zemin Kat</option><option>1-3 Kat</option><option>4-7 Kat</option><option>8+ Kat</option></select></label>
      <label><span>Asansör Durumu</span><select name="elevator"><option>Bina asansörü var</option><option>Bina asansörü yok</option><option>Dış cephe asansörü gerekir</option></select></label>
    </div>
    <label><span>Mesajınız</span><textarea name="message" rows="4" placeholder="Eşya yoğunluğu, tarih ve özel notlarınızı yazabilirsiniz."></textarea></label>
    <button class="btn btn-dark" type="submit">WhatsApp'tan Bilgi Al</button>
    <p class="form-note">Form gönderimi WhatsApp mesajı oluşturur; bilgilerinizi onaylayarak gönderebilirsiniz.</p>
  </form>`;
}

function breadcrumb(items) {
  const links = [["Anasayfa", "/"], ...items];
  return `<nav class="breadcrumb" aria-label="Breadcrumb">${links.map(([label, href], index) => index === links.length - 1 ? `<span>${label}</span>` : `<a href="${href}">${label}</a>`).join("<b>/</b>")}</nav>`;
}

function homePage() {
  const faqs = [
    ["Kayseri Hanedan Nakliyat hangi bölgelerde hizmet veriyor?", "Melikgazi, Kocasinan, Talas ve Kayseri'nin tüm ilçelerinde şehir içi ve şehirler arası nakliyat hizmeti sunuyoruz."],
    ["Teklif almak için hangi bilgiler gerekir?", "Alınacak adres, teslim adresi, kat bilgisi, eşya yoğunluğu ve taşıma tarihi teklif için yeterlidir."],
    ["Asansörlü nakliyat hizmetiniz var mı?", "Evet. Bina ve cephe uygunluğuna göre dış cephe asansörüyle taşıma planlanabilir."]
  ];
  const schema = [faqSchema(faqs)];
  const heroDisplaySlides = heroSlides.filter((slide) => !slide.bare);
  const heroSlidesMarkup = heroDisplaySlides.map((slide, index) => `
    <article class="hero-slide${index === 0 ? " is-active" : ""}" aria-hidden="${index === 0 ? "false" : "true"}">
      <img class="hero-bg" src="${slide.image}" alt="${slide.alt}"${index === 0 ? " fetchpriority=\"high\"" : ""}>
      <div class="container hero-split">
        <div class="hero-content">
        <span class="hero-label">${slide.label}</span>
        <h1>${slide.title}</h1>
        <p>${slide.text}</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="/teklif-al/">Teklif Al</a>
          <a class="btn btn-outline" href="tel:${primaryTel}">${primaryPhone}</a>
          <a class="btn btn-outline" href="tel:${secondaryTel}">${secondaryPhone}</a>
        </div>
        <div class="hero-stats">${slide.stats.map(([title, text]) => `<span><strong>${title}</strong> ${text}</span>`).join("")}</div>
        </div>
      </div>
    </article>`).join("");
  const content = `
  <section class="hero hero-carousel" data-hero-carousel aria-label="Hanedan Nakliyat ana görsel geçişleri">
    ${heroSlidesMarkup}
    <div class="hero-dots" aria-label="Ana görsel seçimi">${heroDisplaySlides.map((_, index) => `<button type="button" class="${index === 0 ? "is-active" : ""}" aria-label="${index + 1}. görsele geç"></button>`).join("")}</div>
  </section>
  <section class="section services-showcase pattern-bg">
    <div class="container">
      ${sectionIntro("Kayseri Evden Eve Nakliyat", "Tüm Taşıma İhtiyaçlarınız İçin Profesyonel Çözümler", "Evinizi, ofisinizi veya parça eşyanızı taşırken doğru planlama, uygun ekipman ve güvenilir ekip desteğiyle yanınızdayız.")}
      <div class="service-slider">${serviceCards(4)}</div>
      <div class="center mt-40"><a class="btn btn-primary" href="/hizmetler/">Tüm Hizmetleri Gör</a></div>
    </div>
  </section>

  <section class="section about-split">
    <div class="container split-grid">
      <div class="image-stack">
        <img src="${buildingImage}" alt="Kayseri Hanedan Nakliyat bina önü taşıma aracı">
        <div class="experience-badge"><strong>HANEDAN</strong><span>Ev Ofis Taşıma</span></div>
      </div>
      <div class="split-copy">
        <span class="kicker">Güvenli ve Planlı Taşımacılık</span>
        <h2>Eşyalarınızı Hasarsız, Kontrollü ve Zamanında Taşımayı Hedefliyoruz</h2>
        <p>Kayseri Hanedan Nakliyat; taşıma öncesi keşif, doğru ekipman planı, paketleme ve adres geçiş koordinasyonunu tek süreçte toplar. Böylece taşınma günü belirsizlik azalır, ekip ve araç ihtiyacı netleşir.</p>
        <div class="check-grid">
          <span>${icon("check")} Talebe göre sigortalı taşıma</span>
          <span>${icon("check")} Profesyonel paketleme</span>
          <span>${icon("check")} Asansörlü taşıma seçeneği</span>
          <span>${icon("check")} Şehir içi ve şehirler arası operasyon</span>
        </div>
        <div class="inline-actions">
          <a class="btn btn-dark" href="/iletisim/">Bize Ulaşın</a>
          <a class="phone-inline" href="tel:${secondaryTel}">${secondaryPhone}</a>
        </div>
      </div>
    </div>
  </section>

  <section class="why-band">
    <div class="why-bg"><img src="${buildingImage}" alt="Kayseri Hanedan Nakliyat şehir içi taşıma aracı"></div>
    <div class="container why-content">
      <div class="why-tabs">
        <span>Uzman Kadro</span>
        <span>Modern Ekipman</span>
        <span>Geniş Hizmet Ağı</span>
        <span>Öncelikli Planlama</span>
      </div>
      <div class="why-card">
        <h2>Deneyimli ve Profesyonel Ekip</h2>
        <p>Taşıma süreci; paketleme, yükleme, araç içi sabitleme, teslimat ve yerleşim adımlarından oluşur. Ekibimiz her adımı önceden belirlenen plana göre yönetir.</p>
        <ul>
          <li>Eğitimli taşıma personeli</li>
          <li>Mobilya söküm ve montaj desteği</li>
          <li>Asansör ve araç planlama</li>
          <li>Kontrollü teslimat süreci</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="section solutions">
    <div class="container">
      ${sectionIntro("Hanedan Nakliyat Hizmetleri", "Tüm Taşıma İhtiyaçlarınız İçin Çözümler", "Kayseri'de evden eve nakliyattan akıllı depolamaya kadar ihtiyaçlarınıza uygun hizmetleri tek çatı altında sunuyoruz.")}
      <div class="solution-grid">${serviceCards()}</div>
    </div>
  </section>

  <section class="section quote-section">
    <div class="container quote-grid">
      <div>
        <span class="kicker">Güçlü Yönlerimiz</span>
        <h2>Neden Kayseri'de Hanedan Nakliyat?</h2>
        <p>Kayseri evden eve nakliyat ihtiyaçlarında doğru planlama ve hızlı iletişim en az araç ve personel kadar önemlidir. Taşıma gününden önce net bilgi alır, uygun ekip ve ekipmanla hazırlık yaparız.</p>
        <div class="progress-list">
          <span><b>Planlama</b><i style="--w:98%">98%</i></span>
          <span><b>Paketleme</b><i style="--w:96%">96%</i></span>
          <span><b>Zaman Yönetimi</b><i style="--w:95%">95%</i></span>
          <span><b>Müşteri Memnuniyeti</b><i style="--w:97%">97%</i></span>
        </div>
      </div>
      ${quickQuoteForm()}
    </div>
  </section>

  <section class="section testimonials pattern-bg">
    <div class="container">
      ${sectionIntro("Yorumlar", "Müşterilerimizin Bizler İçin Düşündükleri", "Gerçek taşıma deneyimlerinde en çok planlı çalışma, dikkatli paketleme ve hızlı iletişim öne çıkar.")}
      <div class="testimonial-card">
        <p>"Taşınma sürecimizde ekip önceden arayıp detayları netleştirdi. Paketleme ve taşıma sırasında dikkatli çalıştılar. Kayseri içinde güvenilir nakliyat arayanlara tavsiye ederim."</p>
        <strong>Kayseri müşterisi</strong>
        <span>Müşteri geri bildirimi</span>
      </div>
    </div>
  </section>

  <section class="section process">
    <div class="container">
      <div class="process-head">
        <div>
          <span class="kicker">Çalışma Sürecimiz</span>
          <h2>Taşımacılıkta En Doğru ve Güvenli Süreci Uygularız</h2>
          <p>Amacımız eşyalarınızı güvenle taşımak ve süreci sizin için zahmetsiz hale getirmektir.</p>
        </div>
      </div>
      <div class="process-line">
        <article><span>1</span><img src="${truckImage}" alt="Keşif ve planlama için Hanedan Nakliyat aracı"><h3>Keşif ve Planlama</h3><p>Eşya miktarı, bina yapısı, kat bilgisi ve mesafe analiz edilir.</p></article>
        <article><span>2</span><img src="${buildingImage}" alt="Profesyonel taşıma ve araç yerleşim süreci"><h3>Profesyonel Taşıma</h3><p>Eşyalar türüne uygun paketlenir, araç içi yerleşim kontrollü yapılır.</p></article>
        <article><span>3</span><img src="${truckImage}" alt="Güvenli teslimat için nakliye aracı"><h3>Güvenli Teslimat</h3><p>Eşyalar yeni adresinize teslim edilir, montaj ve yerleşim desteği sağlanır.</p></article>
      </div>
    </div>
  </section>

  <section class="section seo-copy">
    <div class="container two-col-copy">
      <article>
        <h2>Kayseri Evden Eve Nakliyat'ta Güvenin Adresi Hanedan Nakliyat</h2>
        <p>Kayseri Hanedan Nakliyat; Melikgazi, Kocasinan, Talas ve çevre ilçelerde evden eve nakliyat, asansörlü nakliyat, şehir içi taşıma, şehirler arası nakliyat ve ofis taşıma hizmetleri sunar.</p>
      </article>
      <article>
        <h2>Yeni Nesil Taşımacılık, Eski Dostluk</h2>
        <p>Taşınma stresini azaltmak için iletişimi açık, fiyatlandırmayı net ve süreci planlı tutuyoruz. Teklif almak için bizi arayabilir veya WhatsApp hattımıza yazabilirsiniz.</p>
      </article>
    </div>
  </section>

  <section class="section faq">
    <div class="container">
      ${sectionIntro("SSS", "Sıkça Sorulan Sorular", "Kayseri Hanedan Nakliyat hakkında en çok merak edilenler.")}
      ${faqMarkup(faqs)}
    </div>
  </section>`;

  return pageLayout({
    title: "Kayseri Hanedan Nakliyat | Evden Eve, Asansörlü ve Şehirler Arası Nakliyat",
    description: "Kayseri Hanedan Nakliyat; evden eve nakliyat, asansörlü taşıma, şehir içi, şehirler arası, ofis taşıma ve eşya depolama hizmetleri sunar.",
    url: "/",
    bodyClass: "home",
    content,
    schema
  });
}

function faqMarkup(faqs) {
  return `<div class="faq-list">${faqs.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("")}</div>`;
}

function serviceIndexPage() {
  const content = `
  <section class="page-hero compact-hero">
    <div class="container">
      ${breadcrumb([["Hizmetlerimiz", "/hizmetler/"]])}
      <span class="kicker">Hanedan Nakliyat Hizmetleri</span>
      <h1>Kayseri Nakliyat Hizmetleri</h1>
      <p>Evden eve nakliyat, asansörlü taşıma, şehir içi ve şehirler arası nakliyat, ofis taşıma, eşya depolama ve paketleme çözümleri.</p>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <div class="solution-grid">${serviceCards()}</div>
    </div>
  </section>
  <section class="section quote-section">
    <div class="container quote-grid">
      <div><span class="kicker">Hızlı Planlama</span><h2>Hangi hizmete ihtiyacınız olduğunu birlikte netleştirelim</h2><p>Adres, kat, eşya yoğunluğu ve tarih bilgilerini paylaşın; size uygun taşıma planını hazırlayalım.</p></div>
      ${quickQuoteForm(true)}
    </div>
  </section>`;
  return pageLayout({
    title: "Kayseri Nakliyat Hizmetleri | Kayseri Hanedan Nakliyat",
    description: "Kayseri Hanedan Nakliyat hizmetleri: evden eve nakliyat, asansörlü nakliyat, şehir içi ve şehirler arası taşıma, ofis taşıma ve depolama.",
    url: "/hizmetler/",
    keywords: "kayseri nakliyat hizmetleri, kayseri evden eve, asansörlü nakliyat kayseri",
    content
  });
}

function servicePage(service) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "provider": { "@id": `${siteUrl}/#localbusiness` },
    "areaServed": "Kayseri",
    "serviceType": service.shortTitle,
    "description": service.intro,
    "url": absolute(`/hizmetler/${service.slug}/`)
  };
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const content = `
  <section class="page-hero service-hero">
    <div class="container">
      ${breadcrumb([["Hizmetlerimiz", "/hizmetler/"], [service.shortTitle, `/hizmetler/${service.slug}/`]])}
      <span class="kicker">${brand}</span>
      <h1>${service.title}</h1>
      <p>${service.intro}</p>
      <div class="hero-actions"><a class="btn btn-primary" href="/teklif-al/">Teklif Al</a><a class="btn btn-outline" href="tel:${primaryTel}">${primaryPhone}</a></div>
    </div>
  </section>
  <section class="section service-detail">
    <div class="container detail-grid">
      <article class="detail-copy">
        ${service.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        <h2>${service.shortTitle} Fiyatını Etkileyen Unsurlar</h2>
        <p>Fiyatlandırmada sadece mesafe değil, eşya hacmi, kat durumu, paketleme kapsamı, asansör gereksinimi, bina erişimi ve ek personel ihtiyacı birlikte değerlendirilir. Bu nedenle net teklif için kısa bir ön bilgi paylaşımı büyük fark yaratır.</p>
        <p>Kayseri içi taşımalarda trafik saatleri ve park uygunluğu; şehirler arası taşımalarda ise rota ve teslim tarih aralığı maliyet planlamasını doğrudan etkiler.</p>
        <h2>${service.shortTitle} Süreci Nasıl İlerler?</h2>
        <ol class="number-list">
          <li>Adres, kat, eşya yoğunluğu ve tarih bilgileri alınır.</li>
          <li>Gerekirse asansör, paketleme ve araç planı yapılır.</li>
          <li>Taşıma günü ekip eşyaları korumalı şekilde yükler.</li>
          <li>Yeni adreste teslimat, yerleşim ve montaj desteği tamamlanır.</li>
        </ol>
      </article>
      <aside class="detail-aside">
        <img src="${buildingImage}" alt="${service.title} için Kayseri Hanedan Nakliyat aracı">
        <div class="aside-card">
          <h2>Hızlı Teklif</h2>
          <p>${service.shortTitle} için adres ve kat bilgilerinizi paylaşın, size uygun planlamayı yapalım.</p>
          <a class="btn btn-primary" href="${waLink(`Merhaba, ${service.title} hizmeti için teklif almak istiyorum.`)}" target="_blank" rel="noopener">WhatsApp'tan Yaz</a>
        </div>
      </aside>
    </div>
  </section>
  <section class="section pattern-bg">
    <div class="container">
      ${sectionIntro("İlgili Hizmetler", "Taşıma Planınızı Tamamlayan Çözümler", "İhtiyacınıza göre birden fazla hizmet birlikte planlanabilir.")}
      <div class="service-slider">${related.map((item) => `<article class="service-card"><span class="service-icon">${icon(item.icon)}</span><h3>${item.shortTitle}</h3><p>${item.intro}</p><a href="/hizmetler/${item.slug}/">Devamı için...</a></article>`).join("")}</div>
    </div>
  </section>
  <section class="section faq"><div class="container">${sectionIntro("SSS", `${service.shortTitle} Hakkında Sorular`, "Teklif almadan önce merak edilen başlıklar.")}${faqMarkup(service.faqs)}</div></section>`;
  return pageLayout({
    title: `${service.title} | ${brand}`,
    description: `${service.title} hizmeti için Kayseri Hanedan Nakliyat'tan hızlı teklif alın. Planlı paketleme, uygun araç ve güvenli taşıma desteği.`,
    url: `/hizmetler/${service.slug}/`,
    keywords: service.keywords,
    content,
    schema: [serviceSchema, faqSchema(service.faqs)]
  });
}

function districtsIndexPage() {
  const content = `
  <section class="page-hero compact-hero">
    <div class="container">
      ${breadcrumb([["Bölgeler", "/bolgeler/"]])}
      <span class="kicker">Kayseri Bölge Sayfaları</span>
      <h1>Kayseri İlçelerinde Evden Eve Nakliyat</h1>
      <p>Melikgazi, Kocasinan, Talas ve Kayseri'nin diğer ilçelerinde yerel taşıma planlaması.</p>
    </div>
  </section>
  <section class="section">
    <div class="container district-grid">
      ${districts.map(([slug, title, note]) => `<article class="district-card"><h2>${title} Evden Eve Nakliyat</h2><p>${note}</p><a href="/bolgeler/${slug}-evden-eve-nakliyat/">İlçe sayfasını incele</a></article>`).join("")}
    </div>
  </section>`;
  return pageLayout({
    title: "Kayseri İlçeleri Nakliyat | Kayseri Hanedan Nakliyat",
    description: "Kayseri ilçelerinde evden eve nakliyat, asansörlü taşıma ve şehir içi taşıma çözümleri. Melikgazi, Kocasinan, Talas ve daha fazlası.",
    url: "/bolgeler/",
    content
  });
}

function districtPage([slug, title, note]) {
  const url = `/bolgeler/${slug}-evden-eve-nakliyat/`;
  const faqs = [
    [`${title} evden eve nakliyat fiyatı nasıl belirlenir?`, "Eşya yoğunluğu, kat durumu, mesafe, paketleme kapsamı ve asansör ihtiyacı birlikte değerlendirilir."],
    [`${title} bölgesinde asansörlü nakliyat yapıyor musunuz?`, "Bina cephesi ve sokak uygunluğu kontrol edilerek dış cephe asansörü planlanabilir."],
    [`${title} için şehirler arası taşıma yapılır mı?`, "Evet. Kayseri çıkışlı veya Kayseri varışlı şehirler arası taşımalar için planlama yapılır."]
  ];
  const content = `
  <section class="page-hero service-hero">
    <div class="container">
      ${breadcrumb([["Bölgeler", "/bolgeler/"], [`${title} Evden Eve Nakliyat`, url]])}
      <span class="kicker">Kayseri Bölge Nakliyatı</span>
      <h1>${title} Evden Eve Nakliyat</h1>
      <p>${note} Kayseri Hanedan Nakliyat, ${title} bölgesinde evden eve nakliyat, asansörlü taşıma ve parça eşya taşıma taleplerinizi planlı şekilde yönetir.</p>
      <div class="hero-actions"><a class="btn btn-primary" href="/teklif-al/">Teklif Al</a><a class="btn btn-outline" href="tel:${primaryTel}">${primaryPhone}</a></div>
    </div>
  </section>
  <section class="section service-detail">
    <div class="container detail-grid">
      <article class="detail-copy">
        <p>${title} evden eve nakliyat sürecinde taşıma günü oluşabilecek aksaklıkları azaltmak için adres, kat, eşya yoğunluğu ve araç park alanı önceden değerlendirilir.</p>
        <p>Hanedan Nakliyat; ${title} ve çevresinde ev taşıma, ofis taşıma, asansörlü nakliyat, paketleme ve parça eşya taşıma ihtiyaçlarına göre ekip ve araç planlar.</p>
        <p>Kayseri içinde kısa mesafeli taşımalarda hızlı teslimat, şehirler arası taşımada ise doğru yükleme ve rota planı önceliğimizdir.</p>
        <h2>${title} Bölgesinde Taşınma Öncesi Öneriler</h2>
        <p>Taşıma gününden önce bina yönetimi bilgilendirilmesi, asansör kullanım saatinin netleştirilmesi ve park alanı planı yapılması operasyon hızını artırır. Özellikle yoğun sokaklarda erken saat planlaması daha verimli sonuç verir.</p>
        <h2>${title} Bölgesinde Sunduğumuz Hizmetler</h2>
        <div class="mini-service-list">${services.slice(0, 6).map((service) => `<a href="/hizmetler/${service.slug}/">${service.shortTitle}</a>`).join("")}</div>
      </article>
      <aside class="detail-aside">
        <img src="${buildingImage}" alt="${title} evden eve nakliyat için Hanedan Nakliyat aracı">
        <div class="aside-card">
          <h2>${title} için Hızlı Teklif</h2>
          <p>Taşıma adresinizi, kat bilgisini ve tarih tercihinizi paylaşın.</p>
          <a class="btn btn-primary" href="${waLink(`Merhaba, ${title} evden eve nakliyat için teklif almak istiyorum.`)}" target="_blank" rel="noopener">WhatsApp'tan Yaz</a>
        </div>
      </aside>
    </div>
  </section>
  <section class="section faq"><div class="container">${sectionIntro("SSS", `${title} Nakliyat Hakkında Sorular`, "Bölgeye özel sık sorulan sorular.")}${faqMarkup(faqs)}</div></section>`;
  return pageLayout({
    title: `${title} Evden Eve Nakliyat | ${brand}`,
    description: `${title} evden eve nakliyat, asansörlü taşıma ve şehir içi nakliye hizmetleri için Kayseri Hanedan Nakliyat'tan hızlı teklif alın.`,
    url,
    keywords: `${title.toLowerCase()} evden eve nakliyat, ${title.toLowerCase()} nakliyat, kayseri ${title.toLowerCase()} nakliye`,
    content,
    schema: [faqSchema(faqs)]
  });
}

function corporatePage(slug, title, body) {
  const content = `
  <section class="page-hero compact-hero">
    <div class="container">
      ${breadcrumb([["Kurumsal", "/kurumsal/hakkimizda/"], [title, `/kurumsal/${slug}/`]])}
      <span class="kicker">${brand}</span>
      <h1>${title}</h1>
      <p>Kayseri merkezli taşıma hizmetlerinde güven, planlama ve açık iletişim yaklaşımımız.</p>
    </div>
  </section>
  <section class="section">
    <div class="container narrow-copy">
      ${body}
      <div class="inline-actions mt-40"><a class="btn btn-primary" href="/teklif-al/">Teklif Al</a><a class="btn btn-dark" href="/iletisim/">İletişim</a></div>
    </div>
  </section>`;
  return pageLayout({
    title: `${title} | ${brand}`,
    description: `${brand} ${title.toLowerCase()} sayfası. Kayseri'de evden eve nakliyat, asansörlü taşıma ve şehirler arası nakliyat hizmetleri.`,
    url: `/kurumsal/${slug}/`,
    content
  });
}

function galleryPage() {
  const imageCards = [
    [heroImage, "Hanedan Nakliyat ana görseli"],
    [truckImage, "Hanedan Nakliyat araç görseli"],
    [buildingImage, "Kayseri Hanedan Nakliyat bina önü araç görseli"],
    [secondTruckImage, "Kayseri Hanedan Nakliyat ikinci araç görseli"]
  ].map(([src, alt], index) => `<a href="${src}" class="gallery-item${index === 1 ? " tall" : ""}"><img src="${src}" alt="${alt}"></a>`).join("");
  const videoCards = galleryVideos.map((src, index) => `<div class="video-card"><video src="${src}" controls controlsList="nofullscreen nodownload" muted playsinline preload="metadata"></video><h2>Hanedan Nakliyat Video ${index + 1}</h2><p>Taşıma sürecinden araç ve ekip görüntüleri.</p></div>`).join("");
  const content = `
  <section class="page-hero compact-hero">
    <div class="container">${breadcrumb([["Galeri", "/galeri/"]])}<span class="kicker">Galeri</span><h1>Kayseri Hanedan Nakliyat Galeri</h1><p>Araç, ekipman ve taşıma süreçlerimizden görseller.</p></div>
  </section>
  <section class="section">
    <div class="container">
      <div class="gallery-tabs">
        <button class="gallery-tab-btn active" data-tab="images" type="button">Görseller</button>
        <button class="gallery-tab-btn" data-tab="videos" type="button">Videolar</button>
      </div>
      <div class="gallery-tab-pane active" id="images-tab">
        <div class="gallery-grid">
          ${imageCards}
        </div>
      </div>
      <div class="gallery-tab-pane" id="videos-tab">
        <div class="gallery-grid videos-grid">
          ${videoCards}
        </div>
      </div>
    </div>
  </section>`;
  return pageLayout({
    title: "Galeri | Kayseri Hanedan Nakliyat",
    description: "Kayseri Hanedan Nakliyat araç, video ve taşıma süreci galeri sayfası.",
    url: "/galeri/",
    content
  });
}

function contactPage() {
  const content = `
  <section class="page-hero compact-hero">
    <div class="container">${breadcrumb([["İletişim", "/iletisim/"]])}<span class="kicker">Bize Ulaşın</span><h1>Kayseri Hanedan Nakliyat İletişim</h1><p>Teklif, keşif ve nakliyat planlaması için telefon veya WhatsApp hattımızdan ulaşabilirsiniz.</p></div>
  </section>
  <section class="section contact-section">
    <div class="container contact-grid">
      <div class="contact-cards">
        <article><span>${icon("phone")}</span><h2>Telefon</h2><a href="tel:${primaryTel}">${primaryPhone}</a><a href="tel:${secondaryTel}">${secondaryPhone}</a></article>
        <article><span>${icon("location")}</span><h2>Adres</h2><p>${address}</p><a href="${mapsUrl()}" target="_blank" rel="noopener">Yol Tarifi Al</a></article>
        <article><span>${icon("clock")}</span><h2>Hızlı Teklif</h2><p>WhatsApp üzerinden fotoğraf ve adres bilgisi göndererek hızlı teklif alabilirsiniz.</p><a href="${waLink("Merhaba, nakliyat için teklif almak istiyorum.")}" target="_blank" rel="noopener">WhatsApp'tan Yaz</a></article>
      </div>
      ${quickQuoteForm()}
    </div>
  </section>
  <section class="map-strip"><iframe title="Kayseri Hanedan Nakliyat konum haritası" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed"></iframe></section>`;
  return pageLayout({
    title: "İletişim | Kayseri Hanedan Nakliyat",
    description: "Kayseri Hanedan Nakliyat iletişim bilgileri: telefon, WhatsApp, adres ve hızlı teklif formu. Gülük, Haseki Cd., Melikgazi/Kayseri.",
    url: "/iletisim/",
    content
  });
}

function quotePage() {
  const content = `
  <section class="page-hero compact-hero">
    <div class="container">${breadcrumb([["Teklif Al", "/teklif-al/"]])}<span class="kicker">Hızlı Teklif</span><h1>Kayseri Nakliyat Teklif Formu</h1><p>Taşıma türünü, adres bilgilerini ve eşya yoğunluğunu paylaşın; WhatsApp üzerinden hızlıca iletişime geçelim.</p></div>
  </section>
  <section class="section quote-section">
    <div class="container quote-grid">
      <div>
        <span class="kicker">Bilgi Formu</span>
        <h2>Net teklif için birkaç bilgi yeterli</h2>
        <p>Alınacak adres, teslim adresi, kat bilgisi, eşya yoğunluğu ve tarih aralığı taşıma planını doğru hazırlamamızı sağlar.</p>
        <div class="check-grid single">
          <span>${icon("check")} WhatsApp üzerinden hızlı dönüş</span>
          <span>${icon("check")} Eşya fotoğrafı ile pratik keşif</span>
          <span>${icon("check")} Kayseri geneli taşıma planı</span>
        </div>
      </div>
      ${quickQuoteForm()}
    </div>
  </section>`;
  return pageLayout({
    title: "Kayseri Nakliyat Teklif Al | Kayseri Hanedan Nakliyat",
    description: "Kayseri evden eve nakliyat, asansörlü taşıma, ofis taşıma ve şehirler arası nakliyat için hızlı teklif formu.",
    url: "/teklif-al/",
    content
  });
}

function blogIndexPage() {
  const content = `
  <section class="page-hero compact-hero">
    <div class="container">${breadcrumb([["Blog", "/blog/"]])}<span class="kicker">Blog</span><h1>Nakliyat Rehberi</h1><p>Kayseri evden eve nakliyat, asansörlü taşıma ve taşınma planlaması için pratik içerikler.</p></div>
  </section>
  <section class="section pattern-bg">
    <div class="container district-grid">
      ${blogPosts.map((post) => `<article class="district-card"><h2>${post.title}</h2><p>${post.description}</p><p><strong>${post.category}</strong> • ${post.date}</p><a href="/blog/${post.slug}/">Yazıyı oku</a></article>`).join("")}
    </div>
  </section>`;
  return pageLayout({
    title: `Blog | ${brand}`,
    description: "Kayseri nakliyat süreçleri için taşınma önerileri, asansörlü taşıma rehberi ve planlama içerikleri.",
    url: "/blog/",
    keywords: "kayseri nakliyat blog, taşınma rehberi, ev taşıma ipuçları",
    content
  });
}

function blogPostPage(post) {
  const postUrl = `/blog/${post.slug}/`;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": absolute(postUrl),
    "author": {
      "@type": "Organization",
      "name": brand
    },
    "publisher": {
      "@type": "Organization",
      "name": brand,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/assets/images/logo.png`
      }
    },
    "image": `${siteUrl}${heroImage}`
  };
  const content = `
  <section class="page-hero compact-hero">
    <div class="container">${breadcrumb([["Blog", "/blog/"], [post.title, postUrl]])}<span class="kicker">${post.category}</span><h1>${post.title}</h1><p>${post.description}</p></div>
  </section>
  <section class="section">
    <div class="container narrow-copy">
      ${post.content.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      <div class="inline-actions mt-40"><a class="btn btn-primary" href="/teklif-al/">Teklif Al</a><a class="btn btn-dark" href="/iletisim/">İletişim</a></div>
    </div>
  </section>`;
  return pageLayout({
    title: `${post.title} | ${brand}`,
    description: post.description,
    url: postUrl,
    keywords: post.keywords,
    content,
    schema: [blogSchema]
  });
}

function css() {
  return `:root {
  --red: #AC0A15;
  --red-soft: #fff0f2;
  --red-dark: #7d0710;
  --header: #AC0A15;
  --header-dark: #7d0710;
  --deep: #073f46;
  --deep-2: #0b5760;
  --ink: #12353a;
  --muted: #667785;
  --line: #e5eef1;
  --pale: #f1fafb;
  --white: #fff;
  --shadow: 0 24px 70px rgba(9, 44, 51, .12);
  --radius: 8px;
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; color: var(--ink); font-family: Inter, "Segoe UI", Arial, sans-serif; line-height: 1.65; background: #fff; overflow-x: hidden; }
img, video { max-width: 100%; display: block; }
a { color: inherit; text-decoration: none; }
.container { width: min(1180px, calc(100% - 40px)); margin-inline: auto; }
.site-header .container { width: 100%; max-width: none; padding-left: clamp(18px, 4.7vw, 96px); padding-right: 0; }
.skip-link { position: absolute; left: -999px; top: 12px; background: var(--red); color: #fff; padding: 10px 14px; z-index: 999; }
.skip-link:focus { left: 12px; }
svg { width: 1.15em; height: 1.15em; }
.topbar { background: transparent; color: #fff; font-weight: 800; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,.18); }
.topbar-inner { min-height: 32px; display: flex; align-items: center; gap: 36px; }
.topbar span, .topbar a { display: inline-flex; gap: 8px; align-items: center; }
.topbar svg { width: 15px; height: 15px; }
.topbar-social { margin-left: auto; display: flex; align-items: center; gap: 18px; }
.topbar-social a { min-width: 16px; justify-content: center; opacity: .92; }
.topbar-social a:hover { opacity: 1; color: #fff0f2; }
.site-header { position: sticky; top: 0; z-index: 50; background: var(--header); box-shadow: 0 14px 34px rgba(75, 5, 12, .28); }
.nav-shell { background: transparent; color: #fff; }
.nav-inner { min-height: 104px; display: flex; align-items: stretch; gap: 0; }
.brand { display: inline-flex; align-items: center; min-width: 470px; padding-right: 58px; border-right: 1px solid rgba(255,255,255,.18); }
.brand-logo { width: 330px; height: auto; display: block; }
.main-nav { flex: 1; display: flex; align-items: center; justify-content: center; padding: 0 58px; }
.main-nav ul, .mobile-nav ul { list-style: none; padding: 0; margin: 0; }
.main-nav > ul { display: flex; justify-content: center; align-items: center; gap: 42px; width: 100%; }
.main-nav a { display: flex; align-items: center; gap: 7px; padding: 40px 0; font-size: 14px; font-weight: 900; text-transform: uppercase; line-height: 1; }
.main-nav li { position: relative; }
.main-nav li:hover > a { color: #ffe3e7; }
.has-dropdown > ul { position: absolute; top: 100%; left: 0; min-width: 270px; max-height: calc(100vh - 150px); overflow-y: auto; background: #fff; color: #5d6c71; padding: 18px 0; opacity: 0; visibility: hidden; transform: translateY(12px); transition: .2s ease; box-shadow: var(--shadow); }
.has-dropdown:hover > ul { opacity: 1; visibility: visible; transform: translateY(0); }
.has-dropdown > ul a { color: #5d6c71; padding: 11px 26px; white-space: nowrap; }
.has-dropdown > ul a:hover { color: var(--red); background: var(--red-soft); }
.header-actions { display: flex; align-items: center; gap: 28px; min-width: 400px; justify-content: flex-end; border-left: 1px solid rgba(255,255,255,.18); padding-left: 42px; }
.call-pill { display: grid; grid-template-columns: 48px 1fr; gap: 2px 12px; align-items: center; min-width: 250px; }
.call-icon { grid-row: span 3; width: 48px; height: 48px; border-radius: 50%; display: grid !important; place-items: center; background: #0c0c0c; color: #fff; box-shadow: inset 0 0 0 5px rgba(255,255,255,.18); }
.call-icon svg { width: 22px; height: 22px; }
.call-pill span:not(.call-icon) { font-size: 12px; opacity: .88; line-height: 1; }
.call-pill strong { font-size: 18px; line-height: 1.05; }
.menu-toggle { display: grid; place-content: center; width: 56px; height: 56px; border: 1px solid rgba(255,255,255,.24); border-radius: 8px; background: rgba(5,5,5,.24); padding: 0; cursor: pointer; transition: background .2s ease, border-color .2s ease, transform .2s ease; }
.menu-toggle:hover { background: rgba(5,5,5,.34); border-color: rgba(255,255,255,.4); transform: translateY(-1px); }
.menu-toggle:focus { outline: none; }
.menu-toggle:focus-visible { outline: 2px solid rgba(255,255,255,.72); outline-offset: 3px; }
.menu-toggle span { display: block; width: 26px; height: 2px; margin: 4px 0; border-radius: 999px; background: #fff; }
.mobile-nav { display: none; position: fixed; inset: 0; z-index: 120; background: #fff; color: var(--ink); overflow-y: auto; padding: 24px 32px 44px; }
.mobile-nav.open { display: block; }
body.menu-open { overflow: hidden; }
.mobile-panel-head { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-bottom: 18px; }
.mobile-panel-logo img { width: 230px; height: auto; }
.mobile-close { width: 42px; height: 42px; border: 0; background: #f4f4f4; color: #1d1d1d; font-size: 34px; line-height: 1; cursor: pointer; }
.mobile-search { position: relative; margin: 12px 0 18px; }
.mobile-search input { width: 100%; height: 46px; border: 0; background: #f6f6f6; border-radius: 0; padding: 0 50px 0 20px; color: var(--ink); font: inherit; font-weight: 800; outline: none; }
.mobile-search input::placeholder { color: #7c898d; font-weight: 700; }
.mobile-search svg { position: absolute; right: 17px; top: 50%; width: 21px; height: 21px; transform: translateY(-50%); color: #071f23; }
.mobile-nav ul { list-style: none; padding: 0; margin: 0; }
.mobile-nav > ul { display: grid; padding-top: 8px; }
.mobile-nav > ul > li > a { display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #e8eeee; padding: 17px 0; color: var(--ink); font-size: 16px; font-weight: 950; text-transform: uppercase; letter-spacing: 0; }
.mobile-nav .has-dropdown > a span { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 4px; background: #f4f4f4; color: var(--ink); font-size: 16px; }
.mobile-nav .has-dropdown > ul { display: none; padding: 4px 0 14px 16px; border-bottom: 1px solid #e8eeee; }
.mobile-nav .has-dropdown.open > ul { display: grid; }
.mobile-nav .has-dropdown > ul a { display: block; padding: 9px 0; color: #637174; font-size: 14px; font-weight: 850; text-transform: none; }
.mobile-nav li.is-hidden { display: none; }
.btn { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; border-radius: 8px; padding: 0 24px; font-weight: 900; border: 1px solid transparent; transition: .2s ease; }
.btn-primary { background: var(--red); color: #fff; }
.btn-primary:hover { background: var(--red-dark); transform: translateY(-2px); }
.btn-dark { background: var(--deep); color: #fff; }
.btn-dark:hover { background: var(--deep-2); transform: translateY(-2px); }
.btn-outline { color: #fff; border-color: rgba(255,255,255,.75); background: rgba(0,0,0,.2); }
.btn-light { background: #fff; color: var(--red); }
.hero { min-height: 660px; position: relative; display: grid; align-items: center; color: #fff; overflow: hidden; background: var(--deep); }
.hero-carousel { width: 100%; min-height: 620px; height: clamp(620px, 72vh, 760px); }
.hero-slide { position: absolute; inset: 0; display: grid; align-items: center; opacity: 0; visibility: hidden; transition: opacity .7s ease, visibility .7s ease; }
.hero-slide.is-active { opacity: 1; visibility: visible; z-index: 1; }
.hero-slide::before { content: ""; position: absolute; inset: 0; z-index: 1; background: linear-gradient(90deg, rgba(7,63,70,.96) 0%, rgba(7,63,70,.9) 36%, rgba(7,63,70,.48) 64%, rgba(7,63,70,.1) 100%); }
.hero-slide::after { content: ""; position: absolute; inset: auto 0 0 0; height: 30%; z-index: 1; background: linear-gradient(0deg, rgba(5,21,24,.52), transparent); }
.hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 68% center; transform: scale(1.02); }
.hero-split { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0, 610px) minmax(0, 1fr); align-items: center; min-height: 100%; }
.hero-content { max-width: 610px; padding: 58px 0 70px; }
.hero-dots { position: absolute; left: 50%; bottom: 24px; z-index: 3; display: flex; gap: 10px; transform: translateX(-50%); }
.hero-dots button { width: 12px; height: 12px; padding: 0; border-radius: 999px; border: 1px solid rgba(255,255,255,.75); background: rgba(255,255,255,.58); cursor: pointer; transition: .2s ease; }
.hero-dots button.is-active { width: 34px; border-color: var(--red); background: var(--red); }
.hero-label, .kicker { display: inline-flex; align-items: center; border-radius: 999px; background: var(--red); color: #fff; font-size: 13px; font-weight: 900; padding: 7px 17px; }
.hero h1 { max-width: 610px; margin: 24px 0 18px; font-size: clamp(42px, 5.4vw, 72px); line-height: 1.04; letter-spacing: 0; overflow-wrap: break-word; text-shadow: 0 12px 34px rgba(0,0,0,.22); }
.hero p { max-width: 560px; font-size: 19px; color: rgba(255,255,255,.88); }
.hero-actions, .inline-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 28px; align-items: center; }
.hero .btn-outline { color: #fff; border-color: rgba(255,255,255,.7); background: rgba(255,255,255,.08); backdrop-filter: blur(8px); }
.hero .btn-outline:hover { background: rgba(255,255,255,.16); transform: translateY(-2px); }
.hero-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; max-width: 610px; margin-top: 42px; }
.hero-stats span { background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.18); border-left: 4px solid var(--red); padding: 15px 16px; border-radius: 8px; color: rgba(255,255,255,.82); backdrop-filter: blur(10px); }
.hero-stats strong { display: block; color: #fff; }
.section { padding: 98px 0; position: relative; overflow: hidden; }
.pattern-bg { background: var(--pale); }
.pattern-bg::before { content: ""; position: absolute; inset: 0; background-image: radial-gradient(rgba(7,63,70,.12) 1px, transparent 1px); background-size: 14px 14px; opacity: .45; pointer-events: none; }
.section > .container { position: relative; z-index: 1; }
.section-head { text-align: center; max-width: 760px; margin: 0 auto 54px; }
.section-head h2, .split-copy h2, .quote-grid h2, .process-head h2, .page-hero h1 { font-size: clamp(32px, 4vw, 52px); line-height: 1.12; margin: 16px 0 14px; letter-spacing: 0; overflow-wrap: break-word; }
.section-head p, .split-copy p, .quote-grid p, .page-hero p { color: var(--muted); font-size: 17px; }
.service-slider { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; }
.service-card, .district-card { background: #fff; padding: 34px; border-radius: var(--radius); box-shadow: var(--shadow); border-bottom: 4px solid #b7eef3; min-height: 280px; }
.service-icon { width: 70px; height: 70px; display: grid; place-items: center; color: var(--red); background: var(--red-soft); border: 1px dashed var(--red); border-radius: 50%; margin-bottom: 22px; font-size: 30px; }
.service-card h3, .district-card h2 { margin: 0 0 12px; font-size: 23px; line-height: 1.25; }
.service-card p, .district-card p { color: var(--muted); }
.service-card a, .district-card a { color: var(--red); font-weight: 900; }
.center { text-align: center; }
.mt-40 { margin-top: 40px; }
.split-grid, .quote-grid, .contact-grid, .detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.image-stack { position: relative; }
.image-stack img, .detail-aside img { border-radius: var(--radius); box-shadow: var(--shadow); aspect-ratio: 4 / 4.6; object-fit: cover; }
.experience-badge { position: absolute; right: -24px; bottom: -24px; background: var(--red); color: #fff; padding: 24px; border-radius: var(--radius); box-shadow: var(--shadow); }
.experience-badge strong { display: block; font-size: 30px; line-height: 1; }
.check-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 13px 24px; margin-top: 28px; }
.check-grid.single { grid-template-columns: 1fr; }
.check-grid span { display: flex; gap: 10px; align-items: center; color: var(--deep); font-weight: 850; }
.check-grid svg { color: var(--red); flex: 0 0 auto; }
.phone-inline { color: var(--deep); font-weight: 950; font-size: 18px; }
.why-band { position: relative; min-height: 560px; color: #fff; background: var(--deep); overflow: hidden; }
.why-bg { position: absolute; inset: 0 0 0 40%; }
.why-bg img { width: 100%; height: 100%; object-fit: cover; opacity: .55; }
.why-content { position: relative; z-index: 1; display: grid; grid-template-columns: 330px 1fr; gap: 0; align-items: center; min-height: 560px; }
.why-tabs { display: grid; gap: 1px; }
.why-tabs span { padding: 20px 24px; background: rgba(0,0,0,.18); font-weight: 900; }
.why-tabs span:first-child { background: var(--red); border-radius: 999px 0 0 999px; }
.why-card { background: var(--red); padding: 58px 64px; border-radius: var(--radius); max-width: 650px; box-shadow: var(--shadow); }
.why-card h2 { font-size: clamp(30px, 4vw, 46px); line-height: 1.08; margin: 0 0 16px; }
.why-card ul { display: grid; grid-template-columns: 1fr 1fr; gap: 12px 26px; padding: 0; margin: 26px 0 0; list-style: none; font-weight: 850; }
.why-card li::before { content: "✓"; display: inline-grid; place-items: center; width: 24px; height: 24px; margin-right: 10px; background: #fff; color: var(--red); border-radius: 50%; }
.solution-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; }
.solution-grid .service-card { display: grid; grid-template-columns: 86px 1fr; column-gap: 24px; align-items: start; min-height: 190px; }
.solution-grid .service-card .service-icon { grid-row: span 3; }
.quote-section { background: linear-gradient(90deg, #fff 0 50%, var(--red-soft) 50% 100%); }
.progress-list { display: grid; gap: 12px; margin-top: 38px; }
.progress-list span { display: grid; gap: 5px; }
.progress-list i { position: relative; display: block; height: 28px; background: #edf0f1; color: #fff; font-style: normal; text-align: right; padding-right: 10px; line-height: 28px; font-size: 12px; font-weight: 900; overflow: hidden; }
.progress-list i::before { content: ""; position: absolute; inset: 0 auto 0 0; width: var(--w); background: var(--red); z-index: 0; }
.progress-list i { isolation: isolate; }
.quote-form { background: var(--red); color: #fff; border-radius: var(--radius); padding: 44px; box-shadow: var(--shadow); }
.quote-form h2 { text-align: center; margin: 0 0 24px; font-size: 34px; }
.quote-form label { display: grid; gap: 8px; margin-bottom: 16px; font-size: 13px; font-weight: 850; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
input, select, textarea { width: 100%; border: 0; border-radius: 7px; min-height: 50px; padding: 0 16px; color: var(--ink); font: inherit; }
textarea { padding-top: 12px; resize: vertical; }
.quote-form .btn { width: 100%; margin-top: 10px; }
.form-note { font-size: 12px; opacity: .85; margin: 14px 0 0; text-align: center; }
.testimonial-card { max-width: 820px; margin: 0 auto; text-align: center; background: rgba(255,255,255,.78); padding: 46px; border-radius: var(--radius); box-shadow: var(--shadow); }
.testimonial-card p { font-size: 22px; color: var(--muted); }
.testimonial-card strong { display: block; font-size: 24px; }
.testimonial-card span { color: var(--deep-2); font-weight: 850; }
.process { background: #fff; }
.process-head { max-width: 560px; margin-bottom: 40px; }
.process-line { display: grid; grid-template-columns: repeat(3, 1fr); gap: 36px; position: relative; }
.process-line article { position: relative; }
.process-line span { width: 46px; height: 46px; display: grid; place-items: center; background: var(--red); color: #fff; border-radius: 50%; font-weight: 950; font-size: 22px; margin-bottom: -20px; position: relative; z-index: 2; }
.process-line img { border-radius: var(--radius); aspect-ratio: 1 / .72; object-fit: cover; box-shadow: var(--shadow); }
.process-line h3 { font-size: 25px; margin: 24px 0 8px; }
.process-line p { color: var(--muted); }
.two-col-copy { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; }
.two-col-copy h2 { color: var(--red); font-size: 24px; line-height: 1.18; }
.faq-list { max-width: 860px; margin: 0 auto; display: grid; gap: 12px; }
details { background: #fff; border: 1px solid var(--line); border-radius: var(--radius); box-shadow: 0 12px 30px rgba(8,49,55,.06); }
summary { cursor: pointer; padding: 20px 24px; font-weight: 950; }
details p { padding: 0 24px 20px; margin: 0; color: var(--muted); }
.page-hero { padding: 150px 0 90px; color: #fff; background: linear-gradient(90deg, rgba(7,63,70,.95), rgba(181,18,32,.82)), url("/assets/images/hanedan-arac.jpeg") center/cover; }
.compact-hero { min-height: 420px; display: grid; align-items: end; }
.page-hero p { color: rgba(255,255,255,.86); max-width: 760px; }
.breadcrumb { display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 18px; font-size: 13px; color: rgba(255,255,255,.78); }
.breadcrumb a { text-decoration: underline; text-underline-offset: 3px; }
.detail-copy { font-size: 18px; }
.detail-copy p { color: var(--muted); }
.detail-copy h2 { font-size: 34px; line-height: 1.16; margin-top: 36px; }
.number-list { padding-left: 20px; color: var(--muted); }
.number-list li { margin-bottom: 10px; }
.detail-aside { display: grid; gap: 22px; align-self: start; }
.aside-card { background: var(--deep); color: #fff; border-radius: var(--radius); padding: 30px; }
.aside-card p { color: rgba(255,255,255,.82); }
.mini-service-list { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 18px; }
.mini-service-list a { background: var(--pale); border-left: 4px solid var(--red); padding: 12px 14px; font-weight: 850; }
.district-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
.narrow-copy { max-width: 860px; font-size: 18px; }
.narrow-copy h2 { font-size: 34px; line-height: 1.16; }
.narrow-copy p, .narrow-copy li { color: var(--muted); }
.gallery-tabs { display: flex; gap: 12px; margin-bottom: 30px; border-bottom: 2px solid var(--line); }
.gallery-tab-btn { background: none; border: 0; padding: 12px 18px; margin-bottom: -2px; color: var(--muted); font-size: 15px; font-weight: 900; text-transform: uppercase; border-bottom: 3px solid transparent; cursor: pointer; }
.gallery-tab-btn.active { color: var(--red); border-bottom-color: var(--red); }
.gallery-tab-pane { display: none; }
.gallery-tab-pane.active { display: block; }
.gallery-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; align-items: start; }
.videos-grid { grid-template-columns: 1fr 1fr 1fr; }
.gallery-item, .video-card { background: #fff; border-radius: var(--radius); overflow: hidden; box-shadow: var(--shadow); }
.gallery-item img { width: 100%; height: 420px; object-fit: cover; }
.gallery-item.tall img { height: 560px; }
.video-card video { width: 100%; aspect-ratio: 9/16; object-fit: cover; background: #000; }
.video-card h2, .video-card p { padding-inline: 22px; }
.video-card video::-webkit-media-controls-volume-slider { display: none !important; }
.video-card video::-webkit-media-controls-mute-button { display: none !important; }
.video-card video::-webkit-media-controls-volume-control-container { display: none !important; }
.contact-cards { display: grid; gap: 18px; }
.contact-cards article { background: #fff; padding: 28px; border-radius: var(--radius); box-shadow: var(--shadow); border-left: 4px solid var(--red); }
.contact-cards article span:first-child { color: var(--red); font-size: 32px; }
.contact-cards a { display: block; color: var(--deep-2); font-weight: 900; margin-top: 6px; }
.map-strip iframe { width: 100%; height: 430px; border: 0; display: block; }
.site-footer { position: relative; overflow: hidden; background: radial-gradient(circle at 18% 0, rgba(181,18,32,.28), transparent 34%), radial-gradient(circle at 86% 18%, rgba(255,255,255,.1), transparent 28%), linear-gradient(135deg, #073f46 0%, #0b4e56 48%, #063238 100%); color: #fff; padding: 78px 0 26px; }
.site-footer::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(120deg, rgba(255,255,255,.05) 1px, transparent 1px), radial-gradient(rgba(255,255,255,.12) 1px, transparent 1px); background-size: 90px 90px, 18px 18px; opacity: .18; pointer-events: none; }
.site-footer > .container { position: relative; z-index: 1; }
.footer-grid { display: grid; grid-template-columns: 1.05fr .8fr .9fr .8fr; gap: 52px; align-items: start; }
.footer-cta-card { background: linear-gradient(145deg, var(--red), #8f0f1b); border-radius: 8px; padding: 36px; box-shadow: 0 24px 70px rgba(0,0,0,.22); border: 1px solid rgba(255,255,255,.12); }
.footer-cta-card p { color: rgba(255,255,255,.9); }
.round-icon { width: 58px; height: 58px; display: grid; place-items: center; background: #fff; color: var(--red); border-radius: 50%; box-shadow: 0 12px 28px rgba(0,0,0,.16); }
.site-footer h2, .site-footer h3 { margin-top: 0; }
.site-footer ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 9px; }
.site-footer a { color: rgba(255,255,255,.88); }
.site-footer a:hover { color: #fff; text-decoration: underline; text-underline-offset: 4px; }
.site-footer .btn-light { color: var(--red); background: #fff; box-shadow: inset -44px 0 0 rgba(181,18,32,.08); }
.site-footer .btn-light:hover { color: var(--red-dark); text-decoration: none; transform: translateY(-2px); }
.footer-contact { margin-top: 58px; border: 1px solid rgba(255,255,255,.18); border-bottom: 3px solid var(--red); border-radius: 8px; padding: 24px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; background: rgba(255,255,255,.07); backdrop-filter: blur(10px); box-shadow: 0 22px 70px rgba(0,0,0,.16); }
.footer-contact div { display: grid; grid-template-columns: 38px 1fr; gap: 4px 12px; align-items: center; }
.footer-contact svg { grid-row: span 2; color: var(--red); font-size: 28px; }
.footer-contact strong { color: #ffb9c1; text-transform: uppercase; font-size: 12px; }
.footer-bottom { display: flex; justify-content: space-between; align-items: center; gap: 20px; margin-top: 30px; color: rgba(255,255,255,.76); font-size: 14px; }
.barbarossoft-badge { display: inline-flex; align-items: center; min-height: 28px; padding: 0 14px; border-radius: 999px; background: linear-gradient(90deg, #2442a3, #173982); color: #ff7a1a !important; font-weight: 950; box-shadow: inset 26px 0 0 rgba(13,42,113,.55), 0 8px 22px rgba(0,0,0,.18); }
.barbarossoft-badge:hover { color: #ff9a35 !important; text-decoration: none !important; transform: translateY(-1px); }
.floating-actions { position: fixed; right: 18px; top: 50%; transform: translateY(-50%); z-index: 60; display: grid; gap: 9px; padding: 0; background: transparent; border-radius: 0; box-shadow: none; }
.floating-actions a { width: 58px; height: 58px; display: grid; place-items: center; border-radius: 50%; color: #fff; font-weight: 950; box-shadow: 0 10px 28px rgba(0,0,0,.24); transition: transform .2s ease, filter .2s ease; }
.floating-actions a:hover { transform: translateX(-3px); filter: brightness(1.06); }
.floating-actions svg { width: 28px; height: 28px; }
.float-whatsapp { background: #80df32; color: #071b14 !important; }
.float-call { background: #1e86cf; }
.float-instagram { background: linear-gradient(145deg, #d800ff, #8f19ff); }
@media (max-width: 1600px) {
  .site-header .container { width: 100%; padding-left: 20px; padding-right: 0; }
  .brand { min-width: 315px; padding-right: 26px; }
  .brand-logo { width: 270px; }
  .main-nav { padding: 0 26px; }
  .main-nav > ul { gap: 24px; }
  .main-nav a { font-size: 13px; }
  .header-actions { min-width: 300px; gap: 14px; padding-left: 22px; }
  .call-pill { min-width: 214px; grid-template-columns: 42px 1fr; gap: 2px 10px; }
  .call-icon { width: 42px; height: 42px; box-shadow: inset 0 0 0 4px rgba(255,255,255,.18); }
  .call-icon svg { width: 20px; height: 20px; }
  .call-pill strong { font-size: 16px; }
  .menu-toggle { width: 52px; height: 52px; }
}
@media (max-width: 1280px) {
  .brand { min-width: 285px; padding-right: 20px; }
  .brand-logo { width: 245px; }
  .main-nav { padding: 0 20px; }
  .main-nav > ul { gap: 18px; }
  .main-nav a { font-size: 13px; }
  .header-actions { min-width: 270px; gap: 12px; padding-left: 18px; }
  .call-icon { display: none !important; }
  .call-pill { min-width: 186px; grid-template-columns: 1fr; }
  .call-pill strong { font-size: 15px; }
  .menu-toggle { width: 50px; height: 50px; }
}
@media (max-width: 1100px) {
  .main-nav { display: none; }
  .nav-inner { align-items: center; gap: 20px; }
  .brand { min-width: auto; padding-right: 0; border-right: 0; }
  .header-actions { min-width: auto; border-left: 0; padding-left: 0; margin-left: auto; }
  .menu-toggle { display: grid; width: 50px; height: 50px; background: rgba(5,5,5,.18); border-color: rgba(255,255,255,.28); }
  .call-pill { display: none; }
  .hero-stats, .service-slider, .process-line { grid-template-columns: 1fr 1fr; }
  .footer-grid, .footer-contact { grid-template-columns: 1fr 1fr; }
  .district-grid { grid-template-columns: 1fr 1fr; }
  .gallery-grid, .videos-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 820px) {
  .container { width: min(100% - 28px, 1180px); }
  .site-header .container { width: min(100% - 28px, 1180px); }
  .topbar-inner { align-items: flex-start; flex-direction: column; gap: 6px; padding: 9px 0; }
  .nav-inner { min-height: 72px; }
  .brand { min-width: auto; }
  .brand-logo { width: 250px; }
  .hero { min-height: 640px; }
  .hero-carousel { min-height: 640px; height: 640px; }
  .hero-slide { align-items: end; }
  .hero-slide::before { background: linear-gradient(180deg, rgba(7,63,70,.22), rgba(7,63,70,.92) 62%, rgba(7,63,70,.98)); }
  .hero-bg { object-position: center; transform: scale(1.03); }
  .hero-split { grid-template-columns: 1fr; align-items: end; min-height: 100%; padding-bottom: 54px; }
  .hero-content { max-width: 620px; padding: 40px 0 30px; }
  .hero p { font-size: 17px; }
  .hero-stats, .service-slider, .split-grid, .quote-grid, .contact-grid, .detail-grid, .solution-grid, .two-col-copy, .footer-grid, .footer-contact, .district-grid, .gallery-grid, .videos-grid { grid-template-columns: 1fr; }
  .section { padding: 70px 0; }
  .solution-grid .service-card { grid-template-columns: 1fr; }
  .why-bg { inset: 0; }
  .why-content { grid-template-columns: 1fr; padding: 70px 0; }
  .why-tabs { display: none; }
  .why-card { padding: 34px; }
  .why-card ul, .check-grid, .form-row, .mini-service-list { grid-template-columns: 1fr; }
  .quote-section { background: #fff; }
  .page-hero { padding: 120px 0 70px; }
  .gallery-item img, .gallery-item.tall img { height: 360px; }
  .footer-bottom { flex-direction: column; }
}
@media (max-width: 540px) {
  .container { width: calc(100% - 28px); max-width: 100%; }
  .site-header .container { width: 100%; padding-left: 14px; padding-right: 14px; }
  .topbar { display: none; }
  .nav-inner { min-height: 76px; display: grid; grid-template-columns: minmax(0, 1fr) 44px; gap: 12px; justify-content: stretch; }
  .brand { flex: 0 1 auto; }
  .brand-logo { width: min(214px, calc(100vw - 96px)); }
  .main-nav { display: none !important; }
  .header-actions { min-width: 0; width: 44px; margin-left: 0; justify-content: end; }
  .menu-toggle { display: grid !important; flex: 0 0 44px; width: 44px; height: 44px; padding: 0; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.42); border-radius: 7px; }
  .menu-toggle span { width: 24px; height: 2px; margin: 3.5px 0; }
  .mobile-nav { padding: 18px 34px 44px; }
  .mobile-panel-logo img { width: 220px; }
  .hero { min-height: 620px; align-items: end; }
  .hero-carousel { min-height: 620px; height: 620px; }
  .hero-slide::before { background: linear-gradient(180deg, rgba(7,63,70,.2), rgba(7,63,70,.93) 55%, rgba(7,63,70,.99)); }
  .hero-bg { object-position: 62% center; transform: scale(1.04); }
  .hero-split { padding-bottom: 46px; }
  .hero-content { padding: 28px 0 22px; max-width: 100%; }
  .hero-label { font-size: 12px; padding: 6px 14px; }
  .hero h1 { width: 100%; max-width: 100%; margin: 18px 0 10px; padding: 0; background: transparent; font-size: 30px; line-height: 1.14; white-space: normal; overflow-wrap: anywhere; word-break: normal; }
  .hero p { width: 100%; max-width: 100%; margin: 0; padding: 0; background: transparent; font-size: 16px; line-height: 1.55; }
  .hero-actions { gap: 10px; margin-top: 24px; }
  .hero-actions .btn { min-height: 46px; padding: 0 18px; }
  .hero-stats { display: none; }
  .hero-dots { bottom: 14px; }
  .section-head p { max-width: calc(100vw - 32px); }
  .section-head { max-width: calc(100vw - 32px); }
  .section-head h2, .split-copy h2, .quote-grid h2, .process-head h2, .page-hero h1 { font-size: 26px; line-height: 1.2; max-width: calc(100vw - 32px); white-space: normal; word-break: break-word; }
  .section-head h2 { max-width: 330px; margin-left: auto; margin-right: auto; }
  .hero-stats, .process-line { grid-template-columns: 1fr; }
  .quote-form { padding: 28px; }
  .floating-actions { display: none; }
  .floating-actions a { width: 50px; height: 50px; }
}`;
}

function js() {
  return `const menuToggle = document.querySelector(".menu-toggle");
const mobileNav = document.querySelector(".mobile-nav");
const mobileClose = document.querySelector(".mobile-close");
if (menuToggle && mobileNav) {
  const mobileSearch = mobileNav.querySelector(".mobile-search input");
  const resetMobileSearch = () => {
    if (!mobileSearch) return;
    mobileSearch.value = "";
    mobileNav.querySelectorAll(".is-hidden").forEach((item) => item.classList.remove("is-hidden"));
  };

  const setMenuOpen = (isOpen) => {
    mobileNav.classList.toggle("open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    if (!isOpen) resetMobileSearch();
  };

  menuToggle.addEventListener("click", () => setMenuOpen(!mobileNav.classList.contains("open")));
  mobileClose?.addEventListener("click", () => setMenuOpen(false));

  mobileNav.querySelectorAll(".has-dropdown > a").forEach((link) => {
    link.setAttribute("aria-expanded", "false");
    link.addEventListener("click", (event) => {
      if (!event.target.closest(".dropdown-toggle")) return;
      event.preventDefault();
      const item = link.parentElement;
      const isOpen = item.classList.toggle("open");
      link.setAttribute("aria-expanded", String(isOpen));
    });
  });

  mobileSearch?.addEventListener("input", () => {
    const term = mobileSearch.value.trim().toLocaleLowerCase("tr-TR");
    mobileNav.querySelectorAll(":scope > ul > li").forEach((item) => {
      const text = item.textContent.toLocaleLowerCase("tr-TR");
      const matches = !term || text.includes(term);
      item.classList.toggle("is-hidden", !matches);
      if (term && matches && item.classList.contains("has-dropdown")) {
        item.classList.add("open");
        item.children[0]?.setAttribute("aria-expanded", "true");
      }
    });
  });

  mobileNav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (link && !link.parentElement.classList.contains("has-dropdown")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuOpen(false);
  });
}

document.querySelectorAll("[data-hero-carousel]").forEach((carousel) => {
  const slides = [...carousel.querySelectorAll(".hero-slide")];
  const dotsContainer = carousel.closest(".hero") ? carousel.closest(".hero").querySelector(".hero-dots") : carousel.querySelector(".hero-dots");
  const dots = dotsContainer ? [...dotsContainer.querySelectorAll("button")] : [];
  if (slides.length < 2) return;

  let active = 0;
  const show = (index) => {
    active = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const isActive = slideIndex === active;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === active));
  };

  show(active);

  let timer = setInterval(() => show(active + 1), 5000);
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(timer);
      show(index);
      timer = setInterval(() => show(active + 1), 5000);
    });
  });
});

document.querySelectorAll(".quote-form").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      "Merhaba, Kayseri Hanedan Nakliyat web sitesinden teklif almak istiyorum.",
      "",
      "Ad Soyad: " + (data.get("name") || ""),
      "Telefon: " + (data.get("phone") || ""),
      "Tasima Turu: " + (data.get("service") || ""),
      "Alinacak Adres / Ilce: " + (data.get("from") || ""),
      "Teslim Adresi / Ilce: " + (data.get("to") || ""),
      "Kat Bilgisi: " + (data.get("floor") || ""),
      "Asansor Durumu: " + (data.get("elevator") || ""),
      "Mesaj: " + (data.get("message") || "")
    ];
    const phone = form.dataset.whatsapp || "905337813804";
    window.location.href = "https://wa.me/" + phone + "?text=" + encodeURIComponent(lines.join("\\n"));
  });
});

document.querySelectorAll(".gallery-tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tab = btn.getAttribute("data-tab");
    document.querySelectorAll(".gallery-tab-btn").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".gallery-tab-pane").forEach((pane) => pane.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(tab + "-tab")?.classList.add("active");
  });
});`;
}

function logoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 520 160" role="img" aria-labelledby="title desc">
  <title id="title">Kayseri Hanedan Nakliyat</title>
  <desc id="desc">Kırmızı beyaz Hanedan Nakliyat logosu</desc>
  <rect width="520" height="160" rx="18" fill="#b51220"/>
  <path d="M34 35h78v22H85v68H61V57H34z" fill="#fff"/>
  <text x="130" y="74" fill="#fff" font-family="Arial, sans-serif" font-size="48" font-weight="900" letter-spacing="0">HANEDAN</text>
  <rect x="130" y="91" width="324" height="35" rx="4" fill="#fff"/>
  <text x="145" y="116" fill="#1d1d1d" font-family="Arial, sans-serif" font-size="24" font-weight="800">EV OFİS TAŞIMA</text>
</svg>`;
}

function robots() {
  return `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;
}

function sitemap(urls) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${absolute(url)}</loc><changefreq>weekly</changefreq><priority>${url === "/" ? "1.0" : "0.8"}</priority></url>`).join("\n")}
</urlset>
`;
}

function notFoundPage() {
  const content = `<section class="page-hero compact-hero"><div class="container"><span class="kicker">404</span><h1>Sayfa Bulunamadı</h1><p>Aradığınız sayfa taşınmış olabilir. Ana sayfaya dönebilir veya teklif almak için bize ulaşabilirsiniz.</p><div class="hero-actions"><a class="btn btn-primary" href="/">Ana Sayfa</a><a class="btn btn-outline" href="/iletisim/">İletişim</a></div></div></section>`;
  return pageLayout({
    title: "Sayfa Bulunamadı | Kayseri Hanedan Nakliyat",
    description: "Kayseri Hanedan Nakliyat 404 sayfası.",
    url: "/404.html",
    content
  });
}

const pages = [];
function addPage(url, html) {
  const filePath = url === "/" ? "index.html" : `${url.replace(/^\/|\/$/g, "")}/index.html`;
  write(filePath, html);
  pages.push(url);
}

write("assets/css/styles.css", css());
write("assets/js/main.js", js());
write("assets/images/logo-hanedan.svg", logoSvg());

addPage("/", homePage());
addPage("/hizmetler/", serviceIndexPage());
services.forEach((service) => addPage(`/hizmetler/${service.slug}/`, servicePage(service)));
addPage("/bolgeler/", districtsIndexPage());
districts.forEach((district) => addPage(`/bolgeler/${district[0]}-evden-eve-nakliyat/`, districtPage(district)));

addPage("/kurumsal/hakkimizda/", corporatePage("hakkimizda", "Hakkımızda", `<h2>Kayseri merkezli güvenilir nakliyat yaklaşımı</h2><p>Kayseri Hanedan Nakliyat, ev ve ofis taşıma süreçlerinde planlı çalışma, açık iletişim ve eşya güvenliğini merkeze alan bir nakliyat firmasıdır.</p><p>Taşıma öncesinde adres, kat, eşya yoğunluğu ve ekipman ihtiyacı değerlendirilir. Böylece taşınma günü ekip, araç ve malzeme planı daha net ilerler.</p><p>Kayseri evden eve nakliyat, asansörlü taşıma, şehir içi ve şehirler arası nakliyat hizmetlerinde amacımız müşteriye güven veren bir süreç sunmaktır.</p>`));
addPage("/kurumsal/misyonumuz/", corporatePage("misyonumuz", "Misyonumuz", `<h2>Taşınma sürecini daha kontrollü ve güvenli hale getirmek</h2><p>Misyonumuz, Kayseri'de nakliyat ihtiyacı olan müşterilerimize hızlı iletişim, doğru planlama ve özenli taşıma hizmeti sunmaktır.</p><p>Her taşımada eşyaların türünü, bina koşullarını ve zaman planını dikkate alarak ekip ve ekipman organizasyonu yaparız.</p>`));
addPage("/kurumsal/vizyonumuz/", corporatePage("vizyonumuz", "Vizyonumuz", `<h2>Kayseri'de güvenilir nakliyat denince akla gelen marka olmak</h2><p>Vizyonumuz, evden eve nakliyat ve asansörlü taşıma alanında güvenilir, ulaşılabilir ve modern hizmet anlayışıyla öne çıkan bir marka olmaktır.</p><p>Teknoloji, ekipman, iletişim ve müşteri deneyimi alanlarında sürekli gelişerek daha iyi hizmet sunmayı hedefleriz.</p>`));
addPage("/kurumsal/calisma-surecimiz/", corporatePage("calisma-surecimiz", "Çalışma Sürecimiz", `<h2>Taşımayı adım adım planlarız</h2><ol class="number-list"><li>İlk görüşmede adres, kat, eşya yoğunluğu ve tarih bilgisi alınır.</li><li>Gerekirse fotoğraf veya yerinde keşif ile taşıma kapsamı netleştirilir.</li><li>Paketleme, araç, ekip ve asansör ihtiyacı belirlenir.</li><li>Taşıma günü eşyalar korumalı şekilde yüklenir ve yeni adrese ulaştırılır.</li><li>Teslimat sonrası montaj ve yerleşim desteği tamamlanır.</li></ol>`));
addPage("/kurumsal/kvkk/", corporatePage("kvkk", "KVKK", `<h2>Kişisel verilerin korunması</h2><p>Kayseri Hanedan Nakliyat ile iletişim kurarken paylaştığınız ad, soyad, telefon, adres ve taşıma detayları yalnızca teklif, planlama ve iletişim amacıyla kullanılır.</p><p>Bu bilgiler üçüncü kişilerle ticari amaçla paylaşılmaz. WhatsApp üzerinden gönderilen bilgiler, teklif sürecinin yürütülmesi için tarafınızca iletilmiş kabul edilir.</p><p>Verilerinizle ilgili talepleriniz için telefon hatlarımızdan bize ulaşabilirsiniz.</p>`));
addPage("/blog/", blogIndexPage());
blogPosts.forEach((post) => addPage(`/blog/${post.slug}/`, blogPostPage(post)));
addPage("/galeri/", galleryPage());
addPage("/iletisim/", contactPage());
addPage("/teklif-al/", quotePage());
write("404.html", notFoundPage());
write("robots.txt", robots());
write("sitemap.xml", sitemap(pages));
write("README.md", `# ${brand}

Statik, çok sayfalı SEO web sitesi.

- Alan adı: ${siteUrl}
- Telefon: ${primaryPhone} / ${secondaryPhone}
- Adres: ${address}

Ana dosya: \`index.html\`
`);

console.log(`Generated ${pages.length} pages for ${brand}`);
