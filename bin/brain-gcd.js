#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable import/named */
/* eslint-disable no-console */
import { str, brainGCD } from '../src/games/gcd.js';
import { brainGameStart } from '../src/index.js';

brainGameStart(str, brainGCD);
