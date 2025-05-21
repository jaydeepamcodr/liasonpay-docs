import React, { useState, useRef } from 'react';
import { Highlight } from 'prism-react-renderer';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import './CodeBlock.css';
import { truncateCode } from '../utils/codeExamplesLoader';

/**
 * A reusable code block component with syntax highlighting, copy functionality, and more.
 *
 * @param {Object} props - Component props
 * @param {string} props.code - The code to display
 * @param {string} props.language - The programming language for syntax highlighting
 * @param {string} [props.title] - Optional title for the code block
 * @param {boolean} [props.showLineNumbers=false] - Whether to show line numbers
 * @param {string} [props.className] - Additional CSS class names
 * @param {string} [props.highlightLines] - Comma-separated line numbers to highlight (e.g., "1,3-5,8")
 * @param {string} [props.badge] - Optional badge to display (e.g., "good", "bad", "info")
 * @param {string} [props.badgeText] - Text to display in the badge
 * @param {boolean} [props.wrap=false] - Whether to wrap long lines
 * @param {Object} [props.live] - Configuration for live editor (if enabled)
 * @returns {JSX.Element} The rendered code block
 */
export default function CodeBlock({
  code,
  language,
  title,
  showLineNumbers = false,
  className = '',
  highlightLines = '',
  badge,
  badgeText,
  wrap = false,
  children,
  maxLines,
  noCopyButton = false,
  ...props
}) {
  const [isCopied, setIsCopied] = useState(false);
  const [showFullCode, setShowFullCode] = useState(false);
  const codeRef = useRef(null);
  const { colorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();
  const prismTheme = colorMode === 'dark'
    ? siteConfig.themeConfig.prism.darkTheme
    : siteConfig.themeConfig.prism.theme;

  // If children are provided instead of code prop, use that
  const rawCodeContent = children || code || '';

  // Handle code truncation if maxLines is specified
  const { code: truncatedCode, isTruncated, fullCode } = maxLines
    ? truncateCode(rawCodeContent, maxLines)
    : { code: rawCodeContent, isTruncated: false, fullCode: rawCodeContent };

  // Use full code if showFullCode is true, otherwise use truncated code
  const codeContent = showFullCode ? fullCode : truncatedCode;

  // Parse highlight lines
  const getHighlightLines = () => {
    if (!highlightLines) return new Set();

    const lineSet = new Set();
    const ranges = highlightLines.split(',');

    ranges.forEach(range => {
      if (range.includes('-')) {
        const [start, end] = range.split('-').map(Number);
        for (let i = start; i <= end; i++) {
          lineSet.add(i);
        }
      } else {
        lineSet.add(Number(range));
      }
    });

    return lineSet;
  };

  const highlightLinesSet = getHighlightLines();

  // Copy to clipboard function
  const copyToClipboard = async () => {
    if (codeRef.current) {
      try {
        await navigator.clipboard.writeText(codeContent);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
      }
    }
  };

  return (
    <div className={clsx('code-block-wrapper', className)}>
      {(title || badge) && (
        <div className="code-block-header">
          {title && <span className="code-block-title">{title}</span>}
          {badge && (
            <span className={clsx('code-block-badge', badge)}>
              {badgeText || badge}
            </span>
          )}
          {!noCopyButton && (
            <button
              className="code-block-copy-button"
              onClick={copyToClipboard}
              aria-label="Copy code to clipboard"
              title="Copy code to clipboard"
            >
              {isCopied ? (
                <span className="code-block-copy-feedback">✓ Copied!</span>
              ) : (
                <span className="code-block-copy-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                  </svg>
                </span>
              )}
            </button>
          )}
        </div>
      )}

      <div
        className={clsx(
          'code-block-container',
          { 'code-block-wrap': wrap }
        )}
      >
        <Highlight
          theme={prismTheme}
          code={codeContent}
          language={language || 'text'}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style} ref={codeRef}>
              {tokens.map((line, i) => {
                const lineNumber = i + 1;
                const isHighlighted = highlightLinesSet.has(lineNumber);

                return (
                  <div
                    key={i}
                    {...getLineProps({ line, key: i })}
                    className={clsx(
                      { 'code-block-highlight-line': isHighlighted },
                      'code-block-line'
                    )}
                  >
                    {showLineNumbers && (
                      <span className="code-block-line-number">{lineNumber}</span>
                    )}
                    <span className="code-block-line-content">
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  </div>
                );
              })}
            </pre>
          )}
        </Highlight>

        {isTruncated && (
          <div className="code-block-show-more">
            <button
              className="code-block-show-more-button"
              onClick={() => setShowFullCode(!showFullCode)}
            >
              {showFullCode ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * A component that renders multiple code blocks with tabs for language selection.
 *
 * @param {Object} props - Component props
 * @param {Object[]} props.tabs - Array of tab configurations
 * @param {string} props.tabs[].language - The programming language for the tab
 * @param {string} props.tabs[].label - The label to display on the tab
 * @param {string} props.tabs[].code - The code to display for this tab
 * @param {string} [props.title] - Optional title for all code blocks
 * @param {boolean} [props.showLineNumbers=false] - Whether to show line numbers
 * @param {string} [props.className] - Additional CSS class names
 * @returns {JSX.Element} The rendered tabbed code blocks
 */
export function CodeTabs({ tabs, title, showLineNumbers = false, className = '', ...props }) {
  const [activeTab, setActiveTab] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  // Copy to clipboard function for the active tab
  const copyToClipboard = async () => {
    if (tabs[activeTab] && tabs[activeTab].code) {
      try {
        await navigator.clipboard.writeText(tabs[activeTab].code);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
      }
    }
  };

  return (
    <div className={clsx('code-tabs-wrapper', className)}>
      <div className="code-tabs-header">
        {title && <span className="code-tabs-title">{title}</span>}
        <div className="code-tabs-buttons">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={clsx('code-tabs-button', { active: activeTab === index })}
              onClick={() => setActiveTab(index)}
            >
              {tab.label || tab.language}
            </button>
          ))}
          <button
            className="code-tabs-copy-button"
            onClick={copyToClipboard}
            aria-label="Copy code to clipboard"
            title="Copy code to clipboard"
          >
            {isCopied ? (
              <span className="code-tabs-copy-feedback">✓ Copied!</span>
            ) : (
              <span className="code-tabs-copy-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </span>
            )}
          </button>
        </div>
      </div>
      <div className="code-tabs-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={clsx('code-tabs-panel', { active: activeTab === index })}
          >
            <CodeBlock
              code={tab.code}
              language={tab.language}
              showLineNumbers={showLineNumbers}
              // Don't show the copy button in the individual CodeBlock since we have one in the header
              noCopyButton={true}
              {...props}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
