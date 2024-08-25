const hre = require("hardhat");

async function main() {
  const Donation = await hre.ethers.getContractFactory("Donation");
  const donation = await Donation.deploy();
  await donation.deployed();
  console.log("Donation contract deployed to:", donation.address);

  const WildlifeNFT = await hre.ethers.getContractFactory("WildlifeNFT");
  const wildlifeNFT = await WildlifeNFT.deploy();
  await wildlifeNFT.deployed();
  console.log("WildlifeNFT contract deployed to:", wildlifeNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
