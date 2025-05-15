---
sidebar_position: 3
---

# Environment Information

LiasonPay provides a production environment for processing payments. This guide explains how to set up and use the environment effectively.

## Production Environment

- **Base URL**: `https://liasonpay.net/`
- **Purpose**: Live transactions and real payments
- **API Keys**: API keys (prefixed with `sk_`)
- **Payments**: Real money is processed
- **Features**: Full API functionality with actual payment processing

## Environment Setup

### Production Setup

1. **Create a LiasonPay Account**:

   - Sign up at [https://liasonpay.test](https://liasonpay.test)
   - Verify your email address

2. **Generate API Keys**:

   - Navigate to **Settings** > **API Keys**
   - Click **Generate New Key**
   - Copy and securely store your API key

3. **Configure Your Environment**:

   - Set the base URL to `https://liasonpay.net/`
   - Use your API key for authentication
   - Set the `mode` parameter to `production` in relevant API calls

4. **Set Up Webhook Endpoints**:
   - Configure webhook URLs in your account
   - Ensure your server is properly secured

## Environment Details

| Feature        | Details                  |
| -------------- | ------------------------ |
| Base URL       | `https://liasonpay.net/` |
| API Keys       | Keys (`sk_`)             |
| Money Movement | Real transactions        |
| Rate Limits    | 300 requests per minute  |
| Webhooks       | Live events              |
| Dashboard      | Live data                |

## Test Cards

For testing purposes, you can use these test card numbers:

| Card Type  | Card Number      | CVV | Expiry Date     | Result                        |
| ---------- | ---------------- | --- | --------------- | ----------------------------- |
| Visa       | 4111111111111111 | Any | Any future date | Successful payment            |
| Mastercard | 5555555555554444 | Any | Any future date | Successful payment            |
| Visa       | 4000000000000002 | Any | Any future date | Declined (insufficient funds) |
| Visa       | 4000000000000069 | Any | Any future date | Expired card                  |
| Visa       | 4000000000000119 | Any | Any future date | Declined (generic)            |

## Test Amounts

You can trigger specific responses by using special amounts:

| Amount | Response                            |
| ------ | ----------------------------------- |
| 100    | Successful payment                  |
| 999    | Failed payment (insufficient funds) |
| 888    | Failed payment (expired card)       |
| 777    | Failed payment (declined)           |

### Testing Subscriptions

For subscription testing:

1. Create a subscription using a test card
2. Verify the subscription status
3. Test cancellation and upgrade flows
4. Test webhook events for subscription lifecycle

## Implementation Considerations

When implementing your integration, consider the following:

1. **Thoroughly Test Your Integration**:

   - Test all payment flows
   - Test error handling
   - Test webhook processing
   - Test subscription lifecycle

2. **Secure Your Implementation**:

   - Implement proper error handling
   - Secure API keys
   - Set up logging and monitoring
   - Configure webhooks securely

3. **Complete Compliance Requirements**:
   - Ensure PCI DSS compliance if handling card data
   - Implement proper data privacy measures
   - Review terms of service and privacy policy

## Production Safeguards

- Implement proper error handling
- Set up monitoring and alerting
- Have a rollback plan for issues
- Test thoroughly before deploying changes

## Next Steps

- [Learn How to Use the API](./how-to-use)
- [Explore Security Best Practices](/developer-guide/best-practices/security)
- [Set Up Webhooks](/developer-guide/webhooks)
