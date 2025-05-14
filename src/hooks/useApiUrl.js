import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function useApiUrl() {
  const { siteConfig } = useDocusaurusContext();
  return siteConfig.customFields.apiBaseUrl;
}
