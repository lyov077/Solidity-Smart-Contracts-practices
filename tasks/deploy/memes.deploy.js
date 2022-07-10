module.exports = async function ({ msg }, { deployments: { deploy }, ethers: { getNamedSigners } }) {
	const { deployer } = await getNamedSigners();

	await deploy("Memes", {
		from: deployer.address,
		contract: "Memes",
		args: [],
		log: true
	});
};
