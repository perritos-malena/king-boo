import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import experience from '../assets/images/morty1.jpg'
import finSth from '../assets/images/morty1.jpg'
import safety from '../assets/images/morty1.jpg'
import team from '../assets/images/morty1.jpg'
import career from '../assets/images/morty1.jpg'

const About = () => (
  <Layout>
    <Helmet>
      <title>Sobre Nosotros - King Boo</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>Nuestros valores fundamentales</h2>
          </header>
          <p>
            <b>Por encima de todo... más allá de techos</b><br/>
            Un techo es algo más que un refugio. Un techo ofrece un enorme potencial y una gran variedad de oportunidades.
            Puede ser un compromiso con el medio ambiente. Una oportunidad para innovar. Una fuente de energía.
            Una ventaja para ser atendido. Nuestros Valores Fundamentales en TechoMax nos guian mientras dirigimos la industria
            hacia adelante y continuar ofreciendo a nuestros clientes los productos y servicios de primera clase que excedan sus expectativas.
          </p>
          <ul className="actions">
            <li><Link to="/" className="button">Ver más</Link></li>
          </ul>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/about/experience" className="image">
            <img src={experience} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Experiencia</h3>
              </header>
              <p>
                Conocimiento sin igual, recursos y habilidad.
              </p>
              <ul className="actions">
                <li><Link to="/" className="button">Ver más</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/about/safety" className="image">
            <img src={safety} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Seguridad</h3>
              </header>
              <p>
                En TechoMax, la seguridad en el lugar de trabajo es nuestra prioridad.
              </p>
              <ul className="actions">
                <li><Link to="/" className="button">Ver más</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/about/finance" className="image">
            <img src={finSth} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Fortaleza financiera</h3>
              </header>
              <p>
                La fuerza que necesita de una compañía de impermeabilizaciones.
              </p>
              <ul className="actions">
                <li><Link to="/" className="button">Ver más</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/about/team" className="image">
            <img src={team} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Equipo de Gestión</h3>
              </header>
              <p>
                El equipo de gestión TechoMax se compone de algunos de los nombres más talentosos y con experiencia en la industria del techado e impermeabilización.
              </p>
              <ul className="actions">
                <li><Link to="/" className="button">Ver más</Link></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/about/career" className="image">
            <img src={career} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Carrera en TechoMax</h3>
              </header>
              <p>
                ¿Has pensado en una carrera en la industria de la impermeabiliación?
                La industria está viendo cambios muy interesantes en tecnologías sustentables sostenible para techos,
                tecnologías innovadoras y más. TechoMaxLatinoamerica está liderando el cambio.
              </p>
              <ul className="actions">
                <li><Link to="/" className="button">Ver más</Link></li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>

  </Layout>
)

export default About
