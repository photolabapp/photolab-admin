import React, { useEffect, useState } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Form,
    Button,
} from "shards-react";
import PlabFormInput from '../../../components/PlabFormInput'
import { getCollaborator, createCollaborator } from '../../../services/Api'

import PageTitle from "../../../components/common/PageTitle";

const CreateCollaborator = (props) => {
    const [title, setTitle] = useState(null)
    const [titleButton, setTitleButton] = useState("Salvar")
    const [collaborator, setCollaborator] = useState(null)
    const [id, setId] = useState(null)
    const [isEdit, setIsEdit] = useState(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState({})

    useEffect(() => {
        const { match: { params } } = props;
        console.log("COLLLALALALA " + params.id)
        if (params.id > 0) {
            console.log("COLLLALALALA EDIT")
            setIsEdit(true)
            setId(params.id)
            setTitle("Detalhes do funcionário #" + params.id)
            setTitleButton("Atualizar")

            const fetchCollaborator = () => {
                getCollaborator(params.id)
                    .then(async response => {
                        setCollaborator(response.data)
                        setName(response.data.name)
                        setEmail(response.data.email)
                        //setPassword(response.data.password)
                        //setConfirmPassword(response.data.password)
                    })
                    .catch(error => console.log("Orders screen get orders error " + error))
            }

            fetchCollaborator()
        } else {
            setTitle("Criar funcionário")
        }
    }, [])

    const save = () => {
        let collaborator = {
            id: id,
            name: name,
            email: email,
            password: password
        }

        let errorValidate = {}

        if (isEdit && password.length > 0) {
            if (password != confirmPassword) {
                errorValidate.password = "As senhas estão diferentes"
            }
        } else if (!isEdit) {
            if (password.length === 0) {
                errorValidate.password = "Senha é obrigatória"
            }
            if (confirmPassword.length === 0) {
                errorValidate.confirmPassword = "Confirmação de senha é obrigatória"
            }
            if (!errorValidate.password && !errorValidate.confirmPassword && password != confirmPassword) {
                errorValidate.password = "As senhas estão diferentes"
            }
        }

        if (name.length === 0) {
            errorValidate.name = "Nome é obrigatório"
        }

        if (email.length === 0) {
            errorValidate.email = "E-mail é obrigatório"
        }

        if (Object.keys(errorValidate).length > 0) {
            setError(errorValidate)
        } else {
            setError({})
            createCollaborator(collaborator)
            .then(collaborator => console.log("Success!!!"))
            .catch(error => console.log("Collaborator error " + error))
        }
    }

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle title={title} subtitle="Pedido" md="12" className="ml-sm-auto mr-sm-auto" />
            </Row>
            <Row>
                <Col >
                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Cliente</h6>
                        </CardHeader>
                        <ListGroup flush>
                            <ListGroupItem className="p-3">
                                <Row>
                                    <Col>
                                        <Form>
                                            <Row form>
                                                <Col md="6" className="form-group">
                                                    <PlabFormInput
                                                        title="Nome"
                                                        id="feName"
                                                        placeholder="Nome"
                                                        value={name}
                                                        onChange={event => setName(event.target.value)}
                                                        error={error["name"]}
                                                    />
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <PlabFormInput
                                                        title="E-mail"
                                                        type="email"
                                                        id="feEmail"
                                                        placeholder="E-mail"
                                                        value={email}
                                                        onChange={event => setEmail(event.target.value)}
                                                        error={error["email"]}
                                                        autoComplete="email"
                                                    />
                                                </Col>
                                            </Row>
                                            <Row form>
                                                <Col md="6" className="form-group">
                                                    <PlabFormInput
                                                        title="Senha"
                                                        type="password"
                                                        id="fePassword"
                                                        placeholder="Senha"
                                                        value={password}
                                                        onChange={event => setPassword(event.target.value)}
                                                        error={error["password"]}
                                                    />
                                                </Col>
                                                <Col md="6" className="form-group">
                                                    <PlabFormInput
                                                        title="Confirmar Senha"
                                                        type="password"
                                                        id="feConfirmPassword"
                                                        placeholder="Confirmar Senha"
                                                        value={confirmPassword}
                                                        onChange={event => setConfirmPassword(event.target.value)}
                                                        error={error["confirmPassword"]}
                                                    />
                                                </Col>
                                            </Row>
                                            <Button onClick={save} ontheme="accent">{titleButton}</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateCollaborator
