import IMG1 from '../../assets/movies.png';
import IMG2 from '../../assets/calculator.png';
import IMG3 from '../../assets/todo.png';
import IMG4 from '../../assets/weather.png';
import IMG5 from '../../assets/usemybook.png';
import IMG6 from '../../assets/draw.png';

import './Portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Movies App',
      img: IMG1,
      description:
        'Movies app that displays popular movies and movie details',
      technologies: 'React | React Router | JavaScript | CSS | TMDB API',
      link: 'https://snehageorge25.github.io/movies-app/',
      github: 'https://github.com/snehageorge25/movies-app',
    },
    {
      id: 2,
      title: 'Calcy',
      img: IMG2,
      description:
        'A React Calculator app with features like light/dark mode, live calculation and shows calculation history',
      technologies: 'React | JavaScript | CSS',
      link: 'https://snehageorge25.github.io/react-calcy/',
      github: 'https://github.com/snehageorge25/react-calcy',
    },
    {
      id: 3,
      title: 'To-Do-App',
      img: IMG3,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'React | JavaScript',
      link: 'https://snehageorge25.github.io/react-todo/',
      github: 'https://github.com/snehageorge25/react-todo',
    },
    {
      id: 4,
      title: 'Weather App',
      img: IMG4,
      description:
        'Shows live weather of the city entered',
      technologies: 'HTML | CSS | JavaScript | Open Weather API',
      link: 'https://snehageorge25.github.io/weather-app/',
      github: 'https://github.com/snehageorge25/weather-app',
    },
    {
      id: 5,
      title: 'UseMyBook',
      img: IMG5,
      description:
        'A simple and user-friendly e-commerce website to allow users to buy second-hand books and sell their used books. sell their used books. Users can filter through categories, search for book and add items to cart',
      technologies: 'HTML | CSS | Bootstrap | Flask | MySQL',
      link: 'https://github.com/snehageorge25/UseMyBook#readme',
      github: 'https://github.com/snehageorge25/UseMyBook',
    },
    {
      id: 6,
      title: "Let's Draw",
      img: IMG6,
      description:
        'A JavaScript drawing app with features like draw, undo, save and delete',
      technologies: 'JavaScript | CSS | HTML',
      link: 'https://snehageorge25.github.io/LetsDraw/',
      github: 'https://github.com/snehageorge25/LetsDraw',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
