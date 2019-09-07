# ui
react js based ui project

This project is provide us to see all system

## Contributing

[Contributing guide](CONTRIBUTING.md).

### docker 

```


$  docker pull keramiozsoy/image-ui
$  docker run -it --rm --name app-ui -p 8005:3000 keramiozsoy/image-ui // just run

or

$ git clone https://github.com/microservice-base/ui.git
$ cd ui 
$ docker build --no-cache  -t image-ui  -f container/docker/Dockerfile .
$ docker run -d --name app-ui -p 8005:3000 image-ui:latest

$  docker rmi $(docker images | grep "<none>" | awk '{print $3}')
$  docker inspect -f '{{.Name}} - {{.NetworkSettings.IPAddress }}' $(docker ps -aq)


```

### template
```
yarn create react-app my-app
```

### 
```
cd ui
yarn start
```
[http://localhost:3000](http://localhost:3000)


