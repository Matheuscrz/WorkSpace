SHELL		:= /bin/bash
ARM_PREFIX      := arm-none-eabi
ARM_AS          := $(ARM_PREFIX)-as
ARM_CC          := $(ARM_PREFIX)-gcc
ARM_LD          := $(ARM_PREFIX)-ld
ARM_OC          := $(ARM_PREFIX)-objcopy
ARM_AS_OPTIONS	:= -mcpu=cortex-m3 -mthumb -g
ARM_CC_OPTIONS	:= -Wall -Os -mcpu=cortex-m3 -mthumb -g -nostdlib -nostartfiles
C_SOURCES       := usart3_interruption.c
PROJECT_NAME    := usart3_interruption

all: $(PROJECT_NAME).bin
clean:
	@rm -rf *.o *.elf *.bin
run: $(PROJECT_NAME).bin
	qemu-system-arm -d int -icount shift=auto,align=on -M netduino2 -nographic -monitor null -serial null -serial null -serial tcp::5678,server=on,wait=on -kernel $(<)
%.o: %.c
	$(ARM_CC) $(ARM_CC_OPTIONS) -c $(<) -o $(@)
$(PROJECT_NAME).elf: stm32f205.ld $(S_SOURCES:.s=.o) $(C_SOURCES:.c=.o)
	$(ARM_CC) $(ARM_CC_OPTIONS) -T $(^) -o $(@)
$(PROJECT_NAME).bin: $(PROJECT_NAME).elf
	$(ARM_OC) -O binary $(<) $(@)
