import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { getOrders, getUserById } from '../services/Api'

import PageTitle from "../components/common/PageTitle";

const Orders = () => {
  getOrders().then(response => {
    response.data.map(order => {
      getUserById(order.user_id).then(user => {
        order.user = user.data
      }).catch(error => console.log("Orders screen get user error " + error))
    })
    screen(response)
  }).catch(error => console.log("Orders screen get orders error " + error))
}

const screen = (orders) => (

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
                {orders.map(order => (
                  <tr>
                    <td>{order.id}</td>
                    <td>{order.user.name}</td>
                    <td>{order.dtCreate}</td>
                    <td>14/10/2019 13:43:00</td>
                    <td>{order.status}</td>
                    <td>4</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Orders;
