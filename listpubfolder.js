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
  
  
  async function listFolder() {
  
    const res =  await arDrive.listPublicFolder({ folderId: 'd1b21a90-bcc6-4bfe-9d85-ef7b688380df', maxDepth: 2, includeRoot: '77be790d-dfb8-450e-9d18-cfe74c340c18', owner: 'IlMgrEnuETrItRzobWa9kPt9bf-6Z7s676rkYLGZQfk' })
    
    console.log(res)
  
  }
  
  listFolder()