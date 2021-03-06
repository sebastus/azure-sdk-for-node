/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions, RequestOptions, ServiceCallback, ServiceClientCredentials } from 'ms-rest';
import * as operations from "./operations";

declare class CdnManagementClient {
    /**
     * @class
     * Initializes a new instance of the CdnManagementClient class.
     * @constructor
     *
     * @param {credentials} credentials - Gets Azure subscription credentials.
     *
     * @param {string} subscriptionId - Azure Subscription ID
     *
     * @param {string} [baseUri] - The base URI of the service.
     *
     * @param {object} [options] - The parameter options
     *
     * @param {Array} [options.filters] - Filters to be added to the request pipeline
     *
     * @param {object} [options.requestOptions] - Options for the underlying request object
     * {@link https://github.com/request/request#requestoptions-callback Options doc}
     *
     * @param {boolean} [options.noRetryPolicy] - If set to true, turn off default retry policy
     *
     * @param {string} [options.apiVersion] - Version of the API to be used with the client request, current version is 2015-06-01
     *
     * @param {string} [options.acceptLanguage] - Gets or sets the preferred language for the response.
     *
     * @param {number} [options.longRunningOperationRetryTimeout] - Gets or sets the retry timeout in seconds for Long Running Operations. Default value is 30.
     *
     * @param {boolean} [options.generateClientRequestId] - When set to true a unique x-ms-client-request-id value is generated and included in each request. Default is true.
     *
     */
    constructor(credentials: ServiceClientCredentials, subscriptionId: string, baseUri: string, options: ServiceClientOptions);

    credentials: ServiceClientCredentials;

    subscriptionId: string;

    apiVersion: string;

    acceptLanguage: string;

    longRunningOperationRetryTimeout: number;

    generateClientRequestId: boolean;

    // Operation groups
    profiles: operations.Profiles;
    endpoints: operations.Endpoints;
    origins: operations.Origins;
    customDomains: operations.CustomDomains;
    nameAvailability: operations.NameAvailability;
    operations: operations.Operations;
    }

export = CdnManagementClient;
