import Container from './Container';
import FadeIn from './FadeIn';

function Section({ id, title, description, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <Container>
        <FadeIn className="mb-10 md:mb-12">
          <h2 className="section-title">{title}</h2>
          {description ? <p className="section-description">{description}</p> : null}
        </FadeIn>
        {children}
      </Container>
    </section>
  );
}

export default Section;
