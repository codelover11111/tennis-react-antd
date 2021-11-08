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

const Main = () => {
    const history = useHistory();

    const clickCheckbox = (e, field) => {
        console.log(field);
    }

    return (
        <div className="home-container">
            <Row>
                <Col className="gutter-row" span="24">
                    <Typography.Title level={2} className="main-title">Main</Typography.Title>
                </Col>
            </Row>
            <Row>
              <Col className="gutter-row" span="12">
                <Space direction="horizontal">
                  <Button>Add Visible</Button>
                  <Button>Remove Visible</Button>
                </Space>
              </Col>
              <Col className="gutter-row" span="12">

              </Col>
              <Col className="gutter-row" span="12">
                
              </Col>
            </Row>
        </div>
    )
};

export default Main;
