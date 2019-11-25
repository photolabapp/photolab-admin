import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Card,
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

import PageTitle from "../components/common/PageTitle";

export default class OrderDetail extends Component {
    constructor(props) {
        super(props);

        this.state = { order: null }
    }

    componentDidMount() {
        const { match: { params } } = this.props;
        console.log("SLDKSLDKSLD --- order id " + params.id)
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle title="Detalhes do pedido" subtitle="Pedido" md="12" className="ml-sm-auto mr-sm-auto" />
                </Row>
                <Row>
                    <Col >
                        <Card small className="mb-4">
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
                                                <FormGroup>
                                                    <label htmlFor="feAddress">Numero do pedido</label>
                                                    <FormInput
                                                        id="feAddress"
                                                        placeholder="Address"
                                                        value="1234 Main St."
                                                        onChange={() => { }}
                                                    />
                                                </FormGroup>
                                                <Row form>
                                                    {/* City */}
                                                    <Col md="6" className="form-group">
                                                        <label htmlFor="feCity">City</label>
                                                        <FormInput
                                                            id="feCity"
                                                            placeholder="City"
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                    {/* State */}
                                                    <Col md="4" className="form-group">
                                                        <label htmlFor="feInputState">State</label>
                                                        <FormSelect id="feInputState">
                                                            <option>Choose...</option>
                                                            <option>...</option>
                                                        </FormSelect>
                                                    </Col>
                                                    {/* Zip Code */}
                                                    <Col md="2" className="form-group">
                                                        <label htmlFor="feZipCode">Zip</label>
                                                        <FormInput
                                                            id="feZipCode"
                                                            placeholder="Zip"
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                </Row>
                                                <Row form>
                                                    {/* Description */}
                                                    <Col md="12" className="form-group">
                                                        <label htmlFor="feDescription">Description</label>
                                                        <FormTextarea id="feDescription" rows="5" />
                                                    </Col>
                                                </Row>
                                                <Button theme="accent">Update Account</Button>
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
}
