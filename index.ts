import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("teste-inicial-iac-s3", {
    bucket: "teste-inicial-iac-s3",
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

export const bucketName = bucket.id;
export const bucketRegion = bucket.region;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
