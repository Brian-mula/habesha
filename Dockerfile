FROM node:20.11.1-buster-slim

WORKDIR /app

COPY package*.json ./

# Copy the rest of the application code
COPY . .

RUN npm install

# Expose the port on which Next.js will run (usually 3000)
EXPOSE 3000

# Build the Next.js application
RUN npm run build

# Command to run the Next.js application
CMD ["npm","run", "start"]