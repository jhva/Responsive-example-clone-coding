import React from 'react';
import styled from 'styled-components';
import background from '../assets/background.png';
import image from '../assets/home.png';
import Button from './Button';
import { RiGroupLine } from 'react-icons/ri';

const Home = () => {
  return (
    <Section id="home">
      <div className="text">
        <h1>
          <span className="highlight">Earthium</span> is a real-time stateoric
          game
        </h1>
        <p>
          Whre you earn money,<span className="highlight">crypto</span>and
          <span className="highlight">NFT's</span> by trading land,finding
          treasures and building business. welcome!
        </p>
        <Button text="Join our Discord" icon={<RiGroupLine />} />
      </div>
      <div className="image">
        <img src={image} alt="home Image" />
      </div>
    </Section>
  );
};

export default Home;

const Section = styled.section`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 80vh;
  align-items: center;
  .image {
    img {
      width: 80%;
    }
  }
  .text {
    padding-left: 10rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    .highlight {
      color: var(--primary-color);
    }
    h1 {
      font-size: 4.8vw;
    }
    p {
      font-size: 1.5vw;
    }
  }
`;
