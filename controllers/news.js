var express = require('express');
var path = require('path');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();
var mongoose = require('mongoose');

// Scrapped website
var url = "https://www.riverfronttimes.com";