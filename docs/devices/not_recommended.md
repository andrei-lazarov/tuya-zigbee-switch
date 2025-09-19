# Not recommended devices

Please add devices that:
- do not use Telink chips (not supported)
- do not have the OTA cluster (can't update OTA)
- have coil whine (loud screeching noise)
- have [multiple_pinouts.md](./multiple_pinouts.md)
- have other issues

Older devices (around 2020?) use different chips: Texas Instruments, Silicon Laboratories and are not compatible.

## Switch modules

#### WHD02 (1-gang) - `_TZ3000_skueekg3`
- There are multiple variants with the same ID.
- Some can not update OTA: [#80](https://github.com/romasku/tuya-zigbee-switch/issues/80)

#### AVATTO ZWSM16-4 (4-gang only) - `_TZ3000_5ajpkyq6`
- There are **2 known variants** with the same ID and image_type **that have different pinouts**.
- It should be okay if you get it from [AliExpress](https://vi.aliexpress.com/item/1005007247647375.html) (no affiliate). This is the default supported variant.  
Otherwise, check the pinout before flashing.
- Further reading: [multiple_pinouts.md](./multiple_pinouts.md)

## Switches

#### BSEED TS0726_2_gang - `_TZ3002_zjuvw9zf`
- The 2-gang has a very annoying coil whine in this state:  
1 relay + 1 indicator LED + 2 backlight LEDs ON
- [AliExpress](https://www.aliexpress.com/item/1005008749674564.html)

## Sockets