/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the MetricDefinitionCollection class.
 * @constructor
 * Collection of metric defintions
 * @member {array} [value] Collection of resources
 * 
 * @member {string} [nextLink] Link to next page of resources
 * 
 */
function MetricDefinitionCollection() {
}

/**
 * Defines the metadata of MetricDefinitionCollection
 *
 * @returns {object} metadata of MetricDefinitionCollection
 *
 */
MetricDefinitionCollection.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'MetricDefinitionCollection',
    type: {
      name: 'Composite',
      className: 'MetricDefinitionCollection',
      modelProperties: {
        value: {
          required: false,
          serializedName: 'value',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'MetricDefinitionElementType',
                type: {
                  name: 'Composite',
                  className: 'MetricDefinition'
                }
            }
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = MetricDefinitionCollection;
