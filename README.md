# Meeting

Браузерное приложение - расписание встреч. Возможности: добавление встреч, удаление, редактирование.
На главном экране отображаются все встречи на выбранный день (соответственно есть контрол в выбором даты).
У встречи есть три состояния: запланирована, в процессе, завершена. Создавать встречи на прошлое запрещено,
они не должны пересекаться, отображение даты и времени должно быть в часовом поясе браузера.

Экран добавления встречи: дата и время начала, дата и время окончания, часовой пояс
(доступны три часовых пояса: Москва, Хабаровск, Гринвич), краткое описание.
При вводе времени валидировать формат: dd.MM.yyyy hh:mm A, где dd - день, MM - месяц, yyyy - год,
hh - часы от 1 до 12, mm - минуты, A - AM/PM.

Использовать clojurescript, re-frame, reagent. Для работы со временем можно использовать cljs-time.

[DEMO](https://dosbol.github.io/meeting)




## Development Mode

### Run application:

```
lein clean
lein figwheel dev
```

Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

## Production Build


To compile clojurescript to javascript:

```
lein clean
lein cljsbuild once min
```
