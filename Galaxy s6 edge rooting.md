# Samsung Galaxy s6 edge(SM-G925K) Unrooting

> Status : rooted, Select Erase all rooting data option on superuser menu

>> Continuosly rebooted, total brick

## Solution
1. Using Odin v3.12.3

2. Samfirm v0.3.6 download 
- -  https://forum.xda-developers.com/galaxy-tab-s/general/tool-samfirm-samsung-firmware-t2988647

3. Download firmware by SamFrim

    3.1 **Check** Binary Nature, Check CRC32, Decrypt automatically
    
    3.2 "check Update"
    
4. Unarchive downloaded files

5. Change ext md5 -> tar

6. Open BL, AP, CP, CSC in Odin

7. Turn on the Phone with "download mode" *(vol dn + pwr + home)*

8. Untip "Re-Partition" on Option tap

9. Press Start button and done.

**Beware your cable is working**

***If no reaction connecting to pc, CHANGE cable and try again.***
