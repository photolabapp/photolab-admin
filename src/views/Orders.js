import React, { Component, useReducer } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import { getOrders, getUserById } from '../services/Api'

import PageTitle from "../components/common/PageTitle";

export default class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = { orders: null }
    }

    componentDidMount() {
        getOrders().then(response => {
            var orders = []
            response.data.forEach(order => {
                console.log("LOG ------ user id " + order.user_id)
                getUserById(order.user_id).then(user => {
                    console.log("LOG ------ user " + user.data.name)
                    order.user = user.data
                    orders.push(order)
                }
                ).catch(error => console.log("Orders screen get user error " + error))
            })
            this.setState({ orders: orders })
        }).catch(error => console.log("Orders screen get orders error " + error))
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="Pedidos" subtitle="" className="text-sm-left" />
                </Row>

                {/* Default Light Table */}
                <Row>
                    <Col>
                        <Card small className="mb-4">
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
                                            <tr>
                                                <td>{order.id}</td>
                                                <td>{order.user.name}</td>
                                                <td>{order.dtCreate}</td>
                                                <td>14/10/2019 13:43:00</td>
                                                <td>{order.status}</td>
                                                <td>4</td>
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
