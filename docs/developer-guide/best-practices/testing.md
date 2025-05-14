---
sidebar_position: 5
---

# Testing Strategy

A comprehensive testing strategy is essential for ensuring your LiasonPay integration works correctly, handles edge cases, and provides a smooth user experience. This guide outlines best practices for testing your integration.

## Testing Environments

### Sandbox Environment

The LiasonPay sandbox environment allows you to test your integration without processing real payments:

- **Base URL**: `https://sandbox.liasonpay.net/`
- **API Keys**: Test API keys (prefixed with `sk_test_`)
- **Payments**: No real money is processed
- **Features**: Full API functionality with simulated responses

```javascript
// Example configuration for sandbox environment
const liasonpay = require('liasonpay-node');
const client = new liasonpay({
  apiKey: 'sk_test_abcdefghijklmnopqrstuvwxyz123456',
  baseUrl: 'https://sandbox.liasonpay.net/api/v1'
});
```

### Local Testing Environment

For development and unit testing:

- Use mocks and stubs for API responses
- Implement a local test server
- Use tools like Postman or Insomnia for API testing
- Set up automated tests with CI/CD integration

```javascript
// Example of mocking LiasonPay API responses
jest.mock('liasonpay-node');

const liasonpay = require('liasonpay-node');
liasonpay.payments.process.mockResolvedValue({
  status: true,
  message: 'Payment processed successfully',
  data: {
    transaction_id: 'TRANSACTION_123',
    checkout_url: 'https://checkout.example.com/123'
  }
});

test('processes payment correctly', async () => {
  const paymentService = require('./payment-service');
  const result = await paymentService.processPayment({
    amount: 100,
    currency: 'usd'
  });
  
  expect(result.transaction_id).toBe('TRANSACTION_123');
  expect(liasonpay.payments.process).toHaveBeenCalledWith(
    expect.objectContaining({
      currency: 'usd'
    })
  );
});
```

## Types of Testing

### Unit Testing

Test individual components in isolation:

- API client methods
- Payment processing logic
- Webhook handlers
- Error handling

```javascript
// Example unit test for a payment processor
const { expect } = require('chai');
const sinon = require('sinon');
const PaymentProcessor = require('../src/payment-processor');

describe('PaymentProcessor', () => {
  let processor;
  let liasonpayStub;
  
  beforeEach(() => {
    liasonpayStub = {
      payments: {
        process: sinon.stub().resolves({
          status: true,
          data: { transaction_id: 'TRANSACTION_123' }
        })
      }
    };
    
    processor = new PaymentProcessor(liasonpayStub);
  });
  
  it('should process a payment successfully', async () => {
    const result = await processor.processPayment({
      amount: 100,
      currency: 'usd',
      description: 'Test payment'
    });
    
    expect(result.success).to.be.true;
    expect(result.transactionId).to.equal('TRANSACTION_123');
    expect(liasonpayStub.payments.process.calledOnce).to.be.true;
  });
  
  it('should handle API errors', async () => {
    liasonpayStub.payments.process.rejects(new Error('API Error'));
    
    try {
      await processor.processPayment({
        amount: 100,
        currency: 'usd'
      });
      expect.fail('Should have thrown an error');
    } catch (error) {
      expect(error.message).to.include('Failed to process payment');
    }
  });
});
```

### Integration Testing

Test the interaction between components:

- API client and your backend
- Frontend and backend communication
- Database interactions
- Third-party service integrations

```javascript
// Example integration test for payment flow
const request = require('supertest');
const app = require('../src/app');
const db = require('../src/db');

describe('Payment API Integration', () => {
  beforeAll(async () => {
    await db.connect();
  });
  
  afterAll(async () => {
    await db.disconnect();
  });
  
  it('should create a payment and return checkout URL', async () => {
    const response = await request(app)
      .post('/api/payments')
      .send({
        amount: 100,
        currency: 'usd',
        product_id: 'PRODUCT_123'
      })
      .set('Authorization', `Bearer ${process.env.TEST_API_KEY}`);
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.checkout_url).toMatch(/^https:\/\/sandbox\.liasonpay\.net/);
    
    // Verify database record
    const payment = await db.payments.findOne({
      transaction_id: response.body.transaction_id
    });
    
    expect(payment).not.toBeNull();
    expect(payment.amount).toBe(100);
    expect(payment.status).toBe('pending');
  });
});
```

### End-to-End Testing

Test complete user flows:

- Checkout process
- Subscription creation and management
- Payment verification
- Error handling and recovery

```javascript
// Example E2E test with Cypress
describe('Checkout Flow', () => {
  it('should complete a successful payment', () => {
    // Visit the product page
    cy.visit('/products/premium-plan');
    
    // Click the buy button
    cy.get('[data-cy="buy-button"]').click();
    
    // Fill in customer information
    cy.get('[data-cy="customer-name"]').type('John Doe');
    cy.get('[data-cy="customer-email"]').type('john.doe@example.com');
    
    // Proceed to payment
    cy.get('[data-cy="continue-button"]').click();
    
    // Should be redirected to LiasonPay checkout
    cy.url().should('include', 'sandbox.liasonpay.net');
    
    // Fill in test card details
    cy.get('#card-number').type('4111111111111111');
    cy.get('#card-expiry').type('1230');
    cy.get('#card-cvc').type('123');
    
    // Complete payment
    cy.get('#submit-button').click();
    
    // Should be redirected to success page
    cy.url().should('include', '/success');
    cy.get('[data-cy="confirmation-message"]').should('be.visible');
    cy.get('[data-cy="transaction-id"]').should('not.be.empty');
  });
});
```

### Performance Testing

Test system performance under various conditions:

- Response times under load
- Concurrent request handling
- Resource utilization
- Scalability

```javascript
// Example performance test with k6
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp up to 20 users
    { duration: '1m', target: 20 },  // Stay at 20 users for 1 minute
    { duration: '30s', target: 0 },  // Ramp down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    'http_req_duration{name:CreatePayment}': ['p(95)<1000'],
  },
};

export default function() {
  const payload = JSON.stringify({
    amount: 100,
    currency: 'usd',
    product_id: 'PRODUCT_123'
  });
  
  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${__ENV.API_KEY}`
    },
    tags: { name: 'CreatePayment' }
  };
  
  const res = http.post('https://api.example.com/payments', payload, params);
  
  check(res, {
    'status is 200': (r) => r.status === 200,
    'transaction_id exists': (r) => r.json().transaction_id !== undefined,
  });
  
  sleep(1);
}
```

### Security Testing

Test for security vulnerabilities:

- Authentication and authorization
- Input validation
- Data encryption
- API security
- Webhook signature verification

```javascript
// Example security test for webhook signature verification
const crypto = require('crypto');
const request = require('supertest');
const app = require('../src/app');

describe('Webhook Security', () => {
  it('should reject webhooks with invalid signatures', async () => {
    const payload = {
      event_type: 'payment.succeeded',
      data: { transaction_id: 'TRANSACTION_123' }
    };
    
    // Invalid signature
    const invalidSignature = 't=1234567890,v1=invalid_signature';
    
    const response = await request(app)
      .post('/webhooks/liasonpay')
      .send(payload)
      .set('Liasonpay-Signature', invalidSignature);
    
    expect(response.status).toBe(401);
  });
  
  it('should accept webhooks with valid signatures', async () => {
    const payload = {
      event_type: 'payment.succeeded',
      data: { transaction_id: 'TRANSACTION_123' }
    };
    
    // Create valid signature
    const timestamp = Math.floor(Date.now() / 1000).toString();
    const secret = process.env.WEBHOOK_SECRET;
    const signedPayload = `${timestamp}.${JSON.stringify(payload)}`;
    const signature = crypto
      .createHmac('sha256', secret)
      .update(signedPayload)
      .digest('hex');
    
    const validSignature = `t=${timestamp},v1=${signature}`;
    
    const response = await request(app)
      .post('/webhooks/liasonpay')
      .send(payload)
      .set('Liasonpay-Signature', validSignature);
    
    expect(response.status).toBe(200);
  });
});
```

## Test Data and Scenarios

### Test Cards

Use these test card numbers in the sandbox environment:

| Card Type | Card Number | CVV | Expiry Date | Result |
|-----------|-------------|-----|-------------|--------|
| Visa | 4111111111111111 | Any | Any future date | Successful payment |
| Mastercard | 5555555555554444 | Any | Any future date | Successful payment |
| Visa | 4000000000000002 | Any | Any future date | Declined (insufficient funds) |
| Visa | 4000000000000069 | Any | Any future date | Expired card |
| Visa | 4000000000000119 | Any | Any future date | Declined (generic) |

### Test Amounts

You can trigger specific responses in the sandbox by using special amounts:

| Amount | Response |
|--------|----------|
| 100 | Successful payment |
| 999 | Failed payment (insufficient funds) |
| 888 | Failed payment (expired card) |
| 777 | Failed payment (declined) |

### Test Scenarios

Test these common scenarios:

1. **Happy Path**
   - Successful one-time payment
   - Successful subscription creation
   - Successful subscription cancellation
   - Successful subscription upgrade

2. **Error Handling**
   - Payment declined
   - Invalid card details
   - Expired card
   - Network errors
   - API errors

3. **Edge Cases**
   - Zero-amount payments
   - Very large amounts
   - International currencies
   - Special characters in customer data

## Test Automation

### Continuous Integration

Integrate tests with your CI/CD pipeline:

- Run tests on every commit
- Block deployments if tests fail
- Generate test reports
- Monitor test coverage

```yaml
# Example GitHub Actions workflow
name: Test LiasonPay Integration

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '16'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run unit tests
      run: npm run test:unit
      
    - name: Run integration tests
      run: npm run test:integration
      env:
        LIASONPAY_TEST_API_KEY: ${{ secrets.LIASONPAY_TEST_API_KEY }}
        
    - name: Upload test coverage
      uses: codecov/codecov-action@v2
```

### Test Reporting

Implement comprehensive test reporting:

- Track test coverage
- Monitor test execution times
- Identify flaky tests
- Generate detailed failure reports

## Next Steps

- [Review Security Best Practices](./security)
- [Explore Performance Optimization](./performance)
- [Learn about User Experience Guidelines](./user-experience)
- [Understand Compliance Requirements](./compliance)
