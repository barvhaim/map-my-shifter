const stixLanguageV2_1 = [
    {
        title: "Artifact",
        type: "artifact",
        items: [
            { name: "mime_type", required: false },
            { name: "payload_bin", required: false },
            { name: "url", required: false },
            { name: "hashes", required: false },
            {name: "encryption_algorithm", required: false},
            {name: "decryption_key", required: false},
        ],
    },
    {
        title: "AS",
        type: "autonomous-system",
        items: [
            { name: "number", required: true },
            { name: "name", required: false },
            { name: "rir", required: false },
        ],
    },
    {
        title: "Directory",
        type: "directory",
        items: [
            { name: "path", required: true },
            { name: "path_enc", required: false },
            {name:"ctime", required: false},
            { name: "mtime", required: false },
            { name: "atime", required: false },
            { name: "contains_ref", required: false },
        ],
    },
    {
        title: "Domain Name",
        type: "domain-name",
        items: [
            { name: "value", required: true },
            {name:"resolves_to_refs", required:false},

        ],
    },
    {
        title: "Email Address",
        type: "email-addr",
        items: [
            { name: "value", required: true },
            { name: "display_name", required: false },
            {name :"belongs_to_ref ", required: false},
        ],
    },
    {
        title: "Email Message",
        type: "email-message",
        items: [
            { name: "is_multipart", required: true },
            { name: "date", required: false },
            { name: "content_type", required: false },
            {name: "from_ref", required: false},
            { name: "sender_ref", required: false },
            { name: "to_refs", required: false },
            { name: "cc_refs", required: false },
            { name: "bcc-refs", required: false },
            { name: "message_id", required: false },
            { name: "subject", required: false },
            { name: "received_lines", required: false },
            { name: "additional_header_fields", required: false },
            { name: "body", required: false },
            { name: "body_multipart", required: false },
            { name: "raw_email_ref", required: false },

        ],
    },
    {
        title: "File",
        type: "file",
        items: [
            { name: "extensions", required: false },
            { name: "hashes", required: false },
            { name: "size", required: false },
            { name: "name", required: false },
            { name: "name_enc", required: false },
            { name: "magic_number_hex", required: false },
            { name: "mime_type", required: false },
            { name: "ctime", required: false },
            { name: "mtime", required: false },
            { name: "atime", required: false },
            { name: "parent_directory_ref", required: false },
            { name: "contains_refs", required: false },
            { name: "content_ref", required: false },
        ],
    },
    {
        title: "IPv4 Address",
        type: "ipv4-addr",
        items:
            [
                { name: "value", required: true },
                { name: "resolves_to_refs", required: false },
                { name: "belongs_to_refs", required: false },

        ],
    },
    {
        title: "IPv6 Address",
        type: "ipv6-addr",
        items:
            [
                { name: "value", required: true },
                { name: "resolves_to_refs", required: false },
                { name: "belongs_to_refs", required: false },

            ],
    },
    {
        title: "MAC Address",
        type: "mac-addr",
        items: [{ name: "value", required: true }],
    },
    {
        title: "Mutex",
        type: "mutex",
        items: [{ name: "name", required: true }],
    },
    {
        title: "Network Traffic",
        type: "network-traffic",
        items: [
            { name: "extensions", required: false },
            { name: "start", required: false },
            { name: "end", required: false },
            { name: "is_active", required: false },
            { name: "src_ref", required: false },
            { name: "dst_ref", required: false },
            { name: "src_port", required: false },
            { name: "dst_port", required: false },
            { name: "protocols", required: true },
            { name: "src_byte_count", required: false },
            { name: "dst_byte_count", required: false },
            { name: "src_packets", required: false },
            { name: "dst_packets", required: false },
            { name: "ipfix", required: false },
            { name: "src_payload_ref", required: false },
            { name: "dst_payload_ref", required: false },
            { name: "encapsulates_refs", required: false },
            { name: "encapsulated_by_ref", required: false },


        ],
    },
    {
        title: "Process",
        type: "process",
        items: [
            { name: "extensions", required: false },
            { name: "is_hidden", required: false },
            { name: "pid", required: false },
            { name: "created_time", required: false },
            { name: "cwd", required: false },
            { name: "command_line", required: false },
            { name: "environment_variables", required: false },
            { name: "opened_connection_refs", required: false },
            { name: "creator_user_ref", required: false },
            { name: "image_ref", required: false },
            { name: "parent_ref", required: false },
            { name: "child_refs", required: false },
        ],
    },
    {
        title: "Software",
        type: "software",
        items: [
            { name: "name", required: true },
            { name: "cpe", required: false },
            { name: "swid", required: false },
            { name: "languages", required: false },
            { name: "vendor", required: false },
            { name: "version", required: false },
        ],
    },
    {
        title: "URL",
        type: "url",
        items: [{ name: "value", required: true }],
    },
    {
        title: "User Account",
        type: "user-account",
        items: [
            { name: "extensions", required: false },
            { name: "user_id", required: true },
            { name: "credential", required: false },
            { name: "account_login", required: false },
            { name: "account_type", required: false },
            { name: "display_name", required: false },
            { name: "is_service_account", required: false },
            { name: "is_privileged", required: false },
            { name: "can_escalate_privs", required: false },
            { name: "is_disabled", required: false },
            { name: "account_created", required: false },
            { name: "account_expires", required: false },
            { name: "credential_last_changed", required: false },
            { name: "account_first_login", required: false },
            { name: "account_last_login", required: false },


        ],
    },
    {
        title: "TESTWindows™ Registry Key",
        type: "windows-registry-key",
        items: [
            { name: "key", required: false },
            { name: "values", required: false },
            { name: "modified_time", required: false },
            { name: "creator_user_ref", required: false },
            { name: "number_of_subkeys", required: false },
        ],
    },
];

export default stixLanguageV2_1;
