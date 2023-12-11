import './portfolio.css';

function Portfolio() {
    return (
        <div className='portfolio-container'>

            <h1 className='title'>
                Кратко о себе... Долгое время работала специалистом по внедрению ПО и бухгалтерским расчетам.
                В 2023 году прошла курсы Веб-разработчика.
                Получила полный спектр базовых знаний для разработки сайтов
                Figma, UX/UL, HTML5,CSS3,JavaScript,Git,
                CMS,SQL,React.
            </h1>;
            <ul className='git'> ССЫЛКИ НА РЕПОЗИТОРИЙ В GITHUB.COM:
                <li >
                     Создание сайта, используя дизайн Figma в качестве макета - https://github.com/Elenushechka/figma.git
                </li>,
                <li >
                     Создание калькулятора с использованием HTML, CSS и JavaScript -https://github.com/Elenushechka/Calc.git
                </li>
            </ul>;
        </div >
    )
}

export default Portfolio;