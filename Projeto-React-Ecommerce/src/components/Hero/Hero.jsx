import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroTitleText,
    HeroText  
  } from './HeroStyled.js';
  
  
  const Hero = () => {
    return (
      <div>
        <HeroContainer>
          <HeroContent>
            <HeroContentText>
              <HeroTitle>
                <HeroTitleText>CyberShop</HeroTitleText>
                <HeroTitleText>Descubra as possibilidades</HeroTitleText>
              </HeroTitle>
              <HeroText>Consiga mais com os acessórios CyberShop.</HeroText>
            </HeroContentText>
          </HeroContent>
        </HeroContainer>
      </div>
    );
  };

export default Hero;