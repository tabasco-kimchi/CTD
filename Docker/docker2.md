# Docker에서 Container의 "Volume Mapping"


```
root@server:~/docker/echo# docker container run -d -v /root/docker/echo:/echo echo
6cdcbbc0c26f3c0d95af3eba80f3f827daac9cc0a7781f7e4f110b2c5a49fe43
root@server:~/docker/echo# ls
root@server:~/docker/echo# cp ../main.go ./
root@server:~/docker/echo# ls
main.go
root@server:~/docker/echo# 
```
```
root@server:~# docker container run -d -v /root/docker/echo:/echo echofec351feded9c823ab4539174c4a5a29774e7c6199885630b7e29fd297909b54
```

```
root@server:~/docker/echo# docker container run -d -p 9091:8080 -v /root/docker/echo:/echo echo
e30f4e2b2e6244457c4f11a7dc4a4061e0d2be8daf3e930b192f2fbe3fe20053
root@server:~/docker/echo# curl http://localhost:9091
Hello Docker ．．．．!!!
```

### nano로 수정 후 ###

```
root@server:~/docker/echo# docker container restart e30
e30
```
: container restart

```
root@server:~/docker/echo# curl http://localhost:9091
fjfjfjfjfjffj!!root@server:~/docker/echo# 
```
 *<u>바뀐 내용을 볼 수 있다</u>*


 > 컨테이너의 사용 현황을 조회
```
root@server:~/docker/echo# docker stats


CONTAINER           CPU %               MEM USAGE / LIMIT     MEM %               NET I/O             BLOCK I/O           PIDS
e30f4e2b2e62        0.00%               10.79MiB / 1.924GiB   0.55%               7.22kB / 2.1kB      12.3kB / 8.19kB     12
fec351feded9        0.00%               70.86MiB / 1.924GiB   3.60%               4.92kB / 0B         66.7MB / 8.19kB     12
```

