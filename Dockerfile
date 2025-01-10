# Base image
FROM node:20

# Set the working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install app dependencies using pnpm
RUN pnpm install

# Copy the rest of the app's code
COPY . .

# Expose the application port
EXPOSE 3000

# Command to start the app
CMD ["pnpm", "start"]
