#!/usr/bin/env node
import { str, brainCalc } from '../src/games/calc.js';
import { brainGameStart } from '../src/index.js';

brainGameStart(str, brainCalc);
