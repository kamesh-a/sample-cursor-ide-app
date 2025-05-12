# Use the official Node.js LTS image with security updates
FROM node:20-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package.json ./

# Install dependencies with security fixes
RUN npm install --production --audit --fix

# Copy the rest of your app's code
COPY sample-serve.js ./

# Expose the port your app runs on
EXPOSE 3000

# Command to run your app
CMD ["npm", "start"]
