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

/**
 * @class
 * Initializes a new instance of the PoolInformation class.
 * @constructor
 * Specifies how a job should be assigned to a pool.
 * @member {string} [poolId] Gets or sets the id of an existing pool. All the
 * tasks of the job will run on the specified pool. You must specify either
 * PoolId or AutoPoolSpecification, but not both.
 * 
 * @member {object} [autoPoolSpecification] Gets or sets characteristics for a
 * temporary 'auto pool'. The Batch service will create this auto pool and
 * run all of the tasks of the job on it, and will delete the pool once the
 * job has completed. You must specify either PoolId or
 * AutoPoolSpecification, but not both.
 * 
 * @member {string} [autoPoolSpecification.autoPoolIdPrefix] Gets or sets a
 * prefix to be added to the unique identifier when a pool is automatically
 * created. The prefix can be up to 20 characters long.
 * 
 * @member {string} [autoPoolSpecification.poolLifetimeOption] Gets or sets
 * the minimum lifetime of created auto pools, and how multiple jobs on a
 * schedule are assigned to pools. Possible values include: 'jobschedule',
 * 'job', 'unmapped'
 * 
 * @member {boolean} [autoPoolSpecification.keepAlive] Gets or sets whether to
 * keep an auto pool alive after its lifetime expires.
 * 
 * @member {object} [autoPoolSpecification.pool] Gets or sets the pool
 * specification for the auto pool.
 * 
 * @member {string} [autoPoolSpecification.pool.displayName] Gets or sets the
 * display name for the pool.
 * 
 * @member {string} [autoPoolSpecification.pool.vmSize] Gets or sets the size
 * of the virtual machines in the pool. All VMs in a pool are the same size.
 * 
 * @member {object} [autoPoolSpecification.pool.cloudServiceConfiguration]
 * Gets or sets the cloud service configuration for the pool. This property
 * and VirtualMachineConfiguration are mutually exclusive and one of the
 * properties must be specified.
 * 
 * @member {string}
 * [autoPoolSpecification.pool.cloudServiceConfiguration.osFamily] Gets or
 * sets the Azure Guest OS family to be installed on the virtual machines in
 * the pool.
 * 
 * @member {string}
 * [autoPoolSpecification.pool.cloudServiceConfiguration.targetOSVersion]
 * Gets or sets the Azure Guest OS version to be installed on the virtual
 * machines in the pool. The default value is * which specifies the latest
 * operating system version for the specified OS family.
 * 
 * @member {string}
 * [autoPoolSpecification.pool.cloudServiceConfiguration.currentOSVersion]
 * Gets or sets the Azure Guest OS Version currently installed on the virtual
 * machines in the pool. This may differ from TargetOSVersion if the pool
 * state is Upgrading.
 * 
 * @member {object} [autoPoolSpecification.pool.virtualMachineConfiguration]
 * Gets or sets the virtual machine configuration for the pool. This property
 * and CloudServiceConfiguration are mutually exclusive and one of the
 * properties must be specified.
 * 
 * @member {object}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference]
 * Gets or sets information about the platform or marketplace image to use.
 * 
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.publisher]
 * Gets or sets the publisher of the image.
 * 
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.offer]
 * Gets or sets the offer of the image.
 * 
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.sku]
 * Gets or sets the SKU of the image.
 * 
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.imageReference.version]
 * Gets or sets the version of the image. A value of 'latest' can be
 * specified to select the latest version of an image.
 * 
 * @member {string}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.nodeAgentSKUId]
 * Gets or sets the SKU of Batch Node Agent that needs to be provisioned on
 * the compute node. This property must match the ImageReference property.
 * 
 * @member {object}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration]
 * Gets or sets Windows operating system settings on the virtual machine.
 * This property must not be specified if the ImageReference property
 * referencs a Linux OS image.
 * 
 * @member {boolean}
 * [autoPoolSpecification.pool.virtualMachineConfiguration.windowsConfiguration.enableAutomaticUpdates]
 * Gets or sets whether virtual machine is enabled for automatic updates. If
 * omitted, the default value is true.
 * 
 * @member {number} [autoPoolSpecification.pool.maxTasksPerNode] Gets or sets
 * the maximum number of tasks that can run concurrently on a single compute
 * node in the pool.
 * 
 * @member {object} [autoPoolSpecification.pool.taskSchedulingPolicy] Gets or
 * sets how tasks are distributed among compute nodes in the pool.
 * 
 * @member {string}
 * [autoPoolSpecification.pool.taskSchedulingPolicy.nodeFillType] Gets or
 * sets how tasks should be distributed across compute nodes. Possible values
 * include: 'spread', 'pack', 'unmapped'
 * 
 * @member {moment.duration} [autoPoolSpecification.pool.resizeTimeout] Gets
 * or sets the timeout for allocation of compute nodes to the pool.
 * 
 * @member {number} [autoPoolSpecification.pool.targetDedicated] Gets or sets
 * the desired number of compute nodes in the pool.
 * 
 * @member {boolean} [autoPoolSpecification.pool.enableAutoScale] Gets or sets
 * whether the pool size should automatically adjust over time.
 * 
 * @member {string} [autoPoolSpecification.pool.autoScaleFormula] Gets or sets
 * the formula for the desired number of compute nodes in the pool.
 * 
 * @member {moment.duration}
 * [autoPoolSpecification.pool.autoScaleEvaluationInterval] Gets or sets a
 * time interval for the desired AutoScale evaluation period in the pool.
 * 
 * @member {boolean} [autoPoolSpecification.pool.enableInterNodeCommunication]
 * Gets or sets whether the pool permits direct communication between nodes.
 * 
 * @member {object} [autoPoolSpecification.pool.startTask] Gets or sets a task
 * to run on each compute node as it joins the pool. The task runs when the
 * node is added to the pool or when the node is restarted.
 * 
 * @member {string} [autoPoolSpecification.pool.startTask.commandLine] Gets or
 * sets the command line of the start task.
 * 
 * @member {array} [autoPoolSpecification.pool.startTask.resourceFiles] Gets
 * or sets a list of files that Batch will download to the compute node
 * before running the command line.
 * 
 * @member {array} [autoPoolSpecification.pool.startTask.environmentSettings]
 * Gets or sets a list of environment variable settings for the start task.
 * 
 * @member {boolean} [autoPoolSpecification.pool.startTask.runElevated] Gets
 * or sets whether to run the start task in elevated mode. The default value
 * is false.
 * 
 * @member {number} [autoPoolSpecification.pool.startTask.maxTaskRetryCount]
 * Gets or sets the maximum number of times the task may be retried.
 * 
 * @member {boolean} [autoPoolSpecification.pool.startTask.waitForSuccess]
 * Gets or sets whether the Batch Service should wait for the start task to
 * complete successfully (that is, to exit with exit code 0) before
 * scheduling any tasks on the compute node.
 * 
 * @member {array} [autoPoolSpecification.pool.certificateReferences] Gets or
 * sets a list of certificates to be installed on each compute node in the
 * pool.
 * 
 * @member {array} [autoPoolSpecification.pool.applicationPackageReferences]
 * Gets or sets the list of application packages to be installed on each
 * compute node in the pool.
 * 
 * @member {array} [autoPoolSpecification.pool.metadata] Gets or sets a list
 * of name-value pairs associated with the pool as metadata.
 * 
 */
function PoolInformation() {
}

/**
 * Defines the metadata of PoolInformation
 *
 * @returns {object} metadata of PoolInformation
 *
 */
PoolInformation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'PoolInformation',
    type: {
      name: 'Composite',
      className: 'PoolInformation',
      modelProperties: {
        poolId: {
          required: false,
          serializedName: 'poolId',
          type: {
            name: 'String'
          }
        },
        autoPoolSpecification: {
          required: false,
          serializedName: 'autoPoolSpecification',
          type: {
            name: 'Composite',
            className: 'AutoPoolSpecification'
          }
        }
      }
    }
  };
};

module.exports = PoolInformation;
