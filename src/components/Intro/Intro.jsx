import ME from '../../assets/me.jpeg';
import './Intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          
          <p>Hi there! I&apos;m a experienced Software Engineer with a focus on frontend development. It&apos;s a pleasure to meet you! I hold a Bachelor of Engineering degree and have excelled throughout my academic journey. With over 1 year of industry experience, I have honed my skills in HTML, CSS, JavaScript, ReactJS, and other essential frontend technologies. Additionally, I am well-versed in Python, Flask, MySQL, and MongoDB. I have a genuine passion for continuous learning and exploring new opportunities in this ever-evolving field. Alongside my technical expertise, I possess effective communication skills and a creative side that enjoys sketching and crafting.  Welcome to my portfolio website, where we can connect and collaborate to create something remarkable together!</p>
          <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro