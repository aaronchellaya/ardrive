const {
    readJWKFile,
    arDriveFactory,
    wrapFileOrFolder,
    EID,
    deriveDriveKey
  } = require('ardrive-core-js')
  
  
  // Read wallet from file
  const myWallet = readJWKFile('./wallet/file.json')
  
  // Construct ArDrive class
  const arDrive = arDriveFactory({ wallet: myWallet })
  
  
  async function getDrive() {
  
    const res =  await arDrive.getPublicDrive({driveId: '77be790d-dfb8-450e-9d18-cfe74c340c18', owner: 'IlMgrEnuETrItRzobWa9kPt9bf-6Z7s676rkYLGZQf'})
  
    console.log(res)

  }
  
  getDrive()