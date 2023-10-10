// import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Select,
  Typography,
  Space,
} from "antd";
import { BiReset } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
const { Option } = Select;

const { Title, Text } = Typography;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const AddPolicy = () => {
  const onFinish = (values: any) => {
    console.log(values.image);
    // Xử lý dữ liệu khi nhấn nút Submit
  };


  return (
    <div>
      <div className="max-w-[80%] mr-auto ml-10">
        <div className="mb-5">
          <Title level={3}>Thêm mới</Title>
        </div>

        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{
            "input-number": 1,
            "checkbox-group": ["A", "B"],
            rate: 3.5,
            "color-picker": null,
          }}
          style={{ maxWidth: 1000 }}
          className="grid grid-cols-1 xl:grid-cols-2"
        >
          <Form.Item
            label="Điều kiện"
            name="conditions"
            rules={[{ required: true, message: "Vui lòng nhập điện kiện!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Vi phạm"
            name="penalty"
            rules={[{ required: true, message: "Vui lòng nhập vi phạm!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="room_type_id"
            label="Loại phòng"
            hasFeedback
            rules={[{ required: true, message: "Vui lòng nhập phòng!" }]}
          >
            <Select placeholder="Vui lòng nhập loại phòng!">
              <Option value="1">Phòng 1</Option>
              <Option value="2">Phòng 2</Option>
            </Select>
          </Form.Item>


          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Space className="flex flex-col md:flex-row">
              <Button  className="flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-3 py-2.5 text-center" type="default" htmlType="submit">
                <AiOutlineCheck className="text-[#fff] "/>
                <Text className=" text-[#fff] ml-1">Thêm</Text>
              </Button>
              <Button className="flex items-center text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br font-medium rounded-lg text-sm px-4 py-2.5" htmlType="reset">
                 <BiReset className="text-[#fff]"/> 
                 <Text className="text-[#fff] ml-1">Làm mới</Text>
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddPolicy;
