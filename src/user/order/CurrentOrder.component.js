import React, {Component} from 'react';
import {
    Button,
    Panel,
    PanelHeader,
    PanelBody,
    MediaBox,
    PanelFooter,
    Cell, CellBody, CellFooter, Cells,
    CellHeader, Preview, PreviewHeader, PreviewItem, PreviewBody, PreviewFooter, PreviewButton, Agreement, Icon

} from 'react-weui';
import Mi from '../../resources/mi-logo.jpg';
import {Container, Row, Col} from 'react-bootstrap';
import Email from '../../resources/icons8-email-48.png';
import TEL from '../../resources/icons8-phone-60.png';
import ADDRESS from '../../resources/icons8-address-60.png';
import WEB from '../../resources/icons8-website-52.png';
import COMPANY from '../../resources/icons8-new-company-48.png';

const appMsgIcon = <img
    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAeFBMVEUAwAD///+U5ZTc9twOww7G8MYwzDCH4YcfyR9x23Hw+/DY9dhm2WZG0kbT9NP0/PTL8sux7LFe115T1VM+zz7i+OIXxhes6qxr2mvA8MCe6J6M4oz6/frr+us5zjn2/fa67rqB4IF13XWn6ad83nxa1loqyirn+eccHxx4AAAC/klEQVRo3u2W2ZKiQBBF8wpCNSCyLwri7v//4bRIFVXoTBBB+DAReV5sG6lTXDITiGEYhmEYhmEYhmEYhmEY5v9i5fsZGRx9PyGDne8f6K9cfd+mKXe1yNG/0CcqYE86AkBMBh66f20deBc7wA/1WFiTwvSEpBMA2JJOBsSLxe/4QEEaJRrASP8EVF8Q74GbmevKg0saa0B8QbwBdjRyADYxIhqxAZ++IKYtciPXLQVG+imw+oo4Bu56rjEJ4GYsvPmKOAB+xlz7L5aevqUXuePWVhvWJ4eWiwUQ67mK51qPj4dFDMlRLBZTqF3SDvmr4BwtkECu5gHWPkmDfQh02WLxXuvbvC8ku8F57GsI5e0CmUwLz1kq3kD17R1In5816rGvQ5VMk5FEtIiWislTffuDpl/k/PzscdQsv8r9qWq4LRWX6tQYtTxvI3XyrwdyQxChXioOngH3dLgOFjk0all56XRi/wDFQrGQU3Os5t0wJu1GNtNKHdPqYaGYQuRDfbfDf26AGLYSyGS3ZAK4S8XuoAlxGSdYMKwqZKM9XJMtyqXi7HX/CiAZS6d8bSVUz5J36mEMFDTlAFQzxOT1dzLRljjB6+++ejFqka+mXIe6F59mw22OuOw1F4T6lg/9VjL1rLDoI9Xzl1MSYDNHnPQnt3D1EE7PrXjye/3pVpr1Z45hMUdcACc5NVQI0bOdS1WA0wuz73e7/5TNqBPhQXPEFGJNV2zNqWI7QKBd2Gn6AiBko02zuAOXeWIXjV0jNqdKegaE/kJQ6Bfs4aju04lMLkA2T5wBSYPKDGF3RKhFYEa6A1L1LG2yacmsaZ6YPOSAMKNsO+N5dNTfkc5Aqe26uxHpx7ZirvgCwJpWq/lmX1hA7LyabQ34tt5RiJKXSwQ+0KU0V5xg+hZrd4Bn1n4EID+WkQdgLfRNtvil9SPfwy+WQ7PFBWQz6dGWZBLkeJFXZGCfLUjCgGgqXo5TuSu3cugdcTv/HjqnBTEMwzAMwzAMwzAMwzAMw/zf/AFbXiOA6frlMAAAAABJRU5ErkJggg=="/>

const CurrentOrderComponent = () => {
    return (
        <div>
            <br/>
            <Container>
                <Row className="justify-content-center">

                    {/*  <Col xs="auto" sm="auto" lg="auto" md="auto">
                            <br/>
                            <br/>
                            <img src={Logo} height={"200"} width={"200"} alt="TEST"/>
                            <br/>
                            <br/>
                        </Col>*/}
                    <Col md="12">
                        <h1 className={"text-center"}>You Are Always Safe With Safe-pay.</h1>

                    </Col>
                </Row>

                <Row className="justify-content-center">

                    <Col>

                        <Panel className={"mt-4"}>

                            <PanelHeader>
                                Merchant Details
                            </PanelHeader>
                            <PanelHeader>
                                <Row className="justify-content-center">

                                    <Col xs="12" sm="12" lg="6" md="6" className={"align-self-center"}>
                                        <div className={"text-center text-sm-center text-md-left text-lg-left"}>

                                            <h3>
                                                {/*<Icon value="success" /> */}
                                                Boswin PVT LITD </h3>
                                        </div>
                                    </Col>

                                    <Col xs="12" sm="12" lg="6" md="6" className={"align-self-center"}>
                                        <div className={"text-center text-sm-center text-md-right text-lg-right"}>
                                            <img src={Mi} className={"img-thumbnail rounded img-fluid"}/>

                                        </div>
                                    </Col>

                                </Row>
                            </PanelHeader>
                            <PanelBody>
                                <MediaBox type="small_appmsg">
                                    <Cells>
                                        <Cell>
                                            <CellHeader>
                                                <img src={COMPANY} alt=""
                                                     style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                                            </CellHeader>
                                            <CellBody>
                                                Business Category
                                            </CellBody>
                                            <CellFooter>
                                                Privet Limited company
                                            </CellFooter>
                                        </Cell>


                                        <Cell>
                                            <CellHeader>
                                                <img src={Email} alt=""
                                                     style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                                            </CellHeader>
                                            <CellBody>
                                                Email
                                            </CellBody>
                                            <CellFooter>
                                                info@boswingroup.com
                                            </CellFooter>
                                        </Cell>


                                        <Cell>
                                            <CellHeader>
                                                <img src={TEL} alt=""
                                                     style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                                            </CellHeader>
                                            <CellBody>
                                                Tel
                                            </CellBody>
                                            <CellFooter>
                                                01126564891
                                            </CellFooter>
                                        </Cell>

                                        <Cell>
                                            <CellHeader>
                                                <img src={ADDRESS} alt=""
                                                     style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                                            </CellHeader>
                                            <CellBody>
                                                Address
                                            </CellBody>
                                            <CellFooter>
                                                1213 Mandavila Road,
                                                Piiyandala,
                                                Colombo.
                                            </CellFooter>

                                        </Cell>


                                        <Cell>
                                            <CellHeader>
                                                <img src={WEB} alt=""
                                                     style={{display: `block`, width: `20px`, marginRight: `5px`}}/>
                                            </CellHeader>
                                            <CellBody>
                                                Web
                                            </CellBody>
                                            <CellFooter>
                                                www.boswingroup.com
                                            </CellFooter>

                                        </Cell>


                                    </Cells>
                                </MediaBox>
                            </PanelBody>
                            <hr className={"new2"}/>
                            <PanelHeader>
                                Item details
                            </PanelHeader>
                            <panelBody>
                                <Preview>
                                    <PreviewHeader>
                                        <PreviewItem label="Total" value="$49.99"/>
                                    </PreviewHeader>
                                    <PreviewBody>
                                        <PreviewItem label="Product" value="Name"/>
                                        <PreviewItem label="Description" value="Product Description"/>
                                        <PreviewItem label="Details"
                                                     value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. "/>
                                    </PreviewBody>
                                    <PreviewFooter style={{cursor: 'pointer'}}>
                                        <PreviewButton primary>Customize</PreviewButton>
                                        {/*<PreviewButton primary>Action</PreviewButton>*/}
                                    </PreviewFooter>
                                </Preview>
                            </panelBody>

                            <hr className={"new2"}/>
                            <PanelHeader>
                                Delivery Details
                            </PanelHeader>
                            <panelBody>
                                <Preview>
                                    <PreviewHeader>
                                        <PreviewItem label="Total" value="$49.99"/>
                                    </PreviewHeader>
                                    <PreviewBody>
                                        <PreviewItem label="Product" value="Name"/>
                                        <PreviewItem label="Description" value="Product Description"/>
                                        <PreviewItem label="Details"
                                                     value="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. "/>
                                    </PreviewBody>
                                    <PreviewFooter style={{cursor: 'pointer'}}>
                                        <PreviewButton primary>Customize</PreviewButton>
                                        {/*<PreviewButton primary>Action</PreviewButton>*/}
                                    </PreviewFooter>
                                </Preview>
                            </panelBody>
                            <PanelFooter>
                                <br/>
                                <Row className="justify-content-center">
                                    <Col>
                                        <div className={"text-center"}>

                                            <Agreement>
                                                &nbsp;&nbsp;I agree to the <a href="javascript:;">SafePay Terms and
                                                Privacy</a>
                                            </Agreement>
                                        </div>
                                    </Col>
                                </Row>


                                <Row className="justify-content-center">
                                    <Col md={4} sm={10} xs={10}>
                                        <Button>Let's Pay</Button>
                                    </Col>
                                </Row>
                            </PanelFooter>
                            <PanelFooter href="javascript:void(0);">

                                <br/>
                                <div className={"line-g"}></div>
                            </PanelFooter>

                        </Panel>
                    </Col>

                </Row>
                <br/>

                {/*  <Row className="justify-content-center">
                <Col md={{span: 6}}>
                    <Button>Let's Pay</Button>
                </Col>
            </Row>*/}

            </Container>

            <br/>

        </div>
    );
}

export default CurrentOrderComponent;
