# Guide to Git & vs code

*<U>Git과 vs code의 사용법에 익숙해지기 위한 가이드를 스스로 작성</U>*


1.0.0 **git의 repository 가져오기**

- 해당하는 repository의 make clone 한다.
- shitf + cmd + P
  - git clone
  - paste URL
- desktop에 저장할 공간 선택

***Done***

## 자주쓰는 단축키
> Ctrl + Cmd+P : 모든 명령에 접근할 수 있는 명령 팔레트

> cmd + p : 파일이나 기호를 탐색

> cmd + \ : 에디터 나란히 놓고 편집

> cmd + 1,2,3 : 에디터(탭)간 이동

> cmd + shift + [ ] : 코드 접기 펴기

> cmd + shift + v : 마크다운 미리보기




## 이미지 추가하는 방법

> 1. vscode의 작업영역에 편의상 img폴더를 하나 만든다.
> 2. 첨부하고자 하는 이미지파일을 vscode의 img폴더에 드래그 앤 드랍한다.
> 3. 이미지를 추가하고자 하는 파일(문서)의 해당하는 위치의 라인에 ```![](이미지이름.확장자)```로 이미지 addr를 입력하면, 해당 이미지가 주소를 입력한 위치에 추가된다.



## vmware의 ubuntu에서 vscode 사용하기, (git-vscode 연동)

> *윈도우 pc의 vmware로 설치한 ubuntu에서 vscode(그리고 github)를 사용하고 싶다. 
1. ubuntu의 terminal에서 git을 설치
   ```# apt-get install git```

   1. 1 
   ```
   & git config --global user.name tabasco-kimchi
   
   & git config --global user.email 0000@gamil.com
   ```

2. git에 local 저장소를 생성하고 github와 연결

> vscode에서 ..
* file- open foler
* 저장소로 지정할 폴더를 생성 및 지정
* 레포지토리 초기화

> ***레포지토리 버전관리가 시작됨***

3. local 저장소를  github에 연동하기

> vscode 에서  ctrl(cmd)+` 로 터미널을 실행
```
$ git remote add origin https://github.com/tabasco-kimchi/CTD.git
```
로 가져오고자 하는 레포지토리를 가져온다.

> 이제 push & pull 을 할 수 있다.


## 이미 존재하는 github의 레포지토리와 연동

> 레포지토리를 만들고 싶은 위치에서 git clone https://github.com/ID/repository name.git

