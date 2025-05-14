import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import * as Constants from '../constants';

// Base URL component
export function ApiBaseUrl() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = siteConfig.customFields.apiBaseUrl || Constants.API_BASE_URL;
  return <code>{apiBaseUrl}</code>;
}

export function DashboardUrl() {
  return <code>{Constants.DASHBOARD_URL}</code>;
}

// Example values components
export function ExampleStoreId() {
  return <code>{Constants.EXAMPLE_STORE_ID}</code>;
}

export function ExampleSubscriptionId() {
  return <code>{Constants.EXAMPLE_SUBSCRIPTION_ID}</code>;
}

export function ExamplePackageId() {
  return <code>{Constants.EXAMPLE_PACKAGE_ID}</code>;
}

export function ExampleTransactionId() {
  return <code>{Constants.EXAMPLE_TRANSACTION_ID}</code>;
}

export function ExamplePriceId() {
  return <code>{Constants.EXAMPLE_PRICE_ID}</code>;
}

export function ExampleApiKey() {
  return <code>{Constants.EXAMPLE_API_KEY}</code>;
}

export function ExampleCoupon() {
  return <code>{Constants.EXAMPLE_COUPON}</code>;
}

// Rate limit component
export function ApiRateLimit() {
  return <code>{Constants.API_RATE_LIMIT}</code>;
}

// Authorization header component with dynamic API key
export function AuthHeader() {
  return <code>Authorization: Bearer {Constants.EXAMPLE_API_KEY}</code>;
}

// Full URL components for specific endpoints
export function SubscriptionGetUrl() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = siteConfig.customFields.apiBaseUrl || Constants.API_BASE_URL;
  return <code>{apiBaseUrl}/subscription/get</code>;
}

export function SubscriptionCreateUrl() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = siteConfig.customFields.apiBaseUrl || Constants.API_BASE_URL;
  return <code>{apiBaseUrl}/subscription/create</code>;
}

export function PaymentsProcessUrl() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = siteConfig.customFields.apiBaseUrl || Constants.API_BASE_URL;
  return <code>{apiBaseUrl}/payments/process</code>;
}

export function PaymentsVerifyUrl() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = siteConfig.customFields.apiBaseUrl || Constants.API_BASE_URL;
  return <code>{apiBaseUrl}/payments/verify</code>;
}

export function PackagesGetUrl() {
  const { siteConfig } = useDocusaurusContext();
  const apiBaseUrl = siteConfig.customFields.apiBaseUrl || Constants.API_BASE_URL;
  return <code>{apiBaseUrl}/packages/get</code>;
}
