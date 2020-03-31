import React from "react";
import PropTypes from "prop-types";
import {
    Card,
    CardHeader,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormGroup,
    FormInput,
    FormSelect,
    FormTextarea,
    Button
} from "shards-react";

const UserAccountDetails = ({ title }) => (
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
                                        value="Sierra"
                                        onChange={() => { }}
                                    />
                                </Col>
                                {/* Last Name */}
                                <Col md="6" className="form-group">
                                    <label htmlFor="feLastName">Sobrenome</label>
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
                                    <label htmlFor="feEmail">E-mail</label>
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
                                    <label htmlFor="fePassword">Senha</label>
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
                                <label htmlFor="feAddress">Endereço</label>
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
                                    <label htmlFor="feCity">Cidade</label>
                                    <FormInput
                                        id="feCity"
                                        placeholder="City"
                                        onChange={() => { }}
                                    />
                                </Col>
                                {/* State */}
                                <Col md="4" className="form-group">
                                    <label htmlFor="feInputState">Estado</label>
                                    <FormSelect id="feInputState">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </FormSelect>
                                </Col>
                                {/* Zip Code */}
                                <Col md="2" className="form-group">
                                    <label htmlFor="feZipCode">CEP</label>
                                    <FormInput
                                        id="feZipCode"
                                        placeholder="Zip"
                                        onChange={() => { }}
                                    />
                                </Col>
                            </Row>
                            <Row form>
                                {/* Description
                <Col md="12" className="form-group">
                  <label htmlFor="feDescription">Description</label>
                  <FormTextarea id="feDescription" rows="5" />
                </Col>
                */}
                            </Row>
                            <Button theme="accent">Atualizar</Button>
                        </Form>
                    </Col>
                </Row>
            </ListGroupItem>
        </ListGroup>
    </Card>
);

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
