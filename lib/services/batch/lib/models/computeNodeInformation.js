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
 * Initializes a new instance of the ComputeNodeInformation class.
 * @constructor
 * Information about the compute node on which a task ran.
 * @member {string} [affinityId] Gets or sets an identifier for the compute
 * node on which the task ran, which can be passed when adding a task to
 * request that the task be scheduled close to this compute node.
 * 
 * @member {string} [nodeUrl] Gets or sets the URL of the node on which the
 * task ran.
 * 
 * @member {string} [poolId] Gets or sets the id of the pool on which the task
 * ran.
 * 
 * @member {string} [nodeId] Gets or sets the id of the node on which the task
 * ran.
 * 
 * @member {string} [taskRootDirectory] Gets or sets the root directory of the
 * task on the compute node.
 * 
 * @member {string} [taskRootDirectoryUrl] Gets or sets the URL to the root
 * directory of the task on the compute node.
 * 
 */
function ComputeNodeInformation() {
}

/**
 * Defines the metadata of ComputeNodeInformation
 *
 * @returns {object} metadata of ComputeNodeInformation
 *
 */
ComputeNodeInformation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ComputeNodeInformation',
    type: {
      name: 'Composite',
      className: 'ComputeNodeInformation',
      modelProperties: {
        affinityId: {
          required: false,
          serializedName: 'affinityId',
          type: {
            name: 'String'
          }
        },
        nodeUrl: {
          required: false,
          serializedName: 'nodeUrl',
          type: {
            name: 'String'
          }
        },
        poolId: {
          required: false,
          serializedName: 'poolId',
          type: {
            name: 'String'
          }
        },
        nodeId: {
          required: false,
          serializedName: 'nodeId',
          type: {
            name: 'String'
          }
        },
        taskRootDirectory: {
          required: false,
          serializedName: 'taskRootDirectory',
          type: {
            name: 'String'
          }
        },
        taskRootDirectoryUrl: {
          required: false,
          serializedName: 'taskRootDirectoryUrl',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ComputeNodeInformation;
