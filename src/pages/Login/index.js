/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import {
  FaShoppingCart,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { MdLocationPin, MdLocalPhone, MdOutlineEmail } from 'react-icons/md';
import fundo from '../../assets/img/tamplata-lanchonete.jpg';
import saboresa from '../../assets/img/saboresa.jpg';
import pizza from '../../assets/img/dia-de-pizza.jpg';
// cardapio
import pazza1 from '../../assets/img/pizza-deliciosa.png';
import pazza2 from '../../assets/img/pizza-deliciosa2.png';
import hamburguer from '../../assets/img/hamburguer-delicioso.png';
import f4 from '../../assets/img/f4.png';
import f5 from '../../assets/img/f5.png';
import f6 from '../../assets/img/f6.png';
import f7 from '../../assets/img/f7.png';
import f8 from '../../assets/img/f8.png';
import f9 from '../../assets/img/f9.png';
// about
import aboutImagi from '../../assets/img/about-img.png';
// depo
import client1 from '../../assets/img/client1.jpg';
import client2 from '../../assets/img/client2.jpg';

import { Container } from '../../style/GlobalStyles';
import {
  Fundo,
  Section,
  DivSection,
  Contact,
  Depoimentos,
  Footer,
} from './styled';

export default function Login() {
  return (
    <Container>
      <Fundo>
        <div className="fundo">
          <img src={fundo} alt="fundo" />
          <div className="div-chamada">
            <h2>Lorem ipsum dolor sit.</h2>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              omnis earum nihil sint? Quibusdam voluptatibus eaque quia debitis
              asperiores. Eos ipsa veritatis et deserunt similique sapiente
              asperiores enim dolores quia?
            </p>
            <br />
            <button type="submit">Peça agora</button>
          </div>
        </div>
      </Fundo>
      <Section>
        <div className="desconto">
          <div className="card-des">
            <div className="foto">
              <img src={saboresa} alt="saboresa" />
            </div>
            <div className="descriçao">
              <h2>quinta-feira saboresas</h2>

              <div className="desc">
                <h3>20%</h3>
                <h4>de</h4>
                <p>desconto</p>
              </div>
              <button type="submit">
                Peça agora
                <FaShoppingCart size={19} />{' '}
              </button>
            </div>
          </div>

          <div className="card-des">
            <div className="foto">
              <img src={pizza} alt="dia de pizza" />
            </div>
            <div className="descriçao">
              <h2>Dia de pizza</h2>
              <div className="desc">
                <h3>15%</h3>
                <h4>de</h4>
                <p>desconto</p>
              </div>
              <button type="submit">
                Peça agora
                <FaShoppingCart size={19} />
              </button>
            </div>
          </div>
        </div>

        {/** cardapio */}
        <section id="cardapios" className="cardapio">
          <h2>Nosso cardápio</h2>
          <div className="links-CDP">
            <a href="/#">Todos</a>
            <a href="/#">Hambúrguer</a>
            <a href="/#">pizza</a>
            <a href="/#">Massa</a>
            <a href="/#">Fritas</a>
          </div>
          <div className="card-CDP">
            <div className="CDP">
              <div className="card-f">
                <img src={pazza1} alt="pizza1" />
              </div>

              <div className="card-D">
                <h4>Nome</h4>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
              </div>
              <div className="valor">
                <p>$ 20</p>
                <div className="icons-valor">
                  {' '}
                  <FaShoppingCart />
                </div>
              </div>
            </div>{' '}
            <div className="CDP">
              <div className="card-f">
                <img src={hamburguer} alt="hamburguer" />
              </div>

              <div className="card-D">
                <h4>Nome</h4>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
              </div>
              <div className="valor">
                <p>$ 20</p>
                <FaShoppingCart />
              </div>
            </div>{' '}
            <div className="CDP">
              <div className="card-f">
                <img src={pazza2} alt="hamburguer" />
              </div>

              <div className="card-D">
                <h4>Nome</h4>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
              </div>
              <div className="valor">
                <p>$ 20</p>
                <FaShoppingCart />
              </div>
            </div>
            <div className="CDP">
              <div className="card-f">
                <img src={f4} alt="hamburguer" />
              </div>

              <div className="card-D">
                <h4>Nome</h4>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
              </div>
              <div className="valor">
                <p>$ 20</p>
                <FaShoppingCart />
              </div>
            </div>
            <div className="CDP">
              <div className="card-f">
                <img src={f5} alt="hamburguer" />
              </div>

              <div className="card-D">
                <h4>Nome</h4>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
              </div>
              <div className="valor">
                <p>$ 20</p>
                <FaShoppingCart />
              </div>
            </div>
            <div className="CDP">
              <div className="card-f">
                <img src={f6} alt="hamburguer" />
              </div>

              <div className="card-D">
                <h4>Nome</h4>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
              </div>
              <div className="valor">
                <p>$ 20</p>
                <FaShoppingCart />
              </div>
            </div>
            <div className="CDP">
              <div className="card-f">
                <img src={f7} alt="hamburguer" />
              </div>

              <div className="card-D">
                <h4>Nome</h4>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
              </div>
              <div className="valor">
                <p>$ 20</p>
                <FaShoppingCart />
              </div>
            </div>
            <div className="CDP">
              <div className="card-f">
                <img src={f8} alt="hamburguer" />
              </div>

              <div className="card-D">
                <h4>Nome</h4>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
              </div>
              <div className="valor">
                <p>$ 20</p>
                <FaShoppingCart />
              </div>
            </div>
            <div className="CDP">
              <div className="card-f">
                <img src={f9} alt="hamburguer" />
              </div>

              <div className="card-D">
                <h4>Nome</h4>
                <p>
                  Veniam debitis quaerat officiis quasi cupiditate quo, quisquam
                  velit, magnam voluptatem repellendus sed eaque
                </p>
              </div>
              <div className="valor">
                <p>$ 20</p>
                <FaShoppingCart />
              </div>
            </div>
          </div>
          <button type="submit">View More</button>
        </section>
      </Section>
      {/*  */}
      <DivSection>
        <div className="sect-About">
          <div className="photo">
            <img src={aboutImagi} alt="" />
          </div>
          <div className="text">
            <h2>We Are Feane</h2>
            <span>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which dont look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, you
              need to be sure there isnt anything embarrassing hidden in the
              middle of text. All
            </span>
            <button type="submit">Read More</button>
          </div>
        </div>
      </DivSection>
      {/*  */}
      <Contact>
        <h2>Resevar uma mesa</h2>
        <form>
          <label htmlFor="name">
            Name:
            <br />
            <input type="text" name="name" />
          </label>
          <label htmlFor="telefone">
            Telefone: <br />
            <input type="Tel" name="telefone" />
          </label>
          <label htmlFor="email">
            Email: <br />
            <input type="email" name="email" />
          </label>
          <label htmlFor="quantidade">
            Quantas pessoas: <br />
            <input min={0} max={6} type="number" name="quantidade" />
          </label>
          <label htmlFor="agenda">
            Data: <br />
            <input type="date" name="agenda" />
          </label>
          <button type="submit">Agende agora</button>
        </form>
      </Contact>
      {/*  */}
      <Depoimentos>
        <h2>O que dizem nossos clientes</h2>
        <div className="depoimentos">
          {/* <input type="radio" name="slide" id="slide1" />
          <input type="radio" name="slide" id="slide2" /> */}

          <div className="slide-pai">
            {/*  */}
            <div className="slide s1">
              {' '}
              <div className="depo">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima, assumenda tenetur voluptate eligendi impedit molestiae
                  obcaecati deserunt expedita sed modi facere consequatur quos,
                  mollitia rerum debitis doloribus vero reiciendis soluta.
                </span>
                <h3>ola</h3>
                <span>magna aliqua</span>
              </div>
              <div className="img">
                <img src={client1} alt="" />
              </div>
            </div>
            <div className="slide">
              <div className="depo">
                <span>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magnam, fugit, quidem excepturi quia reprehenderit a at porro
                  laudantium optio, laboriosam similique atque dignissimos culpa
                  omnis ab distinctio animi cupiditate. Dolorem!
                </span>
                <h3>nome</h3>
                <span>ojfdjds</span>
              </div>
              <div className="img">
                <img src={client2} alt="" />
              </div>
            </div>{' '}
          </div>

          <div className="navigation">
            <label className="bar" htmlFor="slide1" />
            <label className="bar" htmlFor="slide2" />
          </div>
        </div>
      </Depoimentos>
      <Footer>
        <div className="primy-fot">
          <div className="contact divs">
            <h2>Contate-nos</h2>
            <span>
              <MdLocationPin /> Location
            </span>
            <span>
              <MdLocalPhone />
              call +55 (81) 98123-7767
            </span>
            <span>
              {' '}
              <MdOutlineEmail /> willy3k1446d@gmail.com
            </span>
          </div>
          <div className="feane divs">
            <h2>Feane</h2>
            <span>
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </span>
            <div className="icon">
              <FaFacebook className="icons" />
              <FaTwitter className="icons" />
              <FaLinkedin className="icons" />
              <FaInstagram className="icons" />
            </div>
          </div>
          <div className="horario divs">
            <h2>horario de funcionamento</h2>
            <span>Diariamente</span>
            <span>10h00 - 22h00</span>
          </div>
        </div>
        <div className="segund-fo">
          <span>
            © 2023 Todos os direitos reservados por Free Html Templates
          </span>
          <span>©Distribuído por Willy</span>
        </div>
      </Footer>
    </Container>
  );
}
