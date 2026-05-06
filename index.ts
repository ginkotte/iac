import * as aws from "@pulumi/aws";

const fistBucket = new aws.s3.Bucket("teste-inicial-iac-s3", {
    bucket: "teste-inicial-iac-s3",
    tags: {
        IAC: "true"
    }
});

const secondBucket = new aws.s3.Bucket("teste-2-inicial-iac-s3", {
    bucket: "teste-2-inicial-iac-s3",
    tags: {
        IAC: "true"
    }
});

const ecr = new aws.ecr.Repository("teste-inicial-iac-ecr", {
    name: "teste-inicial-iac-ecr",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: "true"
    }
})

export const fistBucketName = fistBucket.id;
export const fistBucketRegion = fistBucket.region;
export const fistBucketArn = fistBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketRegion = secondBucket.region;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
