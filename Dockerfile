# Use the official Node.js 14 image as base
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Install TypeScript locally in the container
RUN npm install typescript

# Copy the TypeScript source code to the container
COPY index.ts .

# Command to run your application using ts-node
CMD ["npx", "ts-node", "index.ts"]
