import {
    Panel,
    PanelBody,
    PanelHeader,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    PanelFooter,
    FormCell,
    CellHeader,
    Label,
    CellBody,
    CellFooter,
    Icon,
    ButtonArea
} from 'react-weui';
import facebook from '../../resources/facebook.svg';
import google from '../../resources/google.svg';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {Col, Container, Row, Tooltip} from "react-bootstrap";

const LoginComponent = () => {
    return (
        <div>
            {/*Login
                <br/>
                <a className="btn btn-block social-btn google"
                   href={process.env.REACT_APP_FACEBOOK_PAY_GOOGLE_AUTH_URL}>Google</a>
                <button onClick={() => {
                    console.log("Login with google");
                }}>Login with google
                </button>*/}
            <Container>
                <br/>
                <br/>
                <Row className="justify-content-center">
                    <Col xs="auto" sm="auto" lg="7" md="auto">
                        <Panel>
                            <PanelHeader>
                                Login with social media.
                            </PanelHeader>
                            <PanelBody>
                                <MediaBox type="appmsg" href={process.env.REACT_APP_FACEBOOK_PAY_FACEBOOK_AUTH_URL}>
                                    <MediaBoxHeader><img src={facebook} style={{
                                        margin: 'auto',
                                        display: 'block'
                                    }} alt=""/></MediaBoxHeader>
                                    <MediaBoxBody>
                                        <MediaBoxTitle>Login With Facebook</MediaBoxTitle>
                                        <MediaBoxDescription>
                                            You can login with us using your google account.
                                        </MediaBoxDescription>
                                    </MediaBoxBody>
                                </MediaBox>
                                <MediaBox type="appmsg" href={process.env.REACT_APP_FACEBOOK_PAY_GOOGLE_AUTH_URL}>
                                    <MediaBoxHeader><img src={google} style={{
                                        margin: 'auto',
                                        display: 'block'
                                    }} alt=""/></MediaBoxHeader>
                                    <MediaBoxBody>
                                        <MediaBoxTitle>Login With Google</MediaBoxTitle>
                                        <MediaBoxDescription>
                                            You can login with us using your google Google.
                                        </MediaBoxDescription>
                                    </MediaBoxBody>
                                </MediaBox>
                            </PanelBody>
                            <PanelFooter href="javascript:void(0);">
                                <br/>
                                {/*<div className={"line-g"}></div>*/}
                            </PanelFooter>
                        </Panel>
                        <Panel>
                            <form action="" autoComplete={"on"}>

                                <PanelHeader>
                                    Login with mobile number.
                                </PanelHeader>
                                <PanelBody>

                                    <FormCell>

                                        <CellHeader>
                                            <Label>Phone</Label>
                                        </CellHeader>
                                        <CellBody>
                                            <input autoFocus={true} autoComplete={"on"} type="tel" required={true}
                                                   className={"weui-input"}
                                                   placeholder="Telephone number (+94771234567)"/>

                                        </CellBody>
                                        <CellFooter>
                                            <OverlayTrigger
                                                placement={"top"}
                                                overlay={
                                                    <Tooltip id={`97ce9456-683a-4f6d-8076-22ee9f99187b`}>
                                                        Switch Account
                                                    </Tooltip>
                                                }>
                                                <Icon value="warn"/>

                                            </OverlayTrigger>

                                        </CellFooter>

                                    </FormCell>


                                </PanelBody>
                                <PanelFooter>

                                    <ButtonArea>
                                        <button type="submit" className={"weui-btn weui-btn_primary"}>Let's join
                                        </button>
                                    </ButtonArea>
                                    <br/>
                                </PanelFooter>
                            </form>
                        </Panel>

                    </Col>


                </Row>
            </Container>
        </div>
    );
}

export default LoginComponent;