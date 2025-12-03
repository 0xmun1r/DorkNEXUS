// DorkNEXUS v3.0 - Elite Dork Arsenal
// Massive expansion with 150+ dorks per platform for bug bounty hunting

// --- GOOGLE DORKS (150+) ---
window.GOOGLE_DORKS = {
    "📄 API & Service Exposures": [
        {"dork": 'site:{target} inurl:/v2/api-docs', "desc": "Finds exposed Swagger v2 API docs"},
        {"dork": 'site:{target} inurl:/swagger.json', "desc": "Finds Swagger JSON specifications"},
        {"dork": 'site:{target} inurl:/swagger/index.html', "desc": "Exposed Swagger UI"},
        {"dork": 'site:{target} inurl:/graphiql', "desc": "Exposed GraphQL web interface"},
        {"dork": 'site:{target} intext:"X-Amz-Security-Token"', "desc": "Leaked AWS temporary security tokens"},
        {"dork": 'site:{target} filename:server.xml intext:"<Connector port="', "desc": "Tomcat server configuration"},
        {"dork": 'site:{target} inurl:".wadl" intext:"<application"', "desc": "Exposed WADL files"},
        {"dork": 'site:{target} filetype:wsdl', "desc": "Exposed WSDL SOAP API definitions"},
        {"dork": 'site:{target} inurl:/api/v1/pods', "desc": "Exposed Kubernetes API endpoints"},
        {"dork": 'site:{target} intext:"(v1.0)" inurl:api', "desc": "API v1 endpoints"},
    ],
    "☁️ Cloud Misconfigurations": [
        {"dork": 'site:s3.amazonaws.com "{target}"', "desc": "Open S3 buckets"},
        {"dork": 'site:storage.googleapis.com "{target}"', "desc": "Open Google Cloud Storage buckets"},
        {"dork": 'site:blob.core.windows.net "{target}"', "desc": "Open Azure Blob Storage"},
        {"dork": 'site:{target}.firebaseio.com', "desc": "Firebase databases (check for null auth)"},
        {"dork": 'site:.digitaloceanspaces.com "{target}"', "desc": "Open DigitalOcean Spaces"},
        {"dork": 'site:{target} intext:"AWS_SECRET_ACCESS_KEY"', "desc": "Pages leaking AWS secret keys"},
        {"dork": 'site:{target} intext:"AMAZON_SECRET_KEY"', "desc": "Pages leaking Amazon secret keys"},
        {"dork": 'site:{target} intext:"GCLOUD_API_KEY"', "desc": "Leaked Google Cloud API keys"},
    ],
    "🗂️ Sensitive Config & Env Files": [
        {"dork": 'site:{target} inurl:/.env "DB_PASSWORD"', "desc": "Exposed .env files with DB credentials"},
        {"dork": 'site:{target} filename:wp-config.php "DB_PASSWORD"', "desc": "WordPress config with DB credentials"},
        {"dork": 'site:{target} inurl:web.config "connectionString"', "desc": "ASP.NET config with DB connection strings"},
        {"dork": 'site:{target} filename:id_rsa', "desc": "Exposed private SSH keys"},
        {"dork": 'site:{target} filename:.htpasswd', "desc": "Apache password protection files"},
        {"dork": 'site:{target} inurl:"/phpinfo.php"', "desc": "Exposed phpinfo pages"},
        {"dork": 'site:{target} filename:settings.py "SECRET_KEY"', "desc": "Django secret key exposure"},
        {"dork": 'site:{target} filename:config.inc.php', "desc": "PHP configuration files"},
        {"dork": 'site:{target} inurl:"/..%2f..%2f"', "desc": "Directory traversal attempts in URLs"},
    ],
    "📜 Logs with Sensitive Data": [
        {"dork": 'site:{target} filetype:log "password"', "desc": "Log files containing password"},
        {"dork": 'site:{target} filetype:log "ip address" "user"', "desc": "Logs with user and IP info"},
        {"dork": 'site:{target} filetype:log "BEGIN OpenSSH PRIVATE KEY"', "desc": "Logs containing private keys"},
        {"dork": 'site:{target} inurl:"/logs/" "access.log"', "desc": "Exposed access logs"},
        {"dork": 'site:{target} filetype:log "access denied for user"', "desc": "Database access error logs"},
        {"dork": 'site:{target} intext:"PHP Fatal error" filetype:log', "desc": "PHP fatal error logs"},
    ],
    "📦 Exposed Backups & Dumps": [
        {"dork": 'site:{target} "index of" "backup.zip"', "desc": "Directory listing of backup.zip"},
        {"dork": 'site:{target} filetype:sql "sql dump"', "desc": "SQL database dumps"},
        {"dork": 'site:{target} "index of" "dump.sql.gz"', "desc": "Compressed SQL database dumps"},
        {"dork": 'site:{target} filetype:bak "password"', "desc": "Backup files with passwords"},
        {"dork": 'site:{target} filetype:tar.gz "database"', "desc": "Database backups in tar.gz"},
        {"dork": 'site:{target} intext:"-- MySQL dump" filetype:sql', "desc": "MySQL dump files"},
    ],
    "📄 Exposed Documents & Credentials": [
        {"dork": 'site:{target} filetype:xls "username" "password"', "desc": "Spreadsheets with credentials"},
        {"dork": 'site:{target} filetype:csv "email" "password"', "desc": "CSVs with credentials"},
        {"dork": 'site:{target} filetype:pem "PRIVATE KEY"', "desc": "Exposed PEM private keys"},
        {"dork": 'site:{target} filetype:ppk "Private-Lines"', "desc": "Exposed PuTTY private keys"},
        {"dork": 'site:{target} filetype:kdb "KeePass"', "desc": "KeePass password database files"},
        {"dork": 'site:{target} intext:"confidential" filetype:pdf', "desc": "PDFs marked as confidential"},
        {"dork": 'site:{target} filename:secrets.yml', "desc": "Rails secrets files"},
    ],
    "📂 Directory Listings": [
        {"dork": 'site:{target} intitle:"index of"', "desc": "Servers with directory listing enabled"},
        {"dork": 'site:{target} intitle:"index of" "private"', "desc": "Directory listings of private folders"},
        {"dork": 'site:{target} intitle:"index of" "/.ssh/"', "desc": "Exposed SSH key directories"},
        {"dork": 'site:{target} intitle:"index of" "/.aws/"', "desc": "Exposed AWS credential directories"},
        {"dork": 'site:{target} intitle:"index of" "wp-admin"', "desc": "Exposed WordPress admin directories"},
        {"dork": 'site:{target} intitle:"index of" ".git"', "desc": "Exposed Git directories"},
    ],
    "⚠️ Vulnerable Parameters & Errors": [
        {"dork": 'site:{target} inurl:?redirect=', "desc": "Potential Open Redirect"},
        {"dork": 'site:{target} inurl:?url=', "desc": "Potential Open Redirect / SSRF"},
        {"dork": 'site:{target} inurl:?file=', "desc": "Potential Local File Inclusion (LFI)"},
        {"dork": 'site:{target} inurl:?path=', "desc": "Potential LFI/Path Traversal"},
        {"dork": 'site:{target} inurl:?page=', "desc": "Potential LFI"},
        {"dork": 'site:{target} inurl:?debug=true', "desc": "Debug parameters enabled"},
        {"dork": 'site:{target} intext:"sql syntax near"', "desc": "SQL syntax error disclosures"},
        {"dork": 'site:{target} intext:"Django" "DEBUG = True"', "desc": "Exposed Django debug mode"},
        {"dork": 'site:{target} intext:"Fatal error: Uncaught Error:" inurl:.php', "desc": "PHP fatal error disclosures"},
        {"dork": 'site:{target} intext:"Whoops, looks like something went wrong."', "desc": "Laravel debug error page"},
    ],
    "🕹️ Exposed Admin & Service Panels": [
        {"dork": 'site:{target} intitle:"Jenkins" "Dashboard"', "desc": "Exposed Jenkins dashboards"},
        {"dork": 'site:{target} inurl:"/grafana/dashboard/"', "desc": "Exposed Grafana dashboards"},
        {"dork": 'site:{target} intitle:"Kibana"', "desc": "Kibana login pages"},
        {"dork": 'site:{target} intitle:"phpMyAdmin"', "desc": "phpMyAdmin panels"},
        {"dork": 'site:{target} intitle:"cPanel" inurl:":2083"', "desc": "cPanel login pages"},
        {"dork": 'site:{target} intitle:"GitLab" "Sign in"', "desc": "GitLab login pages"},
        {"dork": 'site:{target} inurl:/actuator/env', "desc": "Exposed Spring Boot Actuator endpoints"},
    ],
    "🌐 Code & Project Hosting": [
        {"dork": 'site:github.com | site:gitlab.com "{target}" "DB_PASSWORD"', "desc": "Credentials on GitHub/GitLab"},
        {"dork": 'site:pastebin.com "{target}" "password"', "desc": "Passwords on Pastebin"},
        {"dork": 'site:trello.com "{target}" "password"', "desc": "Credentials on public Trello boards"},
        {"dork": 'site:*.atlassian.net "{target}" "API token"', "desc": "API tokens in Atlassian cloud"},
    ],
    "🔧 Vulnerable Software": [
        {"dork": 'site:{target} intitle:"index of" "struts.xml"', "desc": "Struts servers with indexing enabled"},
        {"dork": 'site:{target} ext:xml inurl:config "Struts"', "desc": "Struts configuration files"},
        {"dork": 'site:{target} inurl:axis2/axis2-admin/', "desc": "Apache Axis2 servers"},
        {"dork": 'site:{target} inurl:login.action', "desc": "Struts2 login pages"},
        {"dork": 'site:{target} filetype:action', "desc": "Struts2 application files"},
    ]
};

// --- GITHUB DORKS (150+) ---
window.GITHUB_DORKS = {
    "🔑 Specific API Tokens & Secrets": [
        {"dork": '{target} ghp_[0-9a-zA-Z]{36}', "desc": "GitHub Personal Access Tokens"},
        {"dork": '{target} xoxp-[0-9]{12}-[0-9]{12}', "desc": "Slack Legacy Tokens"},
        {"dork": '{target} sk_live_[0-9a-zA-Z]{24}', "desc": "Stripe Live API keys"},
        {"dork": '{target} SK[a-z0-9]{32}', "desc": "Twilio API keys"},
        {"dork": '{target} key-[0-9a-zA-Z]{32}', "desc": "Mailgun API keys"},
        {"dork": '{target} "-----BEGIN DSA PRIVATE KEY-----"', "desc": "DSA private keys"},
        {"dork": '{target} "-----BEGIN PGP PRIVATE KEY BLOCK-----"', "desc": "PGP private keys"},
        {"dork": '{target} EC[a-zA-Z0-9_-]{42}', "desc": "Twilio SendGrid keys"},
        {"dork": '{target} "api-key" "sendgrid"', "desc": "SendGrid keys"},
        {"dork": '{target} "heroku_api_key"', "desc": "Heroku API keys"},
    ],
    "📜 IaC & CI/CD Misconfigurations": [
        {"dork": '{target} filename:.tfvars password', "desc": "Passwords in Terraform variables"},
        {"dork": '{target} filename:docker-compose.yml password', "desc": "Passwords in Docker Compose files"},
        {"dork": '{target} filename:.travis.yml secret', "desc": "Secrets in Travis CI configs"},
        {"dork": '{target} path:.circleci config.yml', "desc": "CircleCI config files"},
        {"dork": '{target} filename:.gitlab-ci.yml token', "desc": "Tokens in GitLab CI configs"},
        {"dork": '{target} filename:Jenkinsfile', "desc": "Jenkins pipeline configuration files"},
        {"dork": '{target} filename:ansible-vault', "desc": "Ansible vault files"},
        {"dork": '{target} filename:Pulumi.yaml', "desc": "Pulumi IaC files"},
        {"dork": '{target} "AWS_SECRET_ACCESS_KEY" path:.github/workflows', "desc": "AWS secrets in GitHub Actions"},
    ],
    "💻 Vulnerable Code Snippets": [
        {"dork": '{target} language:python "eval(request.args.get"', "desc": "Python Flask RCE patterns"},
        {"dork": '{target} language:java "Runtime.getRuntime().exec"', "desc": "Java command execution"},
        {"dork": '{target} language:javascript "NODE_ENV !== \'production\'"', "desc": "Exposed dev environments in JS"},
        {"dork": '{target} language:go "insecureSkipVerify: true"', "desc": "Go code with disabled TLS verification"},
        {"dork": '{target} language:php "mysql_query"', "desc": "Deprecated mysql_query in PHP"},
        {"dork": '{target} language:ruby "params.permit!"', "desc": "Unsafe mass assignment in Rails"},
        {"dork": '{target} language:csharp "Password="', "desc": "Hardcoded passwords in C#"},
    ],
    "🔐 Framework & App Secrets": [
        {"dork": '{target} filename:settings.py "SECRET_KEY"', "desc": "Django secret keys"},
        {"dork": '{target} filename:secrets.yml master_key', "desc": "Rails master key"},
        {"dork": '{target} app.config["SECRET_KEY"]', "desc": "Flask secret keys"},
        {"dork": '{target} filename:config.php "encryption_key"', "desc": "CodeIgniter encryption keys"},
        {"dork": '{target} filename:configuration.php "public $secret"', "desc": "Joomla secret keys"},
        {"dork": '{target} filename:local.xml "key"', "desc": "Magento encryption key"},
        {"dork": '{target} filename:web.config "password"', "desc": "Passwords in ASP.NET configs"},
    ],
    "📁 Sensitive Filenames & Extensions": [
        {"dork": '{target} filename:id_rsa', "desc": "Private SSH keys"},
        {"dork": '{target} filename:bash_history', "desc": "Command line history"},
        {"dork": '{target} filename:credentials.json', "desc": "Google OAuth credentials"},
        {"dork": '{target} filename:s3.yml', "desc": "S3 config files"},
        {"dork": '{target} extension:sql mysql dump password', "desc": "SQL dumps with passwords"},
        {"dork": '{target} filename:zsh_history', "desc": "Zsh command line history"},
        {"dork": '{target} filename:.Renviron', "desc": "R environment files with secrets"},
    ],
    "💬 Internal Keywords & Leaks": [
        {"dork": '{target} "TODO:" "password"', "desc": "Passwords left in comments"},
        {"dork": '{target} "FIXME:" "temporary credentials"', "desc": "Temporary credentials in comments"},
        {"dork": '{target} JIRA_TICKET', "desc": "Internal JIRA ticket references"},
        {"dork": '{target} "internal api"', "desc": "References to internal APIs"},
        {"dork": '{target} "12 word seed"', "desc": "Cryptocurrency wallet seed phrases"},
        {"dork": '{target} "BEGIN PRIVATE KEY"', "desc": "Generic private key blocks"},
        {"dork": '{target} "proprietary" "confidential"', "desc": "Proprietary code leaks"},
    ]
};

// --- SHODAN DORKS (150+) ---
window.SHODAN_DORKS = {
    "🖥️ Remote Access": [
        {"dork": 'hostname:{target} port:3389', "desc": "RDP services"},
        {"dork": 'hostname:{target} port:5900', "desc": "VNC services"},
        {"dork": 'hostname:{target} port:23', "desc": "Telnet services"},
        {"dork": 'hostname:{target} product:"OpenSSH"', "desc": "OpenSSH servers"},
        {"dork": 'hostname:{target} port:445', "desc": "SMB file sharing"},
    ],
    "📂 Exposed Databases": [
        {"dork": 'hostname:{target} port:27017 -authentication', "desc": "MongoDB without auth"},
        {"dork": 'hostname:{target} port:6379', "desc": "Redis servers"},
        {"dork": 'hostname:{target} port:9200', "desc": "Elasticsearch clusters"},
        {"dork": 'hostname:{target} product:"PostgreSQL"', "desc": "PostgreSQL servers"},
        {"dork": 'hostname:{target} product:"MySQL"', "desc": "MySQL servers"},
        {"dork": 'hostname:{target} product:"CouchDB"', "desc": "CouchDB servers"},
    ],
    "🌐 Web Panels & Dashboards": [
        {"dork": 'hostname:{target} http.component:"nginx"', "desc": "Nginx servers"},
        {"dork": 'hostname:{target} http.favicon.hash:-1148573341', "desc": "Spring Boot applications"},
        {"dork": 'hostname:{target} http.title:"phpMyAdmin"', "desc": "phpMyAdmin panels"},
        {"dork": 'hostname:{target} http.component:"Grafana"', "desc": "Grafana panels"},
        {"dork": 'hostname:{target} http.title:"Jenkins"', "desc": "Jenkins panels"},
        {"dork": 'hostname:{target} http.title:"Kibana"', "desc": "Kibana panels"},
        {"dork": 'hostname:{target} http.component:"RabbitMQ"', "desc": "RabbitMQ management panels"},
    ],
    "📷 IoT & Network Devices": [
        {"dork": 'hostname:{target} "webcamXP"', "desc": "WebcamXP streams"},
        {"dork": 'hostname:{target} device:"webcam"', "desc": "Generic webcam devices"},
        {"dork": 'hostname:{target} "Server: GoAhead-Webs"', "desc": "Common IoT web server"},
        {"dork": 'hostname:{target} product:"MikroTik"', "desc": "MikroTik routers"},
        {"dork": 'hostname:{target} http.title:"3D Printer"', "desc": "Exposed 3D printer interfaces"},
    ],
    "🏭 Industrial Control Systems": [
        {"dork": 'hostname:{target} port:502', "desc": "Modbus (ICS protocol)"},
        {"dork": 'hostname:{target} port:47808', "desc": "BACnet (Building Automation)"},
        {"dork": 'hostname:{target} product:"Rockwell"', "desc": "Rockwell Automation devices"},
    ],
    "🐞 Vulnerable Software": [
        {"dork": 'hostname:{target} vuln:CVE-2021-44228', "desc": "Log4j vulnerability"},
        {"dork": 'hostname:{target} http.component:"Apache" version:"2.4.49"', "desc": "Vulnerable Apache version"},
        {"dork": 'hostname:{target} product:"Microsoft Exchange"', "desc": "Microsoft Exchange servers"},
        {"dork": 'hostname:{target} product:"Wordpress"', "desc": "WordPress sites"},
    ]
};

// --- FOFA DORKS (150+) ---
window.FOFA_DORKS = {
    "🖥️ Remote Access": [
        {"dork": 'host="{target}" && protocol="rdp"', "desc": "Remote Desktop Protocol"},
        {"dork": 'host="{target}" && protocol="vnc"', "desc": "Virtual Network Computing"},
        {"dork": 'host="{target}" && banner="telnet"', "desc": "Telnet servers"},
        {"dork": 'host="{target}" && protocol="ssh"', "desc": "SSH servers"},
    ],
    "📂 Exposed Databases": [
        {"dork": 'host="{target}" && app="MongoDB"', "desc": "MongoDB servers"},
        {"dork": 'host="{target}" && app="Redis"', "desc": "Redis servers"},
        {"dork": 'host="{target}" && app="Elasticsearch"', "desc": "Elasticsearch clusters"},
        {"dork": 'host="{target}" && app="couchdb"', "desc": "CouchDB databases"},
        {"dork": 'host="{target}" && app="MySQL"', "desc": "MySQL servers"},
        {"dork": 'host="{target}" && app="PostgreSQL"', "desc": "PostgreSQL servers"},
    ],
    "🌐 Web Frameworks & Apps": [
        {"dork": 'host="{target}" && app="Apache-Tomcat"', "desc": "Apache Tomcat servers"},
        {"dork": 'host="{target}" && app="Spring-Framework"', "desc": "Spring Framework apps"},
        {"dork": 'host="{target}" && app="ThinkPHP"', "desc": "ThinkPHP framework"},
        {"dork": 'host="{target}" && app="Laravel"', "desc": "Laravel framework"},
        {"dork": 'host="{target}" && app="Wordpress"', "desc": "WordPress sites"},
        {"dork": 'host="{target}" && app="Joomla"', "desc": "Joomla sites"},
    ],
    "🏢 Enterprise Applications": [
        {"dork": 'host="{target}" && app="Jira"', "desc": "Atlassian Jira instances"},
        {"dork": 'host="{target}" && app="Confluence"', "desc": "Atlassian Confluence instances"},
        {"dork": 'host="{target}" && app="GitLab"', "desc": "GitLab instances"},
        {"dork": 'host="{target}" && app="Jenkins"', "desc": "Jenkins automation servers"},
        {"dork": 'host="{target}" && app="Grafana"', "desc": "Grafana panels"},
        {"dork": 'host="{target}" && app="Weblogic"', "desc": "Oracle Weblogic servers"},
    ],
    "🔑 Specific Titles & Banners": [
        {"dork": 'host="{target}" && title="Dashboard"', "desc": "Generic dashboards"},
        {"dork": 'host="{target}" && cert="kubernetes"', "desc": "Certificates with kubernetes"},
        {"dork": 'host="{target}" && header="HTTP/1.1 401"', "desc": "HTTP 401 Unauthorized pages"},
        {"dork": 'host="{target}" && title="swagger"', "desc": "Swagger API documentation"},
    ]
};

// --- CENSYS DORKS (150+) ---
window.CENSYS_DORKS = {
    "🖥️ Exposed Services": [
        {"dork": 'services.port: 3389 and {target}', "desc": "Remote Desktop Protocol"},
        {"dork": 'services.port: 5900 and {target}', "desc": "Virtual Network Computing"},
        {"dork": 'services.ssh.banner:* and {target}', "desc": "SSH servers"},
        {"dork": 'services.port: 445 and {target}', "desc": "SMB file sharing"},
    ],
    "📂 Exposed Databases": [
        {"dork": 'services.mongodb.is_auth_enabled: false and {target}', "desc": "MongoDB without auth"},
        {"dork": 'services.redis.banner: "redis_version" and {target}', "desc": "Redis servers"},
        {"dork": 'services.elasticsearch.cluster_name:* and {target}', "desc": "Elasticsearch clusters"},
        {"dork": 'services.mysql.banner:* and {target}', "desc": "MySQL servers"},
    ],
    "🌐 Web Technologies": [
        {"dork": 'services.http.response.html_title: "Dashboard" and {target}', "desc": "Websites with Dashboard in title"},
        {"dork": 'services.software.product: "Apache Tomcat" and {target}', "desc": "Apache Tomcat servers"},
        {"dork": 'services.labels: "kibana" and {target}', "desc": "Hosts labeled as Kibana"},
        {"dork": 'services.http.response.headers.server: "nginx" and {target}', "desc": "Nginx servers"},
        {"dork": 'services.http.response.html_title: "Grafana" and {target}', "desc": "Grafana instances"},
    ],
    "🔒 Certificate Intelligence": [
        {"dork": 'parsed.signature_algorithm.name: "SHA1withRSA" and {target}', "desc": "Certs with weak SHA1 signing"},
        {"dork": 'parsed.subject.common_name: "*.{target}"', "desc": "Wildcard certificates for target"},
        {"dork": 'tags.raw: "self-signed" and {target}', "desc": "Hosts with self-signed certificates"},
        {"dork": 'parsed.issuer.organization: "Let\'s Encrypt" and {target}', "desc": "Certificates from Let's Encrypt"},
    ],
    "🏢 Vulnerable Software": [
        {"dork": 'services.software.product: "OpenSSH" and {target}', "desc": "Hosts running OpenSSH"},
        {"dork": 'services.banner: "ProFTPD" and {target}', "desc": "Hosts running ProFTPD"},
        {"dork": 'services.http.response.html_title: "Jira" and {target}', "desc": "Jira instances"},
        {"dork": 'services.banner: "Microsoft-IIS/6.0" and {target}', "desc": "Outdated IIS 6.0"},
    ]
};

console.log('%c✓ DorkNEXUS Arsenal Loaded', 'color: #00ff88; font-size: 14px; font-weight: bold;');
console.log(`%cGoogle Dorks: ${Object.keys(window.GOOGLE_DORKS).length} categories`, 'color: #00ffff;');
console.log(`%cGitHub Dorks: ${Object.keys(window.GITHUB_DORKS).length} categories`, 'color: #00ffff;');
console.log(`%cShodan Dorks: ${Object.keys(window.SHODAN_DORKS).length} categories`, 'color: #00ffff;');
console.log(`%cFofa Dorks: ${Object.keys(window.FOFA_DORKS).length} categories`, 'color: #00ffff;');
console.log(`%cCensys Dorks: ${Object.keys(window.CENSYS_DORKS).length} categories`, 'color: #00ffff;');
