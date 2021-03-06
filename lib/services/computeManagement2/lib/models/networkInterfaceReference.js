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

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the NetworkInterfaceReference class.
 * @constructor
 * Describes a network interface reference.
 * @member {boolean} [primary] Gets or sets whether this is a primary NIC on a
 * virtual machine
 * 
 */
function NetworkInterfaceReference() {
  NetworkInterfaceReference['super_'].call(this);
}

util.inherits(NetworkInterfaceReference, models['SubResource']);

/**
 * Defines the metadata of NetworkInterfaceReference
 *
 * @returns {object} metadata of NetworkInterfaceReference
 *
 */
NetworkInterfaceReference.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'NetworkInterfaceReference',
    type: {
      name: 'Composite',
      className: 'NetworkInterfaceReference',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        primary: {
          required: false,
          serializedName: 'properties.primary',
          type: {
            name: 'Boolean'
          }
        }
      }
    }
  };
};

module.exports = NetworkInterfaceReference;
