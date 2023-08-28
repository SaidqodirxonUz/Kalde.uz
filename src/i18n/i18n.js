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
        firyal_1_6: "Joylashuv : ",
        firyal_2_1: "Biz bilan bog'lanish",
        firyal_2_2: "Sizning ismingiz",
        firyal_2_3: "Telefon raqamingiz",
        firyal_2_4: "Xabaringizni kiriting",
        firyal_2_5: "YUBORISH",
        // Firyal tugadi
        advantages_1_1:
          "Yuqori darajadagi a sinfidagi xom ashyolardan tayyorlangan barcha PPR mahsulotlari quvurlar va armaturalarni lehimlash jarayonida benuqson ulanishlarni yaratishda ustunlik qiladi. Premium materiallardan foydalanish mislsiz natijalarni kafolatlaydi, turli xil ilovalarda mahsulotlarimizning ishonchliligi va ishlashini kuchaytiradi.",
        advantages_1_2:
          "Bizning metall buyumlarimiz eng so'nggi rusumdagi Yevropa xomashyosidan eng so'nggi rusumdagi asbob-uskunalar va zamonaviy Yevropa texnikalaridan foydalangan holda sinchkovlik bilan ishlab chiqariladi. Ushbu fidoyilik xalqaro standartlarga javob beradigan, har bir mahsulotdagi mukammallikni va innovatsiyalarni aks ettiruvchi yuqori sifatli mahsulotlar ishlab chiqarishni ta'minlaydi.",
        advantages_1_3:
          "Mahsulotlarimiz turli eksport yoʻnalishlaridan gigiena va sifat sertifikatlari bilan taʼminlangan boʻlib, ularning xavfsizligi va mukammalligini tasdiqlaydi. Ular jahon standartlariga qat'iy rioya qilib, ishonchliligini mustahkamlaydi. Ushbu keng qamrovli sertifikat bizning eng yuqori xalqaro kalibrli tovarlarni yetkazib berishga sodiqligimizni ta'kidlaydi.",
        advantages_1_4:
          "Har bir ishlab chiqarish sektorida maxsus laboratoriya har bir partiyadan namunalarni sinchkovlik bilan sinovdan o'tkazadi. Bundan tashqari, akkreditatsiyalangan mustaqil laboratoriya barcha mahsulotlarni sinchkovlik bilan tekshiradi. Ushbu ikki tomonlama sinov yondashuvi mijozlarimizga doimiy ishonchli va sertifikatlangan mahsulotlarni yetkazib berishga sodiqligimizni tasdiqlab, eng yuqori sifatni kafolatlaydi.",
        advantages_1_5:
          "Barcha mahsulotlar nufuzli sug'urta firmalari orqali ta'minlangan kafolatlar bilan quvvatlanadi. Bizning metall buyumlarimiz 10 yilgacha qoplanadi, PPR mahsulotlari esa ta'sirchan 50 yillik kafolatga ega. Xususan, PPR quvurlari va armaturalari 50 yillik keng kafolatga ega bo'lib, bu bizning chidamlilik va mijozlar ehtiyojini qondirish bo'yicha qat'iy majburiyatimizni aks ettiradi.",
        advantages_1_6:
          "Bizning maxsus xizmat ko'rsatish bo'limimiz kafolat so'rovlarini samarali hal qiladi. Mahsulot nosozliklari bilan bog'liq mulkiy zarar holatlarida biz 100% gacha kompensatsiyani taklif qilamiz. Bu bizning muammolarga zudlik bilan yechim topish va mijozlarimiz qoniqishini ta'minlashga sodiqligimizni ta'kidlaydi, bu bizning sifat va mas'uliyatga bo'lgan qat'iy sodiqligimizni aks ettiradi.",
        advantages_1_7:
          "Biz mahsulotlarning mukammalligini oshirish va innovatsiyalarni rivojlantirish uchun muhandislik firmalari va montajchilar bilan izchil, hamkorlikdagi hamkorlikni davom ettiramiz. Ushbu yaqin hamkorlik mahsulotning doimiy rivojlanishiga turtki bo'lib, takliflarimiz sifat va xilma-xillik bo'yicha birinchi o'rinda turishini ta'minlaydi. Taraqqiyotga sodiqligimiz soha mutaxassislari bilan faol aloqalarimizda namoyon bo‘ladi.",
        advantages_1_8:
          "Biz montajchilarni o'qitish va bozorga yangi mahsulotlarni joriy etishga qaratilgan seminarlar tashkil qilamiz. Ushbu proaktiv yondashuv nafaqat montajchilarning malakasini oshiribgina qolmay, balki mijozlarning qulayligini ta'minlash uchun yuqori sifatli mahsulotlarni joriy qilishni osonlashtiradi. Bilim va innovatsiyalarni tarqatish orqali biz mijozlarning maqbul ehtiyojlarini qondirish uchun yuqori sifatli yechimlarni taqdim etish majburiyatini bajaramiz.",
        advantages_1_9: "Biz bilan bog'lanish",
        // Afzaliklar tugadi.

        // footer
        footer_1_1:
          "KALDE, isitish va suv ta'minoti tizimi, yuqori sifatli polipropilen quvurlar va armatura uchun!",
        footer_1_2: "Foydali sahifalar",
        footer_1_3: "Biz bilan bog'lanish",
        manzil_name:
          "Toshkent sh., Olmazor tumi, ko'ch. Shirok, 2 (Mo'ljal - Chukursay qurilish bozori)",

        about_2_3: "Xodimlar",
        about_2_4: "Mahsulotlar",
        about_2_5: "Zavodlar",
        about_2_6: "Davlatlar",

        sent_message_succues: "Xabaringiz muvvafaqiyatli yuborildi ",
        sent_message_fail: "Xabaringiz yuborilmadi , qayta urinib ko'ring ",
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
        firyal_1_6: "Геолокация : ",
        firyal_2_1: "Связаться с нами",
        firyal_2_2: "Ваше имя",
        firyal_2_3: "Ваш номер телефона",
        firyal_2_4: "Введите сообщение",
        firyal_2_5: "ОТПРАВИТЬ",

        // Firyal tugadi
        advantages_1_1:
          "Изготовленные из высококачественного сырья класса А, все изделия PPR превосходно подходят для создания безупречных соединений в процессе пайки труб и фитингов. Использование высококачественных материалов гарантирует непревзойденные результаты, повышая надежность и эксплуатационные характеристики нашей продукции в различных областях применения.",
        advantages_1_2:
          "Наши металлические изделия тщательно изготавливаются из высококачественного европейского сырья с использованием современного оборудования и передовых европейских технологий. Эта приверженность гарантирует производство высококачественных изделий, соответствующих международным стандартам, отражающих как совершенство, так и инновации в каждом продукте.",
        advantages_1_3:
          "Наши продукты имеют необходимые сертификаты гигиены и качества из различных экспортных стран, подтверждающие их безопасность и высокое качество. Они строго придерживаются преобладающих мировых стандартов, усиливая свою надежность. Эта всесторонняя сертификация подчеркивает наше стремление поставлять товары самого высокого международного качества.",
        advantages_1_4:
          "В каждом производственном секторе специальная лаборатория проводит тщательное тестирование образцов из каждой партии. Кроме того, аккредитованная независимая лаборатория тщательно проверяет всю продукцию. Такой подход к двойному тестированию гарантирует высочайшее качество, подтверждая наше стремление поставлять нашим клиентам стабильно надежные и сертифицированные товары.",
        advantages_1_5:
          "Все наши продукты подкреплены гарантиями, обеспеченными авторитетными страховыми компаниями. На наши изделия из металла распространяется гарантия до 10 лет, а на изделия из полипропилена действует впечатляющая 50-летняя гарантия. В частности, на трубы и фитинги из полипропилена предоставляется обширная 50-летняя гарантия, отражающая нашу непоколебимую приверженность долговечности и удовлетворенности клиентов.",
        advantages_1_6:
          "Наш специализированный сервисный отдел эффективно обрабатывает гарантийные запросы. В случаях материального ущерба, связанного с дефектами продукции, мы предлагаем комплексную компенсацию до 100%. Это подчеркивает нашу приверженность быстрому решению проблем и обеспечению удовлетворенности наших клиентов, отражая нашу непоколебимую приверженность качеству и ответственности.",
        advantages_1_7:
          "Мы поддерживаем постоянное сотрудничество с инженерными фирмами и установщиками для повышения качества продукции и стимулирования инноваций. Это тесное сотрудничество способствует постоянному развитию продуктов, гарантируя, что наши предложения остаются на переднем крае качества и разнообразия. Наше стремление к прогрессу отражается в нашем динамичном взаимодействии с профессионалами отрасли.",
        advantages_1_8:
          "Мы организуем семинары, направленные на обучение монтажников и вывод на рынок новых продуктов. Такой упреждающий подход не только повышает квалификацию установщика, но и способствует внедрению превосходных продуктов, обеспечивающих удобство для клиентов. Делясь знаниями и инновациями, мы подтверждаем наше стремление предоставлять высококачественные решения для оптимального удовлетворения потребностей клиентов.",
        advantages_1_9: "Свяжитесь с нами",
        // Afzaliklar tugadi.

        // footer

        footer_1_1:
          "KALDE, для систем отопления и водоснабжения, высококачественные полипропиленовые трубы и фитинги!",
        footer_1_2: "Полезные страницы",
        footer_1_3: "Свяжитесь с нами",
        manzil_name:
          "г. Ташкент, Олмазор тумани, ул. Широк, 2 (Ориентир - строительный рынок Чукурсай)",

        about_2_3: "Сотрудники",
        about_2_4: "Продукты",
        about_2_5: "Заводы",
        about_2_6: "Государства",

        sent_message_succues: "Ваше сообщение было отправлено успешно",
        sent_message_fail: "Произошла ошибка при отправке сообщения",
        sent_message_error: "При отправке вашего сообщения произошла ошибка",
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
        firyal_1_6: "Geolocation : ",
        firyal_2_1: "Connect with us",
        firyal_2_2: "Your name",
        firyal_2_3: "Your phone number",
        firyal_2_4: "Enter your message",
        firyal_2_5: "SEND",
        // Firyal tugadi
        advantages_1_1:
          "Crafted from top-tier class A raw materials, all PPR products excel in creating impeccable connections during the soldering process of pipes and fittings. The use of premium materials guarantees unparalleled results, reinforcing the reliability and performance of our products in various applications.",
        advantages_1_2:
          "Our metal goods are meticulously crafted from premium European raw materials using state-of-the-art equipment and cutting-edge European techniques. This dedication ensures the production of high-quality items that adhere to international standards, reflecting both excellence and innovation in every product.",
        advantages_1_3:
          "Our products come with essential hygiene and quality certificates from various export destinations, attesting to their safety and excellence. They strictly adhere to prevailing global standards, reinforcing their reliability. This comprehensive certification underscores our commitment to delivering goods of the highest international caliber.",
        advantages_1_4:
          "Within every production sector, a dedicated laboratory conducts thorough testing of samples from each batch. Additionally, an accredited independent laboratory rigorously examines all products. This dual-testing approach guarantees the utmost quality, affirming our commitment to delivering consistently reliable and certified goods to our customers.",
        advantages_1_5:
          "All our products are backed by warranties secured through reputable insurance firms. Our metal goods are covered for up to 10 years, while PPR products boast an impressive 50-year warranty. Specifically, PPR pipes and fittings enjoy an extensive 50-year guarantee, reflecting our unwavering commitment to durability and customer satisfaction.",
        advantages_1_6:
          "Our dedicated service department handles warranty inquiries effectively. In instances of property damage attributed to product faults, we offer comprehensive compensation of up to 100%. This underscores our commitment to addressing concerns promptly and ensuring our customers' satisfaction, reflecting our steadfast commitment to quality and accountability.",
        advantages_1_7:
          "We maintain a consistent, collaborative partnership with engineering firms and installers to enhance product excellence and foster innovation. This close collaboration fuels ongoing product development, ensuring our offerings remain at the forefront of quality and diversity. Our commitment to progress is reflected in our dynamic engagement with industry professionals.",
        advantages_1_8:
          "We organize seminars aimed at training installers and introducing novel products to the market. This proactive approach not only enhances installer skills but also facilitates the introduction of superior products to ensure customer comfort. By imparting knowledge and innovation, we uphold our commitment to delivering high-quality solutions for optimal customer satisfaction.",
        advantages_1_9: "Contact us",
        // Afzaliklar tugadi.

        //footer
        footer_1_1:
          "KALDE, for the system of heating and water supply, high-quality polypropylene pipes and fittings!",
        footer_1_2: "Useful Pages",
        footer_1_3: "Contact Us",

        manzil_name:
          "Tashkent city, Olmazor tumi, st. Shirok, 2 (Landmark - construction market Chukursai)",

        about_2_3: "Employees",
        about_2_4: "Products",
        about_2_5: "Factories",
        about_2_6: "States",

        sent_message_succues: "Your message has been sent successfully",
        sent_message_fail: "Your message has not been sent",
        sent_message_error: "There was an error sending your message",
      },
    },
  },
});

export default i18n;

//
