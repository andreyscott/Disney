import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
        <content>
        <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' alt="logo"/>
        <SignUp>GET SOME THERE</SignUp>
        <Description> Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1. </Description>
            <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>

<BgImage />
        <h1>Login page</h1>
        </content>
        </Container>
    );
    }

const Container = styled.div`
    display: flex;
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const content = styled.div`
   margin-bottom: 10vw;
   width: 100%;
   position: relative;
   min-height: 100vh;
   box-sizing: border-box;
   display: flex;
   justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f5f5f5;
    padding:  80px 40px;
    height: 100%;

`;

const BgImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: top, cover, no-repeat;
    background-image: url("https://www.streamingrant.com/wp-content/uploads/2021/06/40-best-disney-plus-shows.jpg");
    z-index: -2;
`;

const CTA = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    margin-bottom: 2vw;
    max-width: 650px;
    min-height: 100vh;
    margin-left: auto;
    margin-right: auto;
    margin-top:  0;
    transition-timing-function: ease-in-out;
    transition: opacity 0.2s;
    width: 100%;

    `; 

    const CTALogoOne = styled.img`
    display: block;
    max-height: auto;
    min-height: 1px;
    margin-bottom: 12px;
    max-width: 600px;
    width: 100%;
    `;

    const SignUp = styled.a`
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #f9f9f9;
    text-align: center;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    padding: 16px 0;
    border: 1px solid transparent;
    border-radius: 4px;
    transition: all 0.2s;

    &:hover {
        background-color: #0483ee;
        border: 1px solid #0063e5;
        cursor: pointer;
    }

    `;
    const  Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
  width: 100%;
`;

    export default Login;