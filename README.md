# Music Akinator

## Intro

This is a test challenge for selection on the Int20h hackathon.

### Task

[View](https://mcusercontent.com/a90be75a5d6a2bb92a394e975/files/04041863-5003-485e-bcb9-580489f0b8ba/Test_task_web.pdf)

### Team
4 group :
- [Valentin Yuhimenko](https://github.com/BaLiKfromUA)
- [Danylo Kozhushko](https://github.com/ozgreat)
- [Glib Rusanov](https://github.com/LinetTheFox)
- [DED](https://github.com/Ink11)


## Demo

- PC/laptop [View]() [View]()
- Mobile [View](https://youtu.be/nJ1-sZGj_7g) [View](https://youtu.be/cioUikw5VOg)

## Live
[View](https://int20h-2020-test-task.herokuapp.com/#/)

## Project setup
```
git clone git@github.com:BaLiKfromUA/Music-Akinator.git
```

```
cd Music-Akinator/
```


```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Extra settings (IMPORTANT!)
This project uses [AUDD API](https://audd.io/), so you need to set your personal token for this API.

1. [GET TOKEN](https://t.me/auddbot?start=api)
2. [SET TOKEN](https://github.com/BaLiKfromUA/Music-Akinator/blob/master/src/components/InputData.vue)
```
  api: new AudDAPI({
                baseURL: `https://cors-anywhere.herokuapp.com/https://api.audd.io/findLyrics/`,
                token: "YOUR TOKEN"
            })
```
