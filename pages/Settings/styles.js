import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#87CEFA;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: center;
  align-items:center;
`;




export const Texto = styled.Text`
 color:#fff;
 font-size:20px;
 text-align:center;

`
export const ContainerButtons = styled.View`
  flex-direction:row;
  margin-top:30px;
`

export const Button = styled.TouchableOpacity`
  flex:1;
  width:100%;
  height: 60px;
  background-color: ${props => props.invert ? "#fff" : "#87CEFA"};
  border:1px solid #87CEFA;
  border-radius:5px;
  justify-content:center;
  align-items:center;
  margin-right:${props => props.invert ? "10px" : "0px"};
`

export const ButtonText = styled.Text`
  color:${props => props.invert ? "#87CEFA" : "#fff"};
  font-size:16px;
  font-weight:bold;
`
