import React from 'react'

const Contact = () => {
    const handleClickMail = () => { window.open("mailto:carocm7224@gmail.com")};
    const handleClickPhone = () => { window.open("https://wa.me/541557553625")};

    return (
      <section id="contact">
          <div className="inner">
              <section>
                  <form action="https://formspree.io/carocm7224@gmail.com" method="POST">
                      <div className="field half first">
                          <label htmlFor="name">Nombre y Apellido</label>
                          <input type="text" name="name" id="name" />
                      </div>
                      <div className="field half">
                          <label htmlFor="email">Email</label>
                          <input type="text" name="sender" id="email" />
                      </div>
                      <div className="field">
                          <label htmlFor="message">Mensaje</label>
                          <textarea name="message" id="message" rows="6"></textarea>
                      </div>
                      <ul className="actions">
                          <li><input type="submit" value="Enviar mensaje" className="special" /></li>
                          <li><input type="reset" value="Limpiar formulario" /></li>
                      </ul>
                      <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
                  </form>
              </section>
              <section className="split">
                  <section>
                      <div className="contact-method">
                          <span className="icon alt fa-envelope"></span>
                          <h3>Email</h3>
                          <div className="a-like" onClick={handleClickMail}>carocm7224@gmail.com</div>
                      </div>
                  </section>
                  <section>
                      <div className="contact-method">
                          <span className="icon alt fa-phone"></span>
                          <h3>Teléfonos</h3>
                          <br/><div className="a-like" onClick={handleClickPhone}><b>WhatsApp:</b> 15 5755-3625</div>
                      </div>
                  </section>
                  {/*<section>*/}
                  {/*    <div className="contact-method">*/}
                  {/*        <span className="icon alt fa-home"></span>*/}
                  {/*        <div className="a-like" onClick={handleClickAddress}>*/}
                  {/*            <h3>Dirección</h3>*/}
                  {/*            <span>Dardo Rocha 1978, <br/>Of. 14 San Isidro,*/}
                  {/*              <br/> Buenos Aires</span>*/}
                  {/*        </div>*/}
                  {/*    </div>*/}
                  {/*</section>*/}
              </section>
          </div>
      </section>
    );}
export default Contact
