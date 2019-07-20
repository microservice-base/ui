# ui
react js based ui project






### docker 

```

$ git clone https://github.com/microservice-base/ui.git
$ cd ui
$ docker build --no-cache  -t image-ui  -f container/docker/Dockerfile .



$  docker pull keramiozsoy/image-ui
$  docker run -it --rm --name app-ui -p 8002:8002 image-ui // just run

or

$  git clone https://github.com/microservice-base/ui.git
$  cd basket
$  docker build -t image-ui  -f container/docker/Dockerfile . 
$  docker run -d --name app-ui -p 8002:8002 image-ui

$  docker rmi $(docker images | grep "<none>" | awk '{print $3}')
$  docker inspect -f '{{.Name}} - {{.NetworkSettings.IPAddress }}' $(docker ps -aq)


```

### template
```

yarn create react-app my-app

```

### 
`cd ui/`

### 
https://yarnpkg.com

`yarn start`

[http://localhost:3000](http://localhost:3000)
