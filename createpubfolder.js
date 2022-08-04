const {
  readJWKFile,
  arDriveFactory
} = require('ardrive-core-js')


// Read wallet from file
const myWallet = readJWKFile('./wallet/file.json')

// Construct ArDrive class
const arDrive = arDriveFactory({ wallet: myWallet })


async function createFolder() {
  
  const res =  await arDrive.createPublicFolder({
    folderName: "1.0",
    driveId: "6858a1a4-395d-42ae-92f8-1872f43e1e39",
    parentFolderId: "1eefdf16-beac-4487-815e-b7189ddaadcc"
  });

  console.log(res)
}

createFolder()