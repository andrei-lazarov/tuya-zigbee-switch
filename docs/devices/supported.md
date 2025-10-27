# Supported devices

**Z2M device name** usually represents a collection of devices.  
Even if they work the same, rebranded versions have different internals and different pinouts (and therefore require custom builds).  

**Zigbee Manufacturer** is the most reliable unique device identifier. If the TZ3000 id of your device is not on this list, it requires porting. 

For devices that contain a **supported Tuya Zigbee module** (ZTU, ZT2S, ZT3L), porting is relatively simple.  
It consists of tracing (or guessing) the **board pinout**, adding an entry in the `device_db.yaml` file and running the build action. 

Also read:  
- [contribute/porting_to_new_device.md](/docs/contribute/porting_to_new_device.md)
- [recommended.md](./recommended.md)
- [not_recommended.md](./not_recommended.md)

| Z2M device name | Vendor name | Zigbee Manufacturer | Type | Status | Issue |
| --- | --- | --- | --- | --- | --- |
| [TS0004](https://www.zigbee2mqtt.io/devices/TS0004.html) | iHseno 4-gang  | _TZ3000_knoj8lpk | router | Supported |   [link](https://github.com/romasku/tuya-zigbee-switch/issues/105)  | 
| [TS0001](https://www.zigbee2mqtt.io/devices/TS0001.html) | Tuya 1-gang switch  | _TZ3000_u6ocpapf | router | Supported |    -  | 
| [TS0004](https://www.zigbee2mqtt.io/devices/TS0004.html) | Tuya 4-gang switch  | _TZ3000_gbdxbmwz | router | Supported |    -  | 

