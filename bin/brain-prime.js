#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable import/named */
/* eslint-disable no-console */
import { str, brainPrime } from '../src/games/prime.js';
import { brainGameStart } from '../src/index.js';

brainGameStart(str, brainPrime);
