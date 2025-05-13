#!/bin/sh

echo "Starting BingsuHere application..."

# Start the backend server in the background
echo "Starting backend server..."
cd /app/backend && node index.js &
BACKEND_PID=$!

# Check if backend started successfully
sleep 2
if ! kill -0 $BACKEND_PID 2>/dev/null; then
  echo "ERROR: Backend server failed to start properly"
  exit 1
fi
echo "Backend server started successfully with PID: $BACKEND_PID"

# Start nginx in the foreground
echo "Starting Nginx server..."
exec nginx -g "daemon off;"
