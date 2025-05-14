import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/getting-started/introduction">
            View API Documentation
          </Link>
        </div>
      </div>
    </header>
  );
}

function ApiFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className="text--center padding-horiz--md">
              <h3>Developer Guide</h3>
              <p>Comprehensive guides and best practices for integrating with the LiasonPay API.</p>
              <div className={styles.featureLinks}>
                <a href="/developer-guide/overview">Overview</a> •
                <a href="/developer-guide/authentication">Authentication</a> •
                <a href="/developer-guide/best-practices">Best Practices</a> •
                <a href="/developer-guide/webhooks">Webhooks</a>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className="text--center padding-horiz--md">
              <h3>API Reference</h3>
              <p>Detailed documentation for all API endpoints with examples and parameters.</p>
              <div className={styles.featureLinks}>
                <a href="/api-reference/subscriptions">Subscriptions</a> •
                <a href="/api-reference/payments">Payments</a> •
                <a href="/api-reference/packages">Packages</a> •
                <a href="/api-reference/faq">FAQ</a>
              </div>
            </div>
          </div>
        </div>
        <div className={`row ${styles.featureRow}`}>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Subscription Management</h3>
              <p>Create, verify, cancel, and upgrade subscriptions with our comprehensive subscription API.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Payment Processing</h3>
              <p>Process one-time payments with support for multiple products, currencies, and payment methods.</p>
            </div>
          </div>
          <div className="col col--4">
            <div className="text--center padding-horiz--md">
              <h3>Interactive Testing</h3>
              <p>Test API endpoints directly from your browser with our embedded testing tools and Postman collection.</p>
            </div>
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
        <ApiFeatures />
      </main>
    </Layout>
  );
}
