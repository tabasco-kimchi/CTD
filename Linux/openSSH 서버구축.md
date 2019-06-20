
#openSSH 서버 구축

## telnet server에 openssh서버를 함께 구축한다.

> openSSH 설치
1. connect ubuntu 16.04 docker container, then, install openssh-sever.

```
ubuntu@server:~$ sudo docker run -it ubuntu:16.04
root@1dc05eedf9a5:/# 
```


$ sudo apt-get install -y openssh-server