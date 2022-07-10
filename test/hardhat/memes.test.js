const { expect } = require("chai");
const {
	ethers: {
		getContract,
		provider: { getBlockNumber },
		getNamedSigners,
		utils: { parseEther },
		constants: { NegativeOne, One }
	},
	deployments: { fixture, createFixture },
	network
} = require("hardhat");
const {
	time: { advanceBlockTo }
} = require("@openzeppelin/test-helpers");

const setupFixture = createFixture(async ({ deployments, ethers: { getContractAt } }) => {
	await fixture(["Hardhat"]);

	const { deployer, caller, holder } = await getNamedSigners();

	const Memes = await getContract("Memes", deployer);

	return [Memes];
});

describe("Memes Contract", function () {
	let deployer, holder, caller;
	let Memes;
	before("Before All: ", async function () {
		({ deployer, caller, holder } = await getNamedSigners());
	});

	beforeEach(async function () {
		[Memes] = await setupFixture();
	});

	describe("Initialization: ", function () {
		it("Should initialize  with correct values", async function () {
			expect(await Memes.balanceOf(deployer.address)).to.equal(0);
		});
	});
	describe("Function mint", function () {
		it("Should mint nft for deployer", async function () {
			await Memes.mintNFT(deployer.address, "");
			expect(await Memes.balanceOf(deployer.address)).to.equal(1);
		});
	});
});
