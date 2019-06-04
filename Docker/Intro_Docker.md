# Docker

## 도커의 특징

: Virtual Machine이 운영체제를 설치해야 하는 비효율성을 개선하기 위해 사용된 컨테이너 기술을 이용.

> - 별도의 guest OS를 설치하지 않음
> - 하드웨어 가상화 계층이 없음
> - 호스트와 비슷한 성능으로 돌아감
> - 이미지 생성과 배포에 특화
> - Repository에 이미지를 올리고 받을 수 있음 (Push/Pull)
> - Docker Hub
> - 다양한 API 제공, 원하는 만큼 자동화가 가능/ 개발과 서버 운영에 매우 유용하다

***컨테이너와 가상머신의 차이***


**컨테이너는 이미지를 실행한 상태**
*: 이미지로 여러개의 컨테이너를 만들 수 있음*

*이미지는 실행파일, 컨테이너는 프로세스*

> **도커의 이미지 처리 방식**
- 유니온 파일 시스템 형식

- Docker Hub 및 개인 저장소에 바뀐 부분만 처리

> 서비스 운영방식과 도커
- 지금까지는 물리 서버를 직접 운영 했음
 - 호스팅 또는 IDC co-location service 사용: 서버를 관리해주는 곳에 위탁
 - 가상화가 발전하면서 <u>"클라우드 환경"</u>으로 변화
 - - 가상 서버를 *임대*하여 사용한 만큼만 요금 지불
 

 > ### Immutable Infrastructure 

- 모듈화해놓고 제거, 설치 등 반복하여 유지, 보수의 불편함을 해소
- 한 번 설정한 운영 환경은 *변경하지 않는다*
- 서비스 운영 환경 이미지를 한 번 쓰고 버림
- 소프트웨어적으로 업데이트(유지,보수)하지 않고, 바꿔버리는 개념

***도커는 Immutatable Infrastructure를 구현한 프로젝트***

***Build, Ship, Run***