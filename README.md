# ![LOGO](logo.png) U.S. EPA Enforcement and Compliance History Online (ECHO) - Safe Drinking Water Act **flow**ground Connector

## Description

A generated **flow**ground connector for the U.S. EPA Enforcement and Compliance History Online (ECHO) - Safe Drinking Water Act API (version 0.0.0).

Generated from: https://api.apis.guru/v2/specs/epa.gov/sdw/0.0.0/swagger.json<br/>
Generated at: 2019-05-07T17:40:25+03:00

## API Description

Enforcement and Compliance History Online (ECHO) is a tool developed and maintained by EPA's Office of Enforcement and Compliance Assurance for public use. ECHO provides integrated compliance and enforcement information for about 800,000 regulated facilities nationwide.
<BR><BR>SDW Rest Services provides multiple service endpoints, each with specific capabilities, to search and retrieve data on public water systems regulated under the Safe Drinking Water Act (SDWA) .
The returned results reflect data drawn from EPA's Federal Safe Drinking Water Information System (SDWIS) database.
<BR><BR>
The get_systems, get_qid, and get_download end points are meant to be used together.
<br><br>
The recommended use scenario for get_systems, get_qid, and get_downoad is:
<br>
<br><b>1)</b>  Use get_systems to validate passed query parameters, obtain summary statistics and to obtain a query_id (QID).  QIDs are time sensitive and will be valid for approximately 30 minutes.
<br><b>2)</b>  Use get_qid, with the returned QID, to paginate through arrays of water system results.
<br><b>3)</b>  Use get_download, with the returned QID, to generate a Comma Separated Value (CSV) file of water system information that meets the QID query criteria.
<br>
<br>
Use the qcolumns parameter to customize your search results.  Use the Metdata service endpoint for a list of available output objects, their Column Ids, and their definitions to help you build your customized output. 
<br><br>
Additional ECHO Resources:   <a href="https://echo.epa.gov/tools/web-services">Web Services</a>, <a href="https://echo.epa.gov/resources/echo-data/about-the-data">About ECHO's Data</a>, <a href="https://echo.epa.gov/tools/data-downloads">Data Downloads</a>
<br>

## Authorization

This API does not require authorization.

## Actions

### Safe Drinking Water Act (SDWA) Download Data Service

> Based on the QID obtained from a get_systems query, return a comma separated value (CSV) file of the water systems found.

*Tags:* `Safe Drinking Water`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- CSV = Facility results formatted as comma delimited file download (default).
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Safe Drinking Water Act (SDWA) Download Data Service

> Based on the QID obtained from a get_systems query, return a comma separated value (CSV) file of the water systems found.

*Tags:* `Safe Drinking Water`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- CSV = Facility results formatted as comma delimited file download (default).
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Safe Drinking Water Act (SDWA) Paginated Results Service

> GET_QID is passed with a query ID corresponding to a previously run get_systems query. It then returns a Systems object containing all matching water systems. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.

*Tags:* `Safe Drinking Water`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `pageno` - _optional_ - Indicates the number of the page to display. It is used only when the results are paginated.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `newsort` - _optional_ - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
* `descending` - _optional_ - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
    Possible values: Y, N.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Safe Drinking Water Act (SDWA) Paginated Results Service

> GET_QID is passed with a query ID corresponding to a previously run get_systems query. It then returns a Systems object containing all matching water systems. The main purpose of GET_QID is for large querysets that contain multiple pages (responsesets) of output. GET_QID allows for pagination and for the selection and sorting of columns.

*Tags:* `Safe Drinking Water`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `qid` - _required_ - Query ID Selector.  Enter the QueryID number from a previously run query.
* `pageno` - _optional_ - Indicates the number of the page to display. It is used only when the results are paginated.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `newsort` - _optional_ - Output Sort Column.  Enter the number of the column on which the data will be sorted. If unpopulated results will sort on the first column.
* `descending` - _optional_ - Output Sort Column Descending Flag.  Enter Y to column identified in the newsort parameter descending.  Enter N to use ascending sort order. Used only when newsort parameter is populated.
    Possible values: Y, N.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Safe Drinking Water Act (SDWA) Systems Search Service

> Returns an array of public water systems that meet the specified search criteria.

*Tags:* `Safe Drinking Water`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `p_fn` - _optional_ - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
* `p_ct` - _optional_ - Facility City Filter. Enter a single case-insensitive city name to filter results.
* `p_co` - _optional_ - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
* `p_fips` - _optional_ - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
* `p_st` - _optional_ - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
* `p_zip` - _optional_ - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
* `p_reg` - _optional_ - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
    Possible values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10.
* `p_trb` - _optional_ - Tribe name
* `p_act` - _optional_ - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
    Possible values: Y, N, A.
* `p_qiv` - _optional_ - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
- Z = Zero quarters in noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
    Possible values: 0, GT1, GT2, GT4, GT8, 12.
* `p_ico` - _optional_ - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
    Possible values: Y, N.
* `p_pid` - _optional_ - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
* `p_owop` - _optional_ - Owner/Operator code filter.  Enter one of the following codes to filter results:
- F = Federal Government
- S = State Government
- L = Local Government
- M = Public/Private
- N = Native American
- P = Private
    Possible values: F, S, L, M, N, P.
* `p_systyp` - _optional_ - Type of public water system:
- CWS=Community water system
- NCWS=Non-community water system
- NTCWS=Non-transient non-community water system
- TNCWS=Transient non-community water system
    Possible values: CWS, NCWS, NTCWS, TNCWS.
* `p_swtyp` - _optional_ - Source Water Type:
- SW = Surface water 
- GW= Ground water
- GU = Ground water under direct influence of (UDI) surface water
- SWP = Purchased Surface water
- GWP = Purchased Ground water
- GUP = Purchased Ground water UDI surface water
    Possible values: SW, GW, GU, SWP, GWP, GUP.
* `p_popsv` - _optional_ - Estimated average daily population served by a system:
- LE500 = 500 or less
- IN501_3K = 501-3,300
- IN3K_10K = 3,301-10,000
- IN10K_100K = 10,001-100,000
- IN100K_1M = 100,001-1,000,000
- GT1M = More than 1,000,000
May contain multiple comma-separated values.
* `p_cs` - _optional_ - Current violations:
- M = Monitoring and Reporting Violations
- H = Health-based Violations
- O = Other Violations
- P = Public Notice Violations
- S = Serious Violator
- N = No Violations
May contain multiple comma-separated values.
* `p_mr` - _optional_ - Monitoring and Reporting Violations (failure to conduct regular monitoring of drinking water quality or submit monitoring results in a timely fashion).
    Possible values: Y, N.
* `p_health` - _optional_ - Violations of health-based drinking water standards (maximum contaminant levels, maximum residual disinfectant levels, or treatment technique rules).
    Possible values: Y, N.
* `p_other` - _optional_ - Other violations, such as failing to issue annual consumer confidence reports or maintain required records.
    Possible values: Y, N.
* `p_pn` - _optional_ - Public Notice Violations (failure to immediately alert consumers of serious problem with drinking water).
    Possible values: Y, N.
* `p_sv` - _optional_ - Serious Violator (unresolved serious, multiple, and/or continuing violations). A value of Y will return only SDWIS systems that are Serious Violators, while a value of N will only return SDWIS Systems that are not Serious Violators.
    Possible values: Y, N.
* `p_qs` - _optional_ - Quick Search. Allows entry for city, state, and/or zip code.
* `p_sfs` - _optional_ - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
* `p_pswpol` - _optional_ - For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
* `p_pswvio` - _optional_ - Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
    Possible values: Y, N.
* `p_pbale` - _optional_ - Lead Action Level Exceedance.  A "Y" value will select water systems with at least 1 Lead Action Level Exceedance.
* `p_cuale` - _optional_ - Copper Action Level Exceedance.  A "Y" value will select water systems with at least 1 Copper Action Level Exceedance.
* `p_rc350v` - _optional_ - Rule code 350 violation. A "Y" value will select water systems with at least one rule code 350 violation.
* `p_pbv` - _optional_ - Lead Violations.  A "Y" value will select water systems with at least 1 Lead Violation.
* `p_cuv` - _optional_ - Copper Violation.  A "Y" value will select water systems with at least 1 Copper Violation.
* `p_lcrv` - _optional_ - Lead or Copper rule violations.  A "Y" value will select water systems with at least 1 Lead or Copper Rule Violation.
* `p_fea` - _optional_ - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_feay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_feaa` - _optional_ - Agency associated with Formal Enforcement Actions:
- E = EPA
- S = State
- A = All
    Possible values: A, E, S.
* `p_iea` - _optional_ - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_ieay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_ieaa` - _optional_ - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
- E = EPA
- S = State
    Possible values: E, S.
* `p_qis` - _optional_ - Significant Quarters in Noncompliance Limiter.  Enter one of the following codes to limit results to facilities having given quarters of noncompliance.
- Z = Zero quarters in noncompliance.
- GE1 = One or more quarters in noncompliance.
- GT1 = More than one quarters in noncompliance.
- GE2 = Two or more quarters in noncompliance.
- GT2 = More than two quarters in noncompliance.
- GE4 = Four or more quarters in noncompliance.
- GT4 = More than four quarters in noncompliance.
- GE8 = Eight or more quarters in noncompliance.
- GT8 = More than eight quarters in noncompliance.
- GE12 = Twelve or more quarters in noncompliance.
- GT12 = Twelve or more quarters in noncompliance.
- 12 = Exactly twelve quarters in noncompliance.
Note the seemingly incongruous of GT12 is deliberate.
    Possible values: Z, GE1, GT1, GE2, GT2, GE4, GT4, GE8, GT8, GE12, GT12, 12.
* `p_pfead1` - _optional_ - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfead2` - _optional_ - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfeat` - _optional_ - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
* `p_ss5yr` - _optional_ - Sanitary Surveys (in past 5 years) flag.  Values of visit_reason_code are either "SNSV" or "SNSP" in the past 5 years indicate a Sanitary Survey.  

Enter "Y" to select facilities with Sanitary Surveys within the past 5 years.  

Enter "N" to select facilities without Sanitary Surveys in the past 5 years.

Enter a number to search for greater for facilities with a quantity than or equal to that value.



* `p_sdc` - _optional_ - Significant Deficiency Count (in past 5 years) flag.  

Enter "Y" to select facilities with Sanitary Surveys within the past 5 years.  

Enter "N" to select facilities without Sanitary Surveys in the past 5 years.

Enter a number to search for facilities with a quantity greater than or equal to that value.
* `p_ysl` - _optional_ - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
- W = within date range
- N = not within date range
    Possible values: W, N, NV.
* `p_ysly` - _optional_ - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
    Possible values: 1, 2, 3, 4, 5.
* `p_ysla` - _optional_ - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
- E = EPA
- S = State
    Possible values: E, S, A.
* `p_idt1` - _optional_ - Beginning of date range of most recent facility inspection.
* `p_idt2` - _optional_ - End of date range of most recent facility inspection.
* `p_pityp` - _optional_ - Inspection Type:
- CAC = Corrective Action Inspection
- CAV = Compliance Assistance Visit
- CDI = Case Development Inspection
- CEI = Inspection Inspection
- CSE = Compliance Schedule Evaluation
- FCI = Focused Compliance
- FRR = Financial Record Review
- FSD = Facility Self Disclosure
- FUI = Follow-Up Inspection
- GME = Groundwater Monitoring Evaluation
- NRR = Non-Financial Record Review
- OAM = Operation and Maintenance Inspection
May contain multiple comma-separated values.
* `queryset` - _optional_ - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* `responseset` - _optional_ - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Safe Drinking Water Act (SDWA) Systems Search Service

> Returns an array of public water systems that meet the specified search criteria.

*Tags:* `Safe Drinking Water`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `p_fn` - _optional_ - Facility Name Filter. Enter one or more case-insensitive facility names to filter results.  Provide multiple values as a comma-delimited list.  See p_fntype for additional modifiers.
* `p_ct` - _optional_ - Facility City Filter. Enter a single case-insensitive city name to filter results.
* `p_co` - _optional_ - Facility County Filter. Provide a single county name in combination with a state value provided via p_st.
* `p_fips` - _optional_ - FIPS Code Filter.  Enter a single 5-character Federal Information Processing Standards (FIPS) state + county value to restrict results.  E.g. to limit results to Kenosha County, Wisconsin, use 55059.
* `p_st` - _optional_ - Facility State and State-Equivalent Filter.  Provide one or more USPS postal abbreviations for states and state-equivalents to filter results.  Provide multiple values as a comma-delimited list.
* `p_zip` - _optional_ - 5-Digit ZIP Code Filter. Provide one or more 5-digit postal zip codes to filter results.  May contain multiple comma-separated values.
* `p_reg` - _optional_ - EPA Region Filter. Provide a single value of 01 thru 10 to restrict results to a single EPA region.
    Possible values: 01, 02, 03, 04, 05, 06, 07, 08, 09, 10.
* `p_trb` - _optional_ - Tribe name
* `p_act` - _optional_ - Active Permits/Facilities Flag.  Provide Y or N to filter results to facilities with active permits.
    Possible values: Y, N, A.
* `p_qiv` - _optional_ - Quarters in Noncompliance Limiter.  Enter a coded value to limit results to facilities with given quarter of noncompliance.
- Z = Zero quarters in noncompliance.
- GEXX = Replacing XX with a numeric value, that number of quarterd or more in noncompliance.
- GTXX = Replacing XX with a numeric value, more than that number of quarters in noncompliance.
    Possible values: 0, GT1, GT2, GT4, GT8, 12.
* `p_ico` - _optional_ - Indian Country Flag.  Enter a "Y" or "N" to restrict searches to facilities inside or outside Indian Country.
    Possible values: Y, N.
* `p_pid` - _optional_ - Nine-digit permit IDs. May contain up to 2000 comma-separated values.
* `p_owop` - _optional_ - Owner/Operator code filter.  Enter one of the following codes to filter results:
- F = Federal Government
- S = State Government
- L = Local Government
- M = Public/Private
- N = Native American
- P = Private
    Possible values: F, S, L, M, N, P.
* `p_systyp` - _optional_ - Type of public water system:
- CWS=Community water system
- NCWS=Non-community water system
- NTCWS=Non-transient non-community water system
- TNCWS=Transient non-community water system
    Possible values: CWS, NCWS, NTCWS, TNCWS.
* `p_swtyp` - _optional_ - Source Water Type:
- SW = Surface water 
- GW= Ground water
- GU = Ground water under direct influence of (UDI) surface water
- SWP = Purchased Surface water
- GWP = Purchased Ground water
- GUP = Purchased Ground water UDI surface water
    Possible values: SW, GW, GU, SWP, GWP, GUP.
* `p_popsv` - _optional_ - Estimated average daily population served by a system:
- LE500 = 500 or less
- IN501_3K = 501-3,300
- IN3K_10K = 3,301-10,000
- IN10K_100K = 10,001-100,000
- IN100K_1M = 100,001-1,000,000
- GT1M = More than 1,000,000
May contain multiple comma-separated values.
* `p_cs` - _optional_ - Current violations:
- M = Monitoring and Reporting Violations
- H = Health-based Violations
- O = Other Violations
- P = Public Notice Violations
- S = Serious Violator
- N = No Violations
May contain multiple comma-separated values.
* `p_mr` - _optional_ - Monitoring and Reporting Violations (failure to conduct regular monitoring of drinking water quality or submit monitoring results in a timely fashion).
    Possible values: Y, N.
* `p_health` - _optional_ - Violations of health-based drinking water standards (maximum contaminant levels, maximum residual disinfectant levels, or treatment technique rules).
    Possible values: Y, N.
* `p_other` - _optional_ - Other violations, such as failing to issue annual consumer confidence reports or maintain required records.
    Possible values: Y, N.
* `p_pn` - _optional_ - Public Notice Violations (failure to immediately alert consumers of serious problem with drinking water).
    Possible values: Y, N.
* `p_sv` - _optional_ - Serious Violator (unresolved serious, multiple, and/or continuing violations). A value of Y will return only SDWIS systems that are Serious Violators, while a value of N will only return SDWIS Systems that are not Serious Violators.
    Possible values: Y, N.
* `p_qs` - _optional_ - Quick Search. Allows entry for city, state, and/or zip code.
* `p_sfs` - _optional_ - Single Facility Search Filter.  Provide a facility name or program system identifier to limit results.  For the all data search, the FRS registry identifier is also searched.
* `p_pswpol` - _optional_ - For CWA, pollutant names for surface water discharges. for Drinking Water, SDWIS Violation contaminant codes for unaddressed violations that have occurred in the last 3 years. May contain multiple comma-separated values.
* `p_pswvio` - _optional_ - Used in conjuction with parameters p_pswpol and p_pswparam, indicates whether search should only include pollutants with violations.
    Possible values: Y, N.
* `p_pbale` - _optional_ - Lead Action Level Exceedance.  A "Y" value will select water systems with at least 1 Lead Action Level Exceedance.
* `p_cuale` - _optional_ - Copper Action Level Exceedance.  A "Y" value will select water systems with at least 1 Copper Action Level Exceedance.
* `p_rc350v` - _optional_ - Rule code 350 violation. A "Y" value will select water systems with at least one rule code 350 violation.
* `p_pbv` - _optional_ - Lead Violations.  A "Y" value will select water systems with at least 1 Lead Violation.
* `p_cuv` - _optional_ - Copper Violation.  A "Y" value will select water systems with at least 1 Copper Violation.
* `p_lcrv` - _optional_ - Lead or Copper rule violations.  A "Y" value will select water systems with at least 1 Lead or Copper Rule Violation.
* `p_fea` - _optional_ - Formal Enforcement Actions [within / not within] specified date range indicator. The date range is determined by parameters p_fead1 and p_fead2 or by parameter p_feay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_feay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Formal Enforcement Actions (FEA). Used along with p_fea (which indicates whether to look within or outside of the date range) to find FEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_feaa` - _optional_ - Agency associated with Formal Enforcement Actions:
- E = EPA
- S = State
- A = All
    Possible values: A, E, S.
* `p_iea` - _optional_ - Informal Enforcement Actions [within / not within] specified date range.  The date range is determined by parameters p_iead1 and p_iead2 or by parameter p_ieay.
- W = within date range
- N = not within date range
    Possible values: W, N.
* `p_ieay` - _optional_ - Years (1 to 5) Range.  This value is used to create a date range for Informal Enforcement Actions (IEA). Used along with p_iea (which indicates whether to look within or outside of the date range) to find IEAs within (or not within) the number of years specified.
    Possible values: 1, 2, 3, 4, 5.
* `p_ieaa` - _optional_ - Agency associated with Informal Enforcement Actions. If left blank, both agencies are included.
- E = EPA
- S = State
    Possible values: E, S.
* `p_qis` - _optional_ - Significant Quarters in Noncompliance Limiter.  Enter one of the following codes to limit results to facilities having given quarters of noncompliance.
- Z = Zero quarters in noncompliance.
- GE1 = One or more quarters in noncompliance.
- GT1 = More than one quarters in noncompliance.
- GE2 = Two or more quarters in noncompliance.
- GT2 = More than two quarters in noncompliance.
- GE4 = Four or more quarters in noncompliance.
- GT4 = More than four quarters in noncompliance.
- GE8 = Eight or more quarters in noncompliance.
- GT8 = More than eight quarters in noncompliance.
- GE12 = Twelve or more quarters in noncompliance.
- GT12 = Twelve or more quarters in noncompliance.
- 12 = Exactly twelve quarters in noncompliance.
Note the seemingly incongruous of GT12 is deliberate.
    Possible values: Z, GE1, GT1, GE2, GT2, GE4, GT4, GE8, GT8, GE12, GT12, 12.
* `p_pfead1` - _optional_ - Formal Enforcement Action Date Range Start.  Enter a date in MM/DD/YYYY format to set the start of the range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfead2` - _optional_ - Formal Enforcement Action Date Range End.  Enter a date in MM/DD/YYYY format to set the end of the date range for filtering by recent Formal Enforcement Action (FEA) taken against the facility within the last five years.
* `p_pfeat` - _optional_ - Formal Enforcement Action (FEA) Code Filter.  Enter one or more three-letter FEA codes to restrict results to facilities with these attributes.  Use p_fead1 and p_fead2 parameters to further restrict this filter by entering a date range.  Provide multiple codes as a comma-delimited list.
* `p_ss5yr` - _optional_ - Sanitary Surveys (in past 5 years) flag.  Values of visit_reason_code are either "SNSV" or "SNSP" in the past 5 years indicate a Sanitary Survey.  

Enter "Y" to select facilities with Sanitary Surveys within the past 5 years.  

Enter "N" to select facilities without Sanitary Surveys in the past 5 years.

Enter a number to search for greater for facilities with a quantity than or equal to that value.



* `p_sdc` - _optional_ - Significant Deficiency Count (in past 5 years) flag.  

Enter "Y" to select facilities with Sanitary Surveys within the past 5 years.  

Enter "N" to select facilities without Sanitary Surveys in the past 5 years.

Enter a number to search for facilities with a quantity greater than or equal to that value.
* `p_ysl` - _optional_ - Last Facility Inspection [within / not within] Specified Date Range Indicator. The date range is determined by parameters p_idt1 and p_idt2 or by parameter p_ysly.
- W = within date range
- N = not within date range
    Possible values: W, N, NV.
* `p_ysly` - _optional_ - Number of years (1 to 5) since last facility inspection.  A value of 1 means that it has been inspected within the year.
    Possible values: 1, 2, 3, 4, 5.
* `p_ysla` - _optional_ - Facility Last Inspection Code Filter.  If left blank, both agencies are included.  Enter a value to limit results:
- E = EPA
- S = State
    Possible values: E, S, A.
* `p_idt1` - _optional_ - Beginning of date range of most recent facility inspection.
* `p_idt2` - _optional_ - End of date range of most recent facility inspection.
* `p_pityp` - _optional_ - Inspection Type:
- CAC = Corrective Action Inspection
- CAV = Compliance Assistance Visit
- CDI = Case Development Inspection
- CEI = Inspection Inspection
- CSE = Compliance Schedule Evaluation
- FCI = Focused Compliance
- FRR = Financial Record Review
- FSD = Facility Self Disclosure
- FUI = Follow-Up Inspection
- GME = Groundwater Monitoring Evaluation
- NRR = Non-Financial Record Review
- OAM = Operation and Maintenance Inspection
May contain multiple comma-separated values.
* `queryset` - _optional_ - Query Limiter.  Enter a value to limit the number of records returned for each query. Value cannot exceed 70,000.
* `responseset` - _optional_ - Response Set Limiter. Enter a value to limit the number of records per page. Value cannot exceed 1,000.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.
* `qcolumns` - _optional_ - Used to cutomize service output.  A list of comma-separated column IDs of output objects that will be returned in the service query object or download.  Use the metadata service endpoint for a complete list of Ids and definitions.

### Safe Drinking Water Act (SDWA) Metadata Service

> Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_systems endpoint.

*Tags:* `Metadata`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

### Safe Drinking Water Act (SDWA) Metadata Service

> Returns the JSON Object Name and ColumnId for usage with the qcolumns parameter for get_systems endpoint.

*Tags:* `Metadata`

#### Input Parameters
* `output` - _optional_ - Output Format Flag.  Enter one of the following keywords:
- JSON = Data model formatted as Javascript Object Notation (default).
- JSONP = Data model formatted as Javascript Object Notation with Padding.  
- XML = Data model formatted as Extensible Markup Language.
    Possible values: JSONP, JSON, XML.
* `callback` - _optional_ - JSONP Callback.  For use with JSONP and GEOJSONP output only.  Enter a name of the function in which to wrap the JSON response.

## License

**flow**ground :- Telekom iPaaS / epa-gov-sdw-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
