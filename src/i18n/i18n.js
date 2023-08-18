import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "uz",
  lng: "ru",
  resources: {
    uz: {
      translation: {
        navbar_main_link: "Asosiy",
        navbar_about_link: "Biz haqimizda",
        navbar_adventages_link: "Afzalliklarimiz",
        navbar_catalog_link: "Katalog",
        navbar_news_link: "Yangiliklar",
        navbar_contact_link: "Kontaktlar",
        navbar_lang_select: "Tilni tanlang",
        main_1_1: "KALDE nima?",
        main_1_2:
          "KALDE, isitish va suv ta'minoti tizimlari, yuqori sifatli polipropilen quvurlar va armatura uchun!",
        main_1_3:
          "KALDE - barcha xalqaro standartlarga javob beradigan va xalqaro standart tizim sertifikatlariga ega bo'lgan yuqori sifatli mahsulot!",
        main_1_4: "Ko'proq bilish",
        main_2_1: "Biz haqimizda",
        main_2_2:
          "KALDE - 1977 yilda tashkil etilgan, Turkiyaning Istanbul shahrida joylashgan bo'lib, zamonaviy isitish va suv ta'minoti tizimlari uchun mahsulotlar ishlab chiqaradi. Bugungi kunda KALDE mahsulotlari dunyoning 50 ta davlatida tanilgan. Jahon standartlariga javob beradigan KALDE mahsulotlari dunyoning 40 ta yirik davlatida tanilgan. Barcha mahsulotlar xalqaro sertifikatlarga ega. Kalde mahsulotlari O‘zbekiston bozorida 2009 yilda mashhur bo‘lgan. Bugungi kunda Kalde mahsulotlarini O‘zbekistonning 20 dan ortiq ixtisoslashtirilgan do‘konlarida xarid qilish mumkin!",
        main_2_3: "Ko'proq bilish",
        main_2_4: "Biz bilan bog'lanish",
        main_3_1: "Bizning afzalliklarimiz",
        main_3_2: "Yuqori sifat",
        main_3_3: "Yevropa sifati",
        main_3_4: "Xalqaro  standartlar",
        main_3_5: "Labaratoriya tekshruvlari",
        main_3_6: "Yuqori kafolat",
        main_3_7: "Mahsulot kafolati",
        main_3_8: "Sifat nazorati",
        main_3_9: "Seminar treninglar",
        main_4_1: "Bizning mahsulotlar",
        main_4_2: "Barcha mahsulotlar",
        main_5_1: "Bizning hamkorlarimiz",
        main_6_1: "Foydali yangliklar",
        //asosiy oyna tugadi
        about_1_1: "Biz haqimizda",
        about_1_2:
          "1977 yil, Turkiyalik 4-ta muxandis, KALDE kompaniyasining tashkil etgan. O’z oldida, xalq uchun, yuqori «sifatli maxsulotlarni» yetkazish deb, maqsad qo’yilgan. KALDE kompaniyasi birinchilar qatorida, chet eldan (Evropadan) zamonaviy texnologiya uskunalar olib, suv taʼminoti va isitish tizimlar uchun maxsulotlar chiqarish boshlashkan. 1990 yillarda, ichki bozorni yetarli darajada taʼminlab, maxsulotlarni chetel bozoriga tanishtirgan. Shu yillarda, Turkiyada  birinchilar qatorida plastik maxsulotlarni ishlab chiqarishi yo'lga qo’yilgan. 1995 yildan boshlab, va xozirgi kunda, Turkiyaning 500 yirik kompaniyalaridan biri.",
        about_1_3: "Biz bilan bog'lanish",
        about_2_1: "O'zbekistonda Kalde",
        about_2_2:
          "KALDE mahsulotlarini O‘zbekistonga birinchi yetkazib berish 2009-yil noyabr oyida amalga oshirilgan.  KALDE KLİMA PAZARLAMA VE TAAHHÜT AŞ kompaniyasi ishlab chiqaruvchi bilan gaplashish bilan bir qatorda mahsulotning yuqori sifatiga ishonch hosil qildi. (Istanbul, Turkiya), 2010-yildan boshlab O‘zbekistonda KALDE brendi ostida barcha turdagi mahsulotlarni sotuvchi do‘konlar tarmog‘i yaratila boshlandi. 2018-yilda Toshkent shahridagi, shuningdek, Buxoro, Namangan, Andijon , Jizzax va boshqa yirik qurilish bozorlarida taqdim etilgan 10 dan ortiq do‘konlar tarmog‘i mavjud.",
        about_3_1: "Sifatli maxsulotlar",
        about_3_2:
          "Kalde ko'p jihatdan zamonaviy mahsulotlarni ishlab chiqishga investitsiyalar , yuqori samaradorlik va ishlab chiqarish quvvatlarining salohiyatiga etibor qaratadi .Kalde global bozorlarda tegishli mahsulotlarga bo'lgan o'zgaruvchan talabga tezda javob berish uchun o'z mahsulotlarini doimiy ravishda optimallashtiradi. Dunyo standartlariga to'gri keladigan, KALDE maxsulotlari, dunyodagi 40-ta yirik mamlakatlarida tanilgan. Barcha maxsulotlariga, xalqaro sertifikatlari mavjud.",
        about_4_1: "Bizning xodimlarimiz",
        about_5_1: "Bizning afzalliklarimiz",
        about_5_2: "Yuqori sifat",
        about_5_3: "Yevropa sifati",
        about_5_4: "Xalqaro  standartlar",
        about_5_5: "Labaratoriya tekshruvlari",
        about_5_6: "Yuqori kafolat",
        about_5_7: "Mahsulot kafolati",
        about_5_8: "Sifat nazorati",
        about_5_9: "Seminar treninglar",
        about_6_1: "Bizning hamkorlar",
        // Biz haqimizda oynasi tugadi
        catalog_1_1: "Kategoriya",
        // Katalog tugadi
        application_1_1:
          "Qo'shimcha savollaringiz bormi? Kompaniya haqida ko'proq bilishni xohlaysizmi? Rasmiy diler bo'lishni xohlaysizmi? Mahsulotlarimiz bilan qiziqasizmi? Keyin biz bilan bog'laning. Va biz har doim siz bilan ishlashga tayyormiz!",
        application_1_2: "Biz bilan bog'lanish",
        application_1_3: "Sizning ismingiz",
        application_1_4: "Sizning telefon raqamingiz",
        application_1_5: "Xabaringizni kiriting",
        application_1_6: "YUBORISH",
        // Zayafka qoldrish umimiy
        product_1_1: "Nomi:",
        product_1_2: "Kod:",
        product_1_3: "Diametri:",
        product_1_4: "Ichki diametri:",
        product_1_5: "Ichki uzunligi:",
        product_1_6: "Tashqi uzunligi",
        product_1_7: "O'lchami:",
        product_1_8: "Qadoqdagi soni:",
        product_1_9: "Narxi:",
        product_1_10: "Tarif:",
        product_2_1: "Shu turdagi maxsulotlar",
        // Maxsulot oynasi tugadi
        news_1_1: "Boshqa yangiliklar",
        // News tugadi
        branches_1_1: "Bizning filiallarimiz",
        //Bozning firyalar tugadi
        firyal_1_1: "Manzil:",
        firyal_1_2: "Orientatsiya:",
        firyal_1_3: "Ish vaqti:",
        firyal_1_4: "Telefon raqami:",
        firyal_1_5: "Email:",
        firyal_2_1: "Biz bilan bog'lanish",
        firyal_2_2: "Sizning ismingiz",
        firyal_2_3: "Telefon raqamingiz",
        firyal_2_4: "Xabaringizni kiriting",
        firyal_2_5: "YUBORISH",
        // Firyal tugadi
        advantages_1_1:
          "Barcha PPR mahsulotlari yuqori sifatli A toifali xom ashyolardan ishlab chiqariladi, bu quvurlar va armaturalarni ulashda  eng yaxshi ulanishni ta'minlaydi.",
        advantages_1_2:
          "Barcha metall buyumlar Yevropa xomashyosidan Yevropa texnologiyalaridan foydalangan holda yuqori texnologiyali uskunalarda ishlab chiqariladi.",
        advantages_1_3:
          "Mahsulotlar eksport qilinadigan qator mamlakatlarning barcha zarur gigiyenik sertifikatlari va sifat sertifikatlari mavjud. Mahsulotlar barcha mavjud xalqaro standartlarga mos keladi.",
        advantages_1_4:
          "Har bir ishlab chiqarish bo'limida har bir partiyaning namunalari tekshiriladigan laboratoriya mavjud. Bundan tashqari, barcha mahsulotlar sinovdan o'tkaziladigan alohida akkreditatsiyalangan laboratoriya mavjud.",
        advantages_1_5:
          "Taniqli sug'urta kompaniyalari tomonidan himoyalangan barcha mahsulotlar uchun kafolat mavjud. Metall mahsulotlar 10 yilgacha kafolatlangan. PPR mahsulotlari uchun 50 yilgacha kafolat. PPR quvurlari va armaturalari 50 yil kafolatlanadi.",
        advantages_1_6:
          "Kafolat holatlarini tekshirish uchun xizmat ko'rsatish bo'limi mavjud. Mahsulotning aybi bilan mulkka zarar etkazilgan hollarda, mulkga etkazilgan zarar 100% gacha qoplanadi.",
        advantages_1_7:
          "Mahsulot sifatini yaxshilash va yangi turdagi mahsulotlarni ishlab chiqish uchun muhandislik kompaniyalari va montajchilar bilan doimiy yaqin hamkorlik.",
        advantages_1_8:
          "Mijozlarning qulayligi uchun sifatli mahsulotlardan foydalanish imkonini beruvchi montajchilarni tayyorlash va bozorga yangi mahsulotlarni joriy etish bo'yicha seminarlar o'tkazish.",
        advantages_1_9: "Biz bilan bog'lanish",
        // Afzaliklar tugadi.

        // footer
        footer_1_1:
          "KALDE, isitish va suv ta'minoti tizimi, yuqori sifatli polipropilen quvurlar va armatura uchun!",
        footer_1_2: "Foydali sahifalar",
        footer_1_3: "Biz bilan bog'lanish",
        manzil_name:
          "Toshkent sh., Olmazor tumi, ko'ch. Shirok, 2 (Mo'ljal - Chukursay qurilish bozori)",
      },
    },
    ru: {
      translation: {
        navbar_main_link: "Главная",
        navbar_about_link: "O нас",
        navbar_adventages_link: "Преимущества",
        navbar_catalog_link: "Каталог",
        navbar_news_link: "Новости",
        navbar_contact_link: "Контакты",
        navbar_lang_select: "Выберите язык",
        main_1_1: "Что такое КАЛДЕ?",
        main_1_2:
          "KALDE, для систем отопления и водоснабжения, высококачественные полипропиленовые трубы и фитинги!",
        main_1_3:
          "KALDE – это высококачественная продукция, соответствующая всем мировым стандартам и имеющая сертификаты систем международных стандартов!",
        main_1_4: "Узнать больше",
        main_2_1: "О нас",
        main_2_2:
          "KALDE - основана в 1977 году, расположена в Стамбуле, Турция, производит продукцию для современных систем отопления и водоснабжения. Сегодня продукция KALDE известна в 50 странах мира. Продукция KALDE, отвечающая мировым стандартам, известна в 40 крупнейших странах мира.  Вся продукция имеет международные сертификаты.   На рынке Узбекистана продукция Kalde стала известна в 2009 году. На сегодняшний день в Узбекистане продукцию Kalde можно купить более чем в 20 специализированных магазинах!",
        main_2_3: "Узнать больше",
        main_2_4: "Свяжитесь с нами",
        main_3_1: "Наши преимущества",
        main_3_2: "Высокое качество",
        main_3_3: "Eвропейское качество",
        main_3_4: "Международные стандарты",
        main_3_5: "Лабораторные тесты",
        main_3_6: "Высокая гарантия",
        main_3_7: "Гарантия на продукт",
        main_3_8: "Контроль качества",
        main_3_9: "Семинар тренинг",
        main_4_1: "Наши продукты",
        main_4_2: "Все продукты",
        main_5_1: "Наши партнеры",
        main_6_1: "Полезные новости",
        //asosiy oyna tugadi
        about_1_1: "О нас",
        about_1_2:
          "В 1977 году 4 турецких инженера основали компанию KALDE. Цель состоит в том, чтобы поставлять высококачественные продукты для людей.  Компания KALDE одной из первых завезла современное технологическое оборудование из-за рубежа (из Европы) и начала производить продукцию для систем водоснабжения и отопления. В 1990-е годы, достаточно снабдив внутренний рынок, она вывела свою продукцию на внешний рынок. В эти годы одними из первых в Турции было запущено производство пластиковых изделий. С 1995 года и по сегодняшний день входит в число 500 крупнейших компаний Турции.",
        about_1_3: "Свяжитесь с нами",
        about_2_1: "Калде в Узбекистане",
        about_2_2:
          "Первая поставка продукции KALDE в Узбекистан была осуществлена ​​в ноябре 2009 года. Компания KALDE KLİMA PAZARLAMA VE TAAHHÜT AŞ помимо переговоров с производителем убедилась в высоком качестве продукта. (Стамбул, Турция), с 2010 года в Узбекистане создана сеть магазинов по продаже всех видов товаров под брендом KALDE. В 2018 году представлена ​​сеть из более чем 10 магазинов в Ташкенте, а также в Бухаре, Намангане, Андижане, Джизаке и других крупных строительных рынках.",
        about_3_1: "Качественные продукты",
        about_3_2:
          "Kalde вкладывает значительные средства в разработку современных продуктов, высокую эффективность и потенциал производственных мощностей Kalde постоянно оптимизирует свою продукцию, чтобы быстро реагировать на меняющийся спрос на сопутствующие товары на мировых рынках. Продукция KALDE, отвечающая мировым стандартам, известна в 40 крупнейших странах мира. Вся продукция имеет международные сертификаты.",
        about_4_1: "Наши сотрудники",
        about_5_1: "Наши преимущества",
        about_5_2: "Высокое качество",
        about_5_3: "Eвропейское качество",
        about_5_4: "Международные стандарты",
        about_5_5: "Лабораторные тесты",
        about_5_6: "Высокая гарантия",
        about_5_7: "Гарантия на продукт",
        about_5_8: "Контроль качества",
        about_5_9: "Семинар тренинг",
        about_6_1: "Наши партнеры",
        // Biz haqimizda oynasi tugadi
        catalog_1_1: "Категория",
        // Katalog tugadi
        application_1_1:
          ": Есть ли у вас дополнительные вопросы? Хотите узнать больше о компании? Хотите стать официальным дилером? : Есть ли у вас дополнительные вопросы? Хотите узнать больше о компании? Хотите стать официальным дилером?",
        application_1_2: "Связаться с нами",
        application_1_3: "Ваше имя",
        application_1_4: "Ваш номер телефона",
        application_1_5: "Введите сообщение",
        application_1_6: "ОТПРАВИТЬ",
        // Zayafka qoldrish umimiy
        product_1_1: "Имя:",
        product_1_2: "Код:",
        product_1_3: "Диаметр:",
        product_1_4: "Внутренний диаметр:",
        product_1_5: "Внутренняя длина:",
        product_1_6: "Внешняя длина:",
        product_1_7: "Размер:",
        product_1_8: "Количество в упаковке:",
        product_1_9: "Цена :",
        product_1_10: "Информация:",
        product_2_1: "Похожие продукты",
        // Maxsulot oynasi tugadi
        news_1_1: "Другие новости",
        // News tugadi
        branches_1_1: "Наши филиалы",
        //Bozning firyalar tugadi
        firyal_1_1: "Местоположение:",
        firyal_1_2: "Oриентация:",
        firyal_1_3: "Рабочее время:",
        firyal_1_4: "Номер телефона:",
        firyal_1_5: "Электронная почта:",
        firyal_2_1: "Связаться с нами",
        firyal_2_2: "Ваше имя",
        firyal_2_3: "Ваш номер телефона",
        firyal_2_4: "Введите сообщение",
        firyal_2_5: "ОТПРАВИТЬ",
        // Firyal tugadi
        advantages_1_1:
          "Вся продукция ППР изготавливается из высококачественного сырья класса «А», что обеспечивает лучшее соединение при пайке труб и фитингов.",
        advantages_1_2:
          "Вся продукция из металла изготавливается из европейского сырья на высокотехнологическом оборудовании по европейским технологиям.",
        advantages_1_3:
          "Имеются все необходимые гигиенические сертификаты, и сертификаты качества ряда стран, в которые экспортируется продукция. Продукция соответствует всем существующим международным нормам.",
        advantages_1_4:
          "В каждом производственном отделе имеется лаборатория, в которой проверяется пробная продукция каждой произведенной партии. Также есть отдельная аккредитированная лаборатория, где производят испытания всей выпускаемой продукции.",
        advantages_1_5:
          "Имеется гарантия на всю продукцию, защищенная известными страховыми компаниями. Гарантия на продукцию из металла до 10 лет. Гарантия на продукцию из ППР до 50 лет. Гарантия на трубы и фитинги из ППР 50 лет.",
        advantages_1_6:
          "Имеется сервисная служба для расследования по гарантийным случаям. В случаях причинения порчи имущества по вине продукции, возмещение порчи имущества до 100%.",
        advantages_1_7:
          "Постоянная тесная работа с инженерными компаниями и монтажниками, для улучшения качества продукции и разработками новых видов продукции.",
        advantages_1_8:
          "Проведение семинаров по обучению монтажников и внедрению новинок на рынок, что позволяет пользоваться качественной продукцией для комфорта клиентов.",
        advantages_1_9: "Свяжитесь с нами",
        // Afzaliklar tugadi.

        // footer

        footer_1_1:
          "KALDE, для систем отопления и водоснабжения, высококачественные полипропиленовые трубы и фитинги!",
        footer_1_2: "Полезные страницы",
        footer_1_3: "Свяжитесь с нами",
        manzil_name:
          "г. Ташкент, Олмазор тумани, ул. Широк, 2 (Ориентир - строительный рынок Чукурсай)",
      },
    },
    en: {
      translation: {
        navbar_main_link: "Main",
        navbar_about_link: "About",
        navbar_adventages_link: "Our advantages",
        navbar_catalog_link: "Catalog",
        navbar_news_link: "News",
        navbar_contact_link: "Contacts",
        navbar_lang_select: "Select language",
        main_1_1: "What is KALDE?",
        main_1_2:
          "KALDE, for heating and water supply systems, high quality polypropylene pipes and fittings!",
        main_1_3:
          "KALDE is a high-quality product that meets all international standards and has international standard system certificates!",
        main_1_4: "To learn more",
        main_2_1: "About us",
        main_2_2:
          "KALDE - founded in 1977, located in Istanbul, Turkey, manufactures products for modern heating and water supply systems. Today KALDE products are known in 50 countries around the world. KALDE products, which meet world standards, are known in 40 largest countries of the world. All products have international certificates. Kalde products became known in the Uzbek market in 2009. Today, Kalde products can be bought in more than 20 specialized stores in Uzbekistan!",
        main_2_3: "To learn more",
        main_2_4: "Contact us",
        main_3_1: "Our advantages",
        main_3_2: "High quality",
        main_3_3: "European quality",
        main_3_4: "International standards",
        main_3_5: "Laboratory tests",
        main_3_6: "High warranty",
        main_3_7: "Product warranty",
        main_3_8: "Quality control",
        main_3_9: "Seminar training",
        main_4_1: "Our products",
        main_4_2: "All products",
        main_5_1: "Our partners",
        main_6_1: "Useful news",
        //asosiy oyna tugadi
        about_1_1: "About us",
        about_1_2:
          "In 1977, 4 Turkish engineers founded the KALDE company. The goal is to deliver high-quality products for the people. The KALDE company was one of the first to bring modern technology equipment from abroad (Europe) and start producing products for water supply and heating systems. In the 1990s, having sufficiently supplied the domestic market, it introduced its products to the foreign market. During these years, the production of plastic products was launched among the first in Turkey. Since 1995, and today, it is one of the 500 largest companies in Turkey.",
        about_1_3: "Contact us",
        about_2_1: "Kalde in Uzbekistan",
        about_2_2:
          "The first delivery of KALDE products to Uzbekistan was made in November 2009. KALDE KLİMA PAZARLAMA VE TAAHHÜT AŞ company was convinced of the high quality of the product in addition to talking with the manufacturer. (Istanbul, Turkey), since 2010, a chain of stores selling all kinds of products under the KALDE brand has been created in Uzbekistan. In 2018, there is a network of more than 10 stores presented in Tashkent, as well as in Bukhara, Namangan, Andijan, Jizzakh and other large construction markets.",
        about_3_1: "Quality products",
        about_3_2:
          "Kalde invests heavily in modern product development, high efficiency and the potential of production facilities. Kalde constantly optimizes its products in order to quickly respond to the changing demand for related products in global markets. KALDE products, meeting world standards, are known in 40 major countries of the world. All products have international certificates.",
        about_4_1: "Our employees",
        about_5_1: "Our advantages",
        about_5_2: "High quality",
        about_5_3: "European quality",
        about_5_4: "International standards",
        about_5_5: "Laboratory tests",
        about_5_6: "High warranty",
        about_53_7: "Product warranty",
        about_5_8: "Quality control",
        about_5_9: "Seminar training",
        about_6_1: "Our partners",
        // Biz haqimizda oynasi tugadi
        catalog_1_1: "Category",
        // Katalog tugadi
        application_1_1:
          ": Do you have additional questions? Do you want to know more about the company? Do you want to become an official dealer? Are you interested in our products? Then contact us. And we are always ready to work with you!",
        application_1_2: "Connect with us",
        application_1_3: "Your name",
        application_1_4: "Your phone number",
        application_1_5: "Enter your message",
        application_1_6: "SEND",
        // Zayafka qoldrish umimiy
        product_1_1: "Name:",
        product_1_2: "Kode:",
        product_1_3: "Diameter:",
        product_1_4: "Inner diameter:",
        product_1_5: "Inner length:",
        product_1_6: "Outer length:",
        product_1_7: "Size:",
        product_1_8: "Quantity per pack:",
        product_1_9: "Cost:",
        product_1_10: "Information:",
        product_2_1: "Similar products",
        // Maxsulot oynasi tugadi
        news_1_1: "Other news",
        // News tugadi
        branches_1_1: "Our branches",
        //Bozning firyalar tugadi
        firyal_1_1: "Location:",
        firyal_1_2: "Orientation:",
        firyal_1_3: "Work time:",
        firyal_1_4: "Phone number:",
        firyal_1_5: "Email:",
        firyal_2_1: "Connect with us",
        firyal_2_2: "Your name",
        firyal_2_3: "Your phone number",
        firyal_2_4: "Enter your message",
        firyal_2_5: "SEND",
        // Firyal tugadi
        advantages_1_1:
          "All PPR products are made from high-quality class A raw materials, which ensures the best connection when soldering pipes and fittings.",
        advantages_1_2:
          "All metal products are made from European raw materials on high-tech equipment using European technologies.",
        advantages_1_3:
          "There are all necessary hygienic certificates, and quality certificates of a number of countries to which products are exported. Products comply with all existing international standards.",
        advantages_1_4:
          "Each production department has a laboratory where samples of each batch are tested. There is also a separate accredited laboratory where all products are tested.",
        advantages_1_5:
          "There is a guarantee for all products, protected by well-known insurance companies. Metal products guaranteed up to 10 years. Warranty for PPR products up to 50 years. PPR pipes and fittings are guaranteed for 50 years",
        advantages_1_6:
          "A service department is available to investigate warranty cases. In cases of damage to property due to the fault of the product, compensation for damage to property up to 100%.",
        advantages_1_7:
          "Constant close work with engineering companies and installers to improve product quality and develop new types of products.",
        advantages_1_8:
          "Conducting seminars to train installers and introduce new products to the market, which allows you to use quality products for the comfort of customers.",
        advantages_1_9: "Contact us",
        // Afzaliklar tugadi.

        //footer
        footer_1_1:
          "KALDE, for the system of heating and water supply, high-quality polypropylene pipes and fittings!",
        footer_1_2: "Useful Pages",
        footer_1_3: "Contact Us",

        manzil_name:
          "Tashkent city, Olmazor tumi, st. Shirok, 2 (Landmark - construction market Chukursai)",
      },
    },
  },
});

export default i18n;

//
