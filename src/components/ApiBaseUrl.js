import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function ApiBaseUrl() {
  const { siteConfig } = useDocusaurusContext();
  return <code>{siteConfig.customFields.apiBaseUrl}</code>;
}