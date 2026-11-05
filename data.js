/* =========================================================
   ВСЁ СОДЕРЖИМОЕ САЙТА МЕНЯЕТСЯ ЗДЕСЬ. Остальные файлы трогать не нужно.
   Сохранил файл, обновил страницу, и изменения видны.
   ========================================================= */

/* ---------- Общие тексты сайта ---------- */
const SITE = {
  tabTitle: "ZhuCareKachers",
  welcomeTitle: "Добро пожаловать!",
  welcomeText:
    "Вас приветствует команда качеров ZhuCareKachers. Здесь вы можете посмотреть актуальность своего заказа или занятость качеров.",
  telegramLabel: "Наш телеграм-канал: t.me/ZhuCareKachers",
  telegramUrl: "https://t.me/ZhuCareKachers",
  chooseTitle: "Выберите интересующего качера",
  chooseHint: "Листайте вправо или влево и нажмите на карточку",
  backButton: "Назад ко всем качерам",
  ordersTitle: "Актуальные заказы",
  starsNote: "Звёзды показывают, насколько выполнен ваш заказ.",
  emptyOrders: "Сейчас заказов нет, качер свободен.",
  freeLabel: "Свободен",
  busyLabel: "Заказов: ",        // дальше подставится число
  orderWord: "Заказ ",           // получится «Заказ 1», «Заказ 2»
  clientWord: "Заказчик: ",
  itemWord: "Что заказано: ",
  footer: "ZhuCareKachers"
};

/* ---------- Цвета главной страницы (светло-зелёные, под Бай Чжу) ---------- */
const THEME = {
  bg1: "#eaf7e4",   // фон, верх
  bg2: "#fbfdf5",   // фон, низ
  accent: "#6cbf84", // кнопки и акценты
  accent2: "#b9e3a8",
  text: "#2f4a39"
};

/* ---------- Качеры ----------
   name     имя на карточке
   color / color2  два цвета градиента карточки (подбираются под персонажа)
   textColor  цвет текста на карточке
   photo    путь к картинке, например "img/baizhu.jpg" (положите файл в папку img).
            Если пусто "", то будет только градиент.
   orders   список заказов. progress от 0 до 5 = сколько закрашенных звёзд.
   Чтобы убрать заказ, удалите строку. Чтобы добавить, скопируйте строку.
*/
const KACHERS = [
  {
    id: "spring", name: "Весна",
    color: "#ffc2d6", color2: "#b8e6a6", textColor: "#4a2a3a", photo: "images/109cf328fa47c025ac16682636604ecc.jpg",
    orders: [
      { client: "Пример: @user1", item: "Фарм артефактов, 20 смол", progress: 3 },
      { client: "Пример: @user2", item: "Прокачка персонажа до 80", progress: 1 }
    ]
  },
  {
    id: "kaeya", name: "Кейя",
    color: "#bfeaf7", color2: "#e9f7fc", textColor: "#24505f", photo: "images/51c941e5bf70052ad77eca79480e22c3.jpg",
    orders: [
      { client: "Пример: @user3", item: "Ежедневные задания, неделя", progress: 4 }
    ]
  },
  {
    id: "yaemiko", name: "Яэ Мико",
    color: "#f4b6dc", color2: "#d3b4f2", textColor: "#4d2a55", photo: "images/9c557e0790ed310f06637452d564cdc9.jpg", 
    orders: [
      { client: "Пример: @user4", item: "Босс недели, 3 прохождения", progress: 2 }
    ]
  },
  {
    id: "alhaitham", name: "Аль-Хайтам",
    color: "#a9dc9c", color2: "#efe6a3", textColor: "#2f4a2c", photo: "images/79e73c74b75ff3a5c6291d6441c2f2e9.jpg",
    orders: []
  },
  {
    id: "kaveh", name: "Кавех",
    color: "#f7cf72", color2: "#9fd8c0", textColor: "#5a4010", photo: "images/fb4a1ba3282583a3803ea02943bd15f8.jpg",
    orders: [
      { client: "Пример: @user5", item: "Исследование региона 100 процентов", progress: 5 }
    ]
  },
  {
    id: "zhongli", name: "Чжун Ли",
    color: "#e6b95c", color2: "#d9a78a", textColor: "#5a3a10", photo: "images/521d9b2d1d2fdaaab4f2993f50e63dc7.jpg",
    orders: [
      { client: "Пример: @user6", item: "Бездна, 36 звёзд", progress: 2 },
      { client: "Пример: @user7", item: "Фарм материалов возвышения", progress: 0 }
    ]
  },
  {
    id: "keqing", name: "Ке Цин",
    color: "#cdb5f0", color2: "#f0e2fb", textColor: "#47306b", photo: "images/Без названия14_20261105134235.png",
    orders: []
  },
  {
    id: "chasca", name: "Часка",
    color: "#8fdcc4", color2: "#f7b872", textColor: "#24493d", photo: "images/d99dad6d9419aed7c612c09a9670f45e.jpg",
    orders: [
      { client: "Пример: @user8", item: "Квесты Натлана", progress: 3 }
    ]
  },
  {
    id: "xilonen", name: "Шилонен",
    color: "#f9c46e", color2: "#f59fb4", textColor: "#5a3516", photo: "images/8f739303c5edd0a091b9784862e53f7f.jpg",
    orders: []
  },
  {
    id: "baizhu", name: "Бай Чжу",
    color: "#a6e0a8", color2: "#e8f5cf", textColor: "#2c5035", photo: "images/3a0c15d6a0a424eb8e80ddb41cce84bf.jpg",
    orders: [
      { client: "Пример: @user9", item: "Сбор материалов, неделя", progress: 4 }
    ]
  }
];

