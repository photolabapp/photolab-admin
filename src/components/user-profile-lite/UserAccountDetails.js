import React from "react";
import { useSelector } from "react-redux"
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput,
    Button
} from "shards-react";

const UserAccountDetails = ({ title }) => {

    const user = useSelector(state => state.user)

    return (
        <Card small className="mb-4">
            <CardHeader className="border-bottom">
                <h6 className="m-0">{title}</h6>
            </CardHeader>
            <ListGroup flush>
                <ListGroupItem className="p-3">
                    <Row>
                        <Col>
                            <Form>
                                <Row form>
                                    {/* First Name */}
                                    <Col md="6" className="form-group">
                                        <label htmlFor="feFirstName">Nome</label>
                                        <FormInput
                                            id="feFirstName"
                                            placeholder="First Name"
                                            value={user.name}
                                            onChange={() => { }}
                                        />
                                    </Col>
                                    {/* Email */}
                                    <Col md="6" className="form-group">
                                        <label htmlFor="feEmail">E-mail</label>
                                        <FormInput
                                            type="email"
                                            id="feEmail"
                                            placeholder="Email Address"
                                            value={user.email}
                                            onChange={() => { }}
                                            autoComplete="email"
                                        />
                                    </Col>
                                </Row>
                                <Row form>
                                    {/* Password */}
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fePassword">Senha</label>
                                        <FormInput
                                            type="password"
                                            id="fePassword"
                                            placeholder="Senha"
                                            value=""
                                            onChange={() => { }}
                                            autoComplete="current-password"
                                        />
                                    </Col>
                                    {/* Password */}
                                    <Col md="6" className="form-group">
                                        <label htmlFor="fePassword">Confirmar Senha</label>
                                        <FormInput
                                            type="password"
                                            id="feConfirmPassword"
                                            placeholder="Confirmar Senha"
                                            value=""
                                            onChange={() => { }}
                                            autoComplete="current-password"
                                        />
                                    </Col>
                                </Row>
                                <Button theme="accent">Atualizar</Button>
                            </Form>
                        </Col>
                    </Row>
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
};

UserAccountDetails.propTypes = {
    /**
     * The component's title.
     */
    title: PropTypes.string
};

UserAccountDetails.defaultProps = {
    //title: "Account Details"
};

export default UserAccountDetails;
