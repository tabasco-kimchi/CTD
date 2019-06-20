
# telnet 서버 구축

### telnet 서버를 구축하고, 컨테이너 밖에서 원격으로 접속하여 제어해보자

> 1. ubuntu의 터미널에서 ubuntu 16.04 docker 실행

```
ubuntu@server:~$ sudo docker run -it ubuntu:16.04

root@013eed72d727:/# apt-get update

Reading package lists... Done

root@013eed72d727:/# apt-get install net-tools

Setting up net-tools (1.60-26ubuntu1) ...

root@013eed72d727:/# ifconfig

eth0      Link encap:Ethernet  HWaddr 02:42:ac:11:00:03  
          inet addr:172.17.0.3  Bcast:0.0.0.0  Mask:255.255.0.0


root@013eed72d727:/# apt-get install -y xinetd telnetd
: **telnetd 설치**

Processing triggers for libc-bin (2.23-0ubuntu11) ...

root@013eed72d727:/# cd /etc/xinetd.d/

root@013eed72d727:/etc/xinetd.d# touch telnet

root@013eed72d727:/etc/xinetd.d# apt-get install vim

Reading package lists... Done
Building dependency tree       
Reading state information... Done

Do you want to continue? [Y/n] y
Get:1 http://archive.ubuntu.com/ubuntu xenial/main amd64 libgpm2 amd64 1.20.4-6.1 [16.5 kB]

root@013eed72d727:/etc/xinetd.d# vim telnet
: **telnet 수정 및 실행**
> 

service telnet
{
        disable = no
        flags = REUSE
        socket_type = stream
        wait = no
        user = root
        server = /usr/sbin/in.telnetd
        log_on_failure += USERID
}


**telnet 재시작**
root@013eed72d727:/etc/xinetd.d# service xinetd restart
 * Stopping internet superserver xinetd                                                                       [ OK ] 
 * Starting internet superserver xinetd                                                                       [ OK ] 
root@013eed72d727:/etc/xinetd.d# adduser teluser
Adding user `teluser' ...

Enter the new value, or press ENTER for the default
        Full Name []: 
        Room Number []: 
        Work Phone []: 
        Home Phone []: 
        Other []: 
Is the information correct? [Y/n] y
root@013eed72d727:/etc/xinetd.d# passwd teluser
Enter new UNIX password: 
Retype new UNIX password: 
passwd: password updated successfully
```

***container 밖에 있는 터미널에서 원격으로 telnet에 접속***

> test1234 파일 생성

```
root@013eed72d727:/etc/xinetd.d# cd ~

root@013eed72d727:~# cd /home/teluser

root@013eed72d727:/home/teluser# ls
test1234
```
