"use strict"

const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const uuid = require('uuid')
const puppeteer = require('puppeteer');

const USER_DATA_DIR = '/tmp/user-data-dir'
const VIEWPORT = { width: 792, height: 612, deviceScaleFactor: 2 }

const PUPPETEER_OPTS = {
  userDataDir: USER_DATA_DIR,
  headless: true,
  args: ['--no-sandbox']
}

module.exports = async function (event, context) {
  console.info("launching puppeteer browser")
  const browser = await puppeteer.launch();
  console.info("getting browser newPage")
  const page = await browser.newPage();
  url = 'https://example.com'
  console.info(`START ${url}`)
  await page.goto(url);
  console.info(`AFTER ${url}`)
  console.info("START screenshot")
  const imageResponse = await page.screenshot({path: 'example.png'});
  console.info("AFTER screenshot")
  await browser.close();
  const result = { "imageResponse": imageResponse };

  context
    .status(200)
    .succeed(result);
}
