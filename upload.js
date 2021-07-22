const s3FolderUpload = require('s3-folder-upload')

const accessKeyId = process.argv[process.argv.findIndex(a => a === '--id') + 1];
const accessKeySecret = process.argv[process.argv.findIndex(a => a === '--secret') + 1];

const directoryName = 'dist'

const credentials = {
  accessKeyId: accessKeyId,
  secretAccessKey: accessKeySecret,
  region: "us-west-2",
  bucket: "thecanabrava-libtest"
}
const options = {
    useFoldersForFileTypes: false,
}

s3FolderUpload(directoryName, credentials, options)