import styled from "styled-components"
import Option from "./option"

const InputStyle = styled.div`
width: ${(props) => props.width}% ; 
.input-group {
   box-sizing: border-box ;
  width: 100% ;
  display: flex ;
  flex-direction: column ;
  font-size: 1.8rem ;
  padding: 3% 0 3% ;
   & .input-label {
  font-size: 1.2rem;
    font-weight: 700 ;
  margin-bottom: 10px ;
  color:#808080;
 }
& select {
  width: 95% ;
  font-size: 1.5rem ;
  border-radius: 10px ;
  padding: 12px 16px;
  height: 67px ;
  border: 1px solid black ;
  margin-top: 6px ;
  
}
}
`
const optionData = [
  { id: 'mr', title: "先生" },
  { id: 'ms', title: "小姐" },
  { id: 'mx', title: "不明" },

]
function SelectInputMr(props) {
  return (
    <InputStyle width={props.width}>
      <div className="input-group">
        <div className="input-label">{props.label}</div>
        <div className="select-container">
          <select>
            <Option data={optionData} />
          </select>
        </div>
      </div>
    </InputStyle>

  )
}

export default SelectInputMr