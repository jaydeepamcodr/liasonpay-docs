/**
 * Code examples for the Create Subscription page
 */

// Create subscription request example
export const createSubscriptionRequest = {
  javascript: {
    language: 'javascript',
    label: 'JavaScript',
    code: `// Request body
const subscriptionData = {
  store_id: "{{EXAMPLE_STORE_ID}}",
  price_id: "PRICE_SUB123",
  success_url: "https://example.com/subscription/success",
  cancel_url: "https://example.com/subscription/cancel",
  mode: "production",
  customer: {
    name: "John Doe",
    email: "john.doe@example.com",
    phone_number: "+1234567890"
  }
};

// Make the request
try {
  const response = await liasonpay.post("/subscription/create", subscriptionData);
  console.log("Subscription created:", response.data);
  
  // Redirect to subscription URL
  if (response.data.status && response.data.data.subscription_url) {
    window.location.href = response.data.data.subscription_url;
  }
} catch (error) {
  console.error(
    "Error creating subscription:",
    error.response?.data || error.message
  );
}`
  },
  python: {
    language: 'python',
    label: 'Python',
    code: `# Request body
subscription_data = {
    "store_id": "{{EXAMPLE_STORE_ID}}",
    "price_id": "PRICE_SUB123",
    "success_url": "https://example.com/subscription/success",
    "cancel_url": "https://example.com/subscription/cancel",
    "mode": "production",
    "customer": {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone_number": "+1234567890"
    }
}

# Make the request
try:
    response = requests.post(
        f"{base_url}/subscription/create",
        json=subscription_data,
        headers=headers
    )
    
    response_data = response.json()
    print("Subscription created:", response_data)
    
    # Get subscription URL for redirect
    if response_data.get("status") and response_data.get("data", {}).get("subscription_url"):
        subscription_url = response_data["data"]["subscription_url"]
        print(f"Redirect user to: {subscription_url}")
except Exception as e:
    print(f"Error creating subscription: {str(e)}")`
  },
  php: {
    language: 'php',
    label: 'PHP',
    code: `<?php
// Request body
$subscriptionData = [
    "store_id" => "{{EXAMPLE_STORE_ID}}",
    "price_id" => "PRICE_SUB123",
    "success_url" => "https://example.com/subscription/success",
    "cancel_url" => "https://example.com/subscription/cancel",
    "mode" => "production",
    "customer" => [
        "name" => "John Doe",
        "email" => "john.doe@example.com",
        "phone_number" => "+1234567890"
    ]
];

// Make the request
$ch = curl_init("{{API_BASE_URL}}/subscription/create");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($subscriptionData));
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($statusCode == 200) {
    $responseData = json_decode($response, true);
    echo "Subscription created: " . json_encode($responseData) . "\\n";
    
    // Redirect to subscription URL
    if ($responseData["status"] && isset($responseData["data"]["subscription_url"])) {
        $subscriptionUrl = $responseData["data"]["subscription_url"];
        header("Location: " . $subscriptionUrl);
        exit;
    }
} else {
    echo "Error creating subscription: " . $response . "\\n";
}
?>`
  },
  curl: {
    language: 'bash',
    label: 'cURL',
    code: `curl --request POST \\
  --url "{{API_BASE_URL}}/subscription/create" \\
  --header "Authorization: Bearer {{EXAMPLE_API_KEY}}" \\
  --header "Content-Type: application/json" \\
  --header "Accept: application/json" \\
  --data '{
    "store_id": "{{EXAMPLE_STORE_ID}}",
    "price_id": "PRICE_SUB123",
    "success_url": "https://example.com/subscription/success",
    "cancel_url": "https://example.com/subscription/cancel",
    "mode": "production",
    "customer": {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone_number": "+1234567890"
    }
  }'`
  }
};

// Get subscriptions example
export const getSubscriptions = {
  javascript: {
    language: 'javascript',
    label: 'JavaScript',
    code: `// Get all subscriptions for a store
try {
  const response = await liasonpay.get("/subscription/get", {
    params: {
      store_id: "{{EXAMPLE_STORE_ID}}",
    },
  });
  
  if (response.data.status) {
    const subscriptions = response.data.data.subscriptions;
    console.log("Subscriptions:", subscriptions);
    
    // Process subscriptions
    subscriptions.forEach(subscription => {
      console.log(\`Subscription ID: \${subscription.id}\`);
      console.log(\`Status: \${subscription.status}\`);
      console.log(\`Created: \${new Date(subscription.created_at).toLocaleString()}\`);
      console.log(\`Next billing: \${new Date(subscription.next_billing_date).toLocaleString()}\`);
      console.log("---");
    });
  } else {
    console.error("Error fetching subscriptions:", response.data.message);
  }
} catch (error) {
  console.error(
    "Error fetching subscriptions:",
    error.response?.data || error.message
  );
}`
  },
  python: {
    language: 'python',
    label: 'Python',
    code: `# Get all subscriptions for a store
try:
    response = requests.get(
        f"{base_url}/subscription/get",
        params={"store_id": "{{EXAMPLE_STORE_ID}}"},
        headers=headers
    )
    
    response_data = response.json()
    
    if response_data.get("status"):
        subscriptions = response_data.get("data", {}).get("subscriptions", [])
        print(f"Found {len(subscriptions)} subscriptions")
        
        # Process subscriptions
        for subscription in subscriptions:
            print(f"Subscription ID: {subscription.get('id')}")
            print(f"Status: {subscription.get('status')}")
            print(f"Created: {subscription.get('created_at')}")
            print(f"Next billing: {subscription.get('next_billing_date')}")
            print("---")
    else:
        print(f"Error fetching subscriptions: {response_data.get('message')}")
except Exception as e:
    print(f"Error fetching subscriptions: {str(e)}")`
  },
  php: {
    language: 'php',
    label: 'PHP',
    code: `<?php
// Get all subscriptions for a store
$storeId = "{{EXAMPLE_STORE_ID}}";
$url = "{{API_BASE_URL}}/subscription/get?store_id=" . urlencode($storeId);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);

$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($statusCode == 200) {
    $responseData = json_decode($response, true);
    
    if ($responseData["status"]) {
        $subscriptions = $responseData["data"]["subscriptions"];
        echo "Found " . count($subscriptions) . " subscriptions\\n";
        
        // Process subscriptions
        foreach ($subscriptions as $subscription) {
            echo "Subscription ID: " . $subscription["id"] . "\\n";
            echo "Status: " . $subscription["status"] . "\\n";
            echo "Created: " . $subscription["created_at"] . "\\n";
            echo "Next billing: " . $subscription["next_billing_date"] . "\\n";
            echo "---\\n";
        }
    } else {
        echo "Error fetching subscriptions: " . $responseData["message"] . "\\n";
    }
} else {
    echo "Error fetching subscriptions: " . $response . "\\n";
}
?>`
  }
};
