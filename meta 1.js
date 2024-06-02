// Create a variable to hold your NFTs
let nfts = [];

// This function will take some values as parameters,
// create an NFT object with those values for its metadata,
// and store it in the variable above.
function mintNFT(name, description) {
  let nft = {
    name: name,
    description: description
  };
  nfts.push(nft);
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
  for (let i = 0; i < nfts.length; i++) {
    console.log("Name: " + nfts[i].name);
    console.log("Description: " + nfts[i].description);
  }
}

// Print the total number of NFTs we have minted to the console
function getTotalSupply() {
  return nfts.length;
}

// Call your functions below this line
mintNFT("NFT1", "This is the first NFT");
mintNFT("NFT2", "This is the second NFT");
listNFTs();
console.log("Total NFTs: " + getTotalSupply());