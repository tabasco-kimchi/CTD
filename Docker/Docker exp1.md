## Docker 101

> 이미지 만들기

```golang
FROM golang:1.9 : 이미지이름 golang , tag : 1.9
: 태그가 1.9인 고랭 이미지를 가져다 쓰겠다.

RUN mkdir /echo 
: 해당 이미지 안에서 실행하시오. 루트 밑에 에코라는 이름으로 디렉토리를 만들어라. 어디에? 내가 가져온 golang이라는 이미지 안에다가

COPY main.go(host machine) /echo(guest) 
: file을 복사한다 copy _host_ _guest_
: 호스트 안에 이미지 파일을 게스트 안으로 밀어 넣을 때

CMD [ "go", "run", "/echo/main.go" ] 
: cmd (해당하는 게스트에서 실행한다, go run echo/main.go를 )


> docker image build : Dockerfile -> 이미지 생성
                pull___ nginx 
                push (내 id) /
        container run image            up
                    -d
                    -it
                    -p
                    --name              exit

                    stop container-id/name exit 
                    restart                 

                    exit 상태에서 삭제 -> rm : 컨테이너 삭제

                    up된 상태에서 삭제 -> rm -f
```

