import "./questions.scss";

const Questions = () => {
  return (
    <section className="questions">
      <div className="questions__content">
        <h1 className="questions__content-title">
          Still have questions? <br /> Need help connecting? <br /> Write to us
          24/7!
        </h1>
        <a
          href="https://www.google.com/"
          className="questions__content-link"
          target="blank"
        >
          info@<span>world.tv</span>
        </a>
      </div>
    </section>
  );
};

export default Questions;
