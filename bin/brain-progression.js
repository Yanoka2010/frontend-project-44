#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */
/* eslint-disable import/named */
import { str, brainProgression } from '../src/games/progression.js';
import { brainGameStart } from '../src/index.js';

brainGameStart(str, brainProgression);
