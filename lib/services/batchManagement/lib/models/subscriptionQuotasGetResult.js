/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @class
 * Initializes a new instance of the SubscriptionQuotasGetResult class.
 * @constructor
 * Values returned by the Get Subscription Quotas operation.
 * @member {number} [accountQuota] The number of accounts the subscription is
 * allowed to create in the Batch Service at the specified region.
 * 
 */
function SubscriptionQuotasGetResult() {
}

/**
 * Defines the metadata of SubscriptionQuotasGetResult
 *
 * @returns {object} metadata of SubscriptionQuotasGetResult
 *
 */
SubscriptionQuotasGetResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'SubscriptionQuotasGetResult',
    type: {
      name: 'Composite',
      className: 'SubscriptionQuotasGetResult',
      modelProperties: {
        accountQuota: {
          required: false,
          serializedName: 'accountQuota',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = SubscriptionQuotasGetResult;
