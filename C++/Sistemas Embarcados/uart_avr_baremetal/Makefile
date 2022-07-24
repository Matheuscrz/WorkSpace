PROJECT := uart

all: $(PROJECT).elf $(PROJECT).hex

%.elf: %.c
	avr-gcc -Wall -Os -DF_CPU=16000000UL -mmcu=atmega328p $(<) -o $(@)

%.hex: %.elf
	avr-objcopy -O ihex -R .eeprom $(<) $(@)

clean:
	@rm -rf *.elf *.hex

debug:
	qemu-system-avr -machine uno -bios $(PROJECT).elf -s -S

download:
	avrdude -b 115200 -c arduino -D -p atmega328p -P /dev/ttyUSB0 -U flash:w:$(<)

sim:
	qemu-system-avr -machine uno -bios $(PROJECT).elf -nographic -serial tcp::5678,server=on,wait=on

terminal:
	miniterm.py
