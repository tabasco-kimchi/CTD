


root@server:~/docker/echo# docker container run -d -p :8080 echo
d831d335ffb0531168bb290c92be0745a8953182001dfc57f231627dfe27ac32
root@server:~/docker/echo# docker container run -d -p :8080 echo
7e0359181155e87e0f98b64d9830373848a0068f62f10a7848dcded15e61d71a
root@server:~/docker/echo# docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
7e0359181155        echo                "go run /echo/main.go"   7 seconds ago       Up 5 seconds        0.0.0.0:32769->8080/tcp   quizzical_ptolemy
d831d335ffb0        echo                "go run /echo/main.go"   10 seconds ago      Up 9 seconds        0.0.0.0:32768->8080/tcp   eloquent_darwin
e30f4e2b2e62        echo                "go run /echo/main.go"   About an hour ago   Up About an hour    0.0.0.0:9091->8080/tcp    vibrant_easley
fec351feded9        echo                "go run /echo/main.go"   About an hour ago   Up About an hour                              laughing_wilson
root@server:~/docker/echo# docker container run -d -p :8080 echo
34a6798f351f4429b8ff33ac11a7e6719da5b4276f1e87702850c8f86b61d03d
root@server:~/docker/echo# docker container run -d -p :8080 echo
5386f94337475640ebbdb1eb28f7f46a19a62a541638901058bb6d040938e721
root@server:~/docker/echo# docker container ls
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                     NAMES
5386f9433747        echo                "go run /echo/main.go"   2 seconds ago       Up 1 second         0.0.0.0:32771->8080/tcp   modest_wescoff
34a6798f351f        echo                "go run /echo/main.go"   4 seconds ago       Up 3 seconds        0.0.0.0:32770->8080/tcp   festive_minsky
7e0359181155        echo                "go run /echo/main.go"   24 seconds ago      Up 23 seconds       0.0.0.0:32769->8080/tcp   quizzical_ptolemy
d831d335ffb0        echo                "go run /echo/main.go"   27 seconds ago      Up 27 seconds       0.0.0.0:32768->8080/tcp   eloquent_darwin
e30f4e2b2e62        echo                "go run /echo/main.go"   About an hour ago   Up About an hour    0.0.0.0:9091->8080/tcp    vibrant_easley
fec351feded9        echo                "go run /echo/main.go"   About an hour ago   Up About an hour                              laughing_wilson
root@server:~/docker/echo# 



>***특정 이름만 지우고 싶다.***

