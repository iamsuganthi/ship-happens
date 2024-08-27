# ship-happens

## Hands on Exercise

We will create two containers as follows. Both will be pushed to DockerHub and both will then be monitored by Snyk

* base image container
* application container image

What will we need to complete this hands on exercise?

1. Dockerhub account if you want to create the image yourself
2. Snyk CLI
3. Snyk ORG ID
4. Docker Desktop
5. Snyk Account app.snyk.io 

### base image container

The following example of taking a base Redhat image and adding some software to the image 

**./apples/Dockerfile-ubi9**

```dockerfile
FROM --platform=linux/amd64 registry.access.redhat.com/ubi9

RUN yum install -y nginx
RUN yum install -y java-1.8.0-openjdk
RUN yum install -y git
RUN yum install -y kernel-headers

RUN nginx

ENTRYPOINT ["tail", "-f", "/dev/null"]
```

- Build followed ny a push to your Dockerhub account as follows. You can skip this step if you want to use what I have already created move to the next step

Note: Replace **pasapples** with your Dockerhub handle

```shell
$ docker build -f ./Dockerfile-ubi9 --tag=pasapples/simple-base-image:latest .
$ docker push pasapples/simple-base-image
```


### application container image

TODO:// Pas

## Run this app locally:
```
npm install
npm start
```
## To containerise this app:\
Open Dockerfile\
Use `npm install` to install dependencies\
Expose port 3000\
Run the app using `npm start`

