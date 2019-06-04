## docker-composing


###설치하기
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


root@server:~/docker# gedit docker-compose.yml


version: "3"
services:
echo:
	image: jbcrsvp/echo:latest
	ports: 
	   - 9090:8080(호스트의 9090을 8080으로 포스포워딩,매핑)


docker-compose up

> **yaml은 데이터를 들여쓰기를 가지고 구조제를 구분한다.** *yaml은 tab을 사용하지 않는다.*