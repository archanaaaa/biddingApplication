import config from "../config.json";
import AWS from 'aws-sdk';



export function uploadFile(file, bucketName) {

    // console.log("Uploding File")
    var bucketRegion = config["awsBucketRegion"];
    var IdentityPoolId = config["awsIdentityPoolId"];
    console.log(bucketRegion)
    console.log(IdentityPoolId)

    AWS.config.update({
        region: bucketRegion,
        credentials: new AWS.CognitoIdentityCredentials({
            IdentityPoolId: IdentityPoolId
        })
    });

    var s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: { Bucket: bucketName }
    });
    console.log(file.name)
    if (file) {

        var fileName = file.name;
        var filePath = fileName;
        console.log("Uploding File to S3")
        s3.upload({
            Key: filePath,
            Body: file,
            acl: 'private'
        }, function (err, data) {
            if (err) {
                alert('error');
                console.log(err)
            }
            alert('Successfully Uploaded!');
        }).on('httpUploadProgress', function (progress) {
            var uploaded = parseInt((progress.loaded * 100) / progress.total);

        });
    }
}