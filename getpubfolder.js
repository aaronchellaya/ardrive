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
  
  
  async function getFolder() {
   
    const res =  await arDrive.getPublicFolder({ folderId: '3b7d6a24-f785-4267-a3dc-290f33118468', owner: 'IlMgrEnuETrItRzobWa9kPt9bf-6Z7s676rkYLGZQfk' })

    console.log(res)
  
  }
  
  getFolder()