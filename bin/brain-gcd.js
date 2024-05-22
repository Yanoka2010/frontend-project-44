#!/usr/bin/env node
import { str, brainGCD } from '../src/games/gcd.js';
import { brainGameStart } from '../src/index.js';

brainGameStart(str, brainGCD);
