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
  
  async function moveFile() {
    
    const res =  await arDrive.movePublicFile({
        fileId: '8188bc26-e7a6-43a7-ad97-d5fa6ffe028d',
        newParentFolderId: 'af135bf6-71ba-4ef0-876e-18befdc708e5',
      })
    console.log(res)
  }
  
  moveFile()
  
  
