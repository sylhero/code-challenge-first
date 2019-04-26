# Node image
FROM node:latest

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# copy source code
COPY . /usr/src/app/

# install and cache app dependencies
RUN npm install

CMD [ "npm", "run", "prod" ]
