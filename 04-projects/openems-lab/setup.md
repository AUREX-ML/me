# OpenEMS Local Development Environment — Setup Guide

Verified working on: macOS 13.7.8 (Ventura), x86_64 — July 2026

---

## Prerequisites

| Tool | Required Version | Install Method | Notes |
|------|-----------------|----------------|-------|
| Java (JDK) | **21** (exact) | [Temurin 21](https://adoptium.net/) | Java 26 is installed but OpenEMS Gradle toolchain requires 21 |
| Node.js | 22 LTS | Direct binary download (recommended) | Required for the UI build |
| Git | Any recent | Pre-installed on macOS | |
| Gradle | Bundled (9.6.1) | `./gradlew` wrapper in repo | Do NOT install separately |

> **Critical:** OpenEMS' Gradle build explicitly requires Java 21 via the toolchain API. Newer JDKs (22+) will cause a build failure even if `JAVA_HOME` is set correctly. Both JDKs can coexist — just point `JAVA_HOME` at 21 when building.

---

## Step 1 — Install Java 21

Download the Eclipse Temurin 21 JDK for macOS (x64):

```bash
curl -fsSL "https://github.com/adoptium/temurin21-binaries/releases/download/jdk-21.0.7%2B6/OpenJDK21U-jdk_x64_mac_hotspot_21.0.7_6.tar.gz" \
  -o /tmp/jdk21.tar.gz

sudo tar -xzf /tmp/jdk21.tar.gz -C /Library/Java/JavaVirtualMachines/

# Verify
/usr/libexec/java_home -v 21
```

---

## Step 2 — Install Node.js

```bash
NODE_VERSION="22.16.0"
curl -fsSL "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-darwin-x64.tar.gz" \
  -o /tmp/node.tar.gz

sudo tar -xzf /tmp/node.tar.gz -C /usr/local/ && \
  sudo mv /usr/local/node-v${NODE_VERSION}-darwin-x64 /usr/local/node

echo 'export PATH=/usr/local/node/bin:$PATH' >> ~/.zshrc
source ~/.zshrc

# Verify
node --version   # v22.16.0
npm --version    # 10.x
```

---

## Step 3 — Clone the Repository

```bash
cd ~/Desktop/me/04-projects/openems-lab

git clone --depth=1 https://github.com/OpenEMS/openems.git
cd openems
```

The `--depth=1` shallow clone is sufficient for local development and significantly faster.

---

## Step 4 — Build the Project

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 21)
export PATH="/usr/local/node/bin:$PATH"

./gradlew build -x test
```

Expected output: `BUILD SUCCESSFUL` — ~20 minutes on first run (downloads all dependencies). Subsequent runs are faster due to Gradle's build cache.

To also run tests:

```bash
./gradlew build
```

---

## Troubleshooting

| Error | Cause | Fix |
|-------|-------|-----|
| `Cannot find a Java installation matching: languageVersion=21` | Wrong JDK version | Set `JAVA_HOME` to Java 21: `export JAVA_HOME=$(/usr/libexec/java_home -v 21)` |
| `The JAVA_HOME environment variable is not defined correctly` | PATH is broken (spaces in path) | Set PATH explicitly: `export PATH="/usr/local/node/bin:/usr/bin:/bin:/usr/sbin:/sbin"` |
| `No such file or directory @ rb_sysopen ... .diff` | Homebrew LLVM patch bug on macOS 13 | Install tools via direct binary download instead of Homebrew |
| `bash: tail: command not found` | VS Code terminal PATH corruption | Prepend `/usr/bin:/bin` to PATH before running commands |

---

## Verified Build

- **Date:** 2026-07-05
- **OpenEMS commit:** latest `main` (shallow clone)
- **Gradle version:** 9.6.1
- **Java toolchain:** Eclipse Temurin 21.0.7+6
- **Node.js:** v22.16.0
- **Result:** `BUILD SUCCESSFUL`
