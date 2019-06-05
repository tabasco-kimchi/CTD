

## scapy

> 패킷을 구성하고 있는 정보들을 설정할 수 있다.
```
ls()
설명: 사용가능한 프로토콜을 확인
```


```
>>> ls(TCP)
설명: tcp 헤더 정보를 출력

sport      : ShortEnumField            = (20)
dport      : ShortEnumField            = (80)
seq        : IntField                  = (0)
ack        : IntField                  = (0)
dataofs    : BitField (4 bits)         = (None)
reserved   : BitField (4 bits)         = (0)
flags      : FlagsField (8 bits)       = (2)
window     : ShortField                = (8192)
chksum     : XShortField               = (None)
urgptr     : ShortField                = (0)
options    : TCPOptionsField           = ({})
>>>
``` 


```
>>> TCP().display()
설명: 현재 설정되어있는 TCP 헤더 정보를 출력해주는 것

###[ TCP ]###
  sport= ftp_data
  dport= http
  seq= 0
  ack= 0
  dataofs= None
  reserved= 0
  flags= S
  window= 8192
  chksum= None
  urgptr= 0
  options= {}
```

> lsc() 
> 사용가능한 기능을 확인



### 현재 설정된 IP 헤더 정보를 출력

```
>>> IP().display()

###[ IP ]###
  version= 4
  ihl= None
  tos= 0x0
  len= None
  id= 1
  flags= 
  frag= 0
  ttl= 64
  proto= hopopt
  chksum= None
  src= 127.0.0.1
  dst= 127.0.0.1
  \options\
```

\>>>ip = IP() 
변수를 활용

\>>> ip.display()

> 현재 IP헤더의 목적지 주소를 변경
```
>>> ip.dst="000.000.000.000"
>>> ip.display()
```
> 레이어를 쌓는 방법
```
>>> ip = IP()
>>> tcp = TCP()
>>> packet = ip/tcp
>>> packet.display()
###[ IP ]###
  version= 4
  ihl= None
  tos= 0x0
  len= None
  id= 1
  flags= 
  frag= 0
  ttl= 64
  proto= tcp
  chksum= None
  src= 172.16.249.135
  dst= 127.0.0.1
  \options\
###[ TCP ]###
     sport= ftp_data
     dport= http
     seq= 0
     ack= 0
     dataofs= None
     reserved= 0
     flags= S
     window= 8192
     chksum= None
     urgptr= 0
     options= {}
>>> 
```

## Sniffing

> sniff() , sf = sniff() , sf.display()

```
>>> sniff()
^C<Sniffed: TCP:4 UDP:0 ICMP:0 Other:0>
>>> sf = sniff()
^C>>> 
>>> 
>>> 
>>> 
>>> sf.display()
0000 Ether / IP / UDP 172.16.249.136:netbios_dgm > 172.16.249.134:netbios_dgm / NBTDatagram / Raw
0001 Ether / IP / UDP 172.16.249.1:netbios_ns > 172.16.249.134:netbios_ns / NBNSQueryRequest
0002 Ether / IP / UDP 172.16.249.1:netbios_ns > 172.16.249.134:netbios_ns / NBNSQueryRequest
0003 Ether / IP / UDP 172.16.249.1:netbios_ns > 172.16.249.134:netbios_ns / NBNSQueryRequest
0004 Ether / IP / UDP 172.16.249.1:netbios_ns > 172.16.249.134:netbios_ns / NBNSQueryRequest
0005 Ether / IP / TCP 172.16.249.136:1528 > 172.16.249.134:http A / Raw / Padding
0006 Ether / IP / TCP 23.35.222.25:http > 172.16.249.134:1528 A / Padding
0007 Ether / IP / UDP 172.16.249.136:netbios_ns > 172.16.249.134:netbios_ns / NBNSQueryRequest / Raw
0008 Ether / IP / UDP 172.16.249.136:netbios_ns > 172.16.249.134:netbios_ns / NBNSQueryRequest / Raw
0009 Ether / IP / UDP 172.16.249.136:netbios_ns > 172.16.249.134:netbios_ns / NBNSQueryRequest / Raw
0010 Ether / IP / UDP / DNS Qry "tools.kali.org." 
```

```
>>> sf = sniff(count=10)
설명 : 10개까지만 카운트해서 스니핑해라
```


```
>>> sf[0].show()
설명: 계층적으로 쌓아서 보여준다.

###[ Ethernet ]###
  dst= 00:50:56:e8:e9:d0
  src= 00:50:56:2b:3b:aa
  type= 0x800
###[ IP ]###
     version= 4L
     ihl= 5L
     tos= 0x0
     len= 41
     id= 31364
     flags= DF
     frag= 0L
     ttl= 128
     proto= tcp
     chksum= 0xe574
     src= 172.16.249.136
     dst= 23.35.222.25
     \options\
###[ TCP ]###
        sport= 1528
        dport= http
        seq= 197199029
        ack= 2021781993
        dataofs= 5L
        reserved= 0L
        flags= A
        window= 64240
        chksum= 0x98e3
        urgptr= 0
        options= []
###[ Raw ]###
           load= '\x00'
###[ Padding ]###
              load= '\x00\x00\x00\x00\x00'
```



## scapy를 이용한 3way hand-shaking

kali2에서 아이피 kali1로 바꾸기

```
>>> ip = IP()
>>> ip.display()
###[ IP ]###
  version= 4
  ihl= None
  tos= 0x0
  len= None
  id= 1
  flags= 
  frag= 0
  ttl= 64
  proto= hopopt
  chksum= None
  src= 172.16.249.135
  dst= 127.0.0.1
  \options\


>>> ip.dst = "172.16.249.134"
>>> ip.display()
###[ IP ]###
  version= 4
  ihl= None
  tos= 0x0
  len= None
  id= 1
  flags= 
  frag= 0
  ttl= 64
  proto= hopo

  ```


```
  >>> tcp.sport = RandNum(1024, 65535)
설명: 파이썬 함수, 랜덤하게 tcp s포트를 설정 1024 - 65535 사이에
```


> ????
```
>>> syn = ip/tcp
설명: tcp위에 ip가 올라가는 것
```

> ???

```
>>> syn_ack = sr1(syn)
설명: 싱크애크 패킷을 받아오는 것

Begin emission:
.Finished to send 1 packets.
.^C
Received 2 packets, got 0 answers, remaining 1 packets
>>> 
```
```
>>> syn_ack.display()
설명: syn_ack 보여주기
```
```
>>> ack = ip/TCP(sport=syn_ack[TCP].dport, dport=80, flags="A" , seq=syn_ack[TCP].ack, ack=syn_ack[TCP].seq+1)
설명: 시퀀스와 에크를 통해서 주고받는 것에 번호를 붙여서 그 다음 처리를 어떤 것을 해야하는지 미리 알려주는 것.
```

