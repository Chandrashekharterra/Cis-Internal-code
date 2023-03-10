export const environment = {
    clientId: 'cis-rest-api',
    clientSecret: 'XY7kmzoNzl100',
    production: false,
    
    //uamBaseUrl: 'http://dwappdemo.co.za:8092/api/v1/',
    //triggerUrl: 'http://dwappdemo.co.za:9092/',
    // uamBaseUrl: 'http://localhost:8081/api/v1/',
    // triggerUrl: 'http://localhost:8092/',
    gisServerUrl: 'http://dwapps.co.za/CSGGIS',
    uamBaseUrl: 'http://dwjhbcisappsvr02:8092/api/v1/',
   triggerUrl: 'http://dwjhbcisappsvr02:8094/',
   tokenUrl: 'http://dwjhbcisappsvr02:8092/oauth/token',
    workflowStudioUrl: 'http://dwjhbcisappsvr02:9193/WSDev',

    //tokenUrl: 'http://dwappdemo.co.za:8092/oauth/token',
    //tokenUrl: 'http://localhost:8081/oauth/token',
    //workflowStudioUrl: 'http://localhost:9193/WSDev',
  //  workflowStudioUrl: 'http://localhost:8001',
    //portalUrl: 'http://10.10.20.204/CIS-Portal/',
    portalUrl: 'http://10.1.15.216/CIS-Portal/',
    docketListUrl: 'http://10.1.15.227:8092/api/v1/',


    viewMapServerUrl: 'http://10.1.15.220:8088/ang_mapview/#/mapview?',
    searchMapServerUrl: 'http://10.1.15.220:8088/ang_propertyselector/?',
    getProvinces: 'province/list',
    getLocation: 'prepackage/province',
    saveProvinceAddress: 'province/address',
    getRoles: 'list-master/list-roles?userType=',
    getListItems: 'list-master/list-items?listCode=',
    deactivateUser: 'user/activate?userId=',
    officeTimings: 'office-timings/list',
    getHolidays: 'holiday/list?year=',
    addHoliday: 'holiday/add',
    deleteHoliday: 'holiday/deleteHoliday',
    getAllTemplates: 'template/list?itemIdModule=',
    addTemplate: 'template/add',
    sendSMS: 'sms?phoneNumber=',
    registerUser: 'user/register',
    getSecurityQuestions: 'list-master/list-items?listCode=5',
    updateSecurityQuestions: 'user/updateSecurityInfo',
    getFeeCategories: 'fee/category',
    getAllFeeScale: 'fee/scale',
    getAllFeeType: 'fee/type',
    addNewFeeSacale: 'fee/scale',
    getFeeMaster: 'fee/master',
    saveFeeMaster: 'fee/master',
    addCategory: 'fee/category',
    addSubCategory: 'fee/subcategory',
    getSubCategories: 'fee/subcategory',
    updateTemplate: 'template/update',
    getAllRolePrivileges: 'roles/list',
    getAllSiteRolesWithAllPrivileges: 'roles/siteRoles',
    getAllSiteMap: 'roles/siteMap',
    updateInternalPrevileges: 'roles/update',
    updateSiteMapRole: 'roles/updateSiteMapRole',
    getUserHomePageSetting: 'user/homeSetting?userId=',
    saveUserHomePageSetting: 'user/homeSetting',
    getMenuByRoleName: 'roles/?roleName=',
    getSiteMapByRoleId: 'roles/siteMap/',
    getUserHolidays: 'user/leave?userId=',
    getLeaveforReview: 'user/leave/leaveForReview?roleId=',
    saveUserHoliday: 'user/leave/add',
    deleteUserLeave: 'user/leave/deleteLeave',
    downloadLeaveDocument: 'user/leave/download',
    getLeaveDocument: 'user/leave/getLeaveDocument',
    activateUserHoliday: 'user/leave/activate?leaveId=',
    getOfficeTimings: 'office-timings/list?officeTimingType=OFFICE_TIMING&provinceId=',
    getOfficeHolidays: 'office-timings/list?officeTimingType=OFFICE_HOLIDAY&provinceId=',
    updateOfficeTimeStatus: 'office-timings/update?officeTimeId=',
    addOfficeTiming: 'office-timings/add',
    getAllMasterList: 'list-master/?size=50',
    updateListItemStatus: 'list-master/update?isActive=',
    addListItem: 'list-master/add',
    addRole: 'list-master/add-role',
    addPLSUser: 'pls-user/add',
    updatePLSUser: 'pls-user/update',
    getSearchTypeCriteria: 'search/config/',
    getAllUserTypes: 'search/userTypes',
    getUserList: 'user/list?page=',
    getExternalUserDataByUserId: 'user/list/info?userId=',
    getExternalUserRoleBasedOnUserId: 'user/list/roles?userId=',
    updateSearchTypeOfficeMappings: 'search/update/config',
    searchByNumberSgNo: 'sgdata/search/sgNumbers?provCode=',
    getAllSearchTypeOfficeMapping: 'search/searchBy?searchTypeId=',
    getAllInternalUsers: 'user/delegations/allIntenalUser?page=0&size=200&sort=firstName,ASC',
    addUserDelegations: 'user/delegations/add',
    getAllUserDelegations: 'user/delegations/list?page=',
    updateUserDelegations: 'user/delegations/update?id=',
    getMyRequests: 'workflow/listByUser',
    getInboxTasks: 'workflow/lists',
    getWorkflowTasks: 'workflow/tasks',
    getSupportingDocuments: 'workflow/documents',
    getAllWorkflowToReassign: 'workflow/list/reassign?userId=',
    reassignWorkflow: 'workflow/reassign',
    expiditeTask: 'workflow/expiditeTask',
    addDiariseDate: 'workflow/addToDiary',
    cancelTask: 'workflow/cancelTask',
    getPriorityFlag: 'workflow/priority',
    triggertask: 'triggertask',
    cartCheckout: 'cart/checkout',
    getAllReferrals: 'workflow/referral',
    getWorkflowDocument: 'workflow/documents',
    getRequestorInformation: 'workflow/requesterInfo',
    loadTaskFlow: 'workflow/tasks',
    uploadSupportingDocs: 'workflow/uploadDocs',
    listItemsByListCode: 'list-master/list-items',
    getNodeDetails: 'getNodeDetails',
    getAllUserByUserType: 'user/list',
    processtask: 'processtask',
    deleteWorkflowDocs: 'workflow/deleteDocs',
    getInformationRequestItem: 'workflow/requestItem',
    notification: 'workflow/notifications',
    getAllPrePackageConfigs: 'prepackage',
    addPrePackageConfig: 'prepackage/add',
    getScaleDoc: 'fee/scale/doc',
    getAllMunicipalitiesByProvinceCode: 'search/municipalities',
    getMunicipality: 'prepackage/municipality',
    getTownship: 'search/township',
    getMajorRegionOrAdminDistrict: 'prepackage/majorRegionOrAdminDistrict',
    getMinorRegion: 'prepackage/minorRegion',
    getSearchTypeByProvince: 'search/getSearchTypeAndFilterForUserType',
    getSearchData: 'search/log',
    searchBySgNumber: 'search/number/sgnumber?page=',
    searchByCompilationNo: 'search/number/compilationNo?page=',
    searchByDeedNo: 'search/number/deedNo?page=',
    searchBySurveyRecordNo: 'search/number/surveyRecordNo?page=',
    searchByLeaseNo: 'search/number/leaseNo?page=',
    farmSearch: 'search/parcel/farm?page=',
    erfSearch: 'search/parcel/erf?page=',
    holdingSearch: 'search/parcel/holding?page=',
    lpiSearch: 'search/parcel/lpi?page=',
    getDataProfileFromLpiCode: 'search/dataProfileFromLpiCode?recordId=',
    sectionalFarmSearch: 'search/sectional/farm?page=',
    sectionalErfSearch: 'search/sectional/erf?page=',
    sectionalSchemeNameSearch: 'search/sectional/schemeName?page=',
    sectionalSchemeNoSearch: 'search/sectional/schemeNo?page=',
    sectionalFilingNoSearch: 'search/sectional/filingNo?page=',
    sectionalTitleSearch: 'search/sectional/title?page=',
    sectionalSgNoSearch: 'search/sectional/sgNo?page=',
    downloadSampleTemplate: 'search/template/sample',
    templateSearchCompilationNumber: 'search/template/compilationNumber',
    templateSearchParcelErf: 'search/template/parcelErf',
    templateSearchSgNumber: 'search/template/sgNumber',
    templateSearchSurveyRecordNumber: 'search/template/surveyRecordNumber',
    getRangeFarmSearchData: 'search/range/farm?page=',
    getRangeErfPortionSearchData: 'search/range/erf/portion?page=',
    getRangeErfParcelSearchData: 'search/range/erf/parcel?page=',
    downloadZippedImages: 'search/downloadZippedImage',
    addToCart: 'cart/add',
    getCartDetails: 'cart/?userId=',
    subscribePrePackageConfigs: 'prepackage/subscribe',
    getAllSubscriptionByUser: 'prepackage/subscription/list',
    updateSubscriptionStatus: 'prepackage/subscription/status',
    getPrepackagedImage: 'prepackage/sample/image',
    getDispatchDocs: 'dispatch/getDocDetails',
    downloadZippedDocs: 'dispatch/downloadDispatchDocs',
    uploadDispatchDocsToFtp: 'dispatch/uploadDispatchDocsToFtp',
    simulateProcess: 'workflow/simulateProcess',
    getTaskDurationDetails: 'workflow/taskDurationProductivityDetails',
    downloadWorkflowSupportingDocs: 'workflow/downloadSupportingDocs',
    emptyCart: 'cart/empty?cartId=',
    removeCart: 'cart/removeCartItem',
    updateCart: 'cart/update',
    workflowNotification: 'workflow/notifications',
    uploadSupportingDocument: 'workflow/uploadDocs',
    getTextSearch: 'search/text?page=',
    getAllPrePackageConfigListing: 'prepackage/listing',
    getSubscriptionNotify: 'prepackage/subscription/notify',
    getWorkflowDataForRequestType: 'workflow/requestTypeData',
    getWorkflowBasedItem: 'workflow/requestWorkflowItem',
    saveInvoiceData: 'invoice/save',
    getInvoiceItemCosting: 'invoice/items/cost',
    getAddressBasedOnProvinceId: 'province/list/address',
    uploadProofOfPayment: 'workflow/addProofOfPayment',
    generateInvoicePdf: 'invoice/generate?workflowId=',
    getPaymentInfo: 'workflow/payment',
    markWorkflowPending: 'workflow/markPending',
    changeWorkflowProvince: 'workflow/changeProvince',
    getWorkflowUploadedDocument: 'workflow/getPaymentDocumentInfo',
    paymentDocument: 'workflow/getPaymentDocument',
    downloadSgDataImage: 'search/downloadImage',
    uploaddispatchDocs: 'dispatch/uploadCartItemsDocs',
    getCartItemDocument: 'dispatch/getCartItemDocs',
    getInvoiceData: 'invoice/getInvoiceTemplateData',
    getDispatchTemplateData: 'dispatch/getDispatchTemplateData',
    addCartItemDispatchInfo: 'dispatch/addCartItemDispatchInfo',
    partialSaveInvoiceData: 'invoice/partialSave',
    downloadInvoicePdf: 'invoice/download?workflowId=',
    downloadCartItemsDoc: 'dispatch/downloadCartItemsDoc',
    addDispatchDetails: 'dispatch/addDispatchDetails',
    activateUserStatus: 'user/changeStatus',
    getOfficeTimingForUserId: 'office-timings/listByUserId?userId=',
    getUsersStatistics: 'dashboard/userRegistration/getData',
    createProductivityForWorkflow: 'workflow/productivity?workflowId=',
    getDataViewerObjectType: 'data-viewer/getObjectType',
    getDataViewerObjectName: 'data-viewer/getObjectName?objectType=',
    getDataViewerColumns: 'data-viewer/getObjectColumn?tableName=',
    getDataViewerExecuteCustomQuery: 'data-viewer/execute/query',
    getDataViewerRequest: 'data-viewer/dataViewerRequest?userId=',
    dataViewerLog: 'data-viewer/dataViewerRequest',
    imBaseUrl: 'http://10.1.15.226:8089/cis_uam/cisorigin.im/api/v1/',
    imSearchBaseUrl: 'http://10.1.15.226:8089/cis_search_uam/cisorigin.search/api/v1/',
    imReportBaseUrl: 'http://10.1.15.226:8089/cis_uam/cisorigin.cis/api/v1/',
    getInternalRoles: 'getRoles?type=INTERNAL',
    getUserInfoByEmail: 'getUserInfoByEmail?email=',
    registerExternalUser: 'registerExternalUser',
    checkUserExist: 'checkUserExist?email=',
    validatePlsUser: 'validatePlsUser?plscode=',
    listPlsUsers: 'user/professionals/',
    checkADUserExists: 'checkADUserExists',
    registerInternalUser: 'registerInternalUser',
    getSections: 'getSections',
    registerInternalUserRole: 'registerInternalUserRole',
    uploadSignedUserAccess: 'uploadSignedUserAccess',
    deleteInternalUserRole: 'deleteInternalUserRole',
    submitInternalUserForApproval: 'submitInternalUserForApproval',
    getInternalUserRolesByEmail: 'getInternalUserRolesByEmail?email=',
    updatePassword: 'updatePassword',
    getAllExternalUsers: 'getAllExternalUsers?provincecode=all&roleCode=all',
    getAllInternalUsersByProvinceCode: 'getAllInternalUsers?provincecode=',
    getAllExternalUsersByProvinceCode: 'getAllExternalUsers?provincecode=',
    deleteExternalUser: 'deleteExternalUser',
    getMyAssistants: 'getMyAssistants?surveyorusercode=',
    getMySurveyors: 'getMySurveyors?assistantusercode=',
    deleteAssistant: 'deleteAssistant',
    updateExternalUser: 'updateExternalUser',
    getAllPlsUsers: 'getAllPlsUsers',
    createCommType: 'createCommType',
    createOrgType: 'createOrgType',
    createSector: 'createSector',
    createSection: 'createSection',
    updateInternalUser: 'updateInternalUser',
    getAllTasks: 'getAllTasks',
    updateAccessRights: 'updateAccessRights',
    getUserSecurityQuestions: 'getUserSecurityQuestions',
    checkUserSecurityQuestions: 'checkUserSecurityQuestions',
    resetPassword: 'user/resetForgotPassword/',
    getRolesBySectionsAndProvince: 'getRolesBySectionsAndProvince?sectionCode=',
    registerPlsUser: 'registerPlsUser',
    updatePlsUser: 'updatePlsUser',
    registerNewExternalRole: 'registerNewExternalRole',
    getExternalRolesByRoleCode: 'getExternalRolesByRoleCode?roleCode=',
    getMenuOfUser: 'getMenuOfUser?roleCode=',
    createTask: 'createTask',
    approveRejectUser: 'approveRejectUser',
    downloadSignedUserAccess: 'downloadSignedUserAccess',
    getInternalRolesByRoleCode: 'getInternalRolesByRoleCode?roleCode=',
    getDashboardRights: 'getDashboardRights?userType=Internal&roleCode=',
    setDashboardRights: 'setDashboardRights',
    getUserRegisteredCounts: 'getUserRegisteredCounts?dashBoarID=1',
    userLogReport: 'userLogReport',
    userSummaryReport: 'userSummaryReport',
    quarterlyDeletedUserReport: 'quarterlyDeletedUserReport',
    quarterlyUpdatedUserReport: 'quarterlyUpdatedUserReport',
    issueLogUpdateStatus: 'issueLogUpdateStatus?issueID=',
    getIssueLogStatus: 'getIssueLogStatus',
    getAllIssueLogs: 'getAllIssueLogs',
    saveIssueLog: 'saveIssueLog',
    uploadDocumentationForExternalUsers: 'uploadDocumentationForInternalUsers',
    downloadDocumentation: 'downloadDocumentation',
    getPpNumber: 'getPpNumber?ppNumber=',
    getUserInfoLite: 'getUserInfoLite?email=',
    getMyIssues: 'getMyIssues?email=',
    getNotifications: 'getNotifications',
    saveNotification: 'saveNotification',
    getNotificationUserTypes: 'getNotificationUserTypes',
    uploadNotificationDoc: 'uploadNotificationDoc',
    deleteNotificationDoc: 'deleteNotificationDoc?documentPath=',
    getNotificationDocsList: 'getNotificationDocsList?notificationId=',
    downloadNotificationDocs: 'downloadNotificationDocs',
    logoutUser: 'user/logout',
    adUserLoginCheck: 'adUserLoginCheck',
    deleteCommunicationType: 'deleteCommunicationType?commTypeName=',
    deleteSector: 'deleteSector?sectorName=',
    deleteOrgnization: 'deleteOrgnization?orgName=',
    searchMyRequestsByReferenceNo: 'workflow/seachByReference?referenceNo=',
    getCostCategories: 'getCostCategories',
    getPropertyValueByName: 'getPropertyValueByName?name=',
    getSubCostCategoriesByCostCategoryCode: 'getSubCostCategoriesByCostCategoryCode?costCategoryCode=',
    sendEmailWithInvoice: 'sendEmailWithInvoice?requestCode=',
    setPropertyValueByName: 'setPropertyValueByName',
    createCategory: 'createCategory',
    createSubCategory: 'createSubCategory',
    createRequestKind: 'createRequestKind',
    createRequestType: 'createRequestType',
    createMediaType: 'createMediaType',
    createFormatType: 'createFormatType',
    createDeliveryMethod: 'createDeliveryMethod',
    createGazzetteType: 'createGazzetteType',
    createRequest: 'createRequest',
    createRequestItem: 'createRequestItem',
    deleteRequestItem: 'deleteRequestItem',
    uploadPaymentConfirmation: 'uploadPaymentConfirmation',
    generateInvoice: 'generateInvoice?requestCode=',
    downloadPop: 'downloadPop',
    downloadInvoice: 'downloadInvoice',
    getRequestsOfUser: 'getRequestsOfUser?provinceCode=',
    getRequestItemsOfRequest: 'getRequestItemsOfRequest',
    getCategories: 'getCategories',
    getSubCategiesByCategoryCode: 'getSubCategiesByCategoryCode',
    getRequestTypes: 'getRequestTypes',
    getRequestKinds: 'getRequestKinds',
    getMediaTypes: 'getMediaTypes',
    getFormatTypes: 'getFormatTypes',
    getDeliveryMethods: 'getDeliveryMethods',
    getGazzetteTypes: 'getGazzetteTypes',
    searchByNumberProvinceCode: 'searchByNumberProvinceCode?sGNumber=',
    searchByCompilationNumberProvinceCode: 'searchByCompilationNumberProvinceCode?compilationNumber=',
    searchByFilingNumberProvinceCode: 'searchByFilingNumberProvinceCode?fillingNumber=',
    searchBySurveySGNumberProvinceCode: 'searchBySurveySGNumberProvinceCode?surveyRecordNumber=',
    searchByDeedsNumberProvinceCode: 'searchByDeedsNumberProvinceCode?deedNumber=',
    searchByLeaseNumberProvinceCode: 'searchByLeaseNumberProvinceCode?leaseNumber=',
    searchParcelByFarm: 'searchParcelByFarm?provinceCode=',
    searchParcelByERF: 'searchParcelByERF?provinceCode=',
    searchParcelByHoldings: 'searchParcelByHoldings?provinceCode=',
    searchParcelByLPI: 'searchParcelByLPI?provinceCode=',
    searchSectionalPortionByFarm: 'searchSectionalPortionByFarm?registrationDivision=',
    searchSectionalPortionByERF: 'searchSectionalPortionByERF?townShipName=',
    searchSectionalPortionByTitle: 'searchSectionalPortionByTitle?',
    getTaskTargetFlows: 'getTaskTargetFlows?taskid=',
    getRequestByRequestCode: 'getRequestByRequestCode?requestCode=',
    getOfficersOfMySection: 'getOfficersOfMySection?provinceCode=',
    processUserState: 'processUserState',
    getBulkRequestSubTypesByTypeCode: 'getBulkRequestSubTypesByTypeCode?bulkTypeCode=',
    getBulkRequestTypes: 'getBulkRequestTypes',
    createBulkRequestType: 'createBulkRequestType',
    createBulkSubType: 'createBulkSubType',
    uploadDispatchDocument: 'uploadDispatchDocument',
    deleteDispatchDocument: 'deleteDispatchDocument?documentPath=',
    getDispatchDocsList: 'getDispatchDocsList?requestCode=',
    getTasksLifeCycle: 'getTasksLifeCycle?taskReferenceCode=',
    downloadDispatchDocuments: 'downloadDispatchDocuments',
    uploadExternalUserRequestDocument: 'uploadExternalUserRequestDocument',
    deleteExternalUserRequestDocument: 'deleteExternalUserRequestDocument?documentPath=',
    getExternalUserRequestDocsList: 'getExternalUserRequestDocsList?requestCode=',
    getRequestStatus: 'getRequestStatus?requestcode=',
    getRequestsPaidInfoByProvince: 'getRequestsPaidInfoByProvince?provinceCode=',
    createBusinessRuleHistory: 'createBusinessRuleHistory',
    productionReport: 'productionReport',
    notificationReport: 'notificationReport',
    overriddenBusinessRulesReport: 'overriddenBusinessRulesReport',
    dispatchDocumentSendMail: 'dispatchDocumentSendMail',
    userProductionReport: 'userProductionReport',
    updateCostSubCategory: 'updateCostSubCategory',
    uploadUserPaymentConfirmation: 'uploadUserPaymentConfirmation',
    getNotificationSubTypes: 'getNotificationSubTypes',
    downloadDocuments: 'downloadDocuments',
    getDocumentList: 'getDocumentList?documentStoreCode=',
    deleteDocument: 'deleteDocument?documentPath=',
    uploadDocumentFile: 'uploadDocumentFile',
    getUamDesignations: 'getUamDesignations',
    createUamDesignation: 'createUamDesignation',
    deleteUamDesignation: 'deleteUamDesignation?designationCode=',
    deleteDeliveryMethod: 'deleteDeliveryMethod',
    getCostOfCategory: 'getCostOfCategory?costSubCategoryName=',
    getRequestItemsFilesSendEmail: 'getRequestItemsFilesSendEmail',
    getRequestItemsFilesSendFTP: 'getRequestItemsFilesSendFTP',
    getRegistrationDivision: 'getRegistrationDivision?provinceCode=',
    getTownShipName: 'getTownShipName?provinceCode=',
    getPortionRegistrationDivision: 'getPortionRegistrationDivision?provinceCode=',
    getPortionTownShipName: 'getPortionTownShipName?provinceCode=',
    deleteFormatType: 'deleteFormatType',
    deactivateCategory: 'deactivateCategory',
    deactivateSubCategory: 'deactivateSubCategory',
    getInvoiceAmountDetails: 'getInvoiceAmountDetails?provienceCode',
    sendPopToCashier: 'sendPopToCashier',
    setRequestTrackingNo: 'setRequestTrackingNo?trackingNo=',
    getRequestTrackingNo: 'getRequestTrackingNo?requestCode=',
    getRequestDocuments: 'getRequestDocuments?requestCode=',
    cancelRequest: 'cancelRequest',
    getEmailInfo: 'getEmailInfo',
    getEmailInfoById: 'getEmailInfoById?id=',
    updateEmailInfoById: 'updateEmailInfoById',
    getInternalUserData: 'getInternalUserData?provinceCode=',
    sendPasswordToEmail: 'sendPasswordToEmail?email=',
    captchaSiteKey: '6Lfb1pMUAAAAAL5VRlg2jUtcbiCAkR4DWG6gZUxO',
    getUserNotification: 'workflow/userNotifications?userId=',
    addUserNotification: 'notifications/addUserNotifications',
    getUserByUserId: 'user/',
    getTopCountersForinformationRequest: 'dashboard/informationRequest/getTopCounters',
    getTopCountersForProcessSummary: 'dashboard/processSummary/getTopCounters',
    getProcessSummaryOpenRequests: 'dashboard/informationRequest/openRequest',
    getProcessSummaryClosedRequests: 'dashboard/informationRequest/closedRequest',
    getProcessSummaryManagerAlerts: 'dashboard/informationRequest/managerAlerts',
    getProcessSummarybilling: 'dashboard/informationRequest/billing',
    getProcessSummaryinvoiceDistributionMonthly: 'dashboard/informationRequest/invoiceDistributionMonthly',
    getProcessSummaryrequestDistributionMonthly: 'dashboard/informationRequest/requestDistributionMonthly',
    getTaskDistributionAfterTurnaroundTime: 'dashboard/processSummary/taskDistributionAfterTurnaroundTime',
    gettaskDistributionBeforeTurnaroundTime: 'dashboard/processSummary/taskDistributionBeforeTurnaroundTime',
    getIRTaskDistributionByMonth: 'dashboard/processSummary/taskDistributionByMonth',
    getTaskDistributionByRole: 'dashboard/processSummary/taskDistributionByRole',
    getTaskDistributionByUser: 'dashboard/processSummary/taskDistributionByUser',
    getUserSummaryTotalTask: 'dashboard/userSummary/getTopCounters',
    getUserSummaryTaskAfterTurnaroundTime: 'dashboard/userSummary/afterTurnaroundTime',
    getUserSummaryTaskBeforeTurnaroundTime: 'dashboard/userSummary/beforeTurnAroundTime',
    userSummaryGetMonthlyTaskDuration: 'dashboard/userSummary/monthlyTaskDuration',
    getUserSummaryDistributionByAction: 'dashboard/userSummary/distributionByAction',
    getUserSummaryalertDetails: 'dashboard/userSummary/alertDetails',
    getUserSummarytaskList: 'dashboard/userSummary/taskList',
    getProcessSummaryAlertList: 'dashboard/informationRequest/alertDetails',
    getinvoiceOverviewStatus: 'dashboard/informationRequest/invoiceOverviewStatus',
    executePrepackageSubscriptionChange: 'prepackage/execute/change',
    executePrepackageSubscription: 'prepackage/execute/all',
    getOfficeTimingByProvinceIdAndDate: 'office-timings/getOfficeTimingByProvinceAndDate',
    getUserRegistrationTopCounter: 'dashboard/userRegistration/getTopCounters',
    getPrepackageExecutionStatus: 'prepackage/subscription/execution/status',
    getRelatedDataForLpi: 'search/relatedDataForLpiCode',
    getRelatedDataDetailsForLpi: 'search/relatedDataDetailsForLpiCodeAndSgno',
    getLpiNotes: 'workflow/lpiNotes',
    saveLpiNote: 'workflow/lpiNotes',
    verifyIfUserNameExist: 'user/verifyUsername?userName=',
    getUserDisplayImage: 'user/profileImage',
    saveUserProfileImage: 'user/saveProfileImage',
    getUserMetaData: 'user/userMetaData/',
    saveUserMetaData: 'user/saveUserMetaData',
    getUserRoles: 'roles/userRoles/',
    saveUserRole: 'roles/saveUserRole',
    updatePersonalInfo: 'user/updatePersonalInfo',
    getUserDocuments: 'user/document?documentTypeId=',
    downloadUserDocument: 'user/download/',
    getDisplayImageByUserId: 'user/profileImage/',
    saveProfessional: 'user/professional',
    getDcoumentForRecord: 'search/details/',
    getInformationType: 'search/getInformationType?',
    deleteUserRole: 'roles/userRoles/',
    SystemConfiguration: 'system-config',
    getUserByRoleIdProvinceId: 'user/decision?provinceId=',
    previewEmail: 'invoice/previewEmail/',
    updateInvoiceEmailTemplate: 'invoice/previewEmail',
    sendDispatchEmail: 'invoice/sendDispatchEmail/',
    getAllRoleBasedReportsByModuleId: 'report/',
    getUserSummaryReport: 'report',
    getRangeHoldingPortionSearchData: 'search/range/holding/portion?page=',
    getRangeHoldingParcelSearchData: 'search/range/holding/parcel?page=',
    closeTask: 'workflow/closeTask',
    reopenTask: 'workflow/reOpenTask',
    share: 'search/share',
    getReferralInputData: 'workflow/referralInputData/',
    imageConfig: 'system-config/tag?tag=IMAGE_DOWNLOAD_MB',
    getTemplateHistory: 'template/audit/',
    listActiveRolesBySectionId: 'list-master/list-active-role-by-section/',
    listAllRolesBySectionId: 'list-master/list-all-role-by-section/',
    downloadTemplateSearchResultFile: 'search/template/resultAuditFile/',
    getManagerBySectionAndProvince: 'user/getManagerBySection?provinceId=',
    sendToSectionWorkflow: 'workflow/sendToSection',
    addBulkToCart: 'cart/bulkAdd',
    getNgiSearchResult: 'search/ngi',
    updateListItemIsDefault: 'list-master/updateDefault?itemId=',
    getReservationType: 'reservation/getType?listCode=',
    getReservationSubType: 'reservation/getSubType?listId=',
    getReservationTownshipAllotment: 'reservation/getTownship?provinceId=',
    processReservation: 'reservation/process',
    getListItemsData: 'list-master/list-items-data?dataTypeItemId=',
    saveListItemDataColl: 'list-master/saveListDataColl',
    getProvinceByCategory: 'province/location-category?categories=P',
    saveLocationReservationSystem: 'province/saveLocationReservationSystem',
    getReservationSystemNonProvinceLocations: 'province/location-reservation-system?categories=T&parentBoundaryId=',
    searchUserByKey: 'user/searchUsers?searchKey=',
    saveReservationDraft: 'reservation/saveDraft',
    getAllReservationDraft: 'reservation/getDraft?processId=',
    getReservationDraftById: 'reservation/draft/',
    addAnnexure: 'reservation/addAnnexure',
    deleteAnnexure: 'reservation/deleteAnnexure',
    downloadWorkAnnexureFile: 'reservation/getAnnexure/',
    addDraftSteps: 'reservation/addDraftStep',
    getReservationRequest: 'reservation/getRequest?locationId=',
    addDraftRequest: 'reservation/addDraftRequest',
    deleteDraftRequest: 'reservation/deleteDraftRequest',
    getAllDraftSteps: 'reservation/getDraftSteps?draftId=',
    getAnnexure: 'reservation/getAnnexure?draftId=',
    processDraftStepsRequest: 'reservation/processDraftStepsRequests',
    updateDraft: 'reservation/updateDraft',
    getAllReservationWorkflow: 'reservation/listReservationDraft?processId=',
    deleteDraftByDraftId: 'reservation/draft/',
    checkoutDraft: 'reservation/checkoutDraft?draftId=',
    getReservationDraftByWorkFlowId: 'reservation/draft?workflowId=',
    generateNumberingForLandParcel: 'reservation/generateNumbering?draftId=',
    updateListItem: 'list-master/updateListItem',
    getReservationConditions: 'reservation/getResCondition?draftId=',
    saveResCond: 'reservation/saveResCond',
    deleteResCond: 'reservation/deleteResCond?conditionId=',
    downloadAckLetter: 'reservation/downloadAckLetter?draftId=',
    notifyForReservation: 'reservation/notifyForReservation',
    getProfessionalByPPNNumber: 'user/professionalUser/',
    verifyRecord: 'reservation/verifyRecord/',
    getReservationTransfers: 'reservation/listReservationTransfer',
    deleteTransferDraft: 'reservation/deleteTransferDraft?transferId=',
    getAllDraftTransfer: 'reservation/getAllDraftTransfer?draftId=',
    addDraftToTransfer: 'reservation/addDraftToTransfer?draftId=',
    deleteDraftSteps: 'reservation/deleteDraftSteps/',
    getConfigByTag: 'system-config/tag?tag=',
    getApplicantFeedbacks: 'workflow/applicantWorkflowFeedbacks/',
    getWorkflowUserFeedbackYearlyStatus: 'workflow/getWorkflowUserFeedbackYearlyStatus',
    saveWorkflowUserFeedback: 'workflow/saveWorkflowUserFeedback',
    saveLodgementDraft: 'lodgement/saveDraft',
    getAllLodgementDraft: 'lodgement/getLodgementDrafts',
    getLodgement: 'lodgement/listLodgementDraft',
    updateLodgementDraft: 'lodgement/updateDraft',
    getLodgementDraftById: 'lodgement/draft/',
    addLodgementAnnexure: 'lodgement/addAnnexure',
    getLodgementAnnexure: 'lodgement/getAnnexure?draftId=',
    addLodgementPayment: 'lodgement/addDraftPayment',
    getLodgementDraftPayments: 'lodgement/getDraftPayments?draftId=',
    getDraftPaymentDocument: 'lodgement/getPayment/',
    getAnnexureDocument: 'lodgement/getAnnexure/',
    removeAnnexure: 'lodgement/deleteAnnexure?annexureId=',
    saveLodgementDraftSteps: 'lodgement/saveDraftSteps',
    getAllLodgementDraftSteps: 'lodgement/getDraftSteps?draftId=',
    searchDraftRequest: 'lodgement/searchDraftRequest?searchTerm=',
    addLodgementDraftRequest: 'lodgement/addDraftRequest',
    addLodgementRequest: 'lodgement/addRequestToDraftStep',
    uploadLodgementDocument: 'lodgement/uploadLdgResDetailDoc',
    getLdgResDetailDoc: 'lodgement/getLdgResDetailDoc?documentId=',
    getLodgementsList: 'lodgement/listLodgementDraft?processId=',
    checkoutLodgementDraft: 'lodgement/checkoutLodgementDraft?draftId=',
    docketlistid: 'docketv2/getDocketId?workflowId=',
    docketDraft: 'docketv2/getDocketById?Id=',
    getLodgementDraftByWorkFlowId: 'lodgement/draft?workflowId=',
    deleteLodgementDraftByDraftId: 'lodgement/draft/',
    getALlDocumentForRequest: 'lodgement/getAllDocumentForRequest?requestId=',
    notifyForLodgement: 'lodgement/notifyForLodgement',
    deleteLdgResDocument: 'lodgement/deleteLdgResDocument?documentId=',
    deleteDraftPayment: 'lodgement/deleteDraftPayment?payId=',
    updateDraftPayment: 'lodgement/updateDraftPayment',
    removeRequestFromStep: 'lodgement/removeRequest?requestId=',
    addStepsByReservationRef: 'lodgement/addStepsByReservationRef?draftId=',
    getWorkFlow: 'workflow/?workflowId=',
    getDocumentSummary: 'lodgement/documentSummary?draftId=',
    generatePerformaInvoice: 'lodgement/generatePerformaInvoice?draftId=',
    issueBatchLodgement: 'lodgement/issueBatch',
    getLdgDraftAcknowledement: 'lodgement/getLdgDraftAcknowledement?draftId=',
    getBatchDetails: 'lodgement/getBatchDetails?draftId=',
    getLodgementAllDocument: 'lodgement/getLodgementAllDocument?draftId=',


    /* Examination */
     saveExaminatiion: 'examination/saveExamination',
     saveDocket: 'docketv2/updateDocket?docketId=479',
     newsaveDocket: 'docketv2/addNewDocket',
     getExaminationById: 'examination/getExaminationById?examinationId=',
     getExaminationByWorkflowId: 'examination/getExaminationByWorkflowId?workflowId=',

    /* Docket */
    uploadDocument: 'examination/upload',
    getMasterDocket: 'docket/getMasterDocketById?docketId=',
    getDocketByExamId: 'docket/getDocketByExaminationId?examinationId=',
   
    getDocketListByParentId: 'docket/getDocketListByParentId?parentId=',
    getMasterDocketDetails: 'docket/getMasterDocketById',
    getDocketList: 'docket/getDocketList',
    updateDocket: 'docket/updateDocket?examinationId=',
    //updateDocket: 'docket/updateDocket',
    getDocketListByType: 'docket/getDocketListByType?typeId=',

};
