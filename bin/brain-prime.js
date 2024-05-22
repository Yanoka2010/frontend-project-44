#!/usr/bin/env node
import { str, brainPrime } from '../src/games/prime.js';
import { brainGameStart } from '../src/index.js';

brainGameStart(str, brainPrime);
