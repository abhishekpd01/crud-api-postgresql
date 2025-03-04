# set node version
# set working directory
# copy package.json and package-lock.json
# install dependencies
# copy the rest of the files
# expose port 3000
# start the app

FROM node:18.20.4

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

#copy everything from the current directory to the working directory
COPY . .

EXPOSE 5000
CMD ['npm', 'run', 'dev']