CC ?= cc
C_FLAGS := -std=c11 $\
					 -O2 -march=native -pipe $\
					 -Wall -Wextra -Wpedantic

all: main

main: main.c
	${CC} $< ${C_FLAGS} -o $@

clean:
	-rm main

.PHONY: all clean
