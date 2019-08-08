import React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'




const HomeIndex = ({data}) => (
      <Layout>
          <Helmet
            title="King Boo"
            meta={[
                { name: 'description', content: 'King Boo' },
                { name: 'keywords', content: 'Perros de Raza' },
            ]}
          >
          </Helmet>

          <Banner />

          <div id="main">
              <section id="one" className="tiles">
                  <article style={{backgroundImage: `url(${data.morty1.morty1.fixed.src})`}}>
                      <header className="major">
                          <h3>York shire</h3>
                          <p>Ipsum dolor sit amet</p>
                      </header>
                      <Link to="/razas" className="link primary"></Link>
                  </article>
                  <article style={{backgroundImage: `url(${data.perro1.perro1.fixed.src})`}}>
                      <header className="major">
                          <h3>Bulldog Ingles</h3>
                          <p>feugiat amet tempus</p>
                      </header>
                      <Link to="/razas" className="link primary"></Link>
                  </article>
                  <article style={{backgroundImage: `url(${data.perro2.perro2.fixed.src})`}}>
                      <header className="major">
                          <h3>Bulldog frances</h3>
                          <p>Lorem etiam nullam</p>
                      </header>
                      <Link to="/razas" className="link primary"></Link>
                  </article>
                  <article style={{backgroundImage: `url(${data.perro3.perro3.fixed.src})`}}>
                      <header className="major">
                          <h3>Pinscher</h3>
                          <p>Nisl sed aliquam</p>
                      </header>
                      <Link to="/razas" className="link primary"></Link>
                  </article>
                  <article style={{backgroundImage: `url(${data.perro4.perro4.fixed.src})`}}>
                      <header className="major">
                          <h3>Malese bichon</h3>
                          <p>Ipsum dolor sit amet</p>
                      </header>
                      <Link to="/razas" className="link primary"></Link>
                  </article> <article style={{backgroundImage: `url(${data.perro4.perro4.fixed.src})`}}>
                      <header className="major">
                          <h3>Ovejero alemán</h3>
                          <p>Ipsum dolor sit amet</p>
                      </header>
                      <Link to="/razas" className="link primary"></Link>
                  </article>
              </section>
          </div>
      </Layout>
    );

export default HomeIndex
export const query = graphql`
    query {
        morty1: file(relativePath: { eq: "morty1.jpg" }) {
            morty1: childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        perro1: file(relativePath: { eq: "perro1.JPG" }) {
            perro1: childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        perro2: file(relativePath: { eq: "perro2.JPG" }) {
            perro2: childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        perro3: file(relativePath: { eq: "perro3.JPG" }) {
            perro3: childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        perro4: file(relativePath: { eq: "perro4.JPG" }) {
            perro4: childImageSharp {
                # Specify the image processing specifications right in the query.
                # Makes it trivial to update as your page's design changes.
                fixed(width: 125, height: 125) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`;
