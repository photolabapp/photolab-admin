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

        getOrder(params.id).then(async response => {
            let order = response.data.order
            let user = await this.updateUser(order)
            let album = await this.updateAlbum(order)
            order.user = user
            order.album = album
            this.setState({ order: order })
        }).catch(error => console.log("Orders screen get orders error " + error))
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
                                                        <label htmlFor="odCliName">Nome</label>
                                                        <FormInput
                                                            id="odCliName"
                                                            placeholder="Nome"
                                                            value={this.state.order.user.name}
                                                        />
                                                    </Col>
                                                    {/* Last Name */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="odCliEmail">E-mail</label>
                                                        <FormInput
                                                            id="odCliEmail"
                                                            placeholder="E-mail"
                                                            value={this.state.order.user.email}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    {/* Email */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="odCliCellPhone">Telefone</label>
                                                        <FormInput
                                                            id="odCliCellPhone"
                                                            placeholder="Telefone"
                                                            value={this.state.order.user.cellPhone}
                                                        />
                                                    </Col>
                                                    {/* Password */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="odCliDtCreate">Data de cadastro</label>
                                                        <FormInput
                                                            id="odCliDtCreate"
                                                            placeholder="Data de cadastro"
                                                            value={this.state.order.user.dtCreate}
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
                                                        <label htmlFor="odNumberOrder">Número do pedido</label>
                                                        <FormInput
                                                            id="odNumberOrder"
                                                            placeholder="Número do pedido"
                                                            value={this.state.order.id}
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                    {/* Last Name */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="odValue">Valor</label>
                                                        <FormInput
                                                            type="number"
                                                            id="odValue"
                                                            placeholder="Valor"
                                                            value=""
                                                            onChange={() => { }}
                                                            autoComplete="email"
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    {/* Email */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="odDtCreate">Data do pedido</label>
                                                        <FormInput
                                                            id="odDtCreate"
                                                            placeholder="Data do pedido"
                                                            value={this.state.order.dtCreate}
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                    {/* Password */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="odStatus">Status</label>
                                                        <FormInput
                                                            id="odStatus"
                                                            placeholder="Status"
                                                            value={this.state.order.status}
                                                            onChange={() => { }}
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
                                                Id
                                            </th>
                                            <th scope="col" className="border-0">
                                                Nome
                                            </th>
                                            <th scope="col" className="border-0">
                                                Tipo
                                            </th>
                                            <th scope="col" className="border-0">
                                                Formato
                                            </th>
                                            <th scope="col" className="border-0">
                                                Quantidade
                                            </th>
                                            <th scope="col" className="border-0">
                                                Ver Foto
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(this.state.order != null && this.state.order.album.length > 0) ? this.state.order.album.map(album => (
                                            <tr key={album.id} >
                                                <td>{album.id}</td>
                                                <td>{album.photo}</td>
                                                <td>{album.type}</td>
                                                <td>{album.format}</td>
                                                <td>{album.quantity}</td>
                                                <td><a target="_blank" href={"http://ec2-18-234-166-48.compute-1.amazonaws.com:8080/photo/image/" + album.id}>Foto</a></td>
                                            </tr>
                                        )) : <tr></tr>}
                                    </tbody>
                                </table>
                                <a target="_blank"  href={"http://ec2-18-234-166-48.compute-1.amazonaws.com:8080/photo/images/order/" + this.state.id}>Dowload de todas as fotos</a>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>
            </Container>
        )
    }
}
