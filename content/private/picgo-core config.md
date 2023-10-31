
```json
{
  "picBed": {
    "uploader": "aws-s3",
    "current": "aws-s3",
    "aws-s3": {
      "accessKeyID": "daef65cdc9eacabca645be6c1acd4ddb",
      "secretAccessKey": "43cbf1ba8658ae377a16630618e048e81cb3f8fea34f3ef9ca6669990a68d976",
      "bucketName": "hcplantern",
      "uploadPath": "{year}/{month}/{day}/{timestamp}.{extName}",
      "region": "",
      "endpoint": "https://c076ba032f0a7d0d9c2e8e9e55764dda.r2.cloudflarestorage.com",
      "proxy": "",
      "urlPrefix": "https://r2.hcplantern.top",
      "pathStyleAccess": false,
      "rejectUnauthorized": true,
      "acl": "public-read",
      "disableBucketPrefixToURL": false
    }
  },
  "picgoPlugins": {
    "picgo-plugin-s3": true,
    "picgo-plugin-super-prefix": true
  },
  "picgo-plugin-super-prefix": {
    "prefixFormat": "YYYY/MM/DD/",
    "fileFormat": "YYYYMMDD-HHmmss"
  }
}
```