#EMDK For Android API List

## Core and ProfileManager APIs
The following APIs are to be used to process EMDK features and profiles using the [Profile Manager](../guide/profiles/about) as well as getting information about the EMDK.



###EMDKBase

* [EMDKBase](../api/EMDKBase)


###EMDKManager

* [EMDKManager](../api/EMDKManager)
* [EMDKManager_FEATURE_TYPE](../api/EMDKManager_FEATURE_TYPE)
* [EMDKManager_IEMDKListener](../api/EMDKManager_IEMDKListener)
* [EMDKManager_OpenedEventArgs](../api/EMDKManager_OpenedEventArgs)


###EMDKResults

* [EMDKResults](../api/EMDKResults)
* [EMDKResults_EXTENDED_STATUS_CODE](../api/EMDKResults_EXTENDED_STATUS_CODE)
* [EMDKResults_STATUS_CODE](../api/EMDKResults_STATUS_CODE)


###ProfileManager

* [ProfileManager](../api/ProfileManager)
* [ProfileManager_DataEventArgs](../api/ProfileManager_DataEventArgs)
* [ProfileManager_IDataListener](../api/ProfileManager_IDataListener)
* [ProfileManager_PROFILE_FLAG](../api/ProfileManager_PROFILE_FLAG)
* [ProfileManager_ResultData](../api/ProfileManager_ResultData)


###VersionManager

* [VersionManager](../api/VersionManager)
* [VersionManager_VERSION_TYPE](../api/VersionManager_VERSION_TYPE)


## Barcode APIs
The following APIs are used when you wish to handle all barcode scanning entirely in Java. These API's work independently of any [Data Capture profiles.](../guide/profiles/profilebarcode)

###BarcodeManager

* [BarcodeManager](../api/BarcodeManager)
* [BarcodeManager_ConnectionState](../api/BarcodeManager_ConnectionState)
* [BarcodeManager_DeviceIdentifier](../api/BarcodeManager_DeviceIdentifier)
* [BarcodeManager_IScannerConnectionListener](../api/BarcodeManager_IScannerConnectionListener)
* [BarcodeManager_ScannerConnectionEventArgs](../api/BarcodeManager_ScannerConnectionEventArgs)


###InterfaceConfig

* [InterfaceConfig](../api/InterfaceConfig)


###ScanDataCollection

* [ScanDataCollection](../api/ScanDataCollection)
* [ScanDataCollection_LabelType](../api/ScanDataCollection_LabelType)
* [ScanDataCollection_ScanData](../api/ScanDataCollection_ScanData)


###Scanner

* [Scanner](../api/Scanner)
* [Scanner_DataEventArgs](../api/Scanner_DataEventArgs)
* [Scanner_IDataListener](../api/Scanner_IDataListener)
* [Scanner_IStatusListener](../api/Scanner_IStatusListener)
* [Scanner_StatusEventArgs](../api/Scanner_StatusEventArgs)
* [Scanner_TriggerTypes](../api/Scanner_TriggerTypes)


###ScannerConfig

* [ScannerConfig](../api/ScannerConfig)
* [ScannerConfig_AudioStreamType](../api/ScannerConfig_AudioStreamType)
* [ScannerConfig_BooklandFormat](../api/ScannerConfig_BooklandFormat)
* [ScannerConfig_CheckDigit](../api/ScannerConfig_CheckDigit)
* [ScannerConfig_CheckDigitScheme](../api/ScannerConfig_CheckDigitScheme)
* [ScannerConfig_CheckDigitType](../api/ScannerConfig_CheckDigitType)
* [ScannerConfig_CodeIdType](../api/ScannerConfig_CodeIdType)
* [ScannerConfig_CouponReport](../api/ScannerConfig_CouponReport)
* [ScannerConfig_DecoderParameters_AustralianPostalDecoder](../api/ScannerConfig_DecoderParameters_AustralianPostalDecoder)
* [ScannerConfig_DecoderParameters_AztecDecoder](../api/ScannerConfig_DecoderParameters_AztecDecoder)
* [ScannerConfig_DecoderParameters_BaseDecoder](../api/ScannerConfig_DecoderParameters_BaseDecoder)
* [ScannerConfig_DecoderParameters_CanadianPostalDecoder](../api/ScannerConfig_DecoderParameters_CanadianPostalDecoder)
* [ScannerConfig_DecoderParameters_Chinese2of5Decoder](../api/ScannerConfig_DecoderParameters_Chinese2of5Decoder)
* [ScannerConfig_DecoderParameters_CodaBarDecoder](../api/ScannerConfig_DecoderParameters_CodaBarDecoder)
* [ScannerConfig_DecoderParameters_Code11Decoder](../api/ScannerConfig_DecoderParameters_Code11Decoder)
* [ScannerConfig_DecoderParameters_Code128Decoder](../api/ScannerConfig_DecoderParameters_Code128Decoder)
* [ScannerConfig_DecoderParameters_Code39Decoder](../api/ScannerConfig_DecoderParameters_Code39Decoder)
* [ScannerConfig_DecoderParameters_Code93Decoder](../api/ScannerConfig_DecoderParameters_Code93Decoder)
* [ScannerConfig_DecoderParameters_CompositeABDecoder](../api/ScannerConfig_DecoderParameters_CompositeABDecoder)
* [ScannerConfig_DecoderParameters_CompositeCDecoder](../api/ScannerConfig_DecoderParameters_CompositeCDecoder)
* [ScannerConfig_DecoderParameters_D2of5Decoder](../api/ScannerConfig_DecoderParameters_D2of5Decoder)
* [ScannerConfig_DecoderParameters_DataMatrixDecoder](../api/ScannerConfig_DecoderParameters_DataMatrixDecoder)
* [ScannerConfig_DecoderParameters_DutchPostalDecoder](../api/ScannerConfig_DecoderParameters_DutchPostalDecoder)
* [ScannerConfig_DecoderParameters_Ean13Decoder](../api/ScannerConfig_DecoderParameters_Ean13Decoder)
* [ScannerConfig_DecoderParameters_Ean8Decoder](../api/ScannerConfig_DecoderParameters_Ean8Decoder)
* [ScannerConfig_DecoderParameters_Gs1DatabarDecoder](../api/ScannerConfig_DecoderParameters_Gs1DatabarDecoder)
* [ScannerConfig_DecoderParameters_Gs1DatabarExpDecoder](../api/ScannerConfig_DecoderParameters_Gs1DatabarExpDecoder)
* [ScannerConfig_DecoderParameters_Gs1DatabarLimDecoder](../api/ScannerConfig_DecoderParameters_Gs1DatabarLimDecoder)
* [ScannerConfig_DecoderParameters_HanXinDecoder](../api/ScannerConfig_DecoderParameters_HanXinDecoder)
* [ScannerConfig_DecoderParameters_I2of5Decoder](../api/ScannerConfig_DecoderParameters_I2of5Decoder)
* [ScannerConfig_DecoderParameters_JapanesePostalDecoder](../api/ScannerConfig_DecoderParameters_JapanesePostalDecoder)
* [ScannerConfig_DecoderParameters_Korean3of5Decoder](../api/ScannerConfig_DecoderParameters_Korean3of5Decoder)
* [ScannerConfig_DecoderParameters_MailMarkDecoder](../api/ScannerConfig_DecoderParameters_MailMarkDecoder)
* [ScannerConfig_DecoderParameters_Matrix2of5Decoder](../api/ScannerConfig_DecoderParameters_Matrix2of5Decoder)
* [ScannerConfig_DecoderParameters_MaxiCodeDecoder](../api/ScannerConfig_DecoderParameters_MaxiCodeDecoder)
* [ScannerConfig_DecoderParameters_MicroPdf](../api/ScannerConfig_DecoderParameters_MicroPdf)
* [ScannerConfig_DecoderParameters_MicroPdfDecoder](../api/ScannerConfig_DecoderParameters_MicroPdfDecoder)
* [ScannerConfig_DecoderParameters_MicroQr](../api/ScannerConfig_DecoderParameters_MicroQr)
* [ScannerConfig_DecoderParameters_MicroQrDecoder](../api/ScannerConfig_DecoderParameters_MicroQrDecoder)
* [ScannerConfig_DecoderParameters_MsiDecoder](../api/ScannerConfig_DecoderParameters_MsiDecoder)
* [ScannerConfig_DecoderParameters_Pdf417Decoder](../api/ScannerConfig_DecoderParameters_Pdf417Decoder)
* [ScannerConfig_DecoderParameters_QrCodeDecoder](../api/ScannerConfig_DecoderParameters_QrCodeDecoder)
* [ScannerConfig_DecoderParameters_SignatureDecoder](../api/ScannerConfig_DecoderParameters_SignatureDecoder)
* [ScannerConfig_DecoderParameters_Tlc39Decoder](../api/ScannerConfig_DecoderParameters_Tlc39Decoder)
* [ScannerConfig_DecoderParameters_TriOptic39Decoder](../api/ScannerConfig_DecoderParameters_TriOptic39Decoder)
* [ScannerConfig_DecoderParameters_UkPostalDecoder](../api/ScannerConfig_DecoderParameters_UkPostalDecoder)
* [ScannerConfig_DecoderParameters_UpcaDecoder](../api/ScannerConfig_DecoderParameters_UpcaDecoder)
* [ScannerConfig_DecoderParameters_Upce0Decoder](../api/ScannerConfig_DecoderParameters_Upce0Decoder)
* [ScannerConfig_DecoderParameters_Upce1Decoder](../api/ScannerConfig_DecoderParameters_Upce1Decoder)
* [ScannerConfig_DecoderParameters_UpcEanParameters](../api/ScannerConfig_DecoderParameters_UpcEanParameters)
* [ScannerConfig_DecoderParameters_Us4StateDecoder](../api/ScannerConfig_DecoderParameters_Us4StateDecoder)
* [ScannerConfig_DecoderParameters_Us4StateFicsDecoder](../api/ScannerConfig_DecoderParameters_Us4StateFicsDecoder)
* [ScannerConfig_DecoderParameters_UsPlanetDecoder](../api/ScannerConfig_DecoderParameters_UsPlanetDecoder)
* [ScannerConfig_DecoderParameters_UsPostNetDecoder](../api/ScannerConfig_DecoderParameters_UsPostNetDecoder)
* [ScannerConfig_DecoderParameters_WebCodeDecoder](../api/ScannerConfig_DecoderParameters_WebCodeDecoder)
* [ScannerConfig_DecoderParameters](../api/ScannerConfig_DecoderParameters)
* [ScannerConfig_HanXinInverse](../api/ScannerConfig_HanXinInverse)
* [ScannerConfig_IlluminationMode](../api/ScannerConfig_IlluminationMode)
* [ScannerConfig_InterfaceParams](../api/ScannerConfig_InterfaceParams)
* [ScannerConfig_Inverse1DMode](../api/ScannerConfig_Inverse1DMode)
* [ScannerConfig_Isbt128ConcatMode](../api/ScannerConfig_Isbt128ConcatMode)
* [ScannerConfig_Isbt128ContactMode](../api/ScannerConfig_Isbt128ContactMode)
* [ScannerConfig_LcdMode](../api/ScannerConfig_LcdMode)
* [ScannerConfig_LinearSecurityLevel](../api/ScannerConfig_LinearSecurityLevel)
* [ScannerConfig_PickList](../api/ScannerConfig_PickList)
* [ScannerConfig_PowerMode](../api/ScannerConfig_PowerMode)
* [ScannerConfig_Preamble](../api/ScannerConfig_Preamble)
* [ScannerConfig_ReaderParameters_ReaderSpecifics_CameraSpecifics](../api/ScannerConfig_ReaderParameters_ReaderSpecifics_CameraSpecifics)
* [ScannerConfig_ReaderParameters_ReaderSpecifics_ContinuousRead](../api/ScannerConfig_ReaderParameters_ReaderSpecifics_ContinuousRead)
* [ScannerConfig_ReaderParameters_ReaderSpecifics_ImagerSpecifics](../api/ScannerConfig_ReaderParameters_ReaderSpecifics_ImagerSpecifics)
* [ScannerConfig_ReaderParameters_ReaderSpecifics_LaserSpecifics](../api/ScannerConfig_ReaderParameters_ReaderSpecifics_LaserSpecifics)
* [ScannerConfig_ReaderParameters_ReaderSpecifics](../api/ScannerConfig_ReaderParameters_ReaderSpecifics)
* [ScannerConfig_ReaderParameters](../api/ScannerConfig_ReaderParameters)
* [ScannerConfig_ReaderParams_ReaderSpecifics_CameraSpecifics](../api/ScannerConfig_ReaderParams_ReaderSpecifics_CameraSpecifics)
* [ScannerConfig_ReaderParams_ReaderSpecifics_ContinuousRead](../api/ScannerConfig_ReaderParams_ReaderSpecifics_ContinuousRead)
* [ScannerConfig_ReaderParams_ReaderSpecifics_ImagerSpecifics](../api/ScannerConfig_ReaderParams_ReaderSpecifics_ImagerSpecifics)
* [ScannerConfig_ReaderParams_ReaderSpecifics_LaserSpecifics](../api/ScannerConfig_ReaderParams_ReaderSpecifics_LaserSpecifics)
* [ScannerConfig_ReaderParams_ReaderSpecifics](../api/ScannerConfig_ReaderParams_ReaderSpecifics)
* [ScannerConfig_ReaderParams](../api/ScannerConfig_ReaderParams)
* [ScannerConfig_ScanParameters](../api/ScannerConfig_ScanParameters)
* [ScannerConfig_SecurityLevel](../api/ScannerConfig_SecurityLevel)
* [ScannerConfig_SkipOnUnSupported](../api/ScannerConfig_SkipOnUnSupported)
* [ScannerConfig_SupplementalMode](../api/ScannerConfig_SupplementalMode)
* [ScannerConfig_UccLinkMode](../api/ScannerConfig_UccLinkMode)
* [ScannerConfig_VerifyCheckDigit](../api/ScannerConfig_VerifyCheckDigit)
* [ScannerConfig_ViewFinderMode](../api/ScannerConfig_ViewFinderMode)


###ScannerException

* [ScannerException](../api/ScannerException)


###ScannerInfo

* [ScannerInfo](../api/ScannerInfo)
* [ScannerInfo_ConnectionType](../api/ScannerInfo_ConnectionType)
* [ScannerInfo_DecoderType](../api/ScannerInfo_DecoderType)
* [ScannerInfo_DeviceType](../api/ScannerInfo_DeviceType)


###ScannerResults

* [ScannerResults](../api/ScannerResults)


###StatusData

* [StatusData](../api/StatusData)
* [StatusData_ScannerStates](../api/StatusData_ScannerStates)






