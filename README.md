## Search videos on twitch channels
![Twitch](https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Twitch_logo_2019.svg/1280px-Twitch_logo_2019.svg.png)

### Проект реализован на стеке

```
Next.js, ReactHooks, LocalStorage
```

##### Для запуска проекта:
**Клонировать проект**

```
git clone https://github.com/mkremnev/search-twitch.git
```

Для локальной разработки необходимо:

1. переименовать файл **env.local.example**

```
mv env.local.example env.local
```

2. добавить в файл свои идентификационные данные

```
TWITCH_CLIENT_ID=<YOUR_CLIENT_ID>;

TWITCH_ACCESS_TOKEN=<YOUR_ACCESS_TOKEN>;
```

3. запустить проект для локальной разработки

```
npm run dev
```
