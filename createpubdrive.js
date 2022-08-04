const {
    readJWKFile,
    arDriveFactory
  } = require('ardrive-core-js')
  
  
  // Read wallet from file
  const myWallet = readJWKFile('./wallet/file.json')
  
  // Construct ArDrive class
  const arDrive = arDriveFactory({ wallet: myWallet })
  
  async function createDive() {
    
    // Create a public drive and its root folder
    const res =  await arDrive.createPublicDrive({
        driveName: 'My-Drive',
      })
    console.log(res)

  }
  
  createDive()