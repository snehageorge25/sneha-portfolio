import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './Header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I&apos;m</h5>
        <h1>Sneha George</h1>
        <h5 className="text-light">Software Engineer</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
