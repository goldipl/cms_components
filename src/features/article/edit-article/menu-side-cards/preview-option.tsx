import React, { useContext, useEffect, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";
import { Col, Flex, Row, Switch, theme } from "antd";
import { Space, Typography } from "antd";
import { Input, TextArea } from "@/components/ui/input";
import { Segmented } from "@/components/ui/segmented";
import { Image } from "@/components/ui/image";
import { FormTextArea } from "@/components/form/form-textarea";

const { Text, Link } = Typography;
interface Props {}

export const PreviewOption = ({}: Props) => {
  const { token } = theme.useToken();
  return (
    <Row gutter={[12, 12]}>
      <Col span={24}>
        <Flex justify="space-between" align="center">
          <Segmented
            options={["Daily", "Weekly"]}
            bgColor="primary"
            onChange={(value) => {
              console.log(value); // string
            }}
          />
          <Flex gap={10}>
            <Text>Połącz informacje</Text>
            <Switch defaultChecked />
          </Flex>
        </Flex>
      </Col>
      <Col span={24}>
        <Flex justify="space-between" align="center">
          <Segmented
            options={["Daily", "Weekly"]}
            bgColor="primary"
            onChange={(value) => {
              console.log(value); // string
            }}
          />
          <Flex gap={10}>
            <Text>Połącz informacje</Text>
            <Switch defaultChecked />
          </Flex>
        </Flex>
      </Col>
      <Col span={24}>
        <Image
          style={{ aspectRatio: "16/10", borderRadius: token.borderRadiusLG }}
          src="error"
        />
      </Col>
      <Col span={24}>
        <FormTextArea
          name="previewTitle"
          label="Tytuł"
          rows={2}
          count={{
            show: true,
            max: 100,
          }}
        />
      </Col>
      <Col span={24}>
        <TextArea
          label="Opis"
          rows={5}
          count={{
            show: true,
            max: 300,
          }}
        />
      </Col>
      <Col span={24}>
        <Input label="Nazwa kampanii" />
      </Col>
      <Col span={24}>
        <Input label="Link utm" />
      </Col>
    </Row>
  );
};
