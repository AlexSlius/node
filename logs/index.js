const fs = require('fs');

const logs = async (info) => {
    let line = '';

    if (info?.host && info?.['user-agent']) {
        line = `Host: ${info.host}, User Agent: ${info['user-agent']} \n`;
    }

    fs.appendFileSync('./logs/logs.txt', line, 'utf8');
}

module.exports = logs;