import styled from 'styled-components';

const Login = (props) => {
    return (
        <Container>
        <content>

        <h1>Login page</h1>
        <form>
            <label>
            Email:
            <input type="email" name="email" />
            </label>
            <label>
            Password:
            <input type="password" name="password" />
            </label>
            <button>Login</button>
        </form>
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

    export default Login;