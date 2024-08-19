import { $getRoot, $getSelection, ParagraphNode, TextNode } from "lexical";
import { useEffect, useMemo, useState } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { GlobalToken, theme, Typography } from "antd";
import styled from "styled-components";
import { css } from "@emotion/css";
import { CSSInterpolation } from "@emotion/css/create-instance";
import { useClasses } from "@/hooks/use-classes";
import { $createHeadingNode, HeadingNode, QuoteNode } from "@lexical/rich-text";
import { he } from "@faker-js/faker";
import { Text, Title } from "@/components/ui/typography";
import { condition } from "@/utils";
// Define the type for the styleCallback function

// Define the return type for useStyles
const editorState = {
  root: {
    children: [
      {
        children: [],
        direction: null,
        format: "",
        indent: 0,
        type: "heading",
        version: 1,
        tag: "h2",
      },
    ],
    direction: null,
    format: "",
    indent: 0,
    type: "root",
    version: 1,
    tag: "h2",
  },
} as const;

function ReadOnly() {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.setEditable(false);
    return () => {
      editor.setEditable(true);
    };
  }, []);
  return null;
}

function Registers() {
  const [editor] = useLexicalComposerContext();
  const onClick = () => {
    console.log(editor.toJSON());
    editor.setEditable(false);
    // editor.setEditorState(editor.parseEditorState(editorState));
  };
  useEffect(() => {
    editor.registerNodeTransform(ParagraphNode, (node) => {
      if (node.getChildren()?.length) {
        node.replace($createHeadingNode("h2"), true);
      }
    });
  }, [editor]);

  return (
    <>
      <button onClick={onClick}>console</button>
      <button
        onClick={() =>
          editor.setEditorState(editor.parseEditorState(editorState))
        }
      >
        set
      </button>
    </>
  );
}
function onError(error) {
  throw error;
}

interface Props {
  placeholder: string;
  bold?: boolean;
  rows?: number;
  heading?: boolean;
  readOnly?: boolean;
}

export const useStyles = () =>
  useClasses(({ token }) => {
    const pad = token.padding;
    const padBottom = pad * 2.2;
    return {
      textBox: {
        background: token.controlItemBgActive,
        padding: pad,
        paddingBottom: padBottom,
        borderRadius: token.borderRadius,
        outline: "none",
        position: "relative",
        p: {
          margin: 0,
        },
        h2: {
          margin: 0,
          fontSize: "1em",
        },
      },
      placeholderWrapper: {
        padding: pad,
        paddingBottom: padBottom,
        position: "absolute",
        top: 0,
        userSelect: "none",
        pointerEvents: "none",
        height: "100%",
        boxSizing: "border-box",
        width: "100%",
      },
      placeholderInner: {
        margin: 0,
        marginBottom: 0,
        overflow: "hidden",
        textOverflow: "ellipsis",
        height: "100%",
        display: "block",
      },
      counter: {
        fontSize: token.fontSizeSM,
        position: "absolute",
        bottom: pad,
        left: pad,
      },
    };
  }, []);

export const TextBox = ({
  placeholder,
  bold,
  rows = 2,
  heading,
  readOnly,
}: Props) => {
  const { classes, cx } = useStyles();
  const { token } = theme.useToken();
  return (
    <>
      <LexicalComposer
        initialConfig={{
          namespace: "MyEditor",
          theme: {},
          onError,
          nodes: [ParagraphNode, HeadingNode],
          // editorState: (editor) => editor.parseEditorState(editorState),
        }}
      >
        <RichTextPlugin
          contentEditable={
            <div className={css({ position: "relative", overflow: "hidden" })}>
              <ContentEditable
                className={cx(classes.textBox)}
                readOnly={readOnly}
                style={{
                  minHeight: `${rows}lh`,
                  fontWeight: condition(bold, "bold"),
                  lineHeight: heading
                    ? token.lineHeightHeading2
                    : token.lineHeight,
                  fontSize: condition(heading, token.fontSizeHeading2),
                  background: condition(readOnly, token.colorBgBase),
                }}
                placeholder={
                  <div className={cx(classes.placeholderWrapper)}>
                    {heading ? (
                      <Title
                        className={classes.placeholderInner}
                        level={2}
                        disabled
                      >
                        {placeholder}
                      </Title>
                    ) : (
                      <Text
                        className={classes.placeholderInner}
                        disabled
                        style={{
                          fontWeight: condition(bold, "bold"),
                        }}
                      >
                        {placeholder}
                      </Text>
                    )}
                  </div>
                }
              />
              <Text className={classes.counter}>123 / 309</Text>
            </div>
          }
        />
        <HistoryPlugin />
        {heading && <Registers />}
        {readOnly && <ReadOnly />}
      </LexicalComposer>
    </>
  );
};
