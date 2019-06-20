# Installing VMware Tools in Linux Ubuntu 18.04

*reference: https://vitux.com/how-to-install-vmware-tools-in-ubuntu/*

## VM> installVMware Tools

### - Check the path of cdroms

```
baekchul@ubuntu:~$ mount

/dev/sr0 on /media/baekchul/VMware Tools type iso9660 (ro,nosuid,nodev,relatime,nojoliet,check=s,map=n,blocksize=2048,uid=1000,gid=1000,dmode=500,fmode=400,uhelper=udisks2)
```

> ***Can see the cdrom mounted on /media ~ so, move to that folder and check the files in it***

```
baekchul@ubuntu:~$ cd /media/baekchul/VMware\ Tools/

baekchul@ubuntu:/media/baekchul/VMware Tools$ ls

manifest.txt     VMwareTools-10.2.0-7259539.tar.gz  vmware-tools-upgrader-64
run_upgrader.sh  vmware-tools-upgrader-32
```

> ***Now in the folder contains install files(exe)***

> ***Copy that install files to local place that you want(I copied it to donwload folder)***

```
baekchul@ubuntu:/media/baekchul/VMware Tools$ cp VMwareTools-10.2.0-7259539.tar.gz /home/baekchul/Downloads/

baekchul@ubuntu:/media/baekchul/VMware Tools$ cd /home/baekchul/Downloads/
```
> ***extract the install files to the folder named /tmp***

```
baekchul@ubuntu:~/Downloads$ tar xzvf /home/baekchul/Downloads/VMwareTools-10.2.0-7259539.tar.gz -C /tmp/
```
> ***Move to the tmp folder***
```
baekchul@ubuntu:~/Downloads$ cd /tmp
```

> ***Check what's in it with "$ ls" command***

```
baekchul@ubuntu:/tmp$ ls
vmware-tools-distrib
```

> ***Move to folder containing install files***
```
baekchul@ubuntu:/tmp$ cd vmware-tools-distrib/
```

> ***Check files with "ls" command***
```
baekchul@ubuntu:/tmp/vmware-tools-distrib$ ls
bin  caf  doc  etc  FILES  INSTALL  installer  lib  vgauth  vmware-install.pl
```

> ***FINALLY, EXECUTE the install files***

```
baekchul@ubuntu:/tmp/vmware-tools-distrib$ sudo ./vmware-install.pl -f
```
