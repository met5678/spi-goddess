'use strict';

const SPI    = require('pi-spi');
const onExit = require('signal-exit');

const spi = SPI.initialize('/dev/spidev0.0');
spi.clockSpeed(1e6);

function noop() {}

function setChannels(inBuffer) {
  spi.write(inBuffer, noop);
}

module.exports = {
  setChannels: setChannels
};