import * as cdk from 'aws-cdk-lib';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { join } from 'path';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class OnlineBookStack extends cdk.Stack {
  private api: RestApi


  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    this.api = new RestApi(this, 'MyOnlineBookApi')

    const getLambdaFunction = new NodejsFunction(this,'LambdaFunctionFirst',{
      entry: join(__dirname, '..','lambdas', 'getBook.ts'),
      handler: 'handler'
    })

    const getLambdaIntegration = new LambdaIntegration(getLambdaFunction)
    const getLambdaResource = this.api.root.addResource('getBook')
    getLambdaResource.addMethod('GET', getLambdaIntegration)
    
  }
}
