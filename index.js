//it is rough


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

// Derive a private drive key from password, wallet, and drive ID
// const driveKey = deriveDriveKey(
//   'Imran123@',
//   'b2a80df0-2e04-41f7-821d-14a8dfa58a7f',
//   JSON.stringify((myWallet).getPrivateKey())
// );

// // Create a private folder
// const createFolderResult = await arDrive.createPrivateFolder({
//   folderName: 'My New Private Folder',
//   driveKey,
//   parentFolderId: EID('47162534a-eb5e-4134-8ae2-a3946a428ec7')
// });

// Create a public drive and its root folder
// const createDriveResult = await arDrive.createPublicDrive({
//   driveName: 'My-Drive',
// })

  // const createDriveResult = await arDrive.createPublicFolder({
  //   folderName: "1.0",
  //   driveId: "6858a1a4-395d-42ae-92f8-1872f43e1e39",
  //   parentFolderId: "1eefdf16-beac-4487-815e-b7189ddaadcc"
  // });

async function createDive() {
 
  

  const res =  await arDrive.getPublicFolder({ folderId: '3b7d6a24-f785-4267-a3dc-290f33118468', owner: '77be790d-dfb8-450e-9d18-cfe74c340c18', owner: 'IlMgrEnuETrItRzobWa9kPt9bf-6Z7s676rkYLGZQfk' })
  //listPublicFolder({ folderId: 'd1b21a90-bcc6-4bfe-9d85-ef7b688380df', maxDepth: 2, includeRoot: '77be790d-dfb8-450e-9d18-cfe74c340c18', owner: 'IlMgrEnuETrItRzobWa9kPt9bf-6Z7s676rkYLGZQfk' })



  // getPublicDrive({driveId: '77be790d-dfb8-450e-9d18-cfe74c340c18', owner: 'IlMgrEnuETrItRzobWa9kPt9bf-6Z7s676rkYLGZQf'})

  // console.log(createDriveResult.created[0].entityId['entityId'])
  // console.log(createDriveResult.created[1].entityId['entityId'])

  // console.log(createDriveResult)
  console.log(res)

  // uploadFile('90116e42-b13e-4a9a-8845-3ae4ccb8d830')
}

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

createDive()

// ba346247-547b-4e67-9e80-d14cf0ea8578
// c7664d68-efe4-4603-b995-8e37ae6163e1


// await arDrive.movePublicFile({
//   fileId: '8188bc26-e7a6-43a7-ad97-d5fa6ffe028d',
//   newParentFolderId: 'af135bf6-71ba-4ef0-876e-18befdc708e5',
// })