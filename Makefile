SHELL := /bin/bash

default: all

.PHONY: clean all semantic pug scripts styles

clean:
	npm run clean

all:
	npm run build

semantic:
	npm run rebuild:semantic

pug:
	npm run build:pug

scripts:
	npm run build:scripts

styles:
	npm run build:styles
