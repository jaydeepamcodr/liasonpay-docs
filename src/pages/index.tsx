import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { AppUrl, ApiBaseUrl } from "@site/src/components/DynamicValues";

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroBackground}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.heroButtons}>
            <Link
              className={styles.primaryButton}
              to="/getting-started/introduction">
              Get Started
            </Link>
            <Link
              className={styles.secondaryButton}
              to="/api-reference">
              API Reference
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function MainFeatures() {
  return (
    <section className={styles.mainFeatures}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Powerful Payment Solutions</h2>
          <p>Everything you need to manage payments and subscriptions</p>
        </div>

        <div className={styles.featureGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                <path fillRule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clipRule="evenodd" />
              </svg>
            </div>
            <h3>Payment Processing</h3>
            <p>Accept one-time payments with support for multiple currencies and payment methods.</p>
            <Link to="/api-reference/payments/process-payment" className={styles.featureLink}>
              Learn more <span className={styles.featureLinkArrow}>→</span>
            </Link>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z" clipRule="evenodd" />
                <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
              </svg>
            </div>
            <h3>Subscription Management</h3>
            <p>Create, verify, cancel, and upgrade subscriptions with our comprehensive subscription API.</p>
            <Link to="/api-reference/subscriptions/create-subscription" className={styles.featureLink}>
              Learn more <span className={styles.featureLinkArrow}>→</span>
            </Link>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
              </svg>
            </div>
            <h3>Package Management</h3>
            <p>Retrieve and manage package information with pricing details for your store.</p>
            <Link to="/api-reference/packages/get-packages" className={styles.featureLink}>
              Learn more <span className={styles.featureLinkArrow}>→</span>
            </Link>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3>Webhook Events</h3>
            <p>Receive real-time notifications about payment and subscription events.</p>
            <Link to="/developer-guide/webhooks" className={styles.featureLink}>
              Learn more <span className={styles.featureLinkArrow}>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function DocumentationSection() {
  return (
    <section className={styles.documentationSection}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Comprehensive Documentation</h2>
          <p>Everything you need to integrate with our API</p>
        </div>

        <div className={styles.docCategories}>
          <div className={styles.docCategory}>
            <h3>Getting Started</h3>
            <ul className={styles.docLinks}>
              <li>
                <Link to="/getting-started/introduction">
                  Introduction
                </Link>
              </li>
              <li>
                <Link to="/getting-started/authentication">
                  Authentication
                </Link>
              </li>
              <li>
                <Link to="/getting-started/environment-information">
                  Environment Information
                </Link>
              </li>
              <li>
                <Link to="/getting-started/how-to-use">
                  How to Use
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.docCategory}>
            <h3>Developer Guide</h3>
            <ul className={styles.docLinks}>
              <li>
                <Link to="/developer-guide/overview">
                  Overview
                </Link>
              </li>
              <li>
                <Link to="/developer-guide/best-practices">
                  Best Practices
                </Link>
              </li>
              <li>
                <Link to="/developer-guide/webhooks">
                  Webhooks
                </Link>
              </li>
              <li>
                <Link to="/developer-guide/error-handling">
                  Error Handling
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.docCategory}>
            <h3>API Reference</h3>
            <ul className={styles.docLinks}>
              <li>
                <Link to="/api-reference/subscriptions">
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link to="/api-reference/payments">
                  Payments
                </Link>
              </li>
              <li>
                <Link to="/api-reference/packages">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="/api-reference/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.docCategory}>
            <h3>Interactive Tools</h3>
            <ul className={styles.docLinks}>
              <li>
                <Link to="/interactive-tools/api-testing">
                  API Testing
                </Link>
              </li>
              <li>
                <Link to="/interactive-tools/postman-collection">
                  Postman Collection
                </Link>
              </li>
              <li>
                <Link to="/interactive-tools/api-explorer">
                  API Explorer
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CodeExampleSection() {
  // Function to handle tab switching
  const handleTabClick = (language: string) => {
    // Get all tabs and panels
    const tabs = document.querySelectorAll(`.${styles.codeExampleTab}`);
    const panels = document.querySelectorAll(`.${styles.codeExamplePanel}`);

    // Remove active class from all tabs and panels
    tabs.forEach(tab => {
      tab.classList.remove(styles.activeTab);
    });
    panels.forEach(panel => {
      panel.classList.remove(styles.activePanel);
    });

    // Add active class to selected tab and panel
    document.querySelector(`.${styles.codeExampleTab}[data-language="${language}"]`)?.classList.add(styles.activeTab);
    document.querySelector(`.${styles.codeExamplePanel}[data-language="${language}"]`)?.classList.add(styles.activePanel);
  };

  return (
    <section className={styles.codeExampleSection}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Simple Integration</h2>
          <p>Get started with just a few lines of code</p>
        </div>

        <div className={styles.codeExampleContainer}>
          <div className={styles.codeExampleTabs}>
            <button
              type="button"
              className={`${styles.codeExampleTab} ${styles.activeTab}`}
              data-language="curl"
              onClick={() => handleTabClick('curl')}
            >
              cURL
            </button>
            <button
              type="button"
              className={styles.codeExampleTab}
              data-language="javascript"
              onClick={() => handleTabClick('javascript')}
            >
              Node.js
            </button>
            <button
              type="button"
              className={styles.codeExampleTab}
              data-language="python"
              onClick={() => handleTabClick('python')}
            >
              Python
            </button>
          </div>

          <div className={`${styles.codeExamplePanel} ${styles.activePanel}`} data-language="curl">
            <pre className={styles.codeBlock}>
              <code>
{`curl --request POST \\
  "{ApiBaseUrl()}/payment/process" \\
  --header "Authorization: Bearer YOUR_API_KEY" \\
  --header "Content-Type: application/json" \\
  --data "{
    \\"store_id\\": \\"STORE_123\\",
    \\"amount\\": 19.99,
    \\"currency\\": \\"usd\\",
    \\"description\\": \\"Premium Plan Subscription\\"
  }"`}
              </code>
            </pre>
          </div>

          <div className={styles.codeExamplePanel} data-language="javascript">
            <pre className={styles.codeBlock}>
              <code>
{`const axios = require('axios');

const processPayment = async () => {
  try {
    const response = await axios.post(
      '${ApiBaseUrl()}/payment/process',
      {
        store_id: 'STORE_123',
        amount: 19.99,
        currency: 'usd',
        description: 'Premium Plan Subscription'
      },
      {
        headers: {
          'Authorization': \`Bearer \${process.env.LIASONPAY_API_KEY}\`,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error processing payment:', error.response?.data || error.message);
  }
};`}
              </code>
            </pre>
          </div>

          <div className={styles.codeExamplePanel} data-language="python">
            <pre className={styles.codeBlock}>
              <code>
{`import requests
import os

def process_payment():
    url = "${ApiBaseUrl()}/payment/process"
    headers = {
        "Authorization": f"Bearer {os.environ.get('LIASONPAY_API_KEY')}",
        "Content-Type": "application/json"
    }
    payload = {
        "store_id": "STORE_123",
        "amount": 19.99,
        "currency": "usd",
        "description": "Premium Plan Subscription"
    }

    try:
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()
        return response.json()
    except requests.exceptions.RequestException as e:
        print(f"Error processing payment: {e}")
        raise`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaContent}>
          <h2>Ready to Get Started?</h2>
          <p>Create an account and start integrating with our API today.</p>
          <div className={styles.ctaButtons}>
            <a href={AppUrl()} className={styles.primaryButton} target="_blank" rel="noopener noreferrer">
              Create Account
            </a>
            <Link to="/getting-started/introduction" className={styles.secondaryButton}>
              Read Documentation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Complete API reference documentation for LiasonPay subscription and payment processing platform">
      <HomepageHeader />
      <main>
        <MainFeatures />
        <DocumentationSection />
        <CodeExampleSection />
        <CtaSection />
      </main>
    </Layout>
  );
}
