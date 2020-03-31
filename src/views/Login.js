import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    ListGroup,
    ListGroupItem,
    FormInput,
    Button,
} from "shards-react";
import { Redirect } from "react-router-dom";
import { login } from '../services/Api'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState({})
    const [isLogged, setIsLogged] = useState(false)

    useEffect(() => {
        document.body.style = 'background: #31383E;';
    }, [])

    const doLogin = () => {
        console.log("LOGINNNNNNNNN -- " + JSON.stringify(email) + " password " + JSON.stringify(password))
        var errorValidate = {}
        if (email.length === 0) {
            errorValidate.email = "E-mail é obrigatório!"
        } else if (password.length === 0) {
            errorValidate.password = "Senha é obrigatório!"
        }

        if (Object.keys(errorValidate).length > 0) {
            setError(errorValidate)
        } else {
            setError({})
            console.log("LOGINNNNNNNNN -------- CALL")
            login({
                email: email,
                password: password
            }).then(user => {
                document.body.style = 'background: #F5F6F8;';
                setIsLogged(true)
                console.log("LOGINNNNNNNNN -------- success " + JSON.stringify(user))
            }).catch(error => {
                console.log("LOGINNNNNNNNN -------- error " + JSON.stringify(error))
                errorValidate = {}
                errorValidate.login = "Usuário ou senha inválido"
                setError(errorValidate)
            })
        }
    }

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return (
        (isLogged) ?
            <Redirect to='/orders' />
            :
            <div style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{ width: "30%" }}>
                    <Row>
                        <img
                            id="main-logo"
                            className=""
                            style={{ maxWidth: "160px", marginLeft: 16, marginBottom: 8 }}
                            src={require("../images/photolab-logo.png")}
                            alt="PhotoLab"
                        />
                    </Row>
                    <Row>
                        <Col >
                            <Card small className="">
                                <form>
                                    <ListGroup flush>
                                        <ListGroupItem className="p-3">
                                            {error["login"] ?
                                                <Row>
                                                    <Col>
                                                        <label style={{ color: "red", fontSize: 10 }}>{error["login"]}</label>
                                                    </Col>
                                                </Row>
                                                : null}
                                            <Row>
                                                <Col>
                                                    <Row form>
                                                        {/* First Name */}
                                                        <Col md="12" className="form-group">
                                                            <label htmlFor="lgEmail">E-mail</label>
                                                            <FormInput
                                                                id="lgEmail"
                                                                placeholder="E-mail"
                                                                value={email}
                                                                onChange={onChangeEmail} />
                                                            {error["email"] ?
                                                                <label style={{ color: "red", fontSize: 10 }}>{error["email"]}</label>
                                                                : null
                                                            }
                                                        </Col>
                                                    </Row>
                                                    <Row form>
                                                        <Col md="12" className="form-group">
                                                            <label htmlFor="lgPassword">Senha</label>
                                                            <FormInput
                                                                id="lgPassword"
                                                                placeholder="Senha"
                                                                type="password"
                                                                value={password}
                                                                onChange={onChangePassword}
                                                            />
                                                            {error["password"] ?
                                                                <label style={{ color: "red", fontSize: 10 }}>{error["password"]}</label>
                                                                : null
                                                            }
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <Button theme="accent" onClick={doLogin} style={{ width: "100%" }}>Entrar</Button>
                                                </Col>
                                            </Row>
                                        </ListGroupItem>
                                    </ListGroup>
                                </form>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
    )
}

export default Login

/*
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: {
                user: {},
                album: {}
            },
            id: null
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({ id: params.id })

        document.body.style = 'background: #31383E;';

                getOrder(params.id)
                    .then(async response => {
                        this.setState({ order: response.data })
                    })
                    .catch(error => {
                        console.log("Orders screen get orders error " + error)
                    })
    }

    updateUser = async order => {
        let res = await getUserById(order.userId)
        return await res.data.user
    }

    updateAlbum = async order => {
        let res = await getOrderPhotosByOrderId(order.id)
        return await res.data
    }

    render() {
        return (
            <div style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <div style={{ width: "30%" }}>
                    <Row>
                        <img
                            id="main-logo"
                            className=""
                            style={{ maxWidth: "160px", marginLeft: 16, marginBottom: 8 }}
                            src={require("../images/photolab-logo.png")}
                            alt="PhotoLab"
                        />
                    </Row>
                    <Row>
                        <Col >
                            <Card small className="">
                                <ListGroup flush>
                                    <ListGroupItem className="p-3">
                                        <Row>
                                            <Col>
                                                <Form>
                                                    <Row form>
                                                        }
                                                        <Col md="12" className="form-group">
                                                            <label htmlFor="lgEmail">E-mail</label>
                                                            <FormInput
                                                                id="lgEmail"
                                                                placeholder="E-mail"
                                                                value={this.state.order.user.name}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row form>
                                                        <Col md="12" className="form-group">
                                                            <label htmlFor="lgPassword">Senha</label>
                                                            <FormInput
                                                                id="lgPassword"
                                                                placeholder="Senha"
                                                                type="password"
                                                                value={this.state.order.user.email}
                                                            />
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Button theme="accent" style={{width: "100%"}}>Entrar</Button>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
*/
