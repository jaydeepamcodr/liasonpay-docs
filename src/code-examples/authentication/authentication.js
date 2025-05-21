/**
 * Code examples for the Authentication page
 */

// Authentication headers example
export const authHeaders = {
  javascript: {
    language: 'javascript',
    label: 'JavaScript',
    code: `// Authentication headers
const headers = {
  'Authorization': 'Bearer {{EXAMPLE_API_KEY}}',
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};`
  },
  python: {
    language: 'python',
    label: 'Python',
    code: `# Authentication headers
headers = {
    'Authorization': f'Bearer {{EXAMPLE_API_KEY}}',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}`
  },
  php: {
    language: 'php',
    label: 'PHP',
    code: `<?php
// Authentication headers
$headers = [
    'Authorization: Bearer {{EXAMPLE_API_KEY}}',
    'Content-Type: application/json',
    'Accept: application/json'
];`
  },
  curl: {
    language: 'bash',
    label: 'cURL',
    code: `# Authentication headers
curl --request GET \\
  --url "{{API_BASE_URL}}/endpoint" \\
  --header "Authorization: Bearer {{EXAMPLE_API_KEY}}" \\
  --header "Content-Type: application/json" \\
  --header "Accept: application/json"`
  }
};

// Environment variables example
export const environmentVariables = {
  javascript: {
    language: 'javascript',
    label: 'Node.js',
    code: `// Node.js example
const apiKey = process.env.LIASONPAY_API_KEY;

// Using with a request
const response = await fetch("{{API_BASE_URL}}/subscription/get", {
  headers: {
    Authorization: \`Bearer \${apiKey}\`,
    "Content-Type": "application/json"
  },
});`
  },
  python: {
    language: 'python',
    label: 'Python',
    code: `# Python example
import os
import requests

api_key = os.environ.get('LIASONPAY_API_KEY')

# Using with a request
response = requests.get(
  '{{API_BASE_URL}}/subscription/get',
  headers={
    'Authorization': f'Bearer {api_key}',
    'Content-Type': 'application/json'
  }
)`
  },
  php: {
    language: 'php',
    label: 'PHP',
    code: `<?php
// PHP example
$apiKey = getenv('LIASONPAY_API_KEY');

// Using with a request
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, '{{API_BASE_URL}}/subscription/get');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: Bearer ' . $apiKey,
    'Content-Type: application/json'
]);
$response = curl_exec($ch);
?>`
  }
};

// API client setup example
export const apiClientSetup = {
  javascript: {
    language: 'javascript',
    label: 'JavaScript',
    code: `// Example configuration in Node.js
const axios = require("axios");

const liasonpay = axios.create({
  baseURL: "{{API_BASE_URL}}",
  headers: {
    Authorization: \`Bearer \${process.env.LIASONPAY_API_KEY}\`,
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});`
  },
  python: {
    language: 'python',
    label: 'Python',
    code: `# Example configuration in Python
import requests

class LiasonPayClient:
    def __init__(self, api_key, base_url="{{API_BASE_URL}}"):
        self.api_key = api_key
        self.base_url = base_url
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    
    def request(self, method, endpoint, **kwargs):
        url = f"{self.base_url}/{endpoint.lstrip('/')}"
        return requests.request(
            method, 
            url, 
            headers=self.headers, 
            **kwargs
        )

# Initialize client
client = LiasonPayClient(api_key="your_api_key_here")`
  },
  php: {
    language: 'php',
    label: 'PHP',
    code: `<?php
// Example configuration in PHP
class LiasonPayClient {
    private $apiKey;
    private $baseUrl;
    
    public function __construct($apiKey, $baseUrl = "{{API_BASE_URL}}") {
        $this->apiKey = $apiKey;
        $this->baseUrl = $baseUrl;
    }
    
    public function request($method, $endpoint, $data = null) {
        $url = $this->baseUrl . '/' . ltrim($endpoint, '/');
        
        $headers = [
            'Authorization: Bearer ' . $this->apiKey,
            'Content-Type: application/json',
            'Accept: application/json'
        ];
        
        $ch = curl_init($url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, $method);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        
        if ($data) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
        }
        
        $response = curl_exec($ch);
        $statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);
        
        return [
            'status_code' => $statusCode,
            'data' => json_decode($response, true)
        ];
    }
}

// Initialize client
$client = new LiasonPayClient('your_api_key_here');
?>`
  }
};

// Security best practices
export const securityBestPractices = {
  javascript: {
    language: 'javascript',
    label: 'JavaScript',
    code: `// GOOD: Store API key in environment variables
require('dotenv').config();
const apiKey = process.env.LIASONPAY_API_KEY;

// BAD: Hardcoded API key
const apiKey = "sk_live_abcdefghijklmnopqrstuvwxyz"; // Don't do this!`
  },
  python: {
    language: 'python',
    label: 'Python',
    code: `# GOOD: Store API key in environment variables
import os
from dotenv import load_dotenv

load_dotenv()
api_key = os.environ.get('LIASONPAY_API_KEY')

# BAD: Hardcoded API key
api_key = "sk_live_abcdefghijklmnopqrstuvwxyz" # Don't do this!`
  }
};
