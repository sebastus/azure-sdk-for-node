// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
  process.env['AZURE_SUBSCRIPTION_ID'] = '53d9063d-87ae-4ea8-be90-3686c3b8669f';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3233.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-16T21:29:42.4659993Z\",\"lastModifiedTime\":\"2016-03-16T21:29:42.4659993Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3233\",\"name\":\"xplattestadla3233\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7880.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-16T21:27:09.7487691Z\",\"lastModifiedTime\":\"2016-03-16T21:27:09.7487691Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7880\",\"name\":\"xplattestadla7880\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1537',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '00baf8e2-7855-4ac3-8a2c-95be3e359288',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9659bea7-2e04-4701-881c-ef01ac2fffec',
  'x-ms-routing-request-id': 'WESTUS:20160316T213014Z:9659bea7-2e04-4701-881c-ef01ac2fffec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:30:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"javaadlaacct589.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-11T19:05:12.1695607Z\",\"lastModifiedTime\":\"2016-03-11T19:06:15.7736921Z\"},\"location\":\"eastus2\",\"tags\":{\"testkey\":\"testvalue\",\"testkey2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/javaadlarg80/providers/Microsoft.DataLakeAnalytics/accounts/javaadlaacct589\",\"name\":\"javaadlaacct589\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3233.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-16T21:29:42.4659993Z\",\"lastModifiedTime\":\"2016-03-16T21:29:42.4659993Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3233\",\"name\":\"xplattestadla3233\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7880.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-16T21:27:09.7487691Z\",\"lastModifiedTime\":\"2016-03-16T21:27:09.7487691Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7880\",\"name\":\"xplattestadla7880\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1537',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '00baf8e2-7855-4ac3-8a2c-95be3e359288',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14995',
  'x-ms-correlation-request-id': '9659bea7-2e04-4701-881c-ef01ac2fffec',
  'x-ms-routing-request-id': 'WESTUS:20160316T213014Z:9659bea7-2e04-4701-881c-ef01ac2fffec',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:30:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3233.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-16T21:29:42.4659993Z\",\"lastModifiedTime\":\"2016-03-16T21:29:42.4659993Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3233\",\"name\":\"xplattestadla3233\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7880.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-16T21:27:09.7487691Z\",\"lastModifiedTime\":\"2016-03-16T21:27:09.7487691Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7880\",\"name\":\"xplattestadla7880\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1022',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4eea4dd2-5c1b-4fa5-83fe-14cd00053751',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e7314050-1e6f-4ce5-a037-2416ddfa180a',
  'x-ms-routing-request-id': 'WESTUS:20160316T213014Z:e7314050-1e6f-4ce5-a037-2416ddfa180a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:30:14 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts?api-version=2015-10-01-preview')
  .reply(200, "{\"value\":[{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla3233.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-16T21:29:42.4659993Z\",\"lastModifiedTime\":\"2016-03-16T21:29:42.4659993Z\"},\"location\":\"eastus2\",\"tags\":{\"testtag1\":\"testvalue1\",\"testtag2\":\"testvalue2\"},\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla3233\",\"name\":\"xplattestadla3233\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"},{\"properties\":{\"provisioningState\":\"Succeeded\",\"state\":\"Active\",\"endpoint\":\"xplattestadla7880.azuredatalakeanalytics.net\",\"creationTime\":\"2016-03-16T21:27:09.7487691Z\",\"lastModifiedTime\":\"2016-03-16T21:27:09.7487691Z\"},\"location\":\"eastus2\",\"tags\":null,\"id\":\"/subscriptions/53d9063d-87ae-4ea8-be90-3686c3b8669f/resourceGroups/xplattestadlarg05/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla7880\",\"name\":\"xplattestadla7880\",\"type\":\"Microsoft.DataLakeAnalytics/accounts\"}]}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '1022',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '4eea4dd2-5c1b-4fa5-83fe-14cd00053751',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'e7314050-1e6f-4ce5-a037-2416ddfa180a',
  'x-ms-routing-request-id': 'WESTUS:20160316T213014Z:e7314050-1e6f-4ce5-a037-2416ddfa180a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 16 Mar 2016 21:30:14 GMT',
  connection: 'close' });
 return result; }]];