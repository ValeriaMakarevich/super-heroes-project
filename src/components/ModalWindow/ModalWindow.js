import styled, { css } from 'styled-components';



export function ModalWindow({statusWindow, setStatusWindow}) {
  const windowClose= () => {
    setStatusWindow(false)
  }

  return (
    <ModalContainer onClick={windowClose} statusWindow={statusWindow}>
      <Window>
      <ButtonClose>

      </ButtonClose>
      </Window>
    </ModalContainer>
  );
}

const active = css`
 position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

`

const close = css`
position: fixed;
visibility:  hidden;
`

const ModalContainer = styled.div`
  ${({ statusWindow }) => (!statusWindow  ? close : active)}
`;

const Window = styled.div`
  background-color: white;
  width: 600px;
  height: 700px;
`;

const ButtonClose = styled.button`
height: 40px;
width: 50px;
`
