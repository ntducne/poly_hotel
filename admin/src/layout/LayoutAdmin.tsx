import React, { createContext, useEffect, useState } from "react";
import { MenuOutlined, PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Layout, Menu, theme } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import Head from "../component/header";
import Footer from "../component/footer";
import { ToastContainer } from "react-toastify";
const { Header, Content, Sider } = Layout;
import { Navigate } from "react-router-dom";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
import { VscFeedback } from "react-icons/vsc";
import {
  AiFillBank,
  AiOutlineCrown,
  AiOutlineUserSwitch,
  AiTwotoneGift,
  AiTwotonePrinter,
} from "react-icons/ai";
import { BiSolidBed } from "react-icons/bi";
import { cookies } from "../config/cookies";
import "react-toastify/dist/ReactToastify.css";

export const LayoutContext = createContext("");

const LayoutAdmin = () => {
  const location = useLocation();
  const checkLogin = JSON.parse(cookies().Get("AuthUser") as any);
  if (!checkLogin) {
    return <Navigate to="/login" />;
  }
  const [title, setTitle] = useState<any>(" ");
  useEffect(() => {
    location.pathname === "/" && setTitle("Thống kê");
    location.pathname === "/branches" && setTitle("Chi nhánh");
    location.pathname === "/room" && setTitle("Phòng");
    location.pathname === "/room/type" && setTitle("Loại phòng");
    location.pathname === "/room/utilities" && setTitle("Tiện ích");
    location.pathname === "/room/booking" && setTitle("Đặt Phòng");
    location.pathname === "/billing" && setTitle("Hóa đơn");
    location.pathname === "/services" && setTitle("Dịch vụ");
    location.pathname === "/policy" && setTitle("Chính sách");
    location.pathname === "/staff" && setTitle("Nhân viên");
    location.pathname === "/user" && setTitle("Người dùng");
    location.pathname === "/feedback" && setTitle("Đánh giá");
    location.pathname === "/contact" && setTitle("Liên hệ");
  }, [location.pathname]);
  const items: MenuItem[] = [
    getItem(
      "Thống kê",
      "/",
      <Link to={`/`}>
        <PieChartOutlined />
      </Link>
    ),
    getItem(
      "Chi nhánh",
      "/branches",
      <Link to={`branches`}>
        <AiTwotoneGift />
      </Link>
    ),

    getItem("Phòng", "sub1", <BiSolidBed />, [
      getItem("Phòng", "/room", <Link to={`room`} />),
      getItem("Loại Phòng", "/room/type", <Link to={`room/type`} />),
      getItem(
        "Tiện ích Phòng",
        "/room/utilities",
        <Link to={`room/utilities`} />
      ),
      getItem("Đặt Phòng", "/room/booking", <Link to={`room/booking`} />),
    ]),
    getItem(
      "Hoá đơn",
      "/billing",
      <Link to={`billing`}>
        <AiFillBank />
      </Link>
    ),
    getItem(
      "Dịch vụ",
      "/services",
      <Link to={`services`}>
        <AiOutlineCrown />
      </Link>
    ),
    // getItem(
    //   "Khuyến mãi",
    //   "9",
    //   <Link onClick={() => handleTitleChange("Ưu đãi")} to={`offers`}>
    //     <AiTwotoneGift />
    //   </Link>
    // ),
    // getItem(
    //   "Chính sách",
    //   "/policy",
    //   <Link to={`policy`}>
    //     <AiTwotonePrinter />
    //   </Link>
    // ),
    getItem("Tài khoản", "sub2", <AiOutlineUserSwitch />, [
      getItem("Nhân viên", "/staff", <Link to={`staff`} />),
      getItem("Người dùng", "/user", <Link to={`user`} />),
    ]),
    getItem(
      "Đánh giá",
      "/feedback",
      <Link to={`feedback`}>
        <VscFeedback />
      </Link>
    ),
    getItem(
      "Liên hệ",
      "/contact",
      <Link to={`contact`}>
        <VscFeedback />
      </Link>
    ),
  ];
  const [collapsed, setCollapsed] = useState<any>(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleSider = () => {
    setCollapsed(!collapsed);
  };

  return (
    <LayoutContext.Provider value={title}>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          theme="light"
          breakpoint="xs"
          collapsedWidth="1"
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className={(!collapsed ? "fixed z-50" : "") + " h-screen"}
        >
          {/* <div className="demo-logo-vertical" /> */}
          <img
            className="p-2 w-[80%]"
            src={`https://res.cloudinary.com/dteefej4w/image/upload/v1696338661/logo_30_zwmslg.png?fbclid=IwAR10Y-hXzDQPpRouXISq1hQq8Za9BjkHEEdJHbppdUkJc-bfdOm47C_O-P4`}
            alt=""
          />
          <Menu
            className="text-[#737b8b] "
            theme="light"
            defaultSelectedKeys={[location.pathname]}
            defaultOpenKeys={[location.pathname]}
            mode="inline"
            items={items}
          />
        </Sider>
        {!collapsed ? (
          <div className="fixed top-0 right-0 z-[1] w-screen h-full bg-[rgba(0,0,0,0.1)] md:hidden md:opacity-0 md:invisible"></div>
        ) : (
          ""
        )}
        <Layout className={!collapsed ? "md:pl-[200px]" : ""}>
          <Header
            className="flex items-center p-5 shadow-md"
            style={{
              padding: 0,
              background: colorBgContainer,
              position: "sticky",
              top: 0,
              zIndex: 40,
            }}
          >
            <Button
              className="flex-none w-8"
              icon={<MenuOutlined />}
              onClick={toggleSider}
            />
            <div className="flex-initial w-full">
              <Head />
            </div>
          </Header>
          <Content style={{ margin: "16px" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
              className="rounded-lg"
            >
              <Outlet />
              <ToastContainer />
            </div>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </LayoutContext.Provider>
  );
};
export default LayoutAdmin;
