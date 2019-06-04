# docker-composing


### *설치하기*
```
root@server:~# curl -L "https://github.com/docker/compose/releases/download/1.24.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
> 
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   617    0   617    0     0   1354      0 --:--:-- --:--:-- --:--:--  1356
100 15.4M  100 15.4M    0     0  3795k      0  0:00:04  0:00:04 --:--:-- 4648k
root@server:~# chmod +x /usr/local/bin/docker-compose
root@server:~# docker-compose --version
docker-compose version 1.24.0, build 0aa59064

```
root@server:~/docker# gedit docker-compose.yml
```
```
version: '3'
services:
    echo:
    image: jbcrsvp/echo:latest
ports: 
- 9090:8080(호스트의 9090을 8080으로 포스포워딩,매핑)
```
```
docker-compose up
```
> **yaml은 데이터를 들여쓰기를 가지고 구조제를 구분한다.** *yaml은 tab을 사용하지 않는다.*

```
root@server:~/docker# gedit docker-compose.yml
```
```
version: '3'
services:
    echo:
        build: .
        ports:
            - 8080
    echo2:
        build: .
        ports:
            - 9091:8080
```
> ***주의***
> echo, build, ports 등 구분할 때 space bar로 ***4칸씩*** 이동해야 오류없이 작동!!

```
root@server:~/docker# docker-compose up

Creating network "docker_default" with the default driver
Building echo
Step 1/4 : FROM golang:1.9
 ---> ef89ef5c42a9
Step 2/4 : RUN mkdir /echo
 ---> Using cache
 ---> 74a6ec47f8e1
Step 3/4 : COPY main.go /echo
 ---> 1a4ec1132ea3
Removing intermediate container 1b19978d4d41
Step 4/4 : CMD go run /echo/main.go
 ---> Running in 7acf80f0af76
 ---> 02cd53aefea1
Removing intermediate container 7acf80f0af76
Successfully built 02cd53aefea1
Successfully tagged docker_echo:latest
WARNING: Image for service echo was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Building echo2
Step 1/4 : FROM golang:1.9
 ---> ef89ef5c42a9
Step 2/4 : RUN mkdir /echo
 ---> Using cache
 ---> 74a6ec47f8e1
Step 3/4 : COPY main.go /echo
 ---> Using cache
 ---> 1a4ec1132ea3
Step 4/4 : CMD go run /echo/main.go
 ---> Using cache
 ---> 02cd53aefea1
Successfully built 02cd53aefea1
Successfully tagged docker_echo2:latest
WARNING: Image for service echo2 was built because it did not already exist. To rebuild this image you must use `docker-compose build` or `docker-compose up --build`.
Creating docker_echo2_1 ... done
Creating docker_echo_1  ... done
Attaching to docker_echo2_1, docker_echo_1
echo_1   | 2019/06/04 15:18:24 start server
echo2_1  | 2019/06/04 15:18:24 start server
```


