import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import { Redirect } from "react-router-dom";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";
import MainFooter from "../components/layout/MainFooter";

const DefaultLayout = ({ children, noNavbar, noFooter }) => {

    const [isLogged, setIsLogged] = useState(null)
    const user = useSelector(state => state.user)

    useEffect(() => {
        console.log("LSKDLSKDLSD ------------ user " + JSON.stringify(user))
        if (user.id > 0) {
            console.log("LSKDLSKDLSD ------------ user id true ")
            setIsLogged(true)
        } else {
            setIsLogged(false)
        }
    }, [user])

    const teste = (src) => {
        console.log("LOGGEEDDDDDDDDD ------- isLoge " + isLogged + " " + src)
    }

    return (
        (isLogged === null) ?
            null
            :
            (!isLogged) ?
                <>
                    {teste("red")}
                    <Redirect to='/login' />
                </>
                :
                <Container fluid>
                    {teste("screen")}
                    <Row>
                        <MainSidebar />
                        <Col
                            className="main-content p-0"
                            lg={{ size: 10, offset: 2 }}
                            md={{ size: 9, offset: 3 }}
                            sm="12"
                            tag="main">
                            {!noNavbar && <MainNavbar />}
                            {children}
                            {!noFooter && <MainFooter />}
                        </Col>
                    </Row>
                </Container>
    )
}

DefaultLayout.propTypes = {
    /**
     * Whether to display the navbar, or not.
     */
    noNavbar: PropTypes.bool,
    /**
     * Whether to display the footer, or not.
     */
    noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
    noNavbar: false,
    noFooter: false
};

export default DefaultLayout;
