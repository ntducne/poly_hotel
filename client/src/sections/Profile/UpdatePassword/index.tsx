import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useForm } from "antd/es/form/Form";
import { useUpdatePasswordMutation } from "../../../api/User";

type Props = {};

export default function UpdatePassword({}: Props) {
  const [updatePassword] = useUpdatePasswordMutation();
  const [form] = useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
    if (Object.keys(values).length) {
      const dataNewPass = {
        old_password: values.old_password,
        password: values.new_password,
      };
      updatePassword(dataNewPass)
        .unwrap()
        .then((res) => {
          console.log(res);
          message.success(res?.message);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const confirmPasswordValidator = (_: any, value: any) => {
    if (value && value !== form.getFieldValue("new_password")) {
      return Promise.reject("Không trùng khớp với mật khẩu.");
    }
    return Promise.resolve();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      className="w-full"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      form={form}
      layout="vertical"
    >
      <Form.Item
        name="old_password"
        label="Mật khẩu cũ"
        rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
      >
        <Input.Password className="py-2" />
      </Form.Item>

      <Form.Item
        name="new_password"
        label="Mật khẩu mới"
        rules={[{ required: true, message: "Vui lòng không bỏ trống" }]}
      >
        <Input.Password className="py-2" />
      </Form.Item>
      <Form.Item
        label="Xác nhận mật khẩu"
        name="confirm_new_password"
        rules={[
          { required: true, message: "Vui lòng không bỏ trống" },
          {
            validator: confirmPasswordValidator,
          },
        ]}
      >
        <Input.Password className="py-2" />
      </Form.Item>

      <Form.Item>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Cập nhật
        </button>
      </Form.Item>
    </Form>
  );
}
