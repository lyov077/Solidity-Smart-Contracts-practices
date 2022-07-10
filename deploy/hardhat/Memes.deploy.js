module.exports = async ({
	deployments: { deploy },
	ethers: {
		getNamedSigners,
		utils: { parseEther }
	}
}) => {
	const { deployer } = await getNamedSigners();

	await deploy("Memes", {
		from: deployer.address,
		contract: "Memes",
		args: [],
		log: true
	});
};
module.exports.tags = ["Memes", "Hardhat"];
