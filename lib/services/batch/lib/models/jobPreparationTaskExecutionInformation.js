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
 * Initializes a new instance of the JobPreparationTaskExecutionInformation class.
 * @constructor
 * Contains information about the execution of a Job Preparation task on a
 * compute node.
 * @member {date} startTime Gets or sets the time at which the Job Preparation
 * task started running.
 * 
 * @member {date} [endTime] Gets or sets the time at which the Job Preparation
 * task completed. This property is set only if the task is in the Completed
 * state.
 * 
 * @member {string} state Gets or sets the current running state of the Job
 * Preparation task on the compute node. Possible values include: 'running',
 * 'completed'
 * 
 * @member {string} [taskRootDirectory] Gets or sets the root directory of the
 * Job Preparation task on the compute node.
 * 
 * @member {string} [taskRootDirectoryUrl] Gets or sets the URL to the root
 * directory of the Job Preparation task on the compute node.
 * 
 * @member {number} [exitCode] Gets or sets the exit code of the Job
 * Preparation task. This property is set only if the task is in the
 * Completed state.
 * 
 * @member {object} [schedulingError] Gets or sets any error starting the Job
 * Preparation task.
 * 
 * @member {string} [schedulingError.category] Gets or sets the category of
 * the task scheduling error. Possible values include: 'usererror',
 * 'servererror', 'unmapped'
 * 
 * @member {string} [schedulingError.code] Gets or sets an identifier for the
 * task scheduling error.  Codes are invariant and are intended to be
 * consumed programmatically.
 * 
 * @member {string} [schedulingError.message] Gets or sets a message
 * describing the task scheduling error, intended to be suitable for display
 * in a user interface.
 * 
 * @member {array} [schedulingError.details] Gets or sets the list of
 * additional error details related to the scheduling error.
 * 
 * @member {number} retryCount Gets or sets the number of times the Job
 * Preparation task has been retried by the Batch service.
 * 
 * @member {date} [lastRetryTime] Gets or sets the most recent time at which a
 * retry of the Job Preparation task started running. This property is set
 * only if the task was retried (i.e. retryCount is nonzero).
 * 
 */
function JobPreparationTaskExecutionInformation() {
}

/**
 * Defines the metadata of JobPreparationTaskExecutionInformation
 *
 * @returns {object} metadata of JobPreparationTaskExecutionInformation
 *
 */
JobPreparationTaskExecutionInformation.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'JobPreparationTaskExecutionInformation',
    type: {
      name: 'Composite',
      className: 'JobPreparationTaskExecutionInformation',
      modelProperties: {
        startTime: {
          required: true,
          serializedName: 'startTime',
          type: {
            name: 'DateTime'
          }
        },
        endTime: {
          required: false,
          serializedName: 'endTime',
          type: {
            name: 'DateTime'
          }
        },
        state: {
          required: true,
          serializedName: 'state',
          type: {
            name: 'Enum',
            allowedValues: [ 'running', 'completed' ]
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
        },
        exitCode: {
          required: false,
          serializedName: 'exitCode',
          type: {
            name: 'Number'
          }
        },
        schedulingError: {
          required: false,
          serializedName: 'schedulingError',
          type: {
            name: 'Composite',
            className: 'TaskSchedulingError'
          }
        },
        retryCount: {
          required: true,
          serializedName: 'retryCount',
          type: {
            name: 'Number'
          }
        },
        lastRetryTime: {
          required: false,
          serializedName: 'lastRetryTime',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = JobPreparationTaskExecutionInformation;
