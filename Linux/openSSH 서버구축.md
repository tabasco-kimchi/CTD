
#openSSH 서버 구축

## telnet server에 openssh서버를 함께 구축한다.

> openSSH 설치
1. connect ubuntu 16.04 docker container, then, install openssh-sever.

```
baekchul@ubuntu:~$ sudo apt-get install -y openssh-server
```

2. restart openssh server

```
baekchul@ubuntu:~$ service ssh restart
```
3. check ssh-server working
```
baekchul@ubuntu:~$ ps -aux | grep ssh
baekchul   1844  0.0  0.0  11304   316 ?        Ss   23:25   0:00 /usr/bin/ssh-agent /usr/bin/im-launch env GNOME_SHELL_SESSION_MODE=ubuntu gnome-session --session=ubuntu
root       4068  0.0  0.2  72296  5604 ?        Ss   23:28   0:00 /usr/sbin/sshd -D
baekchul   4082  0.0  0.0  21536  1016 pts/0    S+   23:28   0:00 grep --color=auto ssh
```
- 로컬 ubuntu에서 도커 컨테이너로 ssh 접속
```
$ ssh teluser@xxx.x.x.x 
```
