import styled from "styled-components";
import { useEffect, useState, useRef } from "react";

export function FilterDropdown({ options, handleChange }) {
  const [valueInput, setValueInput] = useState(options[0].placeholder);
  const [openDropDown, setOpenDropDown] = useState(false);
  const [buttonChevron, setButtonChevron] = useState("ChevronDownSmall.svg");
  const refOpen = useRef();
  useEffect(() => {
    const clickOpen = (event) => {
      if (
        openDropDown &&
        refOpen.current &&
        !refOpen.current.contains(event.target)
      ) {
        setOpenDropDown(false);
        setButtonChevron("ChevronDownSmall.svg");
      }
    };
    document.addEventListener("mousedown", clickOpen, replaceButtonFilter);

    return () => {
      document.removeEventListener("mousedown", clickOpen, replaceButtonFilter);
    };
  }, [openDropDown]);

  const replaceButtonFilter = () => {
    if (buttonChevron == "ChevronDownSmall.svg") {
      setButtonChevron("ChevronUpSmall (1).svg");
    } else if (buttonChevron == "Cross (1).svg") {
      setValueInput(options[0].placeholder);
    }
  };

  return (
    <>
      <DropdownContainer>
        
        <DropdownValue
          type="text"
          onClick={() => {
            setOpenDropDown((prev) => !prev);
          }}>

          {valueInput}

          <ButtonFilter
            ref={refOpen}
            onClick={() => {
              replaceButtonFilter();
              setButtonChevron("ChevronUpSmall (1).svg");
            }}
            src={buttonChevron}></ButtonFilter>

        </DropdownValue>

        {openDropDown && (
          <DropdownOptions ref={refOpen}>
            {options.map((item, id) => {
              if (id > 0) {
                return (
                  <DropdownOption
                    onClick={() => {
                      setValueInput(item.status);
                      setButtonChevron("Cross (1).svg");
                      setOpenDropDown(false);
                    }}
                    key={item.id}
                  >
                    <ButtonOption onClick={handleChange} value={item.status}>
                      {item.status}
                    </ButtonOption>
                  </DropdownOption>
                );
              }
            })}
          </DropdownOptions>
        )}

      </DropdownContainer>
    </>
  );
}

const DropdownContainer = styled.div`

  color: rgb(124, 124, 124);
  height: 200px;
  padding-bottom
`;

const DropdownValue = styled.div`
  display: flex;
  justify-content: start;
  gap: 170px;
  border: rgb(173, 30, 30) 3px solid;
  width: 250px;
  height: 35px;
  border-radius: 7px;
  margin-bottom: 5px;
  padding: 13px 0 0 3px;
  background: rgb(56, 56, 56);
  &:hover {
    background: rgb(95, 95, 95);
    color: rgb(255, 255, 255);
  }
`;


const ButtonFilter = styled.img`
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

const DropdownOptions = styled.div`
  display: block;
  width: 255px;
  border-radius: 7px;
  overflow: hidden;
  background: rgb(56, 56, 56);
`;

const DropdownOption = styled.div`
  height: 40px;
  padding: 10px 3px 5px 3px;
  &:hover {
    background: rgba(185, 67, 67, 0.78);
  }
`;

const ButtonOption = styled.button`
  height: 40px;
  width: 250px;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  font-size: 16px;
  color: rgb(124, 124, 124);
  text-align: left;
  cursor: pointer;
  &:hover {
    color: rgb(255, 255, 255);
  }
`;
