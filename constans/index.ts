export type NavLinksTypes = {
    title: string;
    href: string;
    subLinks?: {
        name: string;
        href: string;
    }[];
};
export type SliderItemTypes = {
    id: string;
    title: string;
    subTitle: string;
    description: string;
    button: {
        text: string;
        href: string;
    }[];
    image: string;
};

export type ServiceItemTypes = {
    id: string;
    title: string;
    description: string;
    image: string;
}

export type FAQItemTypes = {
    id: string;
    title: string;
    description: string;
}

export type GalleryItemTypes = {
    id: string;
    title: string;
    image: string;
}
export const navLinks: NavLinksTypes[] = [
    {
        title: "Hakkımızda", href: "/hakkimizda",
        subLinks: [
            { name: "Firmamızın Tarihçesi", href: "/about/history" },
            { name: "Misyon & Vizyon", href: "/about/about#missions" },
            { name: "Ekibimiz", href: "/about/team" },
            { name: "Müşteri Yorumları", href: "/reviews" }


        ]
    },
    {
        title: "İletişim", href: "/iletisim",
        subLinks: [
            { name: "İletişim Formu", href: "/contact" },
            { name: "Whatsapp ile Ulaşın", href: "https://wa.me/999999" },
            { name: "Adres", href: "/contact#address" },
            { name: "Telefon", href: "/tel:905555555" },
            { name: "Konum Bilgisi", href: "contact#location" },
            { name: "E-posta", href: "/contact#email" },
        ]
    },
    {
        title: "Galeri", href: "/galeri",
        subLinks: [
            { name: "Saç Stili Örnekleri", href: "/galeria#hair-cuts" },
            { name: "Öncesi & Sonrası", href: "/galeria#before-after" },
            { name: "Mekan Fotoğrafları", href: "/galeria#location" },
        ]
    },
    {
        title: "Hizmetlerimiz", href: "/hizmetlerimiz",
        subLinks: [
            { name: "Saç Kesimi", href: "/service#hair-cut" },
            { name: "Sakal Tıraşı", href: "/service#beard-shave" },
            { name: "Manikür & Pedikür", href: "/service#manicure-pedicure" },
            { name: "Cilt Bakımı", href: "/service#skin-care" },
            { name: "Saç Boyama", href: "/service#hair-coloring" },
        ]
    },
]

export const sliderItem: SliderItemTypes[] = [
    {
        id: "1",
        title: "PREMIUM BARBER",
        subTitle: "Geleneksel Ustalık",
        description: "30 yıllık deneyimimizle, geleneksel berberlik sanatını modern tekniklerle harmanlıyoruz.Her müşterimize özel, unutulmaz bir deneyim sunuyoruz.",
        button: [
            {
                text: "Randevu Al",
                href: "https://salonrandevu.com/salon-tur/erkek-kuaforu/denizli"
                /*En popüler randevu sitesine yönlendirmeyi burada yapıcaz */
            },
        ],
        image: "/images/slider/hero-section-barber.jpg",
    },
    {
        id: "2",
        title: "MODERN TEKNİKLER",
        subTitle: "Çağdaş Yaklaşım",
        description: "Sakal tıraşı ile görünümünüzü tamamlayın.",
        button: [
            {
                text: "Hizmetlerimiz",
                href: "/hizmetlerimiz"
            }
        ],
        image: "/images/slider/barber-2.jpg",
    },
    {
        id: "3",
        title: "ÖZEL BAKIM",
        subTitle: "Lüks Deneyim",
        description: "Premium ürünler ve özel bakım hizmetleriyle kendinizi şımartın.Sadece sizin için hazırlanmış lüks berber deneyimi.",
        button: [
            {
                text: "Müşteri Yorumları",
                href: "/musteri-yorumlari"
                /*Google yorumlarını burada çağırıcaz */
            }
        ],
        image: "/images/slider/barber-4.jpg",
    },
]

export const serviceItem: ServiceItemTypes[] = [
    {
        id: "1",
        title: "Saç Tasarımı ",
        description: "Mesleğiniz, giyim kuşamınız ve toplumdaki statünüzü göz önünde bulundurarak sadece size özel kafa ve yüz şeklinize göre Anatomik Saç ve Sakal kesimi yapmaktayız.",
        image: "/images/slider/1.jpg"
    },
    {
        id: "2",
        title: "Saç Düzleştirme",
        description: "Silindir Saç Düzleştirme kremimizle saçlarınızı yıpratmadan, kontrollü bir şekilde 2-6 ay arası kalıcı düzleştiriyoruz. Bu işlem sizlere her gün 10-15 dk kazanmanızı sağlayıp, saçınızın kolay taranmasında konfor da sağlar.",
        image: "/images/slider/1.jpg"
    }, {
        id: "3",
        title: "Saç Botosu",
        description: "Saç Botoksu ile saçınızın ihtiyacı olan temel bakımı sağlıyor, kimyasal işlem ya da ısı görmüş yıpranmış saçlarınızı onarıyoruz.",
        image: "/images/slider/1.jpg"
    }, {
        id: "4",
        title: "Kaş Tasarımı",
        description: "Kaşlarınızın bakımlı ve güzel olması bakışlarınızı daha iyi ifade etmenizi sağlayacaktır. Bunu önemseyerek tasarım yapıyoruz.",
        image: "/images/slider/1.jpg"
    }, {
        id: "5",
        title: "Sakal Traşı",
        description: "Yüz şeklinize ve stilinize uygun, özenli ve dengeli sakal kesimiyle bakımlı bir görünüm sağlıyoruz. Cildinize zarar vermeden, doğal bir şıklık sunuyoruz.",
        image: "/images/slider/barber-service-3.jpg"
    },
    {
        id: "6",
        title: "Cilt Bakımı",
        description: "Siyah Maske ile cildinizdeki ölü deriyi ve yağı temizleyip siyah nokta oluşumunu azaltıyoruz.",
        image: "/images/slider/1.jpg"
    }, {
        id: "7",
        title: "Manikür",
        description: "Dokunduğunuzda hissedebilecek, estetik bir görünüme sahip el ve tırnak bakımı sağlıyoruz.",
        image: "/images/slider/1.jpg"
    }, {
        id: "8",
        title: "Pedikür",
        description: "Vücudumuzun tüm yükünü çeken ayaklar her zaman doğru bakımı hak etmektedir. Ayak ve tırnak bakımınızı önemseyip gerekli bakımları özenle yapıyoruz.",
        image: "/images/slider/1.jpg"
    }, {
        id: "9",
        title: "Damat Traşı",
        description: "Hayatınızın en özel gününde, düğününüze gelecek misafirlerinizin önüne sizi ifade edebilecek bir saçla çıkmanın önemini vurguluyoruz.",
        image: "/images/slider/1.jpg"
    },
]

export const FAQItem: FAQItemTypes[] = [
    {
        id: "1",
        title: "Berber salonunuzda hangi uzmanlık alanlarında hizmet veriyorsunuz?",
        description: "Salonumuz, modern saç tasarımı, klasik kesimler, sakal şekillendirme, sıcak havlu bakımı, saç terapileri ve profesyonel cilt bakımı alanlarında uzmanlaşmıştır. Her hizmet, alanında deneyimli ustalarımız tarafından sunulmaktadır."
    },
    {
        id: "2",
        title: "Randevu sistemi nasıl çalışıyor ve iptal koşulları nelerdir?",
        description: "Online randevu sistemimiz üzerinden kolayca tarih ve saat seçerek rezervasyon oluşturabilirsiniz. Randevularınızı, plan değişikliği durumunda minimum 2 saat öncesinden ücretsiz iptal edebilirsiniz."
    },
    {
        id: "3",
        title: "Hijyen ve sterilizasyon konusunda hangi önlemleri alıyorsunuz?",
        description: "Her müşteriden sonra tüm ekipmanlarımız sterilize edilir, tek kullanımlık havlular ve örtüler tercih edilir. Salonumuzda düzenli dezenfeksiyon uygulanır ve hijyen standartları titizlikle takip edilir."
    },
    {
        id: "4",
        title: "Kullanılan ürünler hakkında bilgi verebilir misiniz?",
        description: "Yüksek kaliteli, dermatolojik olarak test edilmiş ve profesyonel berberlere özel ürünler kullanıyoruz. Müşteri taleplerine göre organik veya hassas ciltlere uygun ürün alternatifleri de sunmaktayız."
    },
    {
        id: "5",
        title: "Salonunuzda VIP veya özel bakım hizmetleri mevcut mu?",
        description: "Evet, özel olarak hazırlanmış VIP paketlerimizle kişiye özel bakım hizmetleri sunuyoruz. Bu paketler randevu ile alınır ve özel alanlarda, ekstra konforla gerçekleştirilir."
    },
    {
        id: "6",
        title: "Saç veya sakal stil danışmanlığı yapıyor musunuz?",
        description: "Uzman stilistlerimiz yüz şeklinize, yaşam tarzınıza ve tercihinize uygun saç ve sakal modelleri hakkında profesyonel danışmanlık hizmeti sunar."
    }
]

export const galleryItem: GalleryItemTypes[] = [
    {
        id: "1",
        title: "Taper Fade",
        image: "/images/slider/taper-fade.jpg"
    },
    {
        id: "1",
        title: "Before - After",
        image: "/images/slider/before-after.jpg",
    },
    {
        id: "1",
        title: "Buz Cut",
        image: "/images/slider/buzz-cut.jpg"
    },
]