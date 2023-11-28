# LINUX SCRIPT

```bash
#!/bin/bash

# Function for displaying help/usage information
display_help() {
    echo "Usage: internsctl <command> [<options>] [<arguments>]"
    echo "Commands:"
    echo "  cpu getinfo              - Get CPU information"
    echo "  memory getinfo           - Get memory information"
    echo "  user create <username>   - Create a new user"
    echo "  user list                - List all regular users"
    echo "  user list --sudo-only    - List users with sudo permissions"
    echo "  file getinfo <file-name> - Get information about a file"
    echo "Options:"
    echo "  --size, -s               - Print file size"
    echo "  --permissions, -p        - Print file permissions"
    echo "  --owner, -o              - Print file owner"
    echo "  --last-modified, -m      - Print last modified time"
    echo "  --help                   - Display help information"
    echo "  --version                - Display command version"
}

# Function for displaying version information
display_version() {
    echo "internsctl v0.1.0"
}

# Function for CPU information retrieval
get_cpu_info() {
    # Command to retrieve CPU information (similar to lscpu)
    lscpu
}

# Function for memory information retrieval
get_memory_info() {
    # Command to retrieve memory information (similar to free)
    free
}

# Function for creating a new user
create_user() {
    username="$1"
    # Command to create a new user with provided username
    sudo useradd "$username" -m -s /bin/bash
}

# Function for listing all regular users or users with sudo permissions
list_users() {
    if [[ "$1" == "--sudo-only" ]]; then
        # Command to list users with sudo permissions
        grep -Po '^sudo.+:\K[^:]+' /etc/group
    else
        # Command to list all regular users
        getent passwd | grep -vE '(/usr/sbin/nologin|/bin/false)$' | cut -d: -f1
    fi
}
```
