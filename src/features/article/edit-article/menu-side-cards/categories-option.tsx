import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { GridBox } from "@/components/ui/grid-box";
import { Search } from "@/components/ui/input";
import { Tag, TagWrapper } from "@/components/ui/tag";
import { DirectoryTree } from "@/components/ui/tree";
import {
  ButtonAi,
  SideCardSubtitle,
} from "@/features/article/edit-article/menu-side-cards/components";
import { PURPLE_PRIMARY } from "@/styles/colors";
import { FolderFilled } from "@icons/antd-icons";
import { SparklingLineIcon } from "@icons/sparkling-line";
import { Col, Row, theme, TreeDataNode, TreeProps } from "antd";
import { useMemo, useState } from "react";

interface Props {}

const data: TreeDataNode[] = [
  {
    title: "parent 0-0",
    key: "0-0",
    checkable: false,
    icon: <FolderFilled />,
    children: [
      { title: "leaf 0", key: "0-0-0" },
      {
        title: "leaf 1",
        key: "leaf-1",
        isLeaf: false,
        children: [
          {
            title: "leaf 10",
            key: "leaf-10",
            children: [{ key: "leaf-100", title: "leaf 100" }],
          },
          { title: "leaf 11", key: "leaf-11", isLeaf: true },
        ],
      },
    ],
  },
  {
    title: "parent 1",
    key: "0-1",
    checkable: false,
    icon: <FolderFilled />,
    children: [
      { title: "leaf 0-1-0", key: "0-1-0", isLeaf: true },
      { title: "leaf 0-1-1", key: "0-1-1", isLeaf: true },
    ],
  },
];

function findAllKeysByTitle(data: TreeDataNode[], searchPhrase: string) {
  let result: { key: string; isLast: boolean }[] = [];

  for (const node of data) {
    let childKeys: { key: string; isLast: boolean }[] = [];

    // Recursively search in children
    if (node.children) {
      childKeys = findAllKeysByTitle(node.children, searchPhrase);
      console.log("debug-log-childKeys", node.key, childKeys);
    }

    // If the current node's title includes the search phrase or any child node matches, include this node's key
    if (node.title?.includes(searchPhrase) || childKeys.length > 0) {
      result.push({ ...node, isLast: !childKeys.length });
      result = result.concat(childKeys);
    }
  }

  return result;
}

function flattenTree(data: TreeDataNode[]): TreeDataNode[] {
  let result: TreeDataNode[] = [];

  for (const node of data) {
    // Add the current node to the result array
    result.push(node);

    // If the node has children, flatten them and add to the result array
    if (node.children) {
      result = result.concat(flattenTree(node.children));
    }
  }

  return result;
}

export const CategoriesOption = (props: Props) => {
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [autoExpandParent, setAutoExpandParent] = useState(true);
  const [checkedKeys, setCheckedKeys] = useState<React.Key[]>();
  const { token } = theme.useToken();
  const onExpand = (newExpandedKeys: React.Key[]) => {
    setExpandedKeys(newExpandedKeys);
    setAutoExpandParent(false);
  };
  const onCheck: TreeProps["onCheck"] = (checkedKeysValue, halfChecked) => {
    console.log("onCheck", checkedKeysValue, halfChecked);
    setCheckedKeys(checkedKeysValue as React.Key[]);
  };
  const treeData = useMemo(() => {
    const loop = (data: TreeDataNode[]): TreeDataNode[] =>
      data.map((item) => {
        const strTitle = item.title as string;
        const index = strTitle.indexOf(searchValue);
        const beforeStr = strTitle.substring(0, index);
        const afterStr = strTitle.slice(index + searchValue.length);
        const title =
          index > -1 ? (
            <span key={item.key}>
              {beforeStr}
              <span style={{ backgroundColor: token.colorFill }}>
                {searchValue}
              </span>
              {afterStr}
            </span>
          ) : (
            <span key={item.key}>{strTitle}</span>
          );
        if (item.children) {
          return {
            ...item,
            title,
            key: item.key,
            children: loop(item.children),
          };
        }

        return {
          ...item,
          title,
          key: item.key,
        };
      });

    return loop(data);
  }, [searchValue]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const keysRaw = findAllKeysByTitle(data, value).filter(
      (node) => !node.isLast
    );
    const keys = keysRaw.filter((item) => !item.isLast).map((item) => item.key);
    setExpandedKeys(keys);
    setSearchValue(value);
    setAutoExpandParent(true);
  };

  console.log("debug-log-", { expandedKeys, treeData });

  return (
    <Row>
      <Col span={24}>
        <Search
          style={{ marginBottom: 8 }}
          placeholder="Search"
          onChange={onChange}
          variant="outlined"
        />
        <SideCardSubtitle title="Wszystkie kategorie" />
        <DirectoryTree
          multiple
          treeData={treeData}
          checkable
          showIcon
          showLine
          selectable={false}
          onExpand={onExpand}
          expandedKeys={expandedKeys}
          autoExpandParent={autoExpandParent}
          onCheck={onCheck}
          checkedKeys={checkedKeys}
        />
        {!!checkedKeys?.length && (
          <>
            <SideCardSubtitle title="Wybrane kategorie" />
            <TagWrapper>
              {flattenTree(data)
                .filter((node) => checkedKeys?.includes(node.key))
                .map((node) => (
                  <Tag
                    key={node.key}
                    closable
                    onClose={() =>
                      setCheckedKeys((prev) =>
                        prev?.filter((k) => k !== node.key)
                      )
                    }
                  >
                    {node.title}
                  </Tag>
                ))}
            </TagWrapper>
            <Divider />
          </>
        )}
        <SideCardSubtitle
          title="CMS AI"
          icon={<SparklingLineIcon style={{ color: PURPLE_PRIMARY }} />}
        />
        <GridBox gap={8} width="fit-content">
          <ButtonAi
            Icon={SparklingLineIcon}
            title=" Generuj kategorie ponownie"
          />
        </GridBox>
      </Col>
    </Row>
  );
};
