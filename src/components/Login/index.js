import {useState} from 'react'
import Cookies from 'js-cookie'
import {useHistory, Redirect} from 'react-router-dom'
import {
  MainContainer,
  Image,
  Container,
  Heading,
  Label,
  Form,
  Button,
  Input,
  ErrorMsg,
  FormContainer,
  LoginContainer,
} from './styledComponents'

const Login = () => {
  const [user, setData] = useState('')
  const [pin, setPassData] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const history = useHistory()

  const onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})

    history.replace('/')
  }

  const onSubmitFailure = error => setErrorMsg(error)

  const onGetLogin = async event => {
    event.preventDefault()

    const userDetails = {user_id: user, pin}
    const url = 'https://apis.ccbp.in/ebank/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    if (res.ok === true) {
      onSubmitSuccess(data.jwt_token)
    } else {
      onSubmitFailure(data.error_msg)
    }
  }
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/ebank/login" />
  }
  return (
    <MainContainer>
      <Container>
        <LoginContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/ebank-login-img.png"
            alt="website login"
            className="image"
          />

          <FormContainer>
            <Form onSubmit={onGetLogin}>
              <Heading>Welcome Back!</Heading>
              <Label htmlFor="user">User ID</Label>
              <br />
              <Input
                type="text"
                placeholder="Enter Username"
                id="user"
                value={user}
                onChange={event => setData(event.target.value)}
              />
              <br />
              <Label htmlFor="password">PIN</Label>
              <br />
              <Input
                type="password"
                placeholder="Enter Password"
                id="password"
                value={pin}
                onChange={event => setPassData(event.target.value)}
              />
              <br />
              <Button type="submit">Login</Button>
            </Form>
            {errorMsg && <ErrorMsg className="error-msg">{errorMsg}</ErrorMsg>}
          </FormContainer>
        </LoginContainer>
      </Container>
    </MainContainer>
  )
}

export default Login
