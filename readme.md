# Hugo with UnoCSS

## Requirements

- Hugo >= v0.70.0
- NodeJS >= ^14.18.2

## Installation

1. Clone Repo
```
git clone https://github.com/goldcoders/huno
```
2. Change Directory

```
cd huno
```
3. Install Dependencies

```
yarn
```

## Development

Run
```
yarn dev
```

## Production

Run
```
yarn build
```


## Optimized CSS
```
"uno-app": "unocss \"layouts/_default/**/*.html\" \"layouts/partials/templates/**/*.html\" \"layouts/partials/dev-size-indicator.html\" \"layouts/partials/example-home.html\" \"layouts/partials/footer.html\" \"layouts/partials/head.html\" \"layouts/partials/navbar.html\" \"layouts/index.html\" --watch -o ./assets/css/unocss/main.css",

"uno-blog": "unocss \"layouts/_default/**/*.html\" \"layouts/partials/templates/**/*.html\" \"layouts/partials/dev-size-indicator.html\" \"layouts/partials/footer.html\" \"layouts/partials/head.html\" \"layouts/partials/navbar.html\" \"layouts/list.html\" --watch -o ./assets/css/unocss/blog.css",

```
then update also this script

```
"dev-optimized": "run-p hugo-dev uno-app uno-blog",
```
for each new section we add script to the dev-optimized script to run it on parallel

