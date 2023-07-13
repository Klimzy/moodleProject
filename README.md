# Конструктор тестов для "Moodle"

## О проекте

Moodle — система управления курсами (электронное обучение)... бла-бла-бла

Это довольно старая легаси платформа, а создание тестов для него то еще мучение. Их нужно не только придумать, но и оформить КАЖДЫЙ вопрос по определенному шаблону, сохранив весь тест в txt-файл:

<img width="1169" alt="Снимок экрана 2022-04-20 в 00 32 16" src="https://user-images.githubusercontent.com/67217257/164063212-c5cf3a54-f805-4da9-ae15-29948e22efad.png">
<img width="1167" alt="Снимок экрана 2022-04-20 в 00 32 03" src="https://user-images.githubusercontent.com/67217257/164063282-be20ed76-e9c1-4bb5-ba72-5ad9d917aa65.png">

И ЭТО ВСЕ БЛЯТЬ РУКАМИ.В 2к22. Преподам же нечего больше делать, как этим заниматься. 
Увидел я эту всю эту "красоту" у подруги-преподавательницы, занимавшейся оформлением тхт-шника без явного удовольствия.

Поэтому мною было принято стратегическое решение сделать небольшое веб-приложение для упрощения работы. (А заодно и выучить основы JS)

## Главные задачи

1. Упростить работу преподавателей
2. Сделать приложение кросплатформенным
3. Пользоваться им будут все-таки люди без технического образования. Поэтому нужно сделать все максимально дружелюбно и просто. Без установок. Открыл коробку и пользуешься


## Принцип работы

Принцип довольно простой. Как у to-do листа.

1. Перейдите по [ссылке](https://klimzy.github.io/moodleProject/) используя для этого **ТОЛЬКО Google Chrome**
2. Вписываете формулировку вопроса. 
3. Создаете ответы, попутно отмечая правильные галочками слева.
4. Создайте задание, нажав на кнопку "Создать вопрос" Оно добавится в память. Сейчас при обновлении страницы все вопросы из памяти исчезают. (Если программа будет действительно нужна, то я обязательно добавлю функцию хранения в кеше)
5. Программа сама определит формат вопроса и расчитает веса. Вам останется лишь скачать файл и загрузить его на Moodle.

<img width="1440" alt="Снимок экрана 2022-04-19 в 23 37 44" src="https://user-images.githubusercontent.com/67217257/164064337-86f2bea1-f2b3-4b99-8bdc-f9bc65d92d08.png">


## Пример созданного файла
<img width="252" alt="image" src="https://user-images.githubusercontent.com/67217257/164067641-76c294d4-6503-4a10-ac02-f6144872a136.png">


