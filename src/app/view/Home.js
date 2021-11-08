import React from "react";
import {useHistory} from "react-router";
import { Link } from "react-router-dom";
import { 
    Button, 
    Col, 
    Row,
    Typography,
    Input,
    InputNumber,
    Select,
    Space,
    Divider,
    Checkbox,
    Form
} from "antd"

const Home = () => {
    const history = useHistory();

    const clickCheckbox = (e, field) => {
        console.log(field);
    }

    return (
        <div className="home-container">
            <Row>
                <Col className="gutter-row" span="24">
                    <Typography.Title level={2} className="main-title">Match Creation</Typography.Title>
                </Col>
            </Row>
            <Space direction="vertical" size={16} className="w-100 main-content">
                <Row gutter={[16, 10]} justify="start">
                    <Col xs={24} sm={12}>
                        <Input addonBefore="API Key"/>
                    </Col>
                    <Col xs={24} sm={12}>
                        <Button type="primary" className="create-match">Create Match</Button>
                    </Col>
                </Row>
                <Divider style={{ margin: "5px 0" }}></Divider>
                <Form
                    labelCol={{ md: {span: 12}, sm: {span: 24} }}
                    wrapperCol={{ span: 12 }}
                >
                    <Row gutter={16} justify="start">
                        <Col md={{span: 12}} sm={{span: 24}}>
                            <Form.Item 
                                label="Home Team Name" 
                                labelAlign="left"
                                labelCol={{ md: {span: 12}, sm: {span: 24} }}
                                wrapperCol={{ md: {span: 12}, sm: {span: 24} }}
                            >
                                <Input className="w-100"/>
                            </Form.Item>
                            <Form.Item 
                                label="Away Team Name" 
                                labelAlign="left"
                                labelCol={{ md: {span: 12}, sm: {span: 24} }}
                                wrapperCol={{ md: {span: 12}, sm: {span: 24} }}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col md={{span: 6}} sm={{span: 12}} xs={{span: 24}}>
                            <Form.Item 
                                label="Is Multibet Match?" 
                                labelCol={{ md: {span: 12}, sm: {span: 24} }}
                                wrapperCol={{ md: {span: 12}, sm: {span: 24} }}
                                colon={false}
                            >
                                <Checkbox />
                            </Form.Item>
                        </Col>
                        <Col md={{span: 6}} sm={{span: 12}} xs={{span: 24}}>
                            <Form.Item 
                                label="Match ID" 
                                labelCol={{ md: {span: 12}, sm: {span: 24} }}
                                wrapperCol={{ md: {span: 12}, sm: {span: 24} }}
                                labelAlign="left"
                            >
                                <InputNumber min={1} max={5} className="w-100"/>
                            </Form.Item>
                            <Form.Item 
                                label="Best of" 
                                labelCol={{ md: {span: 12}, sm: {span: 24} }}
                                wrapperCol={{ md: {span: 12}, sm: {span: 24} }}
                                labelAlign="left"
                            >
                                <Select>
                                    <Select.Option value="3">3</Select.Option>
                                    <Select.Option value="5">5</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Divider style={{ margin: "5px 0" }}></Divider>
                    <Row gutter={16} justify="start">
                        <Col lg={{span: 12}} md={{span: 24}} className="w-100 variables-require">
                            <Form.Item label="MATCH_WINNER" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="TOTAL_GAMES_IN_SET_PLAYERS" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="TOTAL_GAMES_IN_SET_PLAYERS" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="SET_EXCEEDS_SCORE_LIMIT" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="ANY_SET_TO_NIL" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="TO_WIN_A_SET_PLAYER" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="RACE_TO_X_POINTS_Y_SET" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="SET_WINNER" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="TOTAL_SETS" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="TOTAL_SETS_PLAYER" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="CORRECT_SET_SCORE" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="FIRST_SET_MATCH_WINNER" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="SET_CORRECT_SCORE" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="WHO_WINS_X_POINT_Y_SET" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="WHO_WINS_X_GAME_Y_SET" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="WIN_GAME_X_AND_Y_SET_Z" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="ODD_EVEN_POINTS_GAME_X_SET_Y" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="CORRECT_SCORE_GAME_X_SET_Y" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="CORRECT_SCORE_GAME_X" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="WHO_WINS_POINT_X_GAME_Y_SET_Z" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="RACE_TO_POINTS_GAME_X_SET_Y" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="RACE_TO_X_GAMES_SET_Y" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="WIN_FIRST_X_POINTS_GAME_Y_SET_Z" labelAlign="left" labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="GAME_X_WINNER" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="SET_X_TIEBREAK_PLAYED" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="TIE_BREAK_WINNER" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="DEUCE_GAME_X_SET_Y" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="EXACT_TOTAL_SETS" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="HANDICAP" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="SET_HANDICAP" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="HANDICAP_SET_X" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="TOTAL_GAMES" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="TOTAL_GAMES_SET_X" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="ODD_EVEN_GAMES" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                            <Form.Item label="ODD_EVEN_GAMES_SET_X" labelAlign="left"  labelCol={{ sm: {span: 16}, xs: {span: 24} }}>
                                <Checkbox>Required</Checkbox>
                            </Form.Item>
                        </Col>
                        <Col lg={{span: 12}} md={{span: 24}} className="w-100 variables-require">
                            <Form.Item label="Calibration Accuracy">
                                <InputNumber min={0} max={100} step={0.001} className="w-100"/>
                            </Form.Item>
                            <Form.Item label="First To X Points In Games">
                                <InputNumber min={1} max={20} className="w-100"/>
                            </Form.Item>
                            <Form.Item label="Min Diff Points In Games">
                                <InputNumber min={1} max={5} className="w-100"/>
                            </Form.Item>
                            <Divider style={{ margin: "15px 0" }}></Divider>
                            <Space size={5} direction="vertical" className="w-100">
                                <Row gutter={[16, 10]} justify="start">
                                    <Col md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Typography.Title level={5}>Set Format</Typography.Title>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Typography.Title level={5}>Final Set Format</Typography.Title>
                                    </Col>
                                </Row>
                                <Row gutter={16} justify="start">
                                    <Col md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
                                        <Typography.Title level={5} className="text-right">Tie Break?</Typography.Title>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0">
                                            <Checkbox/>
                                        </Form.Item>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0">
                                            <Checkbox/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16} justify="start">
                                    <Col md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
                                        <Typography.Title level={5} className="text-right">Tie Breack At</Typography.Title>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16} justify="start">
                                    <Col md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
                                        <Typography.Title level={5} className="text-right">First To X Tie Break</Typography.Title>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16} justify="start">
                                    <Col md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
                                        <Typography.Title level={5} className="text-right">Tie Break Min Points Diff</Typography.Title>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16} justify="start">
                                    <Col md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
                                        <Typography.Title level={5} className="text-right">First To X Games In Set</Typography.Title>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Row gutter={16} justify="start">
                                    <Col md={{span: 12}} sm={{span: 24}} xs={{span: 24}}>
                                        <Typography.Title level={5} className="text-right">Min Diff Games In Set</Typography.Title>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                    <Col md={{span: 6}} sm={{span: 12}} xs={{span: 12}}>
                                        <Form.Item className="m-0 w-100">
                                            <InputNumber min={1} max={20}/>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Space>
                        </Col>
                    </Row>
                </Form>
            </Space>
        </div>
    )
};

export default Home;
