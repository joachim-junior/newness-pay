import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { Form, Input, Button, Row, Col, Divider, Typography } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import Avatar from 'src/components/Avatar';
import Header from 'src/components/Header';
import 'src/App.css';

const { Title } = Typography;

const useStyles = makeStyles({
  root: {
    marginLeft: '20%',
    marginTop: 0,
    marginButtom: '500px',
    paddingTop: 0
  },
  header: {
    MarginTop: '-100px'
  },
  box: {
    paddingTop: 0
  }
});

const AddProductForm = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState('optional');

  const onRequiredTypeChange = ({ requiredMarkValue }) => {
    setRequiredMarkType(requiredMarkValue);
  };

  const classes = useStyles();

  return (
    <Box className={classes.box} style={{ paddingTop: 0 }}>
      <Header
        className={classes.header}
        title="Add product"
        button="Save product"
      />
      <Container className={classes.root}>
        <Title level={4}>Product information</Title>
        <Form
          form={form}
          layout="vertical"
          initialValues={{
            requiredMarkValue: requiredMark
          }}
          onValuesChange={onRequiredTypeChange}
          requiredMark={requiredMark}
        >
          <Row>
            <Col span={8}>
              <Form.Item
                label="Name"
                required
                tooltip="Give a consice product name"
              >
                <Input placeholder="enter product name" />
              </Form.Item>
              <Form.Item
                label="Description"
                tooltip={{
                  title:
                    'Enter the product description. Give details a customer will want to see',
                  icon: <InfoCircleOutlined />
                }}
              >
                <Input.TextArea
                  rows={3}
                  placeholder="Enter product description"
                />
              </Form.Item>
              <Form.Item
                label="Image"
                tooltip={{
                  title: 'Select the image of the product you wish to sell',
                  icon: <InfoCircleOutlined />
                }}
              >
                <Avatar />
              </Form.Item>
              <Divider />
            </Col>
          </Row>
          <Col span={8}>
            <Title level={4}>Price information</Title>
            <Form.Item
              label="Price"
              required
              tooltip="What is the product price? Fill in"
            >
              <Input addonAfter="XAF" defaultValue="10.000" />
            </Form.Item>
            <Form.Item
              label="Price description"
              tooltip={{
                title:
                  'Enter the product price description. Give details a customer will want to see',
                icon: <InfoCircleOutlined />
              }}
            >
              <Input.TextArea rows={2} placeholder="Enter price description" />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Save product</Button>
            </Form.Item>
          </Col>
        </Form>
      </Container>
    </Box>
  );
};

export default AddProductForm;
