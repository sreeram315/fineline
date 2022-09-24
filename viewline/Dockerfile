# get the base node image
FROM node:alpine as builder

# set the working dir for container
WORKDIR /frontend

# copy the json file first
COPY ./package.json /frontend

# install npm dependencies
RUN npm install
RUN npm install react-bootstrap bootstrap

# copy other project files
COPY . .

# build the folder
CMD [ "npm", "run", "start" ]