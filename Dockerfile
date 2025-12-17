FROM node:20.13.1

# Set the working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy the entire application code
COPY . .

# Build the application
RUN npm run build

# Expose the port your app runs on
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]