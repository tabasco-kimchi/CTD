

# 컨테이너의 현재 상태 그대로 이미지 생성하기

```
root@server:~/docker/echo# docker container ls
```
>CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
e30f4e2b2e62        echo                "go run /echo/main.go"   13 minutes ago      Up 11 minutes       0.0.0.0:9091->8080/tcp   vibrant_easley
fec351feded9        echo                "go run /echo/main.go"   14 minutes ago      Up 14 minutes                                laughing_wilson
root@server:~/docker/echo# curl http://localhost:9091
fjfjfjfjfjffj!!root@server:~/docker/echo# 
root@server:~/docker/echo# 


> ***이　상태로　이미지로　만들고　싶다***
 

```
root@server:~/docker/echo# 
docker commit(명령어) e30f(container ID) jbcrsvp(docker hub ID)/k_echo(TAG)

sha256:29e8bfb3e4e6b71b8b302f7a06128a268553a5ef6cc55f5191727a50a5a77af7
````

```
root@server:~/docker/echo# docker image ls
REPOSITORY          TAG                 IMAGE ID            CREATED             SIZE
jbcrsvp/k_echo      latest              29e8bfb3e4e6        7 seconds ago       758MB
echo                latest              db829ad692b8        About an hour ago   750MB
example/echo        latest              5e703d4bd04c        3 days ago          750MB
jbcrsvp/echo        latest              5e703d4bd04c        3 days ago          750MB
golang              1.9                 ef89ef5c42a9        10 months ago       750MB
```

> ***Docker Hub 로그인***
```
root@server:~/docker/echo# docker login
Login with your Docker ID to push and pull images from Docker Hub. If you don't have a Docker ID, head over to https://hub.docker.com to create one.
Username (jbcrsvp): jbcrsvp
Password: 
Login Succeeded
```

> ***Docker에 Push하기***
```
root@server:~/docker/echo# docker push jbcrsvp/k_echo
```

>The push refers to a repository [docker.io/jbcrsvp/k_echo]
433d54b49db0: Pushed 
ebe6c5225ce6: Pushed 
9b9f6c9bdbbc: Mounted from jbcrsvp/echo 
186d94bd2c62: Mounted from jbcrsvp/echo 
24a9d20e5bee: Mounted from jbcrsvp/echo 
e7dc337030ba: Mounted from jbcrsvp/echo 
920961b94eb3: Mounted from jbcrsvp/echo 
fa0c3f992cbd: Mounted from jbcrsvp/echo 
ce6466f43b11: Mounted from jbcrsvp/echo 
719d45669b35: Mounted from jbcrsvp/echo 
3b10514a95be: Mounted from jbcrsvp/echo 
latest: digest: sha256:9906f827176890579d01eb94c412b1f98b4db6b9b01edbd923f597adfc175f8b size: 2628
root@server:~/docker/echo# 




## ***Docker build VS Commited image***


### Docker build로 만들어진 것과 commit해서 올라온 이미지와의 차이점은?
>- Commit되어 올라온 이미지는 컨테이너 안에서 어떻게 만들어 졌는지 알 수 없다.
>- Docker build로 만들어진 image는 Dockerfile 안에 작업한 내용을 볼 수 있다.                                                    
*내부적으로 어떻게 작동하는지 다 공개되어 있다. : 더 신뢰할 수 있다.*

***<u>결론 : 외부에 dokerfile을 올려놓고, 그 도커파일을 이용하여 만든 이미지를 올려둔 것을 일반 사용자들은 선호한다.</u>***


