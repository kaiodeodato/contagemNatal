const Web = require("webwebweb");

Web.APIs["/countdown"] = (qs, body, opts) => {
    const christmas = new Date("December 25, 2024, 00:00:00");
    const today = new Date();
    const diff = christmas - today;

    return {
        christmas,
        today,
        timeUntil: diff,
        timeUntilD: diff / (24 * 60 * 60000 )
    };
};

Web.Run(8080);
