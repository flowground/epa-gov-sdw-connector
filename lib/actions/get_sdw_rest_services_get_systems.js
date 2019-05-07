/**
 * Auto-generated action file for "U.S. EPA Enforcement and Compliance History Online (ECHO) - Safe Drinking Water Act" API.
 *
 * Generated at: 2019-05-07T14:40:25.632Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / epa-gov-sdw-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/sdw_rest_services.get_systems'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "output",
    "p_fn",
    "p_ct",
    "p_co",
    "p_fips",
    "p_st",
    "p_zip",
    "p_reg",
    "p_trb",
    "p_act",
    "p_qiv",
    "p_ico",
    "p_pid",
    "p_owop",
    "p_systyp",
    "p_swtyp",
    "p_popsv",
    "p_cs",
    "p_mr",
    "p_health",
    "p_other",
    "p_pn",
    "p_sv",
    "p_qs",
    "p_sfs",
    "p_pswpol",
    "p_pswvio",
    "p_pbale",
    "p_cuale",
    "p_rc350v",
    "p_pbv",
    "p_cuv",
    "p_lcrv",
    "p_fea",
    "p_feay",
    "p_feaa",
    "p_iea",
    "p_ieay",
    "p_ieaa",
    "p_qis",
    "p_pfead1",
    "p_pfead2",
    "p_pfeat",
    "p_ss5yr",
    "p_sdc",
    "p_ysl",
    "p_ysly",
    "p_ysla",
    "p_idt1",
    "p_idt2",
    "p_pityp",
    "queryset",
    "responseset",
    "callback",
    "qcolumns"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "output": "output",
    "p_fn": "p_fn",
    "p_ct": "p_ct",
    "p_co": "p_co",
    "p_fips": "p_fips",
    "p_st": "p_st",
    "p_zip": "p_zip",
    "p_reg": "p_reg",
    "p_trb": "p_trb",
    "p_act": "p_act",
    "p_qiv": "p_qiv",
    "p_ico": "p_ico",
    "p_pid": "p_pid",
    "p_owop": "p_owop",
    "p_systyp": "p_systyp",
    "p_swtyp": "p_swtyp",
    "p_popsv": "p_popsv",
    "p_cs": "p_cs",
    "p_mr": "p_mr",
    "p_health": "p_health",
    "p_other": "p_other",
    "p_pn": "p_pn",
    "p_sv": "p_sv",
    "p_qs": "p_qs",
    "p_sfs": "p_sfs",
    "p_pswpol": "p_pswpol",
    "p_pswvio": "p_pswvio",
    "p_pbale": "p_pbale",
    "p_cuale": "p_cuale",
    "p_rc350v": "p_rc350v",
    "p_pbv": "p_pbv",
    "p_cuv": "p_cuv",
    "p_lcrv": "p_lcrv",
    "p_fea": "p_fea",
    "p_feay": "p_feay",
    "p_feaa": "p_feaa",
    "p_iea": "p_iea",
    "p_ieay": "p_ieay",
    "p_ieaa": "p_ieaa",
    "p_qis": "p_qis",
    "p_pfead1": "p_pfead1",
    "p_pfead2": "p_pfead2",
    "p_pfeat": "p_pfeat",
    "p_ss5yr": "p_ss5yr",
    "p_sdc": "p_sdc",
    "p_ysl": "p_ysl",
    "p_ysly": "p_ysly",
    "p_ysla": "p_ysla",
    "p_idt1": "p_idt1",
    "p_idt2": "p_idt2",
    "p_pityp": "p_pityp",
    "queryset": "queryset",
    "responseset": "responseset",
    "callback": "callback",
    "qcolumns": "qcolumns"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/sdw_rest_services.get_systems',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}