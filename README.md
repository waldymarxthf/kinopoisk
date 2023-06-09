# **Начало работы**

- `создаем папку в директории basics-4 с вашим ником`
- `cd "название папки"`
- `npm init`

--------------------------------------

# Установка Parcel

- `npm install parcel --save-dev`
- `npx parcel index.html`

--------------------------------------

# Установка Eslint

```
npm i -D eslint eslint-plugin-node eslint-config-node
```
```
npx install-peerdeps --dev eslint-config-airbnb
```

- - - - - - - - - - - - - - - - - - - 
## Создание файла .eslintrc
```
echo {}> .eslintrc
```

## Настройка .eslintrc

```
{
  "extends": ["airbnb", "prettier", "plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "globals": {
    "window": true,
    "document": true,
    "localStorage": true
  },
  "rules": {
    "prettier/prettier": "error",
    "no-unused-vars": "warn",
    "no-console": "off",
    "func-names": "off",
    "no-process-exit": "off",
    "object-shorthand": "off",
    "class-methods-use-this": "off"
  }
}
```

## Настройка ESLINT для редактирования при сохранении

`Открываем settings.json и вставляем следующую команду`

```
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
},
"eslint.validate": ["javascript"],
```

--------------------------------------

# Установка **Prettier**

```
npm i -D prettier eslint-plugin-prettier eslint-config-prettier
```

- - - - - - - - - - - - - - - - - - - 

## Создание файла .prettierrc
```
echo {}> .prettierrc
```

### настройка .prettierrc
```
{
  "tabWidth": 2,
  "useTabs": true,
  "trailingComma": "all",
  "semi": true,
  "printWidth": 100
}
```
--------------------------------------
# Создание **.gitignore**
```
echo {}> .gitignore
```

## настройка .gitignore

```
*.key
*.env
```

--------------------------------------

# Структура вашей файловой директории

```
└── basics-4/                 # Папка git директории
  └── nickname/               # Ваша рабочая папка
    ├── .parcel-cache/        # Папка для работы parcel
    ├── dist/                 # Билд parcel
    ├── node-modules/         # Папка библиотек
    └── src/                  # Рабочая папка
      ├── assets/             # Папка для изображений
      ├── css/                # Папка со стилями
      ├── js/                 # Папка со скриптами
      └── index.html          # Основной файл index.html
    ├── package.json          # Основные зависимости
    ├── package-lock.json     # Содержит точные версии зависимостей
    ├── .prettierrc           # Конфиг для prettier
    ├── .eslintrc             # Конфиг для eslint
    └── .gitignore            # Конфиг для gitignore для ваших личных настроек
  ├── .gitignore              # Конфиг для gitignore
  └── README.MD               # Файл README
```
--------------------------------------

# Настройка **package.json**

- В файле `package.json` меняем эти значения

```
"source": "src/index.html",
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "parcel",
  "build": "parcel build",
  "lint": "eslint --fix .",
  "format": "prettier --write ."
}
```

## Команды

- `npm start - запускает parcel`
- `npm build - создает билд parcel`
- `npm lint - запускает eslint для всех файлов`
- `npm lint - запускает prettier для всех файлов`