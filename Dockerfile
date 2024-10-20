# base image
FROM node:lts-alpine AS builder

# create & set working directory
WORKDIR /usr/src

# copy package.json and package-lock.json
COPY package*.json ./

# install dependencies
RUN npm install

# copy source files
COPY . .

# build the Next.js app
RUN npm run build

# production image
FROM node:lts-alpine

# create & set working directory
WORKDIR /usr/src

# copy only the necessary files from the builder stage
COPY --from=builder /usr/src/package*.json ./
COPY --from=builder /usr/src/.next ./.next
COPY --from=builder /usr/src/public ./public
COPY --from=builder /usr/src/next.config.js ./

# install only production dependencies
RUN npm install --only=production

# expose the port
EXPOSE 3000

# start the app
CMD ["npm", "run", "start"]