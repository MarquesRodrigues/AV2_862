import styled from 'styled-components/native';

export const Container = styled.View`
  background-color:#87CEFA;
  flex:1;
  padding:10px 10px 0px 10px;
  flex-direction:column;
  justify-content: flex-end;
  align-items:center;
`;

export const CaixaLogin = styled.View`
  height:54%;
  width:95%;
  background-color:#fff;
  border-top-right-radius:25px;
  border-top-left-radius:25px;
  padding:17px;
`;


export const ContainerBotoes = styled.View`
 flex-direction:row;

`;
export const Botao = styled.TouchableOpacity`
  border-bottom-width:4px;
  border-bottom-color:${props => props.lastClick ? "#87CEFA" : "#fff"};
  height:60px;
  margin: 0px 5px;
  flex:1;
  justify-content:center;
  align-items:center;

`
export const BotaoTexto = styled.Text`
  font-size:20px;
  color:${props => props.lastClick ? "#673f66" : "#ccc"};
`



export const Input = styled.TextInput`
  border:1px solid #ccc;
  height:65px;
  margin-top:5px;
  border-radius:5px;
  padding: 0 20px;
`
export const InputTexto = styled.Text`
  margin-top:20px;
  color:#b4b8c6;
  
`

export const ButtonForgot = styled.TouchableOpacity`
  width:100%;
  background-color:#ffffff;
  justify-content:center;
  align-items:center;
  margin-top:30px;
  `

export const ForgotPassword = styled.Text`
  color:#87CEFA;
  font-size:14px;
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

export const Logo = styled.View`
 flex:1;
 justify-content:center;
 align-items:center;
`
export const CaixaTextoChamada = styled.View`
 flex:1;
 justify-content:center;
 align-items:center;
`

export const TextoChamada = styled.Text`
 color:#fff;
 font-size:20px;
 text-align:center;

`

export const TextoGrupou = styled.Text`
 font-weight:bold;
`
