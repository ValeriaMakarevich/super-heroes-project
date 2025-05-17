import styled, { css } from "styled-components";

export function ModalWindow({ statusWindow, setStatusWindow, heroeInfo }) {
  const windowClose = () => {
    setStatusWindow(false);
  };

  console.log(heroeInfo);

  return (
    <ModalContainer onClick={windowClose} statusWindow={statusWindow}>
      <ButtonClose onClick={windowClose}>
        <img src="Cross.svg"></img>
      </ButtonClose>
      <Window onClick={(e) => e.stopPropagation()}>
        {heroeInfo.map((item, id) => {
          return (
          <div key={id}>
            <ImageInfo src={item.images.md}></ImageInfo>

            <ContainerInfoHeroe>
              <div>Name: {item.name}</div>
              <div>
                Gender:{" "}
                {item.appearance.gender == "-"
                  ? "Unknown"
                  : item.appearance.gender}
              </div>
              <div>
                Race:{" "}
                {item.appearance.race == null
                  ? "Unknown"
                  : item.appearance.race}{" "}
              </div>
              <div>Aliases: {item.biography.aliases.join(", ")}</div>
              <div>First Appearance: {item.biography.firstAppearance}</div>
              <div>Publisher: {item.biography.publisher}</div>
              <div>Group Affiliation: {item.connections.groupAffiliation}</div>
              <div>Work: {item.work.occupation}</div>
            </ContainerInfoHeroe>
            </div>
          );
        })}
      </Window>
    </ModalContainer>
  );
}

const active = css`
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.88);
  z-index: 10;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const close = css`
  position: fixed;
  visibility: hidden;
`;

const ModalContainer = styled.div`
  ${({ statusWindow }) => (!statusWindow ? close : active)}
`;

const Window = styled.div`
  background-color: rgb(51, 51, 51);
  padding-bottom: 3%;
  border: 2px solid rgb(189, 189, 189);
  width: 20%;
  height: 80%;
`;

const ButtonClose = styled.button`
  position: absolute;
  right: 1%;
  bottom: 95%;
  height: 40px;
  width: 50px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;
const ContainerInfoHeroe = styled.div`
  font-size: 0.6vw;
  padding-left: 2%;
  color: white;
  line-height: 1.6;
 
  > * {
border-bottom: 1px solid rgb(104, 104, 104);
}
`



const ImageInfo = styled.img`
padding: 1% 0 0 10%;
  width: 80%;
 text-align: center;
`;
