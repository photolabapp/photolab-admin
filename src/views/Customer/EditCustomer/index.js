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
    CardBody
} from "shards-react";
import { Link } from 'react-router-dom'
import PlabFormInput from '../../../components/PlabFormInput'
import { getCustomer, getAddressByCustomer, updateCustomer, getCardsByCustomer } from '../../../services/Api'

import PageTitle from "../../../components/common/PageTitle";

const EditCustomer = (props) => {
    const { match: { params } } = props;

    const [customer, setCustomer] = useState(null)
    const [listAddress, setListAddress] = useState(null)
    const [cards, setCards] = useState(null)
    const [id, setId] = useState(null)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState({})

    useEffect(() => {
        console.log("COLLLALALALA " + params.id)
        if (params.id > 0) {
            console.log("COLLLALALALA EDIT")
            setId(params.id)

            const fetchUser = () => {
                getCustomer(params.id)
                    .then(async response => {
                        setCustomer(response.data.user)
                        setName(response.data.user.name)
                        setEmail(response.data.user.email)

                        console.log("SLDLS<DLSD<S ================ customer " + JSON.stringify(customer))

                        getAddressByCustomer(params.id)
                            .then(response => setListAddress(response.data))
                            .catch(error => console.log("Customers address list " + error))

                        getCardsByCustomer(params.id)
                            .then(response => setCards(response.data))
                            .catch(error => console.log("Customers address list " + error))
                    })
                    .catch(error => console.log("Customer edit screen error " + error))
            }

            fetchUser()
        }
    }, [])

    const save = () => {
        let customer = {
            id: id,
            name: name,
            email: email,
            password: password
        }

        let errorValidate = {}

        if (password.length === 0) {
            errorValidate.password = "Senha é obrigatória"
        }

        if (confirmPassword.length === 0) {
            errorValidate.confirmPassword = "Confirmação de senha é obrigatória"
        }

        if (!errorValidate.password && !errorValidate.confirmPassword && password != confirmPassword) {
            errorValidate.password = "As senhas estão diferentes"
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
            updateCustomer(customer)
                .then(customer => console.log("Success!!!"))
                .catch(error => console.log("Customer edit error " + error))
        }
    }

    return (
        <Container fluid className="main-content-container px-4">
            <Row noGutters className="page-header py-4">
                <PageTitle title={"Detalhes do funcionário #" + params.id} subtitle="Pedido" md="12" className="ml-sm-auto mr-sm-auto" />
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
                                            <Button onClick={save} ontheme="accent">Atualizar</Button>
                                        </Form>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>

                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Endereços</h6>
                        </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">
                                                Id
                                            </th>
                                            <th scope="col" className="border-0">
                                                Endereço
                                            </th>
                                            <th scope="col" className="border-0">
                                                Cep
                                            </th>
                                            <th scope="col" className="border-0">
                                                Cidade/Estado
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(listAddress != null && listAddress.length > 0) ? listAddress.map(address => (
                                            <tr key={address.id} >
                                                <td>
                                                    <Link to={`/customer/address/${address.id}`}>{address.id}</Link>
                                                </td>
                                                <td>{address.address}</td>
                                                <td>{address.cep}</td>
                                                <td>{address.city + "/" + address.state}</td>
                                            </tr>
                                        )) : <tr></tr>}
                                    </tbody>
                                </table>
                        </CardBody>
                    </Card>

                    <Card small className="mb-4">
                        <CardHeader className="border-bottom">
                            <h6 className="m-0">Cartões</h6>
                        </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">
                                                Id
                                            </th>
                                            <th scope="col" className="border-0">
                                                Número
                                            </th>
                                            <th scope="col" className="border-0">
                                                Bandeira
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(cards != null && cards.length > 0) ? cards.map(card => (
                                            <tr key={card.id} >
                                                <td>
                                                    <Link to={`/customer/creditCard/${card.id}`}>{card.id}</Link>
                                                </td>
                                                <td>{card.number}</td>
                                                <td>{card.brand}</td>
                                            </tr>
                                        )) : <tr></tr>}
                                    </tbody>
                                </table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default EditCustomer
