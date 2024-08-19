import React, { useContext, useEffect, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";
import { Col, Flex, GetProps, Image, Row, Segmented, Switch } from "antd";
import { Space } from "antd";
import { Input, TextArea } from "@/components/ui/input";
import {
  ButtonAi,
  SideCardSubtitle,
} from "@/features/article/edit-article/menu-side-cards/components";
import { Tag, TagWrapper } from "@/components/ui/tag";
import { Typography } from "@/components/ui/typography";
import { SparklingLineIcon } from "@icons/sparkling-line";
import { Divider } from "@/components/ui/divider";
import { GridBox } from "@/components/ui/grid-box";
import { PURPLE_PRIMARY } from "@/styles/colors";
import { Controller, useFormContext } from "react-hook-form";
import { FormTextArea } from "@/components/form/form-textarea";

const { Text, Link } = Typography;

const SeoTag = ({
  type,
  onClose,
  title,
}: {
  type?: "suggested";
  title?: string;
  onClose: () => void;
}) => {
  const isSuggested = type === "suggested";
  const { color, icon } = {
    color: isSuggested ? "purple" : undefined,
    icon: isSuggested ? <SparklingLineIcon /> : undefined,
  } satisfies Partial<GetProps<typeof Tag>>;

  return (
    <Tag color={color} icon={icon} closable onClose={onClose}>
      {title}
    </Tag>
  );
};

interface Props {}

export const SeoOption = ({}: Props) => {
  return (
    <Row>
      <Col span={24}>
        <SideCardSubtitle title="Proponowane tagi" />
        <TagWrapper>
          <SeoTag title="Super express" type="suggested" />
          <SeoTag title="Super express" type="suggested" />
          <SeoTag title="Wiadomości" />
          <SeoTag title="Wiadomości" />
        </TagWrapper>
        <Divider />
        <SideCardSubtitle title="Meta dane" />
        <FormTextArea
          name="title"
          label="Tytuł"
          count={{ show: true, max: 100 }}
        />
        <FormTextArea name="slug" label="Slug" />
        <SideCardSubtitle
          title="CMS AI"
          icon={<SparklingLineIcon style={{ color: PURPLE_PRIMARY }} />}
        />
        <GridBox gap={8} width="fit-content">
          <ButtonAi Icon={SparklingLineIcon} title="Uzupełnij meta opis" />
          <ButtonAi
            Icon={SparklingLineIcon}
            title=" Najbardziej popularne tagi"
          />
        </GridBox>
      </Col>
    </Row>
  );
};
