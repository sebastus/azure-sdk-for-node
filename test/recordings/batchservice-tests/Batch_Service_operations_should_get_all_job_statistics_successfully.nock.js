// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'batchtestnodesdk';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://batchtestnodesdk.japaneast.batch.azure.com/';
  process.env['AZURE_SUBSCRIPTION_ID'] = '603663e9-700c-46de-9d41-e080ff1d461e';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimejobstats?api-version=2016-02-01.3.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimejobstats\",\"startTime\":\"2016-03-31T21:49:36.4926196Z\",\"lastUpdateTime\":\"2016-03-31T21:49:36.4926196Z\",\"userCPUTime\":\"PT0S\",\"kernelCPUTime\":\"PT0S\",\"wallClockTime\":\"PT0S\",\"readIOps\":\"0\",\"writeIOps\":\"0\",\"readIOGiB\":0.0,\"writeIOGiB\":0.0,\"numTaskRetries\":\"0\",\"numSucceededTasks\":\"0\",\"numFailedTasks\":\"0\",\"waitTime\":\"PT0S\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7c46e42e-3711-4ea7-a538-034e2aa8e719',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:56:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://batchtestnodesdk.japaneast.batch.azure.com:443')
  .get('/lifetimejobstats?api-version=2016-02-01.3.0')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://batchtestnodesdk.japaneast.batch.azure.com/$metadata#jobstats/@Element\",\"url\":\"https://batchtestnodesdk.japaneast.batch.azure.com/lifetimejobstats\",\"startTime\":\"2016-03-31T21:49:36.4926196Z\",\"lastUpdateTime\":\"2016-03-31T21:49:36.4926196Z\",\"userCPUTime\":\"PT0S\",\"kernelCPUTime\":\"PT0S\",\"wallClockTime\":\"PT0S\",\"readIOps\":\"0\",\"writeIOps\":\"0\",\"readIOGiB\":0.0,\"writeIOGiB\":0.0,\"numTaskRetries\":\"0\",\"numSucceededTasks\":\"0\",\"numFailedTasks\":\"0\",\"waitTime\":\"PT0S\"\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '7c46e42e-3711-4ea7-a538-034e2aa8e719',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  dataserviceversion: '3.0',
  date: 'Fri, 01 Apr 2016 05:56:01 GMT',
  connection: 'close' });
 return result; }]];