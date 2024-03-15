#!/usr/bin/env node
/* eslint no-eval: 0 */
import { str, brainCalc } from '../src/games/calc.js';
import { brainGameStart } from '../src/index.js';


brainGameStart(str, brainCalc);