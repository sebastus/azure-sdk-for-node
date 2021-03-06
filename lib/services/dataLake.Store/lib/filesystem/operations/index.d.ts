/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.16.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
*/

import { ServiceClientOptions, RequestOptions, ServiceCallback } from 'ms-rest';
import * as stream from 'stream';
import * as models from '../models';


/**
 * @class
 * FileSystem
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the DataLakeStoreFileSystemManagementClient.
 */
export interface FileSystem {

    /**
     * Appends to the specified file. This method supports multiple concurrent
     * appends to the file. NOTE: Concurrent append and normal (serial) append
     * CANNOT be used interchangeably. Once a file has been appended to using
     * either append option, it can only be appended to using that append option.
     *
     * @param {string} filePath The Data Lake Store path (starting with '/') of
     * the file to which to append using concurrent append.
     * 
     * @param {object} streamContents The file contents to include when appending
     * to the file.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.appendMode] Indicates the concurrent append call
     * should create the file if it doesn't exist or just open the existing file
     * for append. Possible values include: 'autocreate'
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    concurrentAppend(filePath: string, streamContents: stream.Readable, accountName: string, options: { appendMode? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    concurrentAppend(filePath: string, streamContents: stream.Readable, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Checks if the specified access is available at the given path.
     *
     * @param {string} path The Data Lake Store path (starting with '/') of the
     * file or directory for which to check access.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.fsaction] File system operation read/write/execute
     * in string form, matching regex pattern '[rwx-]{3}'
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    checkAccess(path: string, accountName: string, options: { fsaction? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    checkAccess(path: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Creates a directory.
     *
     * @param {string} path The Data Lake Store path (starting with '/') of the
     * directory to create.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    mkdirs(path: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileOperationResult>): void;
    mkdirs(path: string, accountName: string, callback: ServiceCallback<models.FileOperationResult>): void;

    /**
     * Concatenates the list of source files into the destination file.
     *
     * @param {string} destinationPath The Data Lake Store path (starting with
     * '/') of the destination file resulting from the concatenation.
     * 
     * @param {array} sources A list of comma seperated Data Lake Store paths
     * (starting with '/') of the files to concatenate, in the order in which
     * they should be concatenated.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    concat(destinationPath: string, sources: string[], accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    concat(destinationPath: string, sources: string[], accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Concatenates the list of source files into the destination file. This
     * method accepts more source file paths than the Concat method. This method
     * and the parameters it accepts are subject to change for usability in an
     * upcoming version.
     *
     * @param {string} msConcatDestinationPath The Data Lake Store path (starting
     * with '/') of the destination file resulting from the concatenation.
     * 
     * @param {object} streamContents A list of Data Lake Store paths (starting
     * with '/') of the source files. Must be in the format: sources=<comma
     * separated list>
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {boolean} [options.deletesourcedirectory] Caution: Setting this
     * parameter to true will delete the parent directory of all source files
     * provided to the MsConcat method.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    msConcat(msConcatDestinationPath: string, streamContents: stream.Readable, accountName: string, options: { deletesourcedirectory? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    msConcat(msConcatDestinationPath: string, streamContents: stream.Readable, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Get the list of file status objects specified by the file path, with
     * optional pagination parameters
     *
     * @param {string} listFilePath The Data Lake Store path (starting with '/')
     * of the directory to list.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    listFileStatus(listFilePath: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileStatusesResult>): void;
    listFileStatus(listFilePath: string, accountName: string, callback: ServiceCallback<models.FileStatusesResult>): void;

    /**
     * Gets the file content summary object specified by the file path.
     *
     * @param {string} getContentSummaryFilePath The Data Lake Store path
     * (starting with '/') of the file for which to retrieve the summary.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getContentSummary(getContentSummaryFilePath: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.ContentSummaryResult>): void;
    getContentSummary(getContentSummaryFilePath: string, accountName: string, callback: ServiceCallback<models.ContentSummaryResult>): void;

    /**
     * Get the file status object specified by the file path.
     *
     * @param {string} getFilePath The Data Lake Store path (starting with '/') of
     * the file or directory for which to retrieve the status.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getFileStatus(getFilePath: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileStatusResult>): void;
    getFileStatus(getFilePath: string, accountName: string, callback: ServiceCallback<models.FileStatusResult>): void;

    /**
     * Appends to the specified file. This method does not support multiple
     * concurrent appends to the file. NOTE: Concurrent append and normal
     * (serial) append CANNOT be used interchangeably. Once a file has been
     * appended to using either append option, it can only be appended to using
     * that append option. Use the ConcurrentAppend option if you would like
     * support for concurrent appends.
     *
     * @param {string} directFilePath The Data Lake Store path (starting with '/')
     * of the file to which to append.
     * 
     * @param {object} streamContents The file contents to include when appending
     * to the file.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    append(directFilePath: string, streamContents: stream.Readable, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    append(directFilePath: string, streamContents: stream.Readable, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Creates a file with optionally specified content.
     *
     * @param {string} directFilePath The Data Lake Store path (starting with '/')
     * of the file to create.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.streamContents] The file contents to include when
     * creating the file. This parameter is optional, resulting in an empty file
     * if not specified.
     * 
     * @param {boolean} [options.overwrite] The indication of if the file should
     * be overwritten.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    create(directFilePath: string, accountName: string, options: { streamContents? : stream.Readable, overwrite? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    create(directFilePath: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Opens and reads from the specified file.
     *
     * @param {string} directFilePath The Data Lake Store path (starting with '/')
     * of the file to open.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {number} [options.length]
     * 
     * @param {number} [options.offset]
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    open(directFilePath: string, accountName: string, options: { length? : number, offset? : number, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<stream.Readable>): void;
    open(directFilePath: string, accountName: string, callback: ServiceCallback<stream.Readable>): void;

    /**
     * Sets the Access Control List (ACL) for a file or folder.
     *
     * @param {string} setAclFilePath The Data Lake Store path (starting with '/')
     * of the file or directory on which to set the ACL.
     * 
     * @param {string} aclspec The ACL spec included in ACL creation operations in
     * the format '[default:]user|group|other::r|-w|-x|-'
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    setAcl(setAclFilePath: string, aclspec: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    setAcl(setAclFilePath: string, aclspec: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Modifies existing Access Control List (ACL) entries on a file or folder.
     *
     * @param {string} modifyAclFilePath The Data Lake Store path (starting with
     * '/') of the file or directory with the ACL being modified.
     * 
     * @param {string} aclspec The ACL specification included in ACL modification
     * operations in the format '[default:]user|group|other::r|-w|-x|-'
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    modifyAclEntries(modifyAclFilePath: string, aclspec: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    modifyAclEntries(modifyAclFilePath: string, aclspec: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Removes existing Access Control List (ACL) entries for a file or folder.
     *
     * @param {string} removeAclFilePath The Data Lake Store path (starting with
     * '/') of the file or directory with the ACL being removed.
     * 
     * @param {string} aclspec The ACL spec included in ACL removal operations in
     * the format '[default:]user|group|other'
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    removeAclEntries(removeAclFilePath: string, aclspec: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    removeAclEntries(removeAclFilePath: string, aclspec: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Removes the existing Access Control List (ACL) of the specified file or
     * directory.
     *
     * @param {string} aclFilePath The Data Lake Store path (starting with '/') of
     * the file or directory with the ACL being removed.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    removeAcl(aclFilePath: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    removeAcl(aclFilePath: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Gets Access Control List (ACL) entries for the specified file or directory.
     *
     * @param {string} aclFilePath The Data Lake Store path (starting with '/') of
     * the file or directory for which to get the ACL.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    getAclStatus(aclFilePath: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.AclStatusResult>): void;
    getAclStatus(aclFilePath: string, accountName: string, callback: ServiceCallback<models.AclStatusResult>): void;

    /**
     * Deletes the requested file or directory, optionally recursively.
     *
     * @param {string} filePath The Data Lake Store path (starting with '/') of
     * the file or directory to delete.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {boolean} [options.recursive] The optional switch indicating if the
     * delete should be recursive
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    deleteMethod(filePath: string, accountName: string, options: { recursive? : boolean, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileOperationResult>): void;
    deleteMethod(filePath: string, accountName: string, callback: ServiceCallback<models.FileOperationResult>): void;

    /**
     * Rename a file or directory.
     *
     * @param {string} renameFilePath The Data Lake Store path (starting with '/')
     * of the file or directory to move/rename.
     * 
     * @param {string} destination The path to move/rename the file or folder to
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    rename(renameFilePath: string, destination: string, accountName: string, options: { customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<models.FileOperationResult>): void;
    rename(renameFilePath: string, destination: string, accountName: string, callback: ServiceCallback<models.FileOperationResult>): void;

    /**
     * Sets the owner of a file or directory.
     *
     * @param {string} setOwnerFilePath The Data Lake Store path (starting with
     * '/') of the file or directory for which to set the owner.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.owner] The AAD Object ID of the user owner of the
     * file or directory. If empty, the property will remain unchanged.
     * 
     * @param {string} [options.group] The AAD Object ID of the group owner of the
     * file or directory. If empty, the property will remain unchanged.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    setOwner(setOwnerFilePath: string, accountName: string, options: { owner? : string, group? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    setOwner(setOwnerFilePath: string, accountName: string, callback: ServiceCallback<void>): void;

    /**
     * Sets the permission of the file or folder.
     *
     * @param {string} setPermissionFilePath The Data Lake Store path (starting
     * with '/') of the file or directory for which to set the permission.
     * 
     * @param {string} accountName The Azure Data Lake Store account to execute
     * filesystem operations on.
     * 
     * @param {object} [options] Optional Parameters.
     * 
     * @param {string} [options.permission] A string representation of the
     * permission (i.e 'rwx'). If empty, this property remains unchanged.
     * 
     * @param {object} [options.customHeaders] Headers that will be added to the
     * request
     * 
     * @param {ServiceCallback} [callback] callback function; see ServiceCallback
     * doc in ms-rest index.d.ts for details
     */
    setPermission(setPermissionFilePath: string, accountName: string, options: { permission? : string, customHeaders? : { [headerName: string]: string; } }, callback: ServiceCallback<void>): void;
    setPermission(setPermissionFilePath: string, accountName: string, callback: ServiceCallback<void>): void;
}
