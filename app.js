const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const createError = require('http-errors');
const logger = require('morgan');
const path = require('path');
const hbs = require('hbs');

// Импортируем созданный в отдельный файлах рутеры.
// const indexRouter = require('./routes/index.route');
// const adminRouter = require('./routes/admin.route');
const tariffsRouter = require('./routes/tariffs.route');

// const entriesRouter = require('./routes/entries');

const app = express();
const PORT = 3000;

// const sessionConfig = {
//   store: new FileStore(), // хранилище сессий
//   key: 'zid', // ключ куки
//   secret: 'secret', // шифрование id сессии
//   resave: false, // пересохранение сессии (когда что-то поменяли - false)
//   saveUninitialized: false, // сохраняем пустую сессию (чтоб посмотреть)
//   httpOnly: true, // нельзя изменить куки с фронта
//   cookie: { expires: 24 * 60 * 60e3 },
// };

// app.use(session(sessionConfig));

// Сообщаем express, что в качестве шаблонизатора используется "hbs".
app.set('view engine', 'hbs');
// Сообщаем express, что шаблона шаблонизаторая (вью) находятся в папке "ПапкаПроекта/views".
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
// Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" будут находится статические файлы, т.е. файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));
// Подключаем middleware, которое позволяет читать содержимое body из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());

// app.use((req, res, next) => {
//   if (req.session) {
//     res.locals.userId = req.session.userId;
//     res.locals.logIn = req.session.logIn;
//   }
//   next();
// });

// app.use('/', indexRouter);
// app.use('/admin', adminRouter);
app.use('/tariffs', tariffsRouter);

// app.use('/entries', entriesRouter);

// Если HTTP-запрос дошёл до этой строчки, значит ни один из ранее встречаемых рутов не ответил на запрос. Это значит, что искомого раздела просто нет на сайте. Для таких ситуаций используется код ошибки 404. Создаём небольшое middleware, которое генерирует соответствующую ошибку.
// app.use((req, res, next) => {
//   const error = createError(404, 'Запрашиваемой страницы не существует на сервере.');
//   next(error);
// });

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
