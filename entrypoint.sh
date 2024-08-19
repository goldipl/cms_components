#!/bin/sh

# Run pnpm install to ensure dependencies are up-to-date
pnpm install

# Execute the CMD provided in the Dockerfile or command line arguments
exec "$@"
