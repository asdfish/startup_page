TSC := tsc
TS_FLAGS := --strict --pretty

TRANSCOMPILED_FILES := $(patsubst src/%.ts,$\
											 	 dist/%.js,$\
												 $(shell find src -name '*.ts'))

all: ${TRANSCOMPILED_FILES}

dist/%.js: src/%.ts
	${TSC} $< ${TS_FLAGS} --outFile $@
