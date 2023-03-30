import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: #152850;
  display: flex;
  flex-direction: column;
`
export const LoginContainer = styled.div`
  height: 70vh;
  width: 57vw;
  background-color: #e0eefe;

  border-bottom-left-radius: 10px;
  margin-top: 20vh;
`
export const Image = styled.img`
  height: 40vh;
  width: 30vw;
  margin-top: 10%;
  align-items: flex-end;
`
export const FormContainer = styled.div`
  height: 70vh;
  width: 27vw;
  border-radius: 10px;
  background-color: #ffffff;

  float: right;
  justify-content: center;
`
export const Container = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-self: center;
`
export const Heading = styled.h1`
  font-size: 28px;
  color: #183b56;
  font-weight: 500;
`
export const Label = styled.label`
  font-size: 18px;
  color: #183b56;
  font-weight: 500;
`
export const Form = styled.form`
  margin-top: 20vh;
  padding: 10px;
`
export const Input = styled.input`
  height: 40px;
  width: 25vw;
  border: 1px solid grey;
  border-radius: 8px;
`
export const Button = styled.button`
  width: 25vw;
  background-color: #1565d8;
  border-radius: 8px;
  border: 0px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin-top: 20px;
`

export const ErrorMsg = styled.p`
  align-self: center;
  color: red;
  margin-bottom: -15px;
`
