import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button
} from "shards-react";
import { getUserById, getOrderPhotosByOrderId, getOrder } from '../services/Api'

import PageTitle from "../components/common/PageTitle";

export default class OrderDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            order: null,
            id: null
        }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        this.setState({ id: params.id })

        /*
        getOrder(params.id).then(async response => {
            order = response.data
            order = await this.updateUser(order)
            order = await this.updateAlbum(order)
            this.setState({ order: order })
        }).catch(error => console.log("Orders screen get orders error " + error))
        */
    }

    updateUser = async order => {
        order.user = await getUserById(order.userId).data.user
        return order
    }
    Ò
    updateAlbum = async order => {
        order.album = await getOrderPhotosByOrderId(order.userId).data
        return order
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title={"Detalhes do pedido #" + this.state.id} subtitle="Pedido" md="12" className="ml-sm-auto mr-sm-auto" />
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
                                                    {/* First Name */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feName">Cliente</label>
                                                        <FormInput
                                                            id="feLastName"
                                                            placeholder="Last Name"
                                                            value="Brooks"
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                    {/* Last Name */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feLastName">E-mail</label>
                                                        <FormInput
                                                            id="feLastName"
                                                            placeholder="Last Name"
                                                            value="Brooks"
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    {/* Email */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feEmail">Telefone</label>
                                                        <FormInput
                                                            type="email"
                                                            id="feEmail"
                                                            placeholder="Email Address"
                                                            value="sierra@example.com"
                                                            onChange={() => { }}
                                                            autoComplete="email"
                                                        />
                                                    </Col>
                                                    {/* Password */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="fePassword">Data de cadastro</label>
                                                        <FormInput
                                                            type="password"
                                                            id="fePassword"
                                                            placeholder="Password"
                                                            value="EX@MPL#P@$$w0RD"
                                                            onChange={() => { }}
                                                            autoComplete="current-password"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>

                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Pedido</h6>
                            </CardHeader>
                            <ListGroup flush>
                                <ListGroupItem className="p-3">
                                    <Row>
                                        <Col>
                                            <Form>
                                                <Row form>
                                                    {/* First Name */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feName">Número do pedido</label>
                                                        <FormInput
                                                            id="feLastName"
                                                            placeholder="Last Name"
                                                            value="Brooks"
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                    {/* Last Name */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feLastName">Data do pedido</label>
                                                        <FormInput
                                                            id="feLastName"
                                                            placeholder="Last Name"
                                                            value="Brooks"
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    {/* Email */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feEmail">Valor</label>
                                                        <FormInput
                                                            type="email"
                                                            id="feEmail"
                                                            placeholder="Email Address"
                                                            value="sierra@example.com"
                                                            onChange={() => { }}
                                                            autoComplete="email"
                                                        />
                                                    </Col>
                                                    {/* Password */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="fePassword">Status</label>
                                                        <FormInput
                                                            type="password"
                                                            id="fePassword"
                                                            placeholder="Password"
                                                            value="EX@MPL#P@$$w0RD"
                                                            onChange={() => { }}
                                                            autoComplete="current-password"
                                                        />
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Col>
                                    </Row>
                                </ListGroupItem>
                            </ListGroup>
                        </Card>

                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className="m-0">Fotos</h6>
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">
                                                Número
                                            </th>
                                            <th scope="col" className="border-0">
                                                Usuário
                                            </th>
                                            <th scope="col" className="border-0">
                                                Data Criação
                                            </th>
                                            <th scope="col" className="border-0">
                                                Ultima atualização
                                            </th>
                                            <th scope="col" className="border-0">
                                                Status
                                            </th>
                                            <th scope="col" className="border-0">
                                                Qtd. Fotos
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(this.state.orders != null) ? this.state.orders.map(order => (
                                            <tr key={order.id} >
                                                <td>

                                                </td>
                                                <td>{(order.user) ? order.user.name : ""}</td>
                                                <td>{order.dtCreate}</td>
                                                <td>{order.dtUpdate}</td>
                                                <td>{order.status}</td>
                                                <td>{order.photos}</td>
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
}
