import { CheckOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd';
import { List } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
import { cookies } from '../../../config/cookies';
import { useGetProfileQuery } from '../../../api/account/profile';
import { useEffect, useState } from 'react';
const props: UploadProps = {
  name: 'image',
  action: `${import.meta.env.VITE_URL_API}/update/avatar`,
  headers: {
    'Authorization': `Bearer ${JSON.parse(cookies().Get("AuthUser") as any)[2].token}`,
  },
  method: 'POST',
  showUploadList: false,
  accept: ".jpg,.png,.jpeg",
  maxCount: 1,
  beforeUpload: file => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isJpgOrPng) {
      message.error('Bạn chỉ có thể tải lên file JPG/PNG!');
    }
    else if (!isLt2M) {
      message.error('Ảnh phải nhỏ hơn 2MB!');
    }
    return isJpgOrPng && isLt2M;
  },
  onChange(info) {
    console.log(info);
    
  },

};
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const Profile = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataProfile, setDataProfile] = useState<any>(null);
  const user = JSON.parse(cookies().Get("AuthUser") as any)[1];
  const { data: data_profile, isLoading, refetch } = useGetProfileQuery({});
  const [form] = Form.useForm();
  useEffect(() => {
    refetch();
    setDataProfile(data_profile?.data);
    setLoading(isLoading);
    form.setFieldsValue({
      name: dataProfile?.name,
      phone: dataProfile?.phone,
      email: dataProfile?.email,
    });
  },[])
  return (
    <div className="flex">
      <div className="w-1/3">
        <Card loading={loading} className="items-center justify-center border rounded-xl shadow-md">
          <div className="w-full sm:w-auto rounded-lg inline-flex items-center justify-center px-4 py-2.5 ">
            <img className="me-3 w-32 h-32 rounded-md" src={dataProfile?.image} alt="" />
            <div className="text-left">
              <div className="mb-2 text-2xl font-semibold">{dataProfile?.name}</div>
              <div className="mb-3 font-sans text-sm">{user?.role}</div>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Cập nhật ảnh đại diện</Button>
              </Upload>
            </div>
          </div>
        </Card>
        <Card loading={loading} title="Thông báo" extra={<>
          <Button
            icon={<CheckOutlined />}
          >Đánh dấu tất cả là đã đọc</Button>
        </>} className='rounded-xl shadow-md mt-6 h-[445px]'>
          <div className='h-[340px] overflow-y-scroll'>
          <List
              itemLayout="horizontal"
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                  />
                </List.Item>
              )}
            />
          </div>
        </Card>
      </div>
      <div className="m-3"></div>
      <div className="w-2/3">
        <Card loading={loading} className="border rounded-xl shadow-md">
          <h2 className="text-base font-semibold leading-7 text-gray-900 mb-6">Thông tin tài khoản</h2>
          <Form layout="vertical" 
          form={form}
          >
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
              <Form.Item label="Họ tên" name="name" rules={[{ required: true, message: 'Vui lòng nhập tên!' }]}><Input/></Form.Item>
              <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}><Input /></Form.Item>
            </div>
            <Form.Item label="Email" name="email" initialValue={dataProfile?.email}  ><Input disabled /></Form.Item>
            <Form.Item>
              <Button 
              // loading={true}
              className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm text-center" htmlType="submit">
              Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card loading={loading} className="border rounded-xl shadow-md mt-5">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Cập nhật mật khẩu</h2>
          <Form layout="vertical" className='mt-6'>
            <Form.Item label="Mật khẩu cũ" name="old_password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu cũ!' }]}><Input.Password /></Form.Item>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
              <Form.Item label="Mật khẩu mới" name="new_password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu mới!' }]}><Input.Password/></Form.Item>
              <Form.Item label="Nhập lại mật khẩu mới" name="confirm_new_password" rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu mới!' }]}><Input.Password /></Form.Item>
            </div>
            <Form.Item>
              <Button 
              // loading={true}
              className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 font-medium rounded-lg text-sm text-center" htmlType="submit">
              Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div >
  );
};

export default Profile;
