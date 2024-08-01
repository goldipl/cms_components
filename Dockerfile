# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /cms_components

# Copy package.json and pnpm-lock.yaml
COPY ./package.json ./pnpm-lock.yaml ./

# Install pnpm
RUN npm install -g pnpm

# Install dependencies
RUN pnpm install

# Copy the rest of the application
COPY . ./

# Build the application
RUN pnpm build

# Expose the port the app runs on
EXPOSE 5173

# Command to run the app
CMD ["pnpm", "run", "dev"]
