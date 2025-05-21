/**
 * Code examples for the Process Payment page
 */

// Process payment request example
export const processPaymentRequest = {
  javascript: {
    language: 'javascript',
    label: 'JavaScript',
    code: `// Request body
const paymentData = {
  store_id: "{{EXAMPLE_STORE_ID}}",
  currency: "usd",
  products: [
    {
      name: "Product 1",
      description: "Product description",
      price: 100,
      quantity: 1,
    },
  ],
  customer: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone_number: "+1234567890",
  },
  success_url: "https://example.com/success",
  cancel_url: "https://example.com/cancel",
  mode: "production",
};

// Make the request
try {
  const response = await liasonpay.post("/payments/process", paymentData);
  console.log("Payment processed:", response.data);
  
  // Redirect to payment URL
  if (response.data.status && response.data.data.payment_url) {
    window.location.href = response.data.data.payment_url;
  }
} catch (error) {
  console.error(
    "Error processing payment:",
    error.response?.data || error.message
  );
}`
  },
  python: {
    language: 'python',
    label: 'Python',
    code: `# Request body
payment_data = {
    "store_id": "{{EXAMPLE_STORE_ID}}",
    "currency": "usd",
    "products": [
        {
            "name": "Product 1",
            "description": "Product description",
            "price": 100,
            "quantity": 1
        }
    ],
    "customer": {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone_number": "+1234567890"
    },
    "success_url": "https://example.com/success",
    "cancel_url": "https://example.com/cancel",
    "mode": "production"
}

# Make the request
try:
    response = requests.post(
        f"{base_url}/payments/process",
        json=payment_data,
        headers=headers
    )
    
    response_data = response.json()
    print("Payment processed:", response_data)
    
    # Get payment URL for redirect
    if response_data.get("status") and response_data.get("data", {}).get("payment_url"):
        payment_url = response_data["data"]["payment_url"]
        print(f"Redirect user to: {payment_url}")
except Exception as e:
    print(f"Error processing payment: {str(e)}")`
  },
  php: {
    language: 'php',
    label: 'PHP',
    code: `<?php
// Request body
$paymentData = [
    "store_id" => "{{EXAMPLE_STORE_ID}}",
    "currency" => "usd",
    "products" => [
        [
            "name" => "Product 1",
            "description" => "Product description",
            "price" => 100,
            "quantity" => 1
        ]
    ],
    "customer" => [
        "name" => "John Doe",
        "email" => "john.doe@example.com",
        "phone_number" => "+1234567890"
    ],
    "success_url" => "https://example.com/success",
    "cancel_url" => "https://example.com/cancel",
    "mode" => "production"
];

// Make the request
$ch = curl_init("{{API_BASE_URL}}/payments/process");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($paymentData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($statusCode == 200) {
    $responseData = json_decode($response, true);
    echo "Payment processed: " . json_encode($responseData) . "\\n";
    
    // Redirect to payment URL
    if ($responseData["status"] && isset($responseData["data"]["payment_url"])) {
        $paymentUrl = $responseData["data"]["payment_url"];
        header("Location: " . $paymentUrl);
        exit;
    }
} else {
    echo "Error processing payment: " . $response . "\\n";
}
?>`
  },
  curl: {
    language: 'bash',
    label: 'cURL',
    code: `curl --request POST \\
  --url "{{API_BASE_URL}}/payments/process" \\
  --header "Authorization: Bearer {{EXAMPLE_API_KEY}}" \\
  --header "Content-Type: application/json" \\
  --header "Accept: application/json" \\
  --data '{
    "store_id": "{{EXAMPLE_STORE_ID}}",
    "currency": "usd",
    "products": [
      {
        "name": "Product 1",
        "description": "Product description",
        "price": 100,
        "quantity": 1
      }
    ],
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone_number": "+1234567890"
    },
    "success_url": "https://example.com/success",
    "cancel_url": "https://example.com/cancel",
    "mode": "production"
  }'`
  }
};

// Payment verification example
export const verifyPayment = {
  javascript: {
    language: 'javascript',
    label: 'JavaScript',
    code: `// Verify payment status
const paymentId = "PAYMENT_ID"; // Get from URL or session

try {
  const response = await liasonpay.get(\`/payments/verify?payment_id=\${paymentId}\`);
  
  if (response.data.status) {
    const paymentStatus = response.data.data.status;
    console.log(\`Payment status: \${paymentStatus}\`);
    
    // Handle different payment statuses
    if (paymentStatus === "completed") {
      // Payment was successful
      console.log("Payment completed successfully");
    } else if (paymentStatus === "pending") {
      // Payment is still processing
      console.log("Payment is still processing");
    } else if (paymentStatus === "failed") {
      // Payment failed
      console.log("Payment failed");
    }
  } else {
    console.error("Error verifying payment:", response.data.message);
  }
} catch (error) {
  console.error(
    "Error verifying payment:",
    error.response?.data || error.message
  );
}`
  },
  python: {
    language: 'python',
    label: 'Python',
    code: `# Verify payment status
payment_id = "PAYMENT_ID"  # Get from URL or session

try:
    response = requests.get(
        f"{base_url}/payments/verify",
        params={"payment_id": payment_id},
        headers=headers
    )
    
    response_data = response.json()
    
    if response_data.get("status"):
        payment_status = response_data.get("data", {}).get("status")
        print(f"Payment status: {payment_status}")
        
        # Handle different payment statuses
        if payment_status == "completed":
            # Payment was successful
            print("Payment completed successfully")
        elif payment_status == "pending":
            # Payment is still processing
            print("Payment is still processing")
        elif payment_status == "failed":
            # Payment failed
            print("Payment failed")
    else:
        print(f"Error verifying payment: {response_data.get('message')}")
except Exception as e:
    print(f"Error verifying payment: {str(e)}")`
  },
  php: {
    language: 'php',
    label: 'PHP',
    code: `<?php
// Verify payment status
$paymentId = "PAYMENT_ID"; // Get from URL or session

$url = "{{API_BASE_URL}}/payments/verify?payment_id=" . urlencode($paymentId);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($statusCode == 200) {
    $responseData = json_decode($response, true);
    
    if ($responseData["status"]) {
        $paymentStatus = $responseData["data"]["status"];
        echo "Payment status: " . $paymentStatus . "\\n";
        
        // Handle different payment statuses
        if ($paymentStatus === "completed") {
            // Payment was successful
            echo "Payment completed successfully\\n";
        } else if ($paymentStatus === "pending") {
            // Payment is still processing
            echo "Payment is still processing\\n";
        } else if ($paymentStatus === "failed") {
            // Payment failed
            echo "Payment failed\\n";
        }
    } else {
        echo "Error verifying payment: " . $responseData["message"] . "\\n";
    }
} else {
    echo "Error verifying payment: " . $response . "\\n";
}
?>`
  }
};
