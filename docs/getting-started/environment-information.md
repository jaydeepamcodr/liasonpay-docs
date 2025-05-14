---
sidebar_position: 3
---

# Environment Information

LiasonPay provides separate environments for development and production use. This guide explains the differences between these environments and how to set up and use them effectively.

## Available Environments

### Sandbox Environment

- **Base URL**: `https://sandbox.liasonpay.net/`
- **Purpose**: Development, testing, and integration
- **API Keys**: Test API keys (prefixed with `sk_test_`)
- **Payments**: No real money is processed
- **Features**: Full API functionality with simulated responses

### Production Environment

- **Base URL**: `https://liasonpay.net/`
- **Purpose**: Live transactions and real payments
- **API Keys**: Live API keys (prefixed with `sk_live_`)
- **Payments**: Real money is processed
- **Features**: Full API functionality with actual payment processing

## Environment Setup

### Sandbox Setup

1. **Create a LiasonPay Account**:
   - Sign up at [https://liasonpay.test](https://liasonpay.test)
   - Verify your email address

2. **Generate Test API Keys**:
   - Navigate to **Settings** > **API Keys**
   - Click **Generate New Key**
   - Select **Test Key**
   - Copy and securely store your API key

3. **Configure Your Development Environment**:
   - Set the base URL to `https://sandbox.liasonpay.net/`
   - Use your test API key for authentication
   - Set the `mode` parameter to `sandbox` in relevant API calls

4. **Set Up Webhook Endpoints** (Optional):
   - Configure webhook URLs in your sandbox account
   - Use a tool like [ngrok](https://ngrok.com/) for local development

### Production Setup

1. **Complete Account Verification**:
   - Provide business information
   - Complete KYC (Know Your Customer) verification
   - Set up your payment processing account

2. **Generate Live API Keys**:
   - Navigate to **Settings** > **API Keys**
   - Click **Generate New Key**
   - Select **Live Key**
   - Copy and securely store your API key

3. **Configure Your Production Environment**:
   - Set the base URL to `https://liasonpay.net/`
   - Use your live API key for authentication
   - Set the `mode` parameter to `production` in relevant API calls

4. **Set Up Production Webhook Endpoints**:
   - Configure webhook URLs in your production account
   - Ensure your server is properly secured

## Environment Comparison

| Feature | Sandbox | Production |
|---------|---------|------------|
| Base URL | `https://sandbox.liasonpay.net/` | `https://liasonpay.net/` |
| API Keys | Test keys (`sk_test_`) | Live keys (`sk_live_`) |
| Money Movement | Simulated (no real money) | Real transactions |
| Rate Limits | 100 requests per minute | 300 requests per minute |
| Webhooks | Test events | Live events |
| Dashboard | Test data | Live data |

## Testing in Sandbox

The sandbox environment allows you to test your integration without processing real payments. Here are some testing guidelines:

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

### Testing Subscriptions

For subscription testing:

1. Create a subscription using a test card
2. Verify the subscription status
3. Test cancellation and upgrade flows
4. Test webhook events for subscription lifecycle

## Moving to Production

Before moving to production, ensure you have:

1. **Thoroughly Tested Your Integration**:
   - Test all payment flows
   - Test error handling
   - Test webhook processing
   - Test subscription lifecycle

2. **Updated Your Configuration**:
   - Change the base URL to the production URL
   - Update API keys to live keys
   - Set the `mode` parameter to `production`

3. **Secured Your Implementation**:
   - Implement proper error handling
   - Secure API keys
   - Set up logging and monitoring
   - Configure production webhooks

4. **Completed Compliance Requirements**:
   - Ensure PCI DSS compliance if handling card data
   - Implement proper data privacy measures
   - Review terms of service and privacy policy

## Environment-Specific Considerations

### Sandbox Limitations

- Some features may have simplified behavior
- Webhook delivery might be delayed for testing purposes
- Rate limits are lower than production
- Some edge cases may not be fully simulated

### Production Safeguards

- Implement proper error handling
- Set up monitoring and alerting
- Have a rollback plan for issues
- Test thoroughly before deploying changes

## Next Steps

- [Learn How to Use the API](./how-to-use)
- [Explore Security Best Practices](/developer-guide/best-practices/security)
- [Set Up Webhooks](/developer-guide/webhooks)
