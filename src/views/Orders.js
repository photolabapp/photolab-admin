import React, { Component } from "react";
import { Container, Row, Col, Card, CardBody } from "shards-react";
import { getOrders, getUserById } from '../services/Api'

import PageTitle from "../components/common/PageTitle";

export default class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = { orders: null }
    }

    componentDidMount() {
        getOrders().then(async response =>
            this.setState({ orders: await this.updateUser(response.data) })
        ).catch(error => console.log("Orders screen get orders error " + error))
    }

    updateUser = async (orders) => {
        var updateOrders = []
        for (const [order] of orders.entries()) {
            order.user = await this.getUser(order.userId)
            updateOrders.push(order)
        }

        return updateOrders
    }

    getUser = async (userId) => {
        let res = await getUserById(userId);
        return await res.data.user;
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
                                            <tr key={order.id}>
                                                <td>{order.id}</td>
                                                <td>{order.user.name}</td>
                                                <td>{order.dtCreate}</td>
                                                <td>{order.dtUpdate}</td>
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
