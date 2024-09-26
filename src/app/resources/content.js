import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Алексей',
    lastName:  'Шелихов',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Веб-разработчик',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Vladivostok',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['Русский', 'English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Подпишись на мой блог</>,
    description: <>Я время от времени пишу о дизайне, технологиях и делюсь мыслями о пересечении творчества и разработки.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/rackvy/',
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/shelikhov.me/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:alexey@shelikhov.me',
    },
]

const home = {
    label: 'Главная',
    title: 'Алексей Шелихов | Веб-разработчик, персональная страница',
    description: 'Занимаюсь разработкой сайтов и веб-приложений. Разрабатываю собственные продукты и веду удаленно несколько компаний. Также преподаю в ВВГУ.',
    headline: <>Разрабатываю на <span className="accent-on-background-strong">node.js</span>, <span>php</span>, <span>react.js</span>, <span>1C-Битрикс</span> уже более 14 лет</>,
    subline: <>Веб-разработчик, руководитель разработки в студиях FEIDA, slim.technology и chocomilk.ru и преподователь ВВГУ.</>,
    partners: [
        {
            src: '/images/partners/tefi.png',
            alt: 'ТЭФИ'
        },
        {
            src: '/images/partners/abro.svg',
            alt: 'ABRO'
        },
        {
            src: '/images/partners/transgas.svg',
            alt: 'Трансгаз'
        },
        {
            src: '/images/partners/ame.png',
            alt: 'AME'
        },
        {
            src: '/images/partners/dolshik.svg',
            alt: 'ДОльщик Онлайн'
        },
        {
            src: '/images/partners/alfacar.svg',
            alt: 'Альфа-кар'
        },
        {
            src: '/images/partners/chilima.svg',
            alt: 'chilima'
        },
        {
            src: '/images/partners/ikra.svg',
            alt: 'ikra'
        },
        {
            src: '/images/partners/ista.png',
            alt: 'ISTA'
        },
        {
            src: '/images/partners/karousel.svg',
            alt: 'Карусель'
        },
        {
            src: '/images/partners/keep.svg',
            alt: 'KEEP'
        },
        {
            src: '/images/partners/prcvlad.svg',
            alt: 'PRIORITY'
        },
        {
            src: '/images/partners/sanas.svg',
            alt: 'SANAS'
        },
        {
            src: '/images/partners/villagepark.svg',
            alt: 'villagepark'
        },
        {
            src: '/images/partners/xone.png',
            alt: 'KEEP'
        },
        {
            src: '/images/partners/zatolux.svg',
            alt: 'KEEP'
        },
        {
            src: '/images/partners/zoodom.svg',
            alt: 'KEEP'
        }
    ]
}

const about = {
    label: 'Обо мне',
    title: 'Обо мне | Алексей Шелихов - Веб-разработчик, персональная страница',
    description: 'АЛексей Шелихов - биография, рабочий опыт и кейсы',
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Введение',
        description: <>🖐 Приветствую, меня зовут Алексей Шелихов.<br />Программированием занимаюсь со школы, веб-разработкой с 2011 года. Делаю упор на Back-end, но Front-end без внимание не остается.<br /><br />Основной стек для работы: Express.js и Next.js.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Личные проекты',
        experiences: [
            {
                company: 'Simple Platform',
                timeframe: '2020 - 2022',
                role: 'Руководитель разработки, Full-stack разработчик',
                achievements: [
                    <>Удобная платформа для создания интернет магазина. Стек технологий: NodeJS, Express, PosrgreSQL, Handlebars.js, Bootstrap V5</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/simple.jpg',
                        alt: 'Simple Platform',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Чек-лист web-дизайнера',
                timeframe: '2019 - По настоящее время',
                role: 'Руководитель разработки, Full-stack разработчик',
                achievements: [
                    <>В Чек-лист web-дизайнера представлены лучшие практики UI и UX для доступного, функционального и готового к работе дизайна. Подходит для дизайнеров от младшего до старшего.</>,
                    <>Этот проект не приследует коммерческой цели, служит подсказкой для меня и остальных посетителей.</>,
                    <><a href="http://design.shelikhov.me/" target="_blank">Посетить сайт</a></>
                ],
                images: [
                    {
                        src: '/images/projects/project-01/site1.jpg',
                        alt: 'Чек-лист web-дизайнера',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'My Aims Life',
                timeframe: '2019 - 2021',
                role: 'Руководитель разработки, Full-stack разработчик',
                achievements: [
                    <>Сайт, который помогает правильно ставить цель. Прогресс цели можно отследить с помощью удобного интерфейса</>,
                    <>На этом проекте написал собственный фреймворк на php с использованием ООП и MVC.</>,
                    <>Проект закрыт.</>,
                ],
                images: [
                    {
                        src: '/images/projects/project-01/site2.jpg',
                        alt: 'My Aims Life',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Участие в проектах',
        institutions: [
            {
                name: 'FEIDA',
                description: <>С 2020 года нахожусь на позиции Tech-lead в студии FEIDA. Федеральная студия с Дальнего Востока, клиенты средик которых: SBER, Трансгаз, Карусель Парк, Village Park, Pandoroom, Supreme</>,
            },
            {
                name: 'ZEVS Parts',
                description: <>C 2018 по 2020 участвовал в разработке сайта repareparts.ru. Самописный движок на php, поиск запчастей по ОЕМ, кросс-номера и подбор по номеру кузова.</>,
            },
            {
                name: 'Bonjour DV',
                description: <>C 2015 по 2018 участвовал в разработке сайта bonjour-dv.ru. Сайт работал на 1С-Битрикс: Управление сайтом, первым делом развивал обмен между сайтом и складом для актуализации остатков. Доработка бизнес-процессов между магазинами, интернет-магазином и складом. </>,
            },
            {
                name: '3dots',
                description: <>C 2013 по 2015 работал на позиции веб-разработчик в студии "3 точки". Были разработаны разной сложности сайты, в основном на 1С-Битрикс.</>,
            },
            {
                name: 'ABRO ind.',
                description: <>C 2009 по 2013 работал на позиции веб-разработчик в компании АБРО Индастрис (Входит в холдинк компаний). Помимо основного сайта, были разработаны сайты для компании 888онлайн, которая занималась привозом товаров с ТаоБао, Яху и Т-молл. Были написаны парсеры и граберы для отображения товаров, которые переводились для клиента.</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Скилл',
        skills: [
            {
                title: 'Express.js',
                description: <>Express.js + Sequlize.</>,
                images: []
            },
            {
                title: 'Next.js',
                description: <>Next.js v.14</>,
                images: []
            },
            {
                title: 'Symfony',
                description: <>Symfony v.5 - 6, Doctrine ORM, Composer, Twig</>,
                images: []
            },
            {
                title: '1С-Битрикс',
                description: <>D7, API Битрикс, кастомизация шаблонов, компонентов и модулей, highload блоки</>,
                images: []
            },
        ]
    }
}

const blog = {
    label: 'Блог',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Портфолио',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };