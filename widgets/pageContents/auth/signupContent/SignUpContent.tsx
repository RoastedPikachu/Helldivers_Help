"use client";
import React from "react";

import { useRouter } from "next/navigation";

import axios from "axios";

import Link from "next/link";

import { Button, ConfigProvider, Form, Input } from "antd";

import "./signUpContent.css";

const SignUpContent = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  const onFinish = async (values: any) => {
    const response = await axios.post("/api/auth/signup", values);
  };

  return (
    <main className="relative grid justify-items-center items-center mt-[50px] deskWide:ml-[calc((100%-1440px)/2)] pb-[100px] mlarge:pb-[30px] px-[5%] deskWide:px-0 w-full max-w-[1440px] h-auto min-h-[780px] mlarge:min-h-[700px] msmall:min-h-[600px] overflow-hidden">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#ffe500",
            colorText: "#ffffff",
          },
          components: {
            Button: {
              primaryColor: "#ffe500",
            },
          },
        }}
      >
        <Form
          form={form}
          name="login"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          requiredMark={false}
          className="p-[50px] w-[400px] bg-[url('/static/AuthFormBackground.png')] bg-cover border-[2px] border-theme rounded-[20px]"
        >
          <h1 className="text-theme text-[2rem] text-center font-primary font-bold">
            Регистрация
          </h1>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Пожалуйста, введите ваш email!" },
              { type: "email", message: "Введите корректный email" },
            ]}
          >
            <Input
              placeholder="Введите вашу почту"
              size="large"
              className="w-full h-auto !bg-primary-bg border-[1px] border-theme text-white text-[1rem] font-primary"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Пароль"
            rules={[
              { required: true, message: "Пожалуйста, введите новый пароль!" },
            ]}
          >
            <Input.Password
              placeholder="Придумайте пароль"
              size="large"
              className="w-full h-auto !bg-primary-bg border-[1px] border-theme text-white text-[1rem] font-primary"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              size="large"
              className="mt-[10px] h-[50px] !bg-primary-bg border-[2px] border-theme text-[1.25rem] font-medium font-primary"
            >
              Зарегистрироваться
            </Button>
          </Form.Item>

          <div className="mt-[20px]">
            <p className="text-white text-[1rem] text-center font-primary">
              Уже есть аккаунт?{" "}
              <Link
                href={`/auth/signin`}
                className="text-theme hover:text-[#bca903]"
              >
                Войдите
              </Link>
            </p>
          </div>
        </Form>
      </ConfigProvider>
    </main>
  );
};

export default SignUpContent;
