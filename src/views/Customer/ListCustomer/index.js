import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import { Container, Row, Col, Card, CardBody } from "shards-react";
import { Link } from 'react-router-dom'
import { getCustomers } from '../../../services/Api'

import PageTitle from "../../../components/common/PageTitle";

import Loader from 'react-loader-spinner'

const ListCustomer = () => {

    const [customers, setCustomers] = useState(null)
    const user = useSelector(state => state.user)

    useEffect(() => {
        const fetchGetCustomers = () => {
            getCustomers(user)
            .then(async response => setCustomers(response.data))
            .catch(error => console.log("Customers list " + error))
        }
        
        fetchGetCustomers()
    }, [])

    if (customers == null) {
        return (
            <Container fluid className="main-content-container px-4">
                <Loader
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: 40 }}
                    type="Oval"
                    color="#00BFFF"
                    height={40}
                    width={40}
                    timeout={20000} //3 secs

                />
            </Container>
        )
    }

    return (
        <Container fluid className="main-content-container px-4">
            {/* Page Header */}
            <Row noGutters className="page-header py-4">
                <PageTitle sm="4" title="Clientes" subtitle="" className="text-sm-left" />
            </Row>
            
            {
            //<Link style={{ marginLeft: 10, marginBottom: 20 }} to="/collaborator/-1">Criar funcionário</Link>
            }

            {/* Default Light Table */}
            <Row>
                <Col>
                    <Card small className="mb-4">
                        <CardBody className="p-0 pb-3">
                            <table className="table mb-0">
                                <thead className="bg-light">
                                    <tr>
                                        <th scope="col" className="border-0">
                                            ID
                                        </th>
                                        <th scope="col" className="border-0">
                                            Nome
                                        </th>
                                        <th scope="col" className="border-0">
                                            E-mail
                                        </th>
                                        <th scope="col" className="border-0">
                                            Data Criação
                                        </th>
                                        <th scope="col" className="border-0">
                                            Ultima atualização
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(customers != null) ? customers.map(customer => (
                                        <tr key={customer.id} >
                                            <td>
                                                <Link to={`/customer/${customer.id}`}>{customer.id}</Link>
                                            </td>
                                            <td>{(customer.name) ? customer.name : ""}</td>
                                            <td>{(customer.email) ? customer.email : ""}</td>
                                            <td>{customer.dtCreate}</td>
                                            <td>{customer.dtUpdate}</td>
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

export default ListCustomer
