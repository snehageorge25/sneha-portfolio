import CV from '../../assets/resume_SnehaGeorge.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let&apos;s talk
      </a>
    </div>
  );
};

export default CTA;
