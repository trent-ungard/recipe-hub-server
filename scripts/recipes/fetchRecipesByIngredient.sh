#!/bin/bash
ingredient=$1
# Make a GET request to the API and store the response in a variable
echo "https://${RECIPE_API_URL}/filter.php?i=${ingredient}"
response=$(curl "https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}")

echo "API Response: $response"