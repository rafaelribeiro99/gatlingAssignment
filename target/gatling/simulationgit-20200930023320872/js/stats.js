var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "300",
        "ok": "60",
        "ko": "240"
    },
    "minResponseTime": {
        "total": "114",
        "ok": "128",
        "ko": "114"
    },
    "maxResponseTime": {
        "total": "1476",
        "ok": "1030",
        "ko": "1476"
    },
    "meanResponseTime": {
        "total": "464",
        "ok": "414",
        "ko": "477"
    },
    "standardDeviation": {
        "total": "311",
        "ok": "214",
        "ko": "330"
    },
    "percentiles1": {
        "total": "393",
        "ok": "405",
        "ko": "384"
    },
    "percentiles2": {
        "total": "604",
        "ok": "538",
        "ko": "638"
    },
    "percentiles3": {
        "total": "1060",
        "ok": "827",
        "ko": "1115"
    },
    "percentiles4": {
        "total": "1402",
        "ok": "934",
        "ko": "1429"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 240,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12",
        "ok": "2.4",
        "ko": "9.6"
    }
},
contents: {
"req_get-commit--api-b4cac": {
        type: "REQUEST",
        name: "Get commit /api/git/diff/d08a4b6",
path: "Get commit /api/git/diff/d08a4b6",
pathFormatted: "req_get-commit--api-b4cac",
stats: {
    "name": "Get commit /api/git/diff/d08a4b6",
    "numberOfRequests": {
        "total": "300",
        "ok": "60",
        "ko": "240"
    },
    "minResponseTime": {
        "total": "114",
        "ok": "128",
        "ko": "114"
    },
    "maxResponseTime": {
        "total": "1476",
        "ok": "1030",
        "ko": "1476"
    },
    "meanResponseTime": {
        "total": "464",
        "ok": "414",
        "ko": "477"
    },
    "standardDeviation": {
        "total": "311",
        "ok": "214",
        "ko": "330"
    },
    "percentiles1": {
        "total": "393",
        "ok": "405",
        "ko": "384"
    },
    "percentiles2": {
        "total": "604",
        "ok": "538",
        "ko": "638"
    },
    "percentiles3": {
        "total": "1060",
        "ok": "827",
        "ko": "1115"
    },
    "percentiles4": {
        "total": "1402",
        "ok": "934",
        "ko": "1429"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 55,
    "percentage": 18
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 5,
    "percentage": 2
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 240,
    "percentage": 80
},
    "meanNumberOfRequestsPerSecond": {
        "total": "12",
        "ok": "2.4",
        "ko": "9.6"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
