import ReactMarkdown from "react-markdown";
// import remarkMath from "remark-math";
// import rehypeKatex from "rehype-katex";
// import rehypeInline from "rehype-inline";
import rehypeRaw from 'rehype-raw'
// import "katex/dist/katex.min.css";
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import {dracula} from 'react-syntax-highlighter'



export const Markdown = ({ children }: {children: string})=> {
  return (
      <div className="prose prose-neutral prose-base mx-auto">
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}>
      {children} 
    </ReactMarkdown>
      </div>
  );
};


// TODO: Add code block support
/*
export const Markdown = ({ children }) => {
  return (
      <div className="prose prose-neutral prose-base mx-auto">
    <ReactMarkdown
      remarkPlugins={[remarkMath]}
      rehypePlugins={[rehypeKatex, rehypeRaw]}>
      {children} 
    </ReactMarkdown>
      </div>
  );
};
*/
/* export const CodeBlock = ({ language , children }) => {
  return (
    <SyntaxHighlighter language={language} style={dracula}>
      {children}
    </SyntaxHighlighter>
  );
} */
