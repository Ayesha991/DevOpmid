#!/bin/sh
set -eu

# Start backend API first, then keep nginx in foreground as PID 1.
node /app/backend/server.js &

exec nginx -g 'daemon off;'