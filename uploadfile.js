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
  

  
  async function uploadFile(eID) {
    // Wrap file for upload
    const wrappedEntity = wrapFileOrFolder('./img/congrats_page.PNG')
  
    // Construct a safe Entity ID Type
    const destFolderId = EID(eID)
    const uploadFileResult = await arDrive.uploadAllEntities({
      entitiesToUpload: [{ wrappedEntity, destFolderId }],
    })
    console.log(uploadFileResult)
  }

  uploadFile('90116e42-b13e-4a9a-8845-3ae4ccb8d830')