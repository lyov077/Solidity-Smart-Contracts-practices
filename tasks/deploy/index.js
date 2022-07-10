const { task } = require("hardhat/config");

task("deploy:memes", "Deploy memes contract", require("./memes.deploy"));
