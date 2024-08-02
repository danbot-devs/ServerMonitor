createListPrem.bun = (serverName, userID) => ({
    name: serverName,
    user: userID,
    nest: 5,
    egg: 90,
    docker_image: "ghcr.io/parkervcp/yolks:bun_latest",
    startup:
        'if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == "1" ]]; then git pull; fi; if [[ ! -z ${BUN_PACKAGES} ]]; then bun install ${BUN_PACKAGES}; fi; if [[ ! -z ${RMBUN_PACKAGES} ]]; then bun remove ${RMBUN_PACKAGES}; fi; if [ -f /home/container/package.json ]; then bun install; fi; bun run {{MAIN_FILE}}',
    limits: {
        memory: 0,
        swap: -1,
        disk: 0,
        io: 500,
        cpu: 0,
    },
    environment: {
        GIT_ADDRESS: null,
        USER_UPLOAD: 0,
        AUTO_UPDATE: 0,
        MAIN_FILE: "index.js",
        BUN_PACKAGES: null,
        RMBUN_PACKAGES: null,
        BRANCH: null,
        USERNAME: null,
        ACCESS_TOKEN: null,
    },
    feature_limits: {
        databases: 2,
        allocations: 1,
        backups: 10,
    },
    deploy: {
        locations: botswebdbPREM,
        dedicated_ip: false,
        port_range: [],
    },
    start_on_completion: false,
});
